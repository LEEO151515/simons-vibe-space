import { Calendar, Tag } from 'lucide-react';
import { motion } from 'motion/react';

interface ArticleCardProps {
  article: {
    title: string;
    date: string;
    tag: string;
    tagColor: string;
    description: string;
    image: string;
  };
  index: number;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white border-4 border-black rounded-[32px] overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
    >
      <div className="h-48 overflow-hidden border-b-4 border-black">
        <img 
          src={article.image} 
          alt={article.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <span className={`${article.tagColor} border-2 border-black px-2 py-0.5 rounded text-xs font-bold`}>
            {article.tag}
          </span>
          <div className="flex items-center gap-1 text-gray-500 text-xs font-medium">
            <Calendar size={12} />
            <span>{article.date}</span>
          </div>
        </div>
        <h3 className="text-xl font-black mb-2 line-clamp-1">{article.title}</h3>
        <p className="text-gray-600 text-sm font-medium line-clamp-2 leading-relaxed">
          {article.description}
        </p>
      </div>
    </motion.div>
  );
}
