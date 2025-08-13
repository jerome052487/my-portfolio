import { useState } from 'react';
import { Link } from 'react-router-dom';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.png';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectList = [
    {
      id: 1,
      title: 'Weather App',
      description: 'A sleek weather forecasting app using OpenWeatherMap API.',
      images: [project1, project1],
      demoLink: '/weather',  // updated to route
      tech: ['React', 'Tailwind CSS', 'OpenWeatherMap API'],
      features: ['Search by city name', 'Responsive design', 'Dynamic weather icons'],
      github: '#',
    },
    {
      id: 2,
      title: 'Landing Page',
      description: 'A clean and modern landing page designed to showcase products, services, or ideas with a strong call-to-action and responsive layout, built with React and Tailwind CSS.',
      images: [project2, project2],
      demoLink: '/landing',  // <-- Changed this to route to landing page
      tech: ['React', 'Tailwind CSS', 'AOS Animations'],
      features: ['Dark mode toggle', 'Smooth scrolling', 'Downloadable resume'],
      github: '#',
    },
    {
      id: 3,
      title: 'Task Manager',
      description: 'A simple task manager to track daily activities.',
      images: [project3, project3],
      demoLink: '#',
      tech: ['React', 'Tailwind CSS', 'Local Storage'],
      features: ['Add, edit, and delete tasks', 'Save tasks in browser', 'Responsive layout'],
      github: '#',
    },
  ];

  const handleNextImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = () => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">
          Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Here are some of the projects I've worked on recently.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 hover:glow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col items-center">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
                  {project.description}
                </p>
                <div className="flex gap-3">
                  <Link
                    to={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 mt-auto bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 neon-blue-glow"
                    data-aos="zoom-in"
                    data-aos-delay={index * 150}
                  >
                    Live Demo
                  </Link>
                  <button
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                    className="inline-block px-6 py-2 mt-auto bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105 neon-blue-glow"
                    data-aos="zoom-in"
                    data-aos-delay={index * 150}
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-lg w-full relative animate-fadeIn">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <div className="relative">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} screenshot`}
                className="w-full h-48 object-cover rounded mb-4 transition-all duration-500"
              />
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    className="absolute top-1/2 left-2 bg-gray-700 text-white px-2 py-1 rounded-full hover:bg-gray-600"
                    onClick={handlePrevImage}
                  >
                    ‹
                  </button>
                  <button
                    className="absolute top-1/2 right-2 bg-gray-700 text-white px-2 py-1 rounded-full hover:bg-gray-600"
                    onClick={handleNextImage}
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="mb-4">{selectedProject.description}</p>

            <p className="font-semibold">Tech Stack:</p>
            <ul className="list-disc list-inside mb-3 text-sm">
              {selectedProject.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>

            <p className="font-semibold">Features:</p>
            <ul className="list-disc list-inside mb-4 text-sm">
              {selectedProject.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <div className="flex gap-3">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full shadow-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-all duration-300 neon-blue-glow"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Custom Glow Style */}
      <style jsx>{`
        .neon-blue-glow {
          box-shadow: 0 0 10px #00f7ff, 0 0 20px #00f7ff, 0 0 30px #00f7ff;
        }
      `}</style>
    </section>
  );
};

export default Projects;
