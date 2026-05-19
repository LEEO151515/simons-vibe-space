import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const handleNavClick = (itemId: string) => {
    if (itemId === 'works' && activeTab === 'home') {
      // 如果在首页，平滑滚动到 works section
      const worksSection = document.getElementById('works');
      if (worksSection) {
        worksSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setActiveTab(itemId);
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-2xl">
      <div className="bg-white border-2 border-black rounded-full px-6 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center justify-between">
        <ul className="flex items-center gap-1 md:gap-4 overflow-x-auto no-scrollbar">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 px-3 py-1 rounded-md transition-all relative group h-10`}
              >
                {activeTab === item.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-x-0 inset-y-0 border-2 border-black rounded-md -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`text-sm font-bold whitespace-nowrap transition-colors ${activeTab === item.id ? 'text-black' : 'text-gray-500 group-hover:text-black'}`}>
                  {item.label}
                </span>

              </button>
            </li>
          ))}
        </ul>
        
        <div className="h-6 w-[1px] bg-gray-300 mx-4 hidden md:block" />
        
        <a 
          href="mailto:2974896992@qq.com"
          className="flex items-center gap-2 px-4 py-2 bg-black text-white text-sm font-bold rounded-full hover:bg-gray-800 transition-colors border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5"
        >
          <Mail size={16} />
          <span>联系我</span>
        </a>
      </div>
    </nav>
  );
}
