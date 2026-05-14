import { User } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          我是<br />
          <span className="bg-pink-400 px-4 py-1 border-2 border-black inline-block -rotate-1 relative z-10">
            LEEO李晓民
          </span>
          ,
          <br />
          A Product Manager,
          <br />
          练习时长{' '}
          <span className="bg-blue-500 text-white px-4 py-1 border-2 border-black inline-block rotate-1">
            两年半
          </span>
        </h1>
        
        <div className="space-y-4 text-gray-600 font-medium text-lg max-w-xl mb-10">
          <p>
            Bilibili Creator | Digital Writer | Hyperactive Otaku
          </p>
          <p>
            toB PM by day, Vibe Coder by night. _[ ō_ō ]_
          </p>
          <p className="text-black font-bold">
            A PASSIONATE FOOOOOL !!!
          </p>
        </div>

        <button className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl font-bold hover:translate-x-1 hover:-translate-y-1 transition-transform relative group">
          <div className="absolute inset-0 bg-black rounded-xl translate-x-2 translate-y-2 -z-10 border border-black group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
          <User size={20} />
          <span>More about me</span>
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10 bg-[#FFFAF0] border-4 border-black rounded-[40px] overflow-hidden shadow-[12px_12px_0_0_rgba(0,0,0,1)] aspect-square max-w-md mx-auto">
          <img 
            src="/avatar.jpg" 
            alt="Avatar" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-pink-400 border-2 border-black rounded-full -translate-y-4 translate-x-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
