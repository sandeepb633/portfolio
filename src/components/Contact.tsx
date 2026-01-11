import { Mail, Linkedin, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-primary dark:text-white mb-6">Get In Touch</h2>
            <p className="text-secondary dark:text-slate-400 mb-8 leading-relaxed">
              I am currently seeking opportunities in Microsoft Power Platform development or SAP MM consultancy. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <a href="mailto:sandeepb633@gmail.com" className="flex items-center gap-3 text-secondary dark:text-slate-400 hover:text-accent dark:hover:text-cyan-400 transition-colors">
                <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700">
                  <Mail size={18} />
                </div>
                <span>sandeepb633@gmail.com</span>
              </a>
              
              <div className="flex items-center gap-3 text-secondary dark:text-slate-400">
                <div className="w-10 h-10 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700">
                  <MapPin size={18} />
                </div>
                <span>Toronto, Ontario</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-end">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 max-w-sm w-full">
              <h3 className="text-xl font-bold text-primary dark:text-white mb-4">Connect</h3>
              <a 
                href="https://www.linkedin.com/in/sandeepbingi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#0077b5] text-white py-3 rounded-lg font-medium hover:bg-[#006399] transition-colors"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Sandeep Bingi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
