import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const ExperienceItem = ({ role, company, location, date, descriptions }: { role: string, company: string, location: string, date: string, descriptions: string[] }) => (
  <div className="relative pl-8 md:pl-0">
    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-200 dark:bg-slate-800"></div>
    
    <div className="md:flex justify-between items-start mb-12 group">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:w-5/12 md:text-right mb-4 md:mb-0 md:pr-8"
      >
        <h3 className="text-xl font-bold text-primary dark:text-white">{role}</h3>
        <h4 className="text-lg text-accent dark:text-cyan-400 font-medium">{company}</h4>
        <div className="flex items-center justify-end gap-2 text-secondary dark:text-slate-400 text-sm mt-1 hidden md:flex">
          <span>{location}</span>
          <span>•</span>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
        </div>
        {/* Mobile date display */}
        <div className="flex items-center gap-2 text-secondary dark:text-slate-400 text-sm mt-1 md:hidden">
            <span>{location}</span>
            <span>•</span>
            <span>{date}</span>
        </div>
      </motion.div>

      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center w-8 h-8 bg-white dark:bg-slate-900 border-2 border-accent dark:border-cyan-400 rounded-full z-10">
        <Briefcase size={14} className="text-accent dark:text-cyan-400" />
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="md:w-5/12 md:pl-8 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow"
      >
        <ul className="space-y-3">
          {descriptions.map((desc, index) => (
            <li key={index} className="text-secondary dark:text-slate-300 text-sm leading-relaxed flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 bg-accent dark:bg-cyan-400 rounded-full flex-shrink-0"></span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Packaged App Development Analyst",
      company: "Accenture",
      location: "Hyderabad, India",
      date: "Sep 2021 – Aug 2024",
      descriptions: [
        "Designed Power Apps & Power Automate solutions replacing manual Excel-based processes with approval-driven workflows.",
        "Automated SAP plant build requests using Power Apps/Forms, reducing turnaround time from one week to near real-time.",
        "Built Power Automate workflows with FTP triggers to monitor inbound/outbound files and trigger SAP jobs.",
        "Configured SAP MM enterprise structure (plants, storage locations, purchasing orgs) aligned with client requirements.",
        "Provided AMS support for IDoc failures and batch job monitoring; automated status monitoring saving 10+ hours/week.",
        "Delivered UAT, functional, and integration testing for both SAP configurations and Power Platform solutions.",
        "Designed and implemented release strategies for purchasing documents with classification.",
        "Created Power BI reports for SAP MM inventory forecasting and material redeployment."
      ]
    },
    {
      role: "Systems Administrator",
      company: "Printoonistic Pvt. Ltd.",
      location: "Hyderabad, India",
      date: "Jan 2020 – Aug 2021",
      descriptions: [
        "Streamlined procurement and supply chain workflows, reducing order fulfillment time by 20%.",
        "Built and operated a single-vendor fashion e-commerce website using WordPress and WooCommerce.",
        "Connected MySQL on GCP to Power BI to visualize sales, revenue, and inventory data.",
        "Designed Power BI dashboards for stock movement, aging, and purchase order tracking.",
        "Oversaw warehouse operations for 1000+ customer orders, improving on-time delivery."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-accent dark:bg-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
