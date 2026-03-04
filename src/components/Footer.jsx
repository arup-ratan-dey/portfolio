import { useState } from 'react';
import { Github, Linkedin, Mail, Copy, Check } from 'lucide-react';

const Footer = () => {
  const email = "arupratandey3250@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="py-12 bg-slate-800/50 text-center border-t border-slate-800">
      <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
      <div className="flex justify-center gap-6 mb-8">
        
        <a href="https://github.com/arup-ratan-dey" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-full hover:bg-cyan-500 transition transform hover:scale-110">
          <Github className="w-6 h-6 text-white" />
        </a>

        <a href="https://www.linkedin.com/in/arup-ratan-dey-8a0815249/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-700 rounded-full hover:bg-cyan-500 transition transform hover:scale-110">
          <Linkedin className="w-6 h-6 text-white" />
        </a>

        {/* Email with Copy */}
        <button onClick={copyEmail} className="p-3 bg-slate-700 rounded-full hover:bg-cyan-500 transition transform hover:scale-110 relative">
          {copied ? <Check className="w-6 h-6 text-green-400" /> : <Mail className="w-6 h-6 text-white" />}
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs px-2 py-1 rounded">
              Copied!
            </span>
          )}
        </button>

      </div>
      <p className="text-slate-500">© 2026 Arup Ratan Dey. All rights reserved.</p>
    </footer>
  );
};

export default Footer;


