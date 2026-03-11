import React from 'react';
import { Folder, Github, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const isLiveDemo = index < 5; 

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-500 transition-all duration-300"
    >
      {/* Thumbnail Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent z-10"></div>
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <span 
              key={idx}
              className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons - Conditional Rendering */}
        <div className="flex gap-3">
          {/* Live Demo Button - Only for first 4 projects */}
          {isLiveDemo && (
            <motion.a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </motion.a>
          )}

          {/* GitHub Button - For all projects */}
          <motion.a 
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg border border-slate-600 hover:border-cyan-400 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto scroll-mt-20">
        <div className="flex items-center gap-3 mb-10">
          <Folder className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl font-bold text-white border-b-2 border-cyan-500 pb-2">My Projects</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profile.projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

