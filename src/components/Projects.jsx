// import React from 'react';
// import { Folder } from 'lucide-react';
// import { profile } from '../data/profile';

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 px-4 bg-slate-800/30">
//       <div className="max-w-6xl mx-auto scroll-mt-20">
//         <div className="flex items-center gap-3 mb-10">
//           <Folder className="w-8 h-8 text-cyan-400" />
//           <h2 className="text-3xl font-bold text-white border-b-2 border-cyan-500 pb-2">My Projects</h2>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {profile.projects.map((project, idx) => (
//             <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1">
//               <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
//               <p className="text-slate-400 text-sm mb-4">{project.description}</p>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map((t, i) => (
//                   <span key={i} className="px-2 py-1 bg-slate-900 text-cyan-400 text-xs rounded">
//                     {t}
//                   </span>
//                 ))}
//               </div>
//               <a href={project.link} className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium">
//                 View Project →
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;





// import React from 'react';
// import { Folder, Github, ExternalLink } from 'lucide-react';
// import { profile } from '../data/profile';

// const ProjectCard = ({ project }) => (
//   <div className="group bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2">
//     {/* Thumbnail Image */}
//     <div className="relative h-48 overflow-hidden">
//       <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
//       <img 
//         src={project.image} 
//         alt={project.title}
//         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//       />
//       {/* Hover Overlay */}
//       <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
//     </div>

//     {/* Content */}
//     <div className="p-5">
//       <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
//         {project.title}
//       </h3>
//       <p className="text-slate-400 text-sm mb-4 line-clamp-2">
//         {project.description}
//       </p>

//       {/* Tech Stack */}
//       <div className="flex flex-wrap gap-2 mb-4">
//         {project.tech.map((tech, idx) => (
//           <span 
//             key={idx}
//             className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>

//       {/* Buttons */}
//       <div className="flex gap-3">
//         {/* Live Demo Button */}
//         <a 
//           href={project.liveLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:scale-105"
//         >
//           <ExternalLink className="w-4 h-4" />
//           <span>Live Demo</span>
//         </a>

//         {/* GitHub Button */}
//         <a 
//           href={project.githubLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:scale-105"
//         >
//           <Github className="w-4 h-4" />
//           <span>GitHub</span>
//         </a>
//       </div>
//     </div>
//   </div>
// );

// const Projects = () => {
//   return (
//     <section id="projects" className="py-20 px-4 bg-slate-800/30">
//       <div className="max-w-6xl mx-auto scroll-mt-20">
//         <div className="flex items-center gap-3 mb-10">
//           <Folder className="w-8 h-8 text-cyan-400" />
//           <h2 className="text-3xl font-bold text-white border-b-2 border-cyan-500 pb-2">My Projects</h2>
//         </div>
        
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {profile.projects.map((project, idx) => (
//             <ProjectCard key={idx} project={project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;




import React from 'react';
import { Folder, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const ProjectCard = ({ project, index }) => {
  const isGitHubOnly = index >= 3;
  const mainLink = isGitHubOnly ? project.githubLink : project.liveLink;

  return (
    <motion.a 
      href={mainLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      {/* Thumbnail Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Hover Overlay */}
        <motion.div 
          className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <motion.h3 
          className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors"
          whileHover={{ x: 5 }}
        >
          {project.title}
        </motion.h3>
        <p className="text-slate-400 text-sm mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, idx) => (
            <motion.span 
              key={idx}
              className="px-2 py-1 bg-slate-700 text-cyan-400 text-xs rounded-full"
              whileHover={{ scale: 1.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {/* Live Demo Button - Only for project 1, 2, 3 */}
          {!isGitHubOnly && project.liveLink && (
            <motion.a 
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
            onClick={(e) => e.stopPropagation()}
            className={`flex items-center justify-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white text-sm font-medium rounded-lg border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:scale-105 ${isGitHubOnly ? 'flex-1' : ''}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </motion.a>
        </div>
      </div>
    </motion.a>
  );
};

const Projects = () => {
  return (
    <motion.section 
      id="projects" 
      className="py-20 px-4 bg-slate-800/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto scroll-mt-20">
        <motion.div 
          className="flex items-center gap-3 mb-10"
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <Folder className="w-8 h-8 text-cyan-400" />
          <motion.h2 
            className="text-3xl font-bold text-white border-b-2 border-cyan-500 pb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {profile.projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} index={idx} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
