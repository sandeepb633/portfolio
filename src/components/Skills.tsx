import { motion } from 'framer-motion';
import { Database, Cloud, Code, Settings, Server, BarChart } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills }: { title: string, icon: any, skills: string[] }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 transition-colors"
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-accent dark:text-cyan-400">
        <Icon size={24} />
      </div>
      <h3 className="font-bold text-lg text-primary dark:text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span 
          key={index}
          className="px-3 py-1 bg-slate-50 dark:bg-slate-900 text-secondary dark:text-slate-300 text-sm rounded-full border border-slate-200 dark:border-slate-700"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Microsoft Power Platform",
      icon: Code,
      skills: ["Power Apps (Canvas)", "Power Automate (Cloud/Desktop)", "Power BI", "SharePoint Online", "Microsoft Forms", "Microsoft Approvals", "Dataverse"]
    },
     {
      title: "SAP Modules & Expertise",
      icon: Settings,
      skills: ["MM", "SCM", "S/4HANA Public Cloud", "ECC", "P2P", "Inventory Management", "Release Strategy", "Pricing Procedures", "LSMW", "Split Valuation"]
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      skills: ["Microsoft Azure", "Google Cloud Platform", "MySQL (Cloud SQL)"]
    },
    {
      title: "Data & Reporting",
      icon: BarChart,
      skills: ["Power BI Models", "Power Query", "Excel", "SharePoint Lists"]
    },
    {
      title: "Tools & Testing",
      icon: Server,
      skills: ["ServiceNow", "JIRA", "DevOps", "Selenium", "Postman", "Office 365"]
    },
    {
      title: "Methodologies",
      icon: Database,
      skills: ["Agile/Scrum", "UAT", "Integration Testing", "Root Cause Analysis", "Incident Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Technical Expertise</h2>
          <p className="text-secondary dark:text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit combining modern low-code development with enterprise ERP configuration.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
