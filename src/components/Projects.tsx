import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const ProjectCard = ({ title, tech, description }: { title: string, tech: string, description: string[] }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
  >
    <div className="p-6 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-primary dark:text-white">{title}</h3>
        <Code className="text-accent dark:text-cyan-400" size={20} />
      </div>
      
      <div className="mb-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent dark:text-cyan-400 bg-blue-50 dark:bg-slate-900 px-2 py-1 rounded-sm border border-blue-100 dark:border-slate-700">
          {tech}
        </span>
      </div>

      <ul className="space-y-2 mb-6 flex-grow">
        {description.map((desc, index) => (
          <li key={index} className="text-secondary dark:text-slate-300 text-sm flex items-start gap-2">
            <span className="mt-1.5 w-1 h-1 bg-slate-400 dark:bg-slate-500 rounded-full flex-shrink-0"></span>
            {desc}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Insight Advantage – SaaS Platform",
      tech: "React, TypeScript, Node.js, Azure, Stripe",
      description: [
        "Full-stack SaaS platform for consultant matching and secure messaging.",
        "Implemented JWT + RBAC authentication and microservices architecture.",
        "Integrated subscription billing via Stripe."
      ]
    },
    {
      title: "Distributed File System",
      tech: "C, Linux Sockets, TCP/IP",
      description: [
        "Multi-server architecture with primary and secondary servers for file routing.",
        "Implemented upload, download, delete, and batch retrieval.",
        "Enabled concurrent processing using forking and robust socket communication."
      ]
    },
    {
      title: "Real-Time Financial Intelligence",
      tech: "Python, Neo4j, Streamlit, LangChain",
      description: [
        "Explainable AI platform for real-time market insights using GraphRAG.",
        "Developed multi-source data pipelines and sentiment analysis.",
        "Implemented natural language query generation."
      ]
    },
    {
      title: "Meal Kit Recommendation System",
      tech: "C++, Data Structures",
      description: [
        "Recommendation engine using AVL, RBT, Trie, and Hash Maps.",
        "Enabled real-time auto-completion and personalized meal suggestions.",
        "Optimized for fast search and analytics."
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Academic Projects</h2>
          <p className="text-secondary dark:text-slate-400 max-w-2xl mx-auto">
            Highlights from the Master of Applied Computing program at the University of Windsor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
