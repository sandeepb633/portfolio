import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-100 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-accent dark:text-cyan-400 uppercase bg-blue-50 dark:bg-slate-800 rounded-full border border-blue-100 dark:border-slate-700">
              OPEN TO WORK
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Sandeep <span className="text-accent dark:text-cyan-400">Bingi</span>
            </h1>
            <h2 className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-8 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              <strong className="text-slate-900 dark:text-white font-semibold">Microsoft Power Platform Developer</strong> & SAP MM Consultant. 
              <span className="block mt-2 text-lg lg:text-xl">Building intelligent automation and enterprise solutions that drive digital transformation.</span>
            </h2>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-slate-600 dark:text-slate-300 mb-10 text-sm md:text-base">
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-100 dark:border-slate-700">
                <MapPin size={18} className="text-accent dark:text-cyan-400" />
                <span>Toronto, Ontario</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-100 dark:border-slate-700">
                <Mail size={18} className="text-accent dark:text-cyan-400" />
                <a href="mailto:sandeepb633@gmail.com" className="hover:text-accent dark:hover:text-cyan-400 transition-colors">sandeepb633@gmail.com</a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="#contact"
                className="bg-primary dark:bg-cyan-600 text-white px-8 py-3.5 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-cyan-700 transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </a>
              <a 
                href="https://www.linkedin.com/in/sandeepbingi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white dark:bg-slate-800 text-primary dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-3.5 rounded-full font-medium hover:border-accent dark:hover:text-cyan-400 hover:text-accent dark:hover:text-cyan-400 transition-all transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-shrink-0 relative"
          >
            <div className="absolute inset-0 bg-accent dark:bg-cyan-500 blur-3xl opacity-20 dark:opacity-40 rounded-full animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 bg-white dark:bg-slate-800 shadow-2xl">
              <img 
                src="/Profile.png" 
                alt="Sandeep Bingi" 
                className="w-full h-full object-cover rounded-full border-4 border-slate-50 dark:border-slate-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
