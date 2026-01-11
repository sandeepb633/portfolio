import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certs = [
    {
      name: "Microsoft Certified: Power Platform Fundamentals",
      date: "Active",
      issuer: "Microsoft",
      link: "https://learn.microsoft.com/en-gb/users/bingisandeep-0331/credentials/c7591d4874c96fb1?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      logo: "/microsoft.png"
    },
    {
      name: "Microsoft Certified: Azure Administrator Associate",
      date: "Jul 2024",
      issuer: "Microsoft",
      link: "https://learn.microsoft.com/en-us/users/BingiSandeep-0331/credentials/3A0FAAE030408A64?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      logo: "/microsoft.png"
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      date: "Dec 2023",
      issuer: "Microsoft",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/BingiSandeep-0331/7559A8222B2FE5AB?sharingId=BD3B53B0A8A5EBE1",
      logo: "/microsoft.png"
    },
    {
      name: "SAP Certified Associate – SAP S/4HANA Cloud Private Edition, Sourcing and Procurement",
      date: "Sep 2025 – Sep 2026",
      issuer: "SAP",
      link: "https://www.credly.com/badges/fa2ce2bb-2b9e-4b09-b50e-922ecaebab80/linked_in_profile",
      logo: "/sap.png"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary dark:text-white">Professional Certifications</h2>
        
        <div className="grid gap-6">
          {certs.map((cert, index) => (
            <motion.a 
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-4 group cursor-pointer hover:border-accent dark:hover:border-cyan-400 transition-all"
            >
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center">
                <img 
                  src={cert.logo} 
                  alt={`${cert.issuer} logo`} 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold mb-1 text-primary dark:text-white group-hover:text-accent dark:group-hover:text-cyan-400 transition-colors">
                    {cert.name}
                  </h3>
                  <ExternalLink size={16} className="text-slate-400 dark:text-slate-500 group-hover:text-accent dark:group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <p className="text-secondary dark:text-slate-400 text-sm">{cert.issuer} • {cert.date}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;