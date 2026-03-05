import { useState } from 'react';
import { Github, Linkedin, Mail, Send, Check, AlertCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // ⚠️ YOUR EXISTING ACCESS KEY
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
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-cyan-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <p className="text-slate-400 mb-8">Have a question or want to work together? Send me a message!</p>
        
        {/* Success Message */}
        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 flex items-center justify-center gap-2 animate-fade-in">
            <Check className="w-5 h-5" />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </div>
        )}

        {/* Error Message */}
        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 flex items-center justify-center gap-2 animate-fade-in">
            <AlertCircle className="w-5 h-5" />
            <span>Something went wrong. Please try again later.</span>
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-left bg-slate-900/50 p-6 rounded-2xl border border-slate-700 shadow-xl">
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

          <button
            type="submit"
            disabled={status === 'submitting'}
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
          </button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-15">
          <a href="https://github.com/arup-ratan-dey" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-cyan-500 transition transform hover:scale-110 border border-slate-700">
            <Github className="w-6 h-6 text-white" />
          </a>
          <a href="https://www.linkedin.com/in/arup-ratan-dey-8a0815249/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 rounded-full hover:bg-cyan-500 transition transform hover:scale-110 border border-slate-700">
            <Linkedin className="w-6 h-6 text-white" />
          </a>
          <a href="mailto:arupratandey3250@gmail.com" className="p-3 bg-slate-800 rounded-full hover:bg-cyan-500 transition transform hover:scale-110 border border-slate-700">
            <Mail className="w-6 h-6 text-white" />
          </a>
        </div>

        <p className="text-slate-500 mt-8 text-sm">© 2026 Arup Ratan Dey. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;