import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('https://formsubmit.co/ajax/tipapematayo@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject,
          message: formData.message,
          _template: 'table'
        })
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 2500);
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (err) {
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-darker to-black scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's <span className="text-secondary">Connect</span></h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I’m always open to new opportunities, whether you need a full-stack developer, an AI-powered solution, or a partner in blockchain innovation.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-primary">
                    <Mail className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-sm text-gray-500">Email Me</p>
                    <a href="mailto:tipapematayo@gmail.com" className="hover:text-white transition-colors">tipapematayo@gmail.com</a>
                </div>
              </div>

               <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-primary">
                    <MapPin className="w-5 h-5" />
                </div>
                <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p>Nairobi, Kenya (Available Remote)</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="https://www.linkedin.com/in/tipape-matayo-b66266385/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                    <Twitter className="w-5 h-5" />
                </a>
            </div>
          </div>

            <div className="w-full md:w-1/2 bg-card p-8 rounded-2xl border border-gray-800">
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Email</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Project collaboration" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white h-32 focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
              {status && (
                <div className={`text-center py-2 rounded-lg ${status.includes('success') ? 'bg-green-500/20 text-green-400' : status.includes('Sending') ? 'bg-blue-500/20 text-blue-400' : 'bg-red-500/20 text-red-400'}`}>
                {status}
                </div>
              )}
              <button type="submit" disabled={status === 'Sending...'} className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 rounded-lg transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed">
                {status === 'Sending...' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;