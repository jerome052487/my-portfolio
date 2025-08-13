import React, { useEffect } from 'react';
import { FaRocket, FaMobileAlt, FaLock, FaUsers } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function LandingPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-[#0f172a] text-[#334155] dark:text-[#cbd5e1] p-8">
      <div className="max-w-5xl mx-auto">

        {/* Hero */}
        <header className="mb-16 text-center" data-aos="fade-down">
          <h1 className="text-5xl font-extrabold mb-4 text-[#14b8a6]">
            Launch Your Next Big Idea
          </h1>
          <p className="text-xl max-w-xl mx-auto mb-8">
            A clean, modern landing page to showcase your product or service with style.
          </p>
          <button className="px-8 py-3 bg-[#f87171] text-white rounded hover:bg-[#dc2626] transition" data-aos="zoom-in">
            Get Started
          </button>
        </header>

        {/* Features */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div
            className="p-6 bg-[#d1fae5] dark:bg-[#065f46] rounded-lg shadow hover:shadow-lg hover:scale-105 transition neon-glow"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <FaRocket className="mx-auto mb-4 text-[#059669]" size={40} />
            <h3 className="text-lg font-semibold mb-2 text-[#065f46] dark:text-[#a7f3d0]">Fast Performance</h3>
            <p className="text-[#065f46] dark:text-[#a7f3d0]">Experience lightning-fast load times and smooth interactions.</p>
          </div>
          <div
            className="p-6 bg-[#bfdbfe] dark:bg-[#1e3a8a] rounded-lg shadow hover:shadow-lg hover:scale-105 transition neon-glow"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <FaMobileAlt className="mx-auto mb-4 text-[#3b82f6]" size={40} />
            <h3 className="text-lg font-semibold mb-2 text-[#1e3a8a] dark:text-[#bfdbfe]">Responsive Design</h3>
            <p className="text-[#1e3a8a] dark:text-[#bfdbfe]">Looks great on all devices — mobiles, tablets, and desktops.</p>
          </div>
          <div
            className="p-6 bg-[#fee2e2] dark:bg-[#991b1b] rounded-lg shadow hover:shadow-lg hover:scale-105 transition neon-glow"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <FaLock className="mx-auto mb-4 text-[#dc2626]" size={40} />
            <h3 className="text-lg font-semibold mb-2 text-[#991b1b] dark:text-[#fecaca]">Secure</h3>
            <p className="text-[#991b1b] dark:text-[#fecaca]">Your data and privacy are our top priority with top-notch security.</p>
          </div>
          <div
            className="p-6 bg-[#fef3c7] dark:bg-[#78350f] rounded-lg shadow hover:shadow-lg hover:scale-105 transition neon-glow"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <FaUsers className="mx-auto mb-4 text-[#ca8a04]" size={40} />
            <h3 className="text-lg font-semibold mb-2 text-[#78350f] dark:text-[#fef9c3]">User Friendly</h3>
            <p className="text-[#78350f] dark:text-[#fef9c3]">Intuitive and easy to use for everyone, no technical skills required.</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#14b8a6]">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <blockquote className="bg-white dark:bg-[#1e293b] p-6 rounded shadow italic text-[#334155] dark:text-[#cbd5e1]" data-aos="fade-up" data-aos-delay={100}>
              <p className="mb-4">"This product transformed the way we do business."</p>
              <footer className="font-semibold">— Sarah J.</footer>
            </blockquote>
            <blockquote className="bg-white dark:bg-[#1e293b] p-6 rounded shadow italic text-[#334155] dark:text-[#cbd5e1]" data-aos="fade-up" data-aos-delay={200}>
              <p className="mb-4">"Simple, efficient, and powerful. Highly recommend."</p>
              <footer className="font-semibold">— Mark R.</footer>
            </blockquote>
            <blockquote className="bg-white dark:bg-[#1e293b] p-6 rounded shadow italic text-[#334155] dark:text-[#cbd5e1]" data-aos="fade-up" data-aos-delay={300}>
              <p className="mb-4">"Excellent support and seamless experience."</p>
              <footer className="font-semibold">— Priya S.</footer>
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-6 text-[#14b8a6]">Ready to get started?</h2>
          <button className="px-10 py-4 bg-[#f87171] text-white rounded hover:bg-[#dc2626] transition" data-aos="zoom-in">
            Sign Up Now
          </button>
        </section>

        {/* Footer */}
        <footer className="text-center py-6 border-t border-gray-300 dark:border-[#334155] text-[#334155] dark:text-[#cbd5e1]" data-aos="fade-up">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
      </div>

      {/* Glow effect style */}
      <style jsx>{`
        .neon-glow {
          box-shadow: 0 0 15px rgba(20, 184, 166, 0.5), 0 0 30px rgba(20, 184, 166, 0.3);
        }
      `}</style>
    </section>
  );
}
