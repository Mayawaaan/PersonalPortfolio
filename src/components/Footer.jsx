import React from 'react';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import navbarLinks from '../data/navbarLinks';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='bg-gray-900 text-gray-400'>
      <div className='max-w-6xl mx-auto py-12 px-4 md:px-10'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* Column 1: Brand */}
          <div className='md:col-span-1 text-center md:text-left'>
            <h3 className='text-2xl font-serif font-semibold text-white mb-2'>Ayan Magardey</h3>
            <p className='text-sm'>"Crafting Digital Worlds, Not Just Websites"</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className='text-center md:text-left'>
            <h4 className='text-lg font-semibold text-white mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              {navbarLinks.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-emerald-400 transition-colors duration-300">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className='text-center md:text-left'>
            <h4 className='text-lg font-semibold text-white mb-4'>Connect With Me</h4>
            <div className='flex space-x-4 justify-center md:justify-start'>
              <a href="https://github.com/Mayawaaan" target="_blank" rel="noopener noreferrer" className='p-2 bg-gray-700 rounded-full hover:bg-emerald-500 hover:text-white transition-colors'>
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ayan-magardey-727483210/" target="_blank" rel="noopener noreferrer" className='p-2 bg-gray-700 rounded-full hover:bg-emerald-500 hover:text-white transition-colors'>
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/sanatani.ayan/1908" target="_blank" rel="noopener noreferrer" className='p-2 bg-gray-700 rounded-full hover:bg-emerald-500 hover:text-white transition-colors'>
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black/20 py-4'>
        <p className='text-center text-sm'>&copy; {year} Ayan Magardey. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;