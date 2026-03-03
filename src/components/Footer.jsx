// import { useState } from 'react';
// import { Github, Linkedin, Mail, Copy, Check } from 'lucide-react';

// const Footer = () => {
//   const email = "arupratandey3250@gmail.com";
//   const [copied, setCopied] = useState(false);

//   const copyEmail = () => {
//     navigator.clipboard.writeText(email);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <footer id="contact" className="py-12 bg-slate-800/50 text-center border-t border-slate-800">
//       <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
//       <div className="flex justify-center gap-6 mb-8">
        
//         <a href="https://github.com/arup-ratan-dey" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-full hover:bg-cyan-500 transition transform hover:scale-110">
//           <Github className="w-6 h-6 text-white" />
//         </a>

//         <a href="https://www.linkedin.com/in/arup-ratan-dey-8a0815249/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-full hover:bg-cyan-500 transition transform hover:scale-110">
//           <Linkedin className="w-6 h-6 text-white" />
//         </a>

//         {/* Email with Copy */}
//         <button onClick={copyEmail} className="p-3 bg-slate-700 rounded-full hover:bg-cyan-500 transition transform hover:scale-110 relative">
//           {copied ? <Check className="w-6 h-6 text-green-400" /> : <Mail className="w-6 h-6 text-white" />}
//           {copied && (
//             <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded">
//               Copied!
//             </span>
//           )}
//         </button>

//       </div>
//       <p className="text-slate-500">© 2025 Arup Ratan Dey. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;



import React, { useState } from 'react';
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const email = "arupratandey3250@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.footer 
      id="contact" 
      className="py-12 bg-slate-800/50 text-center border-t border-slate-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-2xl font-bold text-white mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Get In Touch
      </motion.h2>
      
      <motion.div 
        className="flex justify-center gap-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <motion.a 
          href="https://github.com/arup-ratan-dey" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-3 bg-slate-700 rounded-full hover:bg-cyan-500 transition transform hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Github className="w-6 h-6 text-white" />
        </motion.a>

        <motion.a 
          href="https://www.linkedin.com/in/arup-ratan-dey-8a0815249/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-3 bg-slate-700 rounded-full hover:bg-cyan-500 transition transform hover:scale-110"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Linkedin className="w-6 h-6 text-white" />
        </motion.a>

        {/* Email with Copy */}
        <motion.button 
          onClick={copyEmail} 
          className="p-3 bg-slate-700 rounded-full hover:bg-cyan-500 transition transform hover:scale-110 relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {copied ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Check className="w-6 h-6 text-green-400" />
            </motion.div>
          ) : (
            <Mail className="w-6 h-6 text-white" />
          )}
          
          {copied && (
            <motion.span 
              className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              Copied!
            </motion.span>
          )}
        </motion.button>
      </motion.div>
      
      <motion.p 
        className="text-slate-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        © 2025 Arup Ratan Dey. All rights reserved.
      </motion.p>
    </motion.footer>
  );
};

export default Footer;