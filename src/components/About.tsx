import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 dark:bg-slate-800/50 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 pb-2 bg-gradient-to-r from-primary via-accent to-primary dark:from-white dark:via-cyan-400 dark:to-white bg-clip-text text-transparent animate-text-gradient">
            About Me
          </h2>
          
          <div className="space-y-8 text-2xl md:text-3xl text-slate-700 dark:text-slate-200 leading-relaxed font-cursive">
            <p>
              Hello! I'm Sandeep, a passionate developer who loves bridging the gap between complex enterprise systems and intuitive user experiences.
            </p>
            
            <p>
              My journey involves a unique blend of <span className="text-accent dark:text-cyan-400 font-bold">Microsoft Power Platform</span> development and <span className="text-accent dark:text-cyan-400 font-bold">SAP MM</span> consultancy. This allows me to not just understand the backend data structures, but to build beautiful, functional apps that make working with that data a breeze.
            </p>

            <p>
              I specialize in replacing clunky, manual spreadsheets with streamlined digital workflows. Whether it's automating plant build requests or creating real-time inventory dashboards, I thrive on solving real business problems with technology.
            </p>

            <p>
              Beyond core automation, I am proficient in <span className="text-accent dark:text-cyan-400 font-bold">integrating LLM models</span> like <span className="text-slate-900 dark:text-white font-semibold underline decoration-accent/30">OpenAI, Copilot, Claude, ChatGPT, and Grok</span> into business applications to provide intelligent, AI-driven insights.
            </p>
            
            <p>
              Having recently <span className="text-accent dark:text-cyan-400 font-bold">graduated with a Master of Applied Computing</span> from the University of Windsor, I am excited to bring my skills to a team that values innovation and efficiency.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
