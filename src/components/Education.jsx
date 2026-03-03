// import React from 'react';
// import { GraduationCap, ExternalLink, School, FileText, Download, Eye } from 'lucide-react';
// import { profile } from '../data/profile';


// const Education = () => {
//   return (
//     <section id="education" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-20">
//       <div className="flex items-center gap-3 mb-10">
//         <GraduationCap className="w-8 h-8 text-cyan-400" />
//         <h2 className="text-3xl font-bold text-white border-b-2 border-cyan-500 pb-2">Education</h2>
//       </div>
      
//         <div className="space-y-4">
//     {profile.education.map((edu, idx) => (
//       <div 
//         key={idx}
//         className="group relative bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col md:flex-row md:justify-between md:items-start gap-4"
//       >
//         <div className="flex-1">
//           <div className="flex items-center gap-2 mb-2">
//             <School className="w-4 h-4 text-slate-500" />
//             <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{edu.year}</span>
//           </div>
//           <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
//           <p className="text-slate-400 mt-1 flex items-center gap-2">
//             {edu.institution}
//             <a 
//               href={edu.website} 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-1 text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
//             >
//               <ExternalLink className="w-3 h-3" />
//             </a>
//           </p>
//         </div>
        
//         <div className="flex flex-col items-end gap-3">
//           <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg hover:shadow-cyan-500/50 transition-shadow cursor-pointer">
//             {edu.grade}
//           </div>
          
//           {/* Certificate Button */}
//           {edu.certificate ? (
//             <a 
//               href={edu.certificate}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm font-medium transition-colors"
//             >
//               <FileText className="w-4 h-4" />
//               <span>View Certificate</span>
//             </a>
//           ) : (
//             <button 
//               onClick={() => alert("📄 Certificate yet to receive. Will be uploaded once available!")}
//               className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-500 rounded-lg text-sm font-medium cursor-not-allowed"
//             >
//               <FileText className="w-4 h-4" />
//               <span>Yet to receive</span>
//             </button>
//           )}
//         </div>
//       </div>
//     ))}
//   </div>
// </section>
//   );
// };

// export default Education;




import React from 'react';
import { GraduationCap, ExternalLink, School, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';

const Education = () => {
  return (
    <motion.section 
      id="education" 
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
        <GraduationCap className="w-8 h-8 text-cyan-400" />
        <motion.h2 
          className="text-3xl font-bold text-white border-b-2 border-cyan-500 pb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>
      </motion.div>
      
      <motion.div 
        className="space-y-4"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {profile.education.map((edu, idx) => (
          <motion.div 
            key={idx}
            className="group relative bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col md:flex-row md:justify-between md:items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -3 }}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <School className="w-4 h-4 text-slate-500" />
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{edu.year}</span>
              </div>
              <motion.h3 
                className="text-xl font-bold text-white"
                whileHover={{ x: 5 }}
              >
                {edu.degree}
              </motion.h3>
              <p className="text-slate-400 mt-1 flex items-center gap-2">
                {edu.institution}
                <a 
                  href={edu.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                </a>
              </p>
            </div>
            
            <div className="flex flex-col items-end gap-3">
              <motion.div 
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg hover:shadow-cyan-500/50 transition-shadow cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {edu.grade}
              </motion.div>
              
              {/* Certificate Button */}
              {edu.certificate ? (
                <motion.a 
                  href={edu.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FileText className="w-4 h-4" />
                  <span>View Certificate</span>
                </motion.a>
              ) : (
                <motion.button 
                  onClick={() => alert("📄 Certificate yet to receive. Will be uploaded once available!")}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-500 rounded-lg text-sm font-medium cursor-not-allowed"
                >
                  <FileText className="w-4 h-4" />
                  <span>Yet to receive</span>
                </motion.button>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Education;