import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import WeatherApp from './WeatherApp';

export default function WeatherPage() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center p-6">
      <header className="w-full max-w-4xl mb-8 flex items-center gap-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 transition"
          aria-label="Go back to home"
        >
          <ArrowLeft size={24} />
          <span className="ml-2 font-semibold">Back to Portfolio</span>
        </button>
      </header>

      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Weather App
      </h1>

      <div className="w-full max-w-4xl p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <WeatherApp />
      </div>
    </section>
  );
}
