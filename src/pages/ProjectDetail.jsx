import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projectsData'; // This already connects your data
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div className="h-screen flex justify-center items-center">Project not found!</div>;
  }

  return (
    <div className="py-24 px-4 md:px-10 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-800 transition-colors">
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-emerald-600 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-colors">
            Visit Site
          </a>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-gray-500 mb-8">{project.longDescription || project.description}</p>

        <img src={project.image} alt={project.title} className="w-full h-auto object-cover rounded-lg shadow-lg mb-8" />

        <div className="prose lg:prose-xl max-w-none">
            <h3 className="text-2xl font-semibold mb-4">Technologies Used:</h3>
            <p>This project leverages a modern tech stack including {project.technologies.join(', ')} to deliver a robust and scalable solution.</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;