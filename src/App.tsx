import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArticleCard from './components/ArticleCard';
import ProjectCard from './components/ProjectCard';
import PartnerMarquee from './components/PartnerMarquee';
import Footer from './components/Footer';
import { ARTICLES, WORKS } from './constants';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <motion.div
            key="home"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
          >
            <Hero />
            
            {/* Articles Preview */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
              <div className="flex justify-between items-end mb-12">
                <div className="inline-block bg-white border-4 border-black px-6 py-2 shadow-[4px_4px_0_0_rgba(255,105,180,1)] -rotate-1">
                  <h2 className="text-4xl font-black italic">Articles</h2>
                </div>
                <button 
                  onClick={() => setActiveTab('articles')}
                  className="flex items-center gap-2 font-black group hover:translate-x-1 transition-transform"
                >
                  Browse all articles <ArrowRight size={20} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ARTICLES.map((article, i) => (
                  <ArticleCard key={article.id} article={article} index={i} />
                ))}
              </div>
            </section>

            {/* Creations Section */}
            <section className="px-6 py-20 bg-white/50 border-y-4 border-black">
              <div className="max-w-7xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Some of My <span className="bg-pink-400 px-4 py-1 border-2 border-black inline-block -rotate-2">Vibe-coded Creations</span>
                </h2>
                <p className="text-gray-500 font-bold max-w-xl mx-auto">
                  Code byproducts generated during late-night vibe coding sessions. Imperfect, functional, and always interesting.
                </p>
              </div>
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {WORKS.map((work, i) => (
                  <ProjectCard key={work.id} project={work} index={i} />
                ))}
              </div>
            </section>

            {/* Videos Highlight (Optional section based on screenshot) */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
               <div className="flex justify-between items-end mb-12">
                <div className="inline-block bg-white border-4 border-black px-6 py-2 shadow-[4px_4px_0_0_rgba(59,130,246,1)] rotate-1">
                  <h2 className="text-4xl font-black italic">Videos</h2>
                </div>
                <button className="flex items-center gap-2 font-black group hover:translate-x-1 transition-transform">
                  Watch all videos <ArrowRight size={20} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-white border-4 border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] group">
                    <div className="aspect-video bg-gray-200 relative overflow-hidden">
                      <img 
                        src={`https://images.unsplash.com/photo-${1500000000000 + item * 1000}?auto=format&fit=crop&q=80&w=400`} 
                        alt="Video" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <div className="w-16 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                            <Play fill="black" />
                         </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black text-white text-[10px] font-bold px-2 py-1 rounded">
                        0{item}:2{item}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-black truncate mb-2">天啊这个世界真的越来越有趣了！</h3>
                      <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        <span>1.5万次播放</span>
                        <span>477点赞</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Partner Marquee */}
            <PartnerMarquee />

            {/* CTA Section */}
            <section className="bg-black text-white py-20 px-6 text-center">
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
               >
                 <h2 className="text-4xl md:text-6xl font-black mb-8 italic">READY TO VIBE?</h2>
                 <p className="text-gray-400 font-bold mb-10 max-w-xl mx-auto uppercase tracking-widest">
                   Collaborations, coffee, or just a chat – my inbox is always open (well, mostly).
                 </p>
                 <button className="bg-white text-black px-10 py-4 rounded-full font-black text-xl border-4 border-white hover:bg-transparent hover:text-white transition-all">
                   SAY HI!
                 </button>
               </motion.div>
            </section>
          </motion.div>
        );
      case 'about':
        return (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pt-32 pb-20 px-6 max-w-4xl mx-auto"
          >
            <div className="inline-block bg-white border-4 border-black px-8 py-4 shadow-[8px_8px_0_0_rgba(255,105,180,1)] -rotate-1 mb-12">
              <h1 className="text-5xl font-black">About Me</h1>
            </div>
            <div className="bg-white border-4 border-black rounded-[32px] p-10 shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
              <div className="max-w-none text-gray-700 font-medium leading-relaxed space-y-6">
                <h2 className="text-3xl font-black text-black">Hello, I'm Simon Moon (西门美月).</h2>
                <p>
                  By day, I work as a ToB Product Manager, navigating the complexities of business requirements and user flows. 
                  By night, I transform into a "Vibe Coder," building interesting little things that spark my curiosity.
                </p>
                <p>
                  I believe that technology shouldn't just be functional; it should have a "soul" – a certain vibe that makes it personal and engaging. 
                  This portfolio is a collection of my thoughts, my learnings, and my little experiments.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                   <div className="bg-blue-100 border-4 border-black p-6 rounded-2xl shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                     <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                       <div className="w-3 h-3 bg-blue-500 rounded-full border border-black" />
                       Interests
                     </h3>
                     <ul className="space-y-2 font-bold text-gray-700">
                       <li>Digital Content Creation</li>
                       <li>Human-Computer Interaction</li>
                       <li>Vibe-coding & Web Dev</li>
                       <li>Anime & Otaku Culture</li>
                     </ul>
                   </div>
                   <div className="bg-yellow-100 border-4 border-black p-6 rounded-2xl shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                     <h3 className="text-xl font-black mb-4 flex items-center gap-2">
                       <div className="w-3 h-3 bg-yellow-400 rounded-full border border-black" />
                       Stats
                     </h3>
                     <ul className="space-y-2 font-bold text-gray-700">
                       <li>Product Experience: 2.5 Years</li>
                       <li>Bilibili Creator: Level 5</li>
                       <li>Lines Coffeine: Infinite</li>
                     </ul>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'articles':
        return (
          <motion.div
            key="articles"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
          >
             <div className="inline-block bg-white border-4 border-black px-8 py-4 shadow-[8px_8px_0_0_rgba(254,240,138,1)] rotate-1 mb-12">
              <h1 className="text-5xl font-black">All Articles</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Using same data but repeating for placeholder feel if needed */}
              {[...ARTICLES, ...ARTICLES].map((article, i) => (
                <ArticleCard key={i} article={article} index={i} />
              ))}
            </div>
          </motion.div>
        );
      case 'works':
        return (
          <motion.div
            key="works"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="pt-32 pb-20 px-6 max-w-7xl mx-auto"
          >
             <div className="inline-block bg-white border-4 border-black px-8 py-4 shadow-[8px_8px_0_0_rgba(96,165,250,1)] -rotate-1 mb-12">
              <h1 className="text-5xl font-black">Creative Creations</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {WORKS.map((work, i) => (
                <ProjectCard key={work.id} project={work} index={i} />
              ))}
              <ProjectCard 
                project={{ 
                  title: "Vibe Player", 
                  description: "A music player that changes colors based on the album art vibe.",
                  icon: "🎵",
                  iconBg: "bg-pink-300"
                }} 
                index={3} 
              />
              <ProjectCard 
                project={{ 
                  title: "O-T-A-K-U Wiki", 
                  description: "A curated list of my favorite anime and their impact on my life.",
                  icon: "🕹️",
                  iconBg: "bg-green-300"
                }} 
                index={4} 
              />
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-pink-300">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
