import React from 'react';
import { Trophy, ExternalLink, Award } from 'lucide-react';
import { profile } from '../data/profile';

const Contests = () => {
  return (
    <section id="contests" className="py-20 px-4 max-w-6xl mx-auto scroll-mt-20">
      <div className="flex items-center gap-3 mb-10">
        <Trophy className="w-8 h-8 text-cyan-400" />
        <h2 className="text-3xl font-bold text-white border-b-2 border-cyan-500 pb-2">Onsite Contest Achievements</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        {profile.contests.map((contest, idx) => (
          <a 
            href={contest.link} 
            target="_blank" 
            rel="noopener noreferrer"
            key={idx}
            className="group relative bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
          >
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative flex justify-between items-center">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs text-slate-500 font-medium">{contest.year}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">{contest.name}</h3>
                <p className="text-slate-400 text-sm mt-1">
                  Team: <span className="text-cyan-400 font-medium group-hover:text-cyan-300">{contest.team}</span>
                </p>
              </div>
              
              <div className="text-right flex flex-col items-end">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg group-hover:shadow-cyan-500/50 transition-shadow">
                  {contest.rank}
                </div>
                <div className="flex items-center gap-1 mt-2 text-slate-500 group-hover:text-cyan-400 transition-colors">
                  <span className="text-xs">View Standings</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>

            {/* Bottom Border Animation */}
            <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contests;