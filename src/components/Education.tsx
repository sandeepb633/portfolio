import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary dark:text-white">Education</h2>
        
        <div className="grid gap-6">
           <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 flex items-start gap-6"
          >
            <div className="flex-shrink-0 w-20 h-20 flex items-center justify-center">
              <img 
                src="/uwindsor_logo.png" 
                alt="University of Windsor logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-primary dark:text-white">Master of Applied Computing</h3>
              <p className="text-lg text-secondary dark:text-slate-300 font-medium">University of Windsor</p>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Graduated Dec 2025</p>
              <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm leading-relaxed">
                Focused on advanced computing concepts, distributed systems, and software engineering principles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
