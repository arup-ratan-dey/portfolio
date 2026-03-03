import React from 'react';
import { GraduationCap, ExternalLink, School, FileText, Download, Eye } from 'lucide-react';
import { profile } from '../data/profile';


const Education = () => {
  return (
    <section id="education" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-20">
      <div className="flex items-center gap-3 mb-10">
        <GraduationCap className="w-8 h-8 text-cyan-400" />
        <h2 className="text-3xl font-bold text-white border-b-2 border-cyan-500 pb-2">Education</h2>
      </div>
      
        <div className="space-y-4">
    {profile.education.map((edu, idx) => (
      <div 
        key={idx}
        className="group relative bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col md:flex-row md:justify-between md:items-start gap-4"
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <School className="w-4 h-4 text-slate-500" />
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">{edu.year}</span>
          </div>
          <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
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
          <div className="bg-linear-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg hover:shadow-cyan-500/50 transition-shadow cursor-pointer">
            {edu.grade}
          </div>
          
          {/* Certificate Button */}
          {edu.certificate ? (
            <a 
              href={edu.certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg text-sm font-medium transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>View Certificate</span>
            </a>
          ) : (
            <button 
              onClick={() => alert("📄 Certificate yet to receive. Will be uploaded once available!")}
              className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-500 rounded-lg text-sm font-medium cursor-not-allowed"
            >
              <FileText className="w-4 h-4" />
              <span>Yet to receive</span>
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
</section>
  );
};

export default Education;



