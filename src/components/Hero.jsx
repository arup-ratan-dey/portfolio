import React from 'react';
import { Cpu, Download, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';
import cvFile from '../assets/cv.pdf';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-40 pb-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-slate-800 rounded-full mb-4 border border-cyan-500/30"
          >
            <span className="text-cyan-400 text-sm font-medium">👋 Hello, I'm</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-extrabold text-white mb-4"
          >
            <span className="relative inline-block group">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-300% animate-gradient">
                Arup Ratan Dey
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-cyan-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></span>
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-400 mb-2"
          >
            {profile.title}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-slate-500 mb-6"
          >
            {profile.university}
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-slate-300 mb-8 leading-relaxed"
          >
            {profile.bio}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex justify-center md:justify-start gap-4 flex-wrap"
          >
            <a href="#contact" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-full transition transform hover:scale-105 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
              Contact Me
            </a>
            
            <a 
              href={cvFile} 
              download="Arup_Ratan_Dey_CV.pdf"
              className="group relative px-8 py-3 bg-transparent border-2 border-cyan-500 text-cyan-400 font-bold rounded-full transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-all duration-300"></span>
              <span className="relative flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download CV</span>
              </span>
              <ExternalLink className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
            </a>
            
            <a href="#stats" className="px-8 py-3 border border-slate-600 hover:border-cyan-400 text-white font-bold rounded-full transition hover:bg-slate-800">
              View Stats
            </a>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 animate-pulse blur-3xl"></div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-slate-700 shadow-2xl shadow-cyan-500/20 hover:border-cyan-400 transition-all duration-500 group"
            >
              <img 
                src={profile.image} 
                alt={profile.name} 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -top-4 -right-4 bg-slate-800 px-4 py-2 rounded-full border border-slate-700 shadow-lg animate-bounce" 
              style={{ animationDuration: '2s' }}
            >
              <span className="text-green-400 font-bold">⚡ CP</span>
            </motion.div>

            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="absolute -bottom-4 -left-4 bg-slate-800 px-4 py-2 rounded-full border border-slate-700 shadow-lg animate-bounce" 
              style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}
            >
              <span className="text-yellow-400 font-bold">💻 Dev</span>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;