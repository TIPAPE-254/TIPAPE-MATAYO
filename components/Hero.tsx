import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-darker pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20" 
          />
          {/* Overlay to ensure text readability and blend with theme */}
          <div className="absolute inset-0 bg-darker/80 bg-gradient-to-b from-darker/60 via-darker/80 to-darker"></div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl z-0 animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 z-10 text-center relative">
        <div className="mb-8 inline-block">
            <span className="py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20 backdrop-blur-sm">
                Available for Hire
            </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white drop-shadow-sm">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tipape Matayo</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Full-Stack Web Developer | AI & Blockchain Engineer | Mental Health Advocate
        </p>

        <p className="text-gray-400 mb-10 max-w-2xl mx-auto drop-shadow-md">
           Building the future with intelligent agents, decentralized apps, and scalable web solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#projects" className="px-8 py-3 rounded-full bg-primary hover:bg-blue-600 text-white font-medium transition-colors flex items-center gap-2 shadow-lg hover:shadow-primary/50">
            View My Work <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#contact" className="px-8 py-3 rounded-full bg-card/80 hover:bg-gray-800 text-white border border-gray-700 font-medium transition-colors backdrop-blur-sm">
            Contact Me
          </a>
        </div>

          <div className="mt-12 flex justify-center gap-6 text-gray-400">
            <a href="https://github.com/TIPAPE-254" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110"><Github className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/tipape-matayo-b66266385/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors hover:scale-110"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:tipapematayo@gmail.com" className="hover:text-primary transition-colors hover:scale-110"><Mail className="w-6 h-6" /></a>
          </div>
      </div>
    </section>
  );
};

export default Hero;