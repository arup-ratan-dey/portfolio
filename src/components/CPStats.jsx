import React from 'react';
import { Terminal, Trophy, Code2, ExternalLink, Award } from 'lucide-react';
import { profile } from '../data/profile';

const StatCard = ({ title, data, color }) => (
  <a 
    href={data.url} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 block"
  >
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{title}</h3>
        <span className={`font-bold ${color}`}>{data.rank}</span>
      </div>
      <ExternalLink className="w-4 h-4 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    
    {/* Stats Grid */}
    <div className="grid grid-cols-3 gap-1 text-center min-w-0 mb-3">
      <div className="bg-slate-900 p-2 rounded group-hover:bg-slate-700 transition-colors">
        <p className="text-xs text-slate-500 truncate">Max Rating</p>
        <p className="font-mono font-bold text-white">{data.rating}</p>
      </div>
      <div className="bg-slate-900 p-2 rounded group-hover:bg-slate-700 transition-colors">
        <p className="text-xs text-slate-500 truncate">Solved</p>
        <p className="font-mono font-bold text-white">{data.solved}</p>
      </div>
      <div className="bg-slate-900 p-2 rounded group-hover:bg-slate-700 transition-colors">
        <p className="text-xs text-slate-500 truncate">Contests</p>
        <p className="font-mono font-bold text-white">{data.contests}</p>
      </div>
    </div>
    
    {/* Best Rank */}
    {data.bestRank && (
      <a 
        href={data.bestRankUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex items-center justify-between bg-linear-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 p-2 rounded-lg hover:from-yellow-500/30 hover:to-orange-500/30 transition-all group/best"
      >
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-yellow-500" />
          <span className="text-xs text-slate-400">Best Rank</span>
        </div>
        <span className="text-sm font-bold text-yellow-400 group-hover/best:text-yellow-300">
          {data.bestRank}
        </span>
      </a>
    )}
    
    <div className="mt-3 text-center opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="text-cyan-400 text-sm font-medium">View Profile →</span>
    </div>
  </a>
);

const BigStatCard = ({ icon: Icon, title, value, suffix, description }) => (
  <div className="group relative bg-linear-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
    <div className="absolute inset-0 bg-linear-to-r from-cyan-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute top-4 right-4 w-20 h-20 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300"></div>
    
    <div className="relative">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-3 bg-slate-700 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
          <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
        </div>
        <span className="text-slate-400 font-medium">{title}</span>
      </div>
      
      <div className="flex items-baseline gap-2">
        <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 group-hover:from-cyan-300 group-hover:to-blue-400 transition-all duration-300">
          {value}
        </span>
        <span className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
          {suffix}
        </span>
      </div>
      
      <p className="text-slate-500 text-sm mt-2 group-hover:text-slate-400 transition-colors">
        {description}
      </p>
    </div>
    
    <div className="absolute bottom-0 left-0 w-0 h-1 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500"></div>
    
    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
      <div className="absolute top-0 right-0 w-8 h-8 bg-cyan-500/20 rounded-bl-full transform translate-x-2 -translate-y-2 group-hover:bg-cyan-500/30 transition-colors"></div>
    </div>
  </div>
);

const CPStats = () => {
  return (
    <section id="stats" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto scroll-mt-20">
        <div className="flex items-center gap-3 mb-10">
          <Terminal className="w-8 h-8 text-cyan-400" />
          <h2 className="text-3xl font-bold text-white border-b-2 border-cyan-500 pb-2">Competitive Programming</h2>
        </div>
        
        {/* Big Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <BigStatCard 
            icon={Code2}
            title="Problems Solved"
            value="1500"
            suffix="+"
            description="Across Codeforces, CodeChef, AtCoder, LeetCode & all other online and offline platforms"
          />
          <BigStatCard 
            icon={Trophy}
            title="Contests Participated"
            value="200"
            suffix="+"
            description="Including onsite and online competitions"
          />
        </div>
        
        {/* Platform Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-hidden">
          <StatCard title="Codeforces" data={profile.cpStats.codeforces} color="text-green-400" />
          <StatCard title="CodeChef" data={profile.cpStats.codechef} color="text-yellow-400" />
          <StatCard title="AtCoder" data={profile.cpStats.atcoder} color="text-blue-400" />
          
          <a 
            href={profile.cpStats.leetcode.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="group bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 block"
          >
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">LeetCode</h3>
            <div className="space-y-2">
              <div className="flex justify-between bg-slate-900 p-3 rounded group-hover:bg-slate-700 transition-colors">
                <span className="text-green-400">Easy</span>
                <span className="font-mono font-bold">{profile.cpStats.leetcode.easy}</span>
              </div>
              <div className="flex justify-between bg-slate-900 p-3 rounded group-hover:bg-slate-700 transition-colors">
                <span className="text-yellow-400">Medium</span>
                <span className="font-mono font-bold">{profile.cpStats.leetcode.medium}</span>
              </div>
            </div>
            <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-cyan-400 text-sm font-medium">View Profile →</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CPStats;

