import { motion } from 'motion/react';

const PARTNERS = [
  { name: '山花园', color: 'bg-yellow-100', icon: '🌸' },
  { name: '电子好友', color: 'bg-blue-100', icon: '🤖' },
  { name: 'Zhang Yu', color: 'bg-green-100', icon: '👨‍🎨' },
  { name: '凌川的小站', color: 'bg-pink-100', icon: '🏯' },
  { name: '小曦的园子', color: 'bg-orange-100', icon: '🍊' },
  { name: '北辕记', color: 'bg-purple-100', icon: '🧭' },
  { name: '翔的小屋', color: 'bg-cyan-100', icon: '🏠' },
];

export default function PartnerMarquee() {
  return (
    <div className="py-6 bg-white border-y-4 border-black overflow-hidden flex whitespace-nowrap">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-4 items-center pr-4"
      >
        {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, i) => (
          <div 
            key={i} 
            className={`${partner.color} border-2 border-black px-4 py-2 rounded-lg shadow-[2px_2px_0_0_rgba(0,0,0,1)] flex items-center gap-2 font-bold text-sm`}
          >
            <div className="w-6 h-6 border border-black rounded-full overflow-hidden flex items-center justify-center bg-white">
              {partner.icon}
            </div>
            <span>{partner.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
