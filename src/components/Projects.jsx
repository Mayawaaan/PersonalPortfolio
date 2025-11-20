import React from 'react';
import projectsData from '../data/projectsData';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className='py-16 px-4 md:px-10 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [perspective:1000px]'>
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='group relative w-full h-80'
            >
              <div className='relative w-full h-full rounded-lg shadow-md transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                {/* Front of the card */}
                <div className='absolute w-full h-full [backface-visibility:hidden]'>
                  <img src={project.image} alt={project.title} className='w-full h-full object-contain rounded-lg' />
                  <div className='absolute bottom-0 left-0 w-full p-4 bg-black/50 rounded-b-lg'>
                    <h3 className='text-xl font-semibold text-white'>
                      {project.title}
                    </h3>
                  </div>
                </div>
                {/* Back of the card */}
                <div className='absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-emerald-500 rounded-lg p-6 flex flex-col justify-center text-center items-center text-white'>
                  <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
                  <p className='text-center mb-4'>{project.description}</p>
                  <Link to={`/project/${project.id}`} className='mt-2 px-4 py-2 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-200 transition-colors'>
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;