import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-dark scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Notable <span className="text-primary">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Real-world applications demonstrating capabilities in AI, Blockchain, and Full-Stack Web Development.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="group relative bg-card rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all hover:shadow-2xl hover:shadow-primary/10">
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                        {project.category}
                    </span>
                    <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs text-gray-500 border border-gray-700 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              {/* Decorative gradient line at bottom */}
              <div className="h-1 w-full bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;