import { motion } from 'motion/react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    icon: string | null;
    iconBg: string;
    isPlaceholder?: boolean;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`bg-white border-4 border-black rounded-[32px] p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] flex flex-col justify-center items-start min-h-[220px] ${project.isPlaceholder ? 'items-center' : ''}`}
    >
      {project.icon ? (
        <div className={`${project.iconBg} w-16 h-16 rounded-xl border-4 border-black flex items-center justify-center text-3xl mb-6 shadow-[4px_4px_0_0_rgba(0,0,0,1)]`}>
          {project.icon}
        </div>
      ) : project.isPlaceholder ? (
        <div className="text-center">
          <h3 className="text-2xl font-black text-gray-400 mb-2">更多作品开发中...</h3>
          <p className="text-gray-300 font-bold uppercase tracking-widest text-sm">Coming Soon</p>
        </div>
      ) : null}

      {!project.isPlaceholder && (
        <>
          <h3 className="text-2xl font-black mb-4">{project.title}</h3>
          <p className="text-gray-600 font-medium leading-relaxed">
            {project.description}
          </p>
        </>
      )}
    </motion.div>
  );
}
