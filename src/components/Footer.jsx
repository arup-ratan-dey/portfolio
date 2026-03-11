import { useState } from 'react';
import { Github, Linkedin, Mail, Send, Check, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const ACCESS_KEY = "d4eba069-da74-4ac5-8550-bbb8141e0e9b";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        toast.success('Thank you for your submission!');
      } else {
        setStatus('error');
        toast.error(result.message || 'Something went wrong');
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus('error');
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <footer id="contact" className="py-16 bg-slate-800/50 text-center border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-cyan-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white mb-2"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 mb-8"
        >
          Have a question or want to work together? Send me a message!
        </motion.p>
        
        {/* Success Message */}
        <AnimatePresence>
          {status === 'success' && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 flex items-center justify-center gap-2"
            >
              <Check className="w-5 h-5" />
              <span>Message sent successfully! I'll get back to you soon.</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Message */}
        <AnimatePresence>
          {status === 'error' && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 flex items-center justify-center gap-2"
            >
              <AlertCircle className="w-5 h-5" />
              <span>Something went wrong. Please try again later.</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact Form */}
        <motion.form 
          onSubmit={handleSubmit} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-left bg-slate-900/50 p-6 rounded-2xl border border-slate-700 shadow-xl"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-1">Message</label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <motion.button
            type="submit"
            disabled={status === 'submitting'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-3 px-6 rounded-lg font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
              status === 'submitting' 
                ? 'bg-slate-700 cursor-not-allowed' 
                : 'bg-cyan-500 hover:bg-cyan-600 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]'
            }`}
          >
            {status === 'submitting' ? (
              <>Sending...</>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center gap-6 mt-15"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.a 
            href="https://github.com/arup-ratan-dey" 
            target="_blank" 
            rel="noopener noreferrer" 
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-slate-800 rounded-full hover:bg-cyan-500 transition transform border border-slate-700"
          >
            <Github className="w-6 h-6 text-white" />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/arup-ratan-dey-8a0815249/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-slate-800 rounded-full hover:bg-cyan-500 transition transform border border-slate-700"
          >
            <Linkedin className="w-6 h-6 text-white" />
          </motion.a>
          <motion.a 
            href="mailto:arupratandey3250@gmail.com"
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-slate-800 rounded-full hover:bg-cyan-500 transition transform border border-slate-700"
          >
            <Mail className="w-6 h-6 text-white" />
          </motion.a>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-slate-500 mt-8 text-sm"
        >
          © 2026 Arup Ratan Dey. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
