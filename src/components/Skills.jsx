import React from 'react';
import { Code2 } from 'lucide-react';
import { profile } from '../data/profile';
import c from "/src/assets/c.png";

// Map skill names to their PNG file paths
const skillIcons = {
  // Languages
  'C': c,
  'C++': '/src/assets/c++.png',
  'Java': '/src/assets/java.png',
  'Python': '/src/assets/python.png',
  'JavaScript': '/src/assets/js.png',
  
  // Frontend
  'React': '/src/assets/react.png',
  'HTML5': '/src/assets/html5.png',
  'CSS3': '/src/assets/css3.png',
  'Tailwind CSS': '/src/assets/tailwind.png',
  'Figma': '/src/assets/figma.png',
  
  // Backend
  'Node.js': '/src/assets/nodejs.png',
  'Express': '/src/assets/express.png',
  'MongoDB': '/src/assets/mongodb.png',
  'MySQL': '/src/assets/mysql.png',
  
  // Tools
  'Git': '/src/assets/git.png',
  'GitHub': '/src/assets/github.png',
  'VS Code': '/src/assets/vscode.png',
  'Vercel': '/src/assets/vercel.png',
  'Netlify': '/src/assets/netlify.png',
};

const SkillCard = ({ category, items }) => (
  <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300">
    <h3 className="text-lg font-bold text-cyan-400 mb-4 capitalize">{category}</h3>
    <div className="grid grid-cols-3 gap-3">
      {items.map((skill) => (
        <div 
          key={skill}
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
        </div>
      ))}
    </div>
  </div>
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