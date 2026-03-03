// import React from 'react';
// import { Code2 } from 'lucide-react';
// import { profile } from '../data/profile';
// import c from "../assets/c.png";
// import cpp from "../assets/cpp.png";
// import java from "../assets/java.png";
// import python from "../assets/python.png";
// import js from "../assets/js.png";
// import react from "../assets/react.png";
// import html5 from "../assets/html5.png";
// import css3 from "../assets/css3.png";
// import tailwind from "../assets/tailwind.png";
// import figma from "../assets/figma.png";
// import nodejs from "../assets/nodejs.png";
// import express from "../assets/express.png";
// import mongodb from "../assets/mongodb.png";
// import mysql from "../assets/mysql.png";
// import git from "../assets/git.png";
// import github from "../assets/github.png";
// import vscode from "../assets/vscode.png";
// import vercel from "../assets/vercel.png";
// import netlify from "../assets/netlify.png";

// // Map skill names to their PNG file paths
// const skillIcons = {
//   // Languages
//   'C': c,
//   'C++': cpp,
//   'Java': java,
//   'Python': python,
//   'JavaScript': js,
  
//   // Frontend
//   'React': react,
//   'HTML5': html5,
//   'CSS3': css3,
//   'Tailwind CSS': tailwind,
//   'Figma': figma,
  
//   // Backend
//   'Node.js': nodejs,
//   'Express': express,
//   'MongoDB': mongodb,
//   'MySQL': mysql,
  
//   // Tools
//   'Git': git,
//   'GitHub': github,
//   'VS Code': vscode,
//   'Vercel': vercel,
//   'Netlify': netlify,
// };

// const SkillCard = ({ category, items }) => (
//   <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
//     <h3 className="text-lg font-bold text-cyan-400 mb-4 capitalize">{category}</h3>
//     <div className="grid grid-cols-3 gap-3">
//       {items.map((skill) => (
//         <div 
//           key={skill}
//           className="group flex flex-col items-center gap-2 p-3 bg-slate-900 rounded-lg hover:bg-slate-700 transition-all duration-200 cursor-default"
//         >
//           <img 
//             src={skillIcons[skill]} 
//             alt={skill}
//             className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200"
//           />
//           <span className="text-slate-400 text-xs font-medium text-center group-hover:text-cyan-400 transition-colors">
//             {skill}
//           </span>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// const Skills = () => {
//   return (
//     <section id="skills" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-20">
//       <div className="flex items-center gap-3 mb-10">
//         <Code2 className="w-8 h-8 text-cyan-400" />
//         <h2 className="text-3xl font-bold text-white border-b-2 border-cyan-500 pb-2">Skills & Tech Stack</h2>
//       </div>
      
//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {Object.entries(profile.skills).map(([category, items]) => (
//           <SkillCard key={category} category={category} items={items} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Skills;





import React from 'react';
import { Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import c from "../assets/c.png";
import cpp from "../assets/cpp.png";
import java from "../assets/java.png";
import python from "../assets/python.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import html5 from "../assets/html5.png";
import css3 from "../assets/css3.png";
import tailwind from "../assets/tailwind.png";
import figma from "../assets/figma.png";
import nodejs from "../assets/nodejs.png";
import express from "../assets/express.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import vscode from "../assets/vscode.png";
import vercel from "../assets/vercel.png";
import netlify from "../assets/netlify.png";

const skillIcons = {
  'C': c,
  'C++': cpp,
  'Java': java,
  'Python': python,
  'JavaScript': js,
  'React': react,
  'HTML5': html5,
  'CSS3': css3,
  'Tailwind CSS': tailwind,
  'Figma': figma,
  'Node.js': nodejs,
  'Express': express,
  'MongoDB': mongodb,
  'MySQL': mysql,
  'Git': git,
  'GitHub': github,
  'VS Code': vscode,
  'Vercel': vercel,
  'Netlify': netlify,
};

const SkillCard = ({ category, items, index }) => (
  <motion.div 
    className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -5 }}
  >
    <motion.h3 
      className="text-lg font-bold text-cyan-400 mb-4 capitalize"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 + 0.1 }}
    >
      {category}
    </motion.h3>
    <div className="grid grid-cols-3 gap-3">
      {items.map((skill) => (
        <motion.div 
          key={skill}
          className="group flex flex-col items-center gap-2 p-3 bg-slate-900 rounded-lg hover:bg-slate-700 transition-all duration-200 cursor-default"
          whileHover={{ scale: 1.1 }}
        >
          <motion.img 
            src={skillIcons[skill]} 
            alt={skill}
            className="w-10 h-10 object-contain"
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.span 
            className="text-slate-400 text-xs font-medium text-center group-hover:text-cyan-400 transition-colors"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <motion.section 
      id="skills" 
      className="py-20 px-4 max-w-6xl mx-auto scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="flex items-center gap-3 mb-10"
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Code2 className="w-8 h-8 text-cyan-400" />
        <motion.h2 
          className="text-3xl font-bold text-white border-b-2 border-cyan-500 pb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Skills & Tech Stack
        </motion.h2>
      </motion.div>
      
      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {Object.entries(profile.skills).map(([category, items], idx) => (
          <SkillCard key={category} category={category} items={items} index={idx} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;