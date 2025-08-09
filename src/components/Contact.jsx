import Navbar from "./Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center px-4 py-10"
      >
        <div
          className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8"
          data-aos="zoom-in"
        >
          <h2
            className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Get in Touch
          </h2>
          <form className="space-y-6">
            <div data-aos="fade-up" data-aos-delay="200">
              <label
                htmlFor="name"
                className="block mb-1 font-medium text-gray-700 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <label
                htmlFor="email"
                className="block mb-1 font-medium text-gray-700 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <label
                htmlFor="message"
                className="block mb-1 font-medium text-gray-700 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
              />
            </div>

            <button
              type="submit"
              data-aos="zoom-in"
              data-aos-delay="500"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
