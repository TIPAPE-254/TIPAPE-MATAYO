import React from 'react';
import { Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
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
                    <a href="mailto:contact@tipape.dev" className="hover:text-white transition-colors">contact@tipape.dev</a>
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
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                    <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all">
                    <Twitter className="w-5 h-5" />
                </a>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-card p-8 rounded-2xl border border-gray-800">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Name</label>
                        <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm text-gray-400">Email</label>
                        <input type="email" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Subject</label>
                    <input type="text" className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none transition-colors" placeholder="Project collaboration" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm text-gray-400">Message</label>
                    <textarea className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white h-32 focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                <button className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 rounded-lg transition-all transform hover:-translate-y-1">
                    Send Message
                </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;