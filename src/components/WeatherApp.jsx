import React, { useState } from 'react';

const API_KEY = '0bbe38aa587a059d2636b0dc130a31c3'; // Your API key

export default function WeatherApp() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError('');
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&units=metric&appid=${API_KEY}`
      );
      if (!res.ok) {
        throw new Error('City not found');
      }
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gradient-to-br from-blue-400 via-blue-600 to-indigo-700 rounded-xl shadow-lg text-white">
      <h2 className="text-3xl font-extrabold mb-6 text-center drop-shadow-md">
        Weather App
      </h2>

      <form onSubmit={handleSubmit} className="mb-6 flex gap-3">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="flex-grow px-4 py-3 rounded-lg text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-300"
          aria-label="City name"
        />
        <button
          type="submit"
          className="px-5 py-3 bg-white bg-opacity-90 rounded-lg font-semibold text-blue-700 hover:bg-opacity-100 transition"
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Get'}
        </button>
      </form>

      {error && (
        <p className="text-red-300 font-semibold text-center mb-6 drop-shadow">
          {error}
        </p>
      )}

      {weather && (
        <div className="bg-white bg-opacity-30 rounded-xl p-6 shadow-inner text-center drop-shadow-lg">
          <h3 className="text-2xl font-bold mb-2">
            {weather.name}, {weather.sys.country}
          </h3>
          <p className="text-6xl font-extrabold mb-2">
            {Math.round(weather.main.temp)}°C
          </p>
          <p className="capitalize text-lg mb-4 font-semibold">
            {weather.weather[0].description}
          </p>
          <img
            alt={weather.weather[0].description}
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
            className="mx-auto"
            loading="lazy"
          />
          <div className="mt-4 flex justify-center gap-6 text-sm font-semibold">
            <div>
              <p>Humidity</p>
              <p>{weather.main.humidity}%</p>
            </div>
            <div>
              <p>Wind</p>
              <p>{Math.round(weather.wind.speed)} m/s</p>
            </div>
            <div>
              <p>Pressure</p>
              <p>{weather.main.pressure} hPa</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
