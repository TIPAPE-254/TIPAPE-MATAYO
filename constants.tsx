import React from 'react';
import { Project, SkillCategory } from './types';
import { Code, Database, Cpu, Bot, Heart, Layout } from 'lucide-react';

export const PORTFOLIO_DATA = {
  name: "Tipape Matayo",
  title: "Full-Stack Web Developer | AI & Blockchain Developer | Mental Health Advocate",
  about: `I’m Tipape Matayo, a passionate full-stack web developer with deep expertise in PHP, Python, and frameworks, as well as advanced proficiency in JavaScript, HTML, CSS, and modern web technologies. With a solid foundation in database management, blockchain development, and AI model & agents development, I bring a versatile and well-rounded skill set to every project I take on.

I hold a Full-Stack Web Development degree from Emobilis Institute of Technology and completed an advanced AI program at IBM. In addition to my technical skills, I’m a World Bank Youth Summit delegate, where I collaborated with other young global leaders on pressing issues like climate change and sustainable development for a livable world.`,
  experience: [
    {
      title: "World Bank Youth Summit Delegate",
      description: "Collaborated with global young leaders on sustainable development and climate change initiatives."
    },
    {
      title: "Founder, UNITY WITHIN",
      description: "Founded a youth-led association for mental health and self-acceptance, utilizing technology for awareness."
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    title: "AI-Powered Portfolio Chatbot",
    category: "AI & Automation",
    description: "An intelligent agent built with Gemini API to interact with visitors, answering questions about my skills and experience in real-time.",
    tags: ["React", "Gemini API", "TypeScript", "Tailwind"]
  },
  {
    title: "Decentralized Marketplace",
    category: "Blockchain",
    description: "A secure dApp for digital asset exchange using Ethereum smart contracts and Solidity.",
    tags: ["Solidity", "Ethereum", "Web3.js", "React"]
  },
  {
    title: "Mental Health Resource Hub",
    category: "Full-Stack Web",
    description: "A comprehensive platform connecting youth with mental health resources, featuring anonymous support chats.",
    tags: ["Python", "Django", "PostgreSQL", "Bootstrap"]
  },
  {
    title: "E-Commerce Automation Suite",
    category: "Automation",
    description: "Automated inventory and customer support bots for e-commerce businesses using Python and TensorFlow.",
    tags: ["Python", "TensorFlow", "Automation"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Full-Stack Dev",
    skills: ["PHP", "Python (Django/Flask)", "JavaScript (React, Node.js)", "HTML5/CSS3", "Bootstrap"],
    icon: <Layout className="w-6 h-6" />
  },
  {
    title: "AI & ML",
    skills: ["TensorFlow", "PyTorch", "OpenAI API", "Gemini API", "Intelligent Agents"],
    icon: <Bot className="w-6 h-6" />
  },
  {
    title: "Blockchain",
    skills: ["Solidity", "Ethereum", "Smart Contracts", "dApps", "Web3"],
    icon: <Cpu className="w-6 h-6" />
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Relational Design"],
    icon: <Database className="w-6 h-6" />
  },
  {
    title: "Automation",
    skills: ["Python Scripting", "Task Automation", "Bot Development", "Workflow Optimization"],
    icon: <Code className="w-6 h-6" />
  },
  {
    title: "Advocacy",
    skills: ["Public Speaking", "Community Building", "Mental Health Awareness", "Leadership"],
    icon: <Heart className="w-6 h-6" />
  }
];
