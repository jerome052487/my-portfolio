import React from 'react';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Weather App',
      description: 'A sleek weather forecasting app using OpenWeatherMap API.',
      image: project1,
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'My personal responsive portfolio built with React and Tailwind CSS.',
      image: project2,
    },
    {
      id: 3,
      title: 'Task Manager',
      description: 'A simple task manager to track daily activities.',
      image: project3,
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12">
          Here are some of the projects I've worked on recently.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md transition-shadow duration-300 hover:glow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
