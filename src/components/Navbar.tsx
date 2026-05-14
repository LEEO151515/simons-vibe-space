import { Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 w-full max-w-2xl">
      <div className="bg-white border-2 border-black rounded-full px-6 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] flex items-center justify-between">
        <ul className="flex items-center gap-1 md:gap-4 overflow-x-auto no-scrollbar">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
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
        
        <button className="flex items-center justify-center p-2 hover:bg-gray-100 rounded-full transition-colors border border-transparent hover:border-black">
          <Mail size={18} />
        </button>
      </div>
    </nav>
  );
}
