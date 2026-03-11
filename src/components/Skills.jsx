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
import { profile } from '../data/profile';
import { motion } from 'framer-motion';
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
  // Languages
  'C': c,
  'C++': cpp,
  'Java': java,
  'Python': python,
  'JavaScript': js,
  
  // Frontend
  'React': react,
  'HTML5': html5,
  'CSS3': css3,
  'Tailwind CSS': tailwind,
  'Figma': figma,
  
  // Backend
  'Node.js': nodejs,
  'Express': express,
  'MongoDB': mongodb,
  'MySQL': mysql,
  
  // Tools
  'Git': git,
  'GitHub': github,
  'VS Code': vscode,
  'Vercel': vercel,
  'Netlify': netlify,
};

const SkillCard = ({ category, items }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -5, scale: 1.02 }}
    transition={{ duration: 0.3 }}
    className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
  >
    <h3 className="text-lg font-bold text-cyan-400 mb-4 capitalize">{category}</h3>
    <div className="grid grid-cols-3 gap-3">
      {items.map((skill) => (
        <motion.div 
          key={skill}
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ duration: 0.2 }}
          className="group flex flex-col items-center gap-2 p-3 bg-slate-900 rounded-lg hover:bg-slate-700 transition-all duration-200 cursor-default"
        >
          <img 
            src={skillIcons[skill]} 
            alt={skill}
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200"
          />
          <span className="text-slate-400 text-xs font-medium text-center group-hover:text-cyan-400 transition-colors">
            {skill}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-20">
      <div className="flex items-center gap-3 mb-10">
        <Code2 className="w-8 h-8 text-cyan-400" />
        <h2 className="text-3xl font-bold text-white border-b-2 border-cyan-500 pb-2">Skills & Tech Stack</h2>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(profile.skills).map(([category, items]) => (
          <SkillCard key={category} category={category} items={items} />
        ))}
      </div>
    </section>
  );
};

export default Skills;