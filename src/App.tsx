import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArticleCard from './components/ArticleCard';
import ProjectCard from './components/ProjectCard';
import PartnerMarquee from './components/PartnerMarquee';
import Footer from './components/Footer';
import Tips from './components/Tips';
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

            {/* 工具横幅 */}
            <section className="py-6 bg-white border-y-4 border-black overflow-hidden">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(2)].map((_, setIdx) => (
                  <div key={setIdx} className="flex items-center gap-4 mx-3">
                    {[
                      { name: '剪映', color: 'bg-gray-100', icon: '✂️' },
                      { name: 'Premiere Pro', color: 'bg-indigo-100', icon: '🎬' },
                      { name: 'Canva', color: 'bg-cyan-100', icon: '🎨' },
                      { name: 'ChatGPT', color: 'bg-emerald-100', icon: '🤖' },
                      { name: 'Gemini', color: 'bg-blue-100', icon: '💎' },
                      { name: '即梦', color: 'bg-purple-100', icon: '🖼️' },
                      { name: '小云雀', color: 'bg-orange-100', icon: '🐦' },
                      { name: 'YouTube', color: 'bg-red-100', icon: '▶️' },
                      { name: 'TikTok', color: 'bg-pink-100', icon: '🎵' },
                      { name: '小红书', color: 'bg-rose-100', icon: '📕' },
                      { name: 'Photoshop', color: 'bg-sky-100', icon: '🖌️' },
                      { name: 'MiniMax', color: 'bg-gray-100', icon: '📝' },
                    ].map((tool, i) => (
                      <div 
                        key={`${setIdx}-${i}`}
                        className={`${tool.color} border-2 border-black px-4 py-2 rounded-lg shadow-[2px_2px_0_0_rgba(0,0,0,1)] flex items-center gap-2 font-bold text-sm flex-shrink-0`}
                      >
                        <div className="w-6 h-6 border border-black rounded-full overflow-hidden flex items-center justify-center bg-white">
                          {tool.icon}
                        </div>
                        <span>{tool.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </section>

            {/* Videos Highlight */}
            <section className="px-6 py-20 max-w-7xl mx-auto">
               <div className="flex justify-between items-end mb-12">
                <div className="inline-block bg-white border-4 border-black px-6 py-2 shadow-[4px_4px_0_0_rgba(59,130,246,1)] rotate-1">
                  <h2 className="text-4xl font-black italic">Videos</h2>
                </div>
                <button className="flex items-center gap-2 font-black group hover:translate-x-1 transition-transform">
                  Watch all videos <ArrowRight size={20} />
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">                {/* 第一个视频卡片 */}
                <a 
                  href="https://youtu.be/YTifF5iZ2N0?si=0eiyJ8nYHCH5JihN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-4 border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] group cursor-pointer hover:shadow-[12px_12px_0_0_rgba(255,105,180,1)] hover:-translate-y-1 transition-all"
                >
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1500000001000?auto=format&fit=crop&q=80&w=400"
                      alt="Video"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <div className="w-16 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                          <Play fill="black" />
                       </div>
                    </div>

                  </div>
                  <div className="p-4">
                    <h3 className="font-black truncate mb-2">【子女必看】老人离世前的7个征兆</h3>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      <span>12w次播放</span>
                      <span>2646点赞</span>
                    </div>
                  </div>
                </a>
                
                {/* 其他视频卡片 */}
                {[2, 3].map((item) => (
                  <a 
                    key={item} 
                    href="http://xhslink.com/o/7MFJTnnDT6D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-4 border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] group cursor-pointer hover:shadow-[12px_12px_0_0_rgba(255,105,180,1)] hover:-translate-y-1 transition-all"
                  >
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

                    </div>
                    <div className="p-4">
                      <h3 className="font-black truncate mb-2">傻帽和撒勾背着我聊天偷偷聊天💬</h3>
                      <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        <span>2500次播放</span>
                        <span>95点赞</span>
                      </div>
                    </div>
                  </a>
                ))}
                {/* 第四张视频卡片 */}
                <a 
                  href="https://youtu.be/YTifF5iZ2N0?si=0eiyJ8nYHCH5JihN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border-4 border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] group cursor-pointer hover:shadow-[12px_12px_0_0_rgba(255,105,180,1)] hover:-translate-y-1 transition-all"
                >
                  <div className="aspect-video bg-gray-200 relative overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1500000003000?auto=format&fit=crop&q=80&w=400"
                      alt="Video"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <div className="w-16 h-16 bg-white rounded-full border-2 border-black flex items-center justify-center shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                          <Play fill="black" />
                       </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-black truncate mb-2">AI工具让效率翻倍的秘密🚀</h3>
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                      <span>5w次播放</span>
                      <span>1800点赞</span>
                    </div>
                  </div>
                </a>
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
                  <ProjectCard key={`work-${work.id}`} project={work} index={i} />
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
      case 'tips':
        return (
          <Tips />
        );
      case 'about':
        return (
          <motion.div
            id="about"
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-24 pb-20"
          >
            {/* 故事开头 */}
            <section className="px-6 py-20 max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.span 
                  className="text-6xl mb-6 block cursor-pointer inline-block"
                  whileHover={{ rotate: [0, -10, 10, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  animate={false}
                  onClick={() => {}}
                  whileTap={{ rotate: [0, -15, 15, -15, 15, 0] }}
                >
                  👋
                </motion.span>
                <h1 className="text-5xl md:text-7xl font-black mb-6">你好，我是</h1>
                <div className="inline-block bg-pink-400 px-6 py-3 border-4 border-black rotate-1 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                  <span className="text-5xl md:text-6xl font-black">LEEO李晓民</span>
                </div>
              </motion.div>

            </section>

            {/* 时间线故事 */}
            <section className="max-w-4xl mx-auto px-6">
              <div className="relative">
                {/* 时间线竖线 */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-black transform md:-translate-x-1/2" />
                
                {/* 故事1 - 开端 */}
                <motion.div 
                  className="relative mb-16"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right">
                      <div className="bg-white border-4 border-black rounded-[24px] p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <span className="text-pink-400 font-black text-lg">Chapter 1</span>
                        <h3 className="text-2xl font-black mt-2 mb-3">接触社媒的起点</h3>
                        <p className="text-gray-600">
                          发布第一篇小红书，吐槽《为什么说，千万别去亲戚家住太久》获得3w播放量，290个点赞。
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-16 h-16 bg-pink-400 border-4 border-black rounded-full items-center justify-center absolute left-1/2 transform -translate-x-1/2 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                      <span className="text-2xl">🌱</span>
                    </div>
                    <div className="md:w-1/2" />
                  </div>
                </motion.div>

                {/* 故事2 - 成长 */}
                <motion.div 
                  className="relative mb-16"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="md:flex items-center">
                    <div className="md:w-1/2" />
                    <div className="hidden md:flex w-16 h-16 bg-blue-400 border-4 border-black rounded-full items-center justify-center absolute left-1/2 transform -translate-x-1/2 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                      <span className="text-2xl">🎬</span>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="bg-blue-100 border-4 border-black rounded-[24px] p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <span className="text-blue-500 font-black text-lg">Chapter 2</span>
                        <h3 className="text-2xl font-black mt-2 mb-3">自学剪辑</h3>
                        <p className="text-gray-600">
                          从剪映到PR，一步步摸索视频剪辑。从最简单的转场到复杂的调色，每一个作品都是成长的见证。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 故事3 - 副业 */}
                <motion.div 
                  className="relative mb-16"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="md:flex items-center">
                    <div className="md:w-1/2 md:pr-12 md:text-right">
                      <div className="bg-yellow-100 border-4 border-black rounded-[24px] p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <span className="text-yellow-500 font-black text-lg">Chapter 3</span>
                        <h3 className="text-2xl font-black mt-2 mb-3">加入看见文化公司</h3>
                        <p className="text-gray-600">
                          剪辑和运营赵越教授，YouTube达到1w粉丝，TK 1.2w粉丝，一个多月过YPP，推动到独立站小黄车销课，累计业绩达30w转化。
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-16 h-16 bg-yellow-400 border-4 border-black rounded-full items-center justify-center absolute left-1/2 transform -translate-x-1/2 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                      <span className="text-2xl">🌙</span>
                    </div>
                    <div className="md:w-1/2" />
                  </div>
                </motion.div>

                {/* 故事4 - B站创作 */}
                <motion.div 
                  className="relative mb-16"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="md:flex items-center">
                    <div className="md:w-1/2" />
                    <div className="hidden md:flex w-16 h-16 bg-pink-400 border-4 border-black rounded-full items-center justify-center absolute left-1/2 transform -translate-x-1/2 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                      <span className="text-2xl">🎬</span>
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                      <div className="bg-pink-100 border-4 border-black rounded-[24px] p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <span className="text-pink-500 font-black text-lg">Chapter 4</span>
                        <h3 className="text-2xl font-black mt-2 mb-3">AI赋能探索者</h3>
                        <p className="text-gray-600">
                          单条AI广告视频突破80w播放量，1400的点赞。用AI工具赋能内容创作，探索无限可能。
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 故事结尾 */}
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-center">
                    <div className="bg-black text-white border-4 border-black rounded-[32px] p-12 shadow-[12px_12px_0_0_rgba(255,105,180,1)]">
                      <span className="text-6xl mb-6 block">✨</span>
                      <h3 className="text-3xl font-black mb-4">我的信念</h3>
                      <p className="text-xl font-medium max-w-xl mx-auto leading-relaxed">
                        心即理，信我所行
                      </p>
                      <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <span className="bg-pink-400 text-black px-4 py-2 rounded-full font-bold">Digital Creator</span>
                        <span className="bg-blue-400 text-white px-4 py-2 rounded-full font-bold">PM</span>
                        <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">Vibe Coder</span>
                        <span className="bg-green-400 text-white px-4 py-2 rounded-full font-bold">Otaku</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
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
                <ArticleCard key={`article-${article.id}-${i}`} article={article} index={i} />
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
                <ProjectCard key={`works-page-${work.id}`} project={work} index={i} />
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
