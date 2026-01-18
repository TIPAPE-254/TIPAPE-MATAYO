import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import image1 from '../assets/image1.webp';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <img 
                  src={image1} 
                  alt="Tipape Matayo" 
                  className="relative rounded-2xl w-full object-cover shadow-2xl border border-gray-800"
                />
             </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-6">About <span className="text-primary">Tipape</span></h2>
            <div className="text-gray-400 space-y-4 leading-relaxed">
              {PORTFOLIO_DATA.about.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {PORTFOLIO_DATA.experience.map((exp, idx) => (
                    <div key={idx} className="bg-card p-4 rounded-xl border border-gray-800">
                        <h4 className="text-secondary font-semibold mb-2">{exp.title}</h4>
                        <p className="text-sm text-gray-500">{exp.description}</p>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;