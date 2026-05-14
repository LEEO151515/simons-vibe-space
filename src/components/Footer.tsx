import { Github, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div>
          <h2 className="text-4xl font-black mb-4 italic">Let's build something</h2>
          <p className="text-gray-400 font-medium">© 2026 Simon Space. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8">
          <div className="space-y-4">
            <h4 className="font-bold text-gray-500 uppercase text-xs tracking-widest">Explore</h4>
            <ul className="space-y-2 font-bold">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Articles</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Vibe Code</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-gray-500 uppercase text-xs tracking-widest">Connect</h4>
            <ul className="space-y-2 font-bold">
              <li><a href="#" className="hover:text-pink-400 transition-colors flex items-center gap-2"><Twitter size={16} /> Twitter</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2"><Github size={16} /> GitHub</a></li>
              <li><a href="#" className="hover:text-red-400 transition-colors flex items-center gap-2"><Youtube size={16} /> Bilibili</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 border-t border-gray-800 pt-8 flex justify-between items-center text-xs font-bold text-gray-500 tracking-widest uppercase">
        <span>Designed by Simon</span>
        <span>Based in China</span>
      </div>
    </footer>
  );
}
