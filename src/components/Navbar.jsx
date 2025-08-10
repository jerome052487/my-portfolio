import { useEffect, useState } from 'react';
import { Link as ScrollLink, Events } from 'react-scroll';

const sections = ['home', 'about', 'projects', 'skills', 'contact'];

const Navbar = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollY >= section.offsetTop - 100) {
          setActive(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow z-50">
      <ul className="flex justify-center space-x-6 p-4">
        {sections.map((section) => (
          <li key={section}>
            <ScrollLink
              to={section}
              spy={true}
              smooth={true}
              offset={-70} // adjust for navbar height
              duration={500}
              onClick={() => setActive(section)}
              className={`cursor-pointer capitalize font-medium transition-colors duration-300 ${
                active === section ? 'text-blue-500' : 'hover:text-blue-400'
              }`}
            >
              {section}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
