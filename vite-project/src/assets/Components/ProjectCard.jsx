import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 shadow-lg rounded-xl p-6 flex flex-col md:flex-row gap-6 max-w-4xl mx-auto transition-transform transform hover:scale-105">
      <div className="md:w-1/3">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover rounded-md"
        />    
      </div>
      <div className="md:w-2/3 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-2">{project.title}</h2>
          <p className="text-gray mb-4">{project.description}</p>
          <p className="text-sm text-gray-500 mb-2">Technologies: {project.technologies}</p>
        </div>
        <div className="flex items-center">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
            <FaGithub size={28} />
          </a>
        </div>
      </div>
    </div>
  );
}
