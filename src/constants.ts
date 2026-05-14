import { Home, User, FileText, Layout, Mail } from 'lucide-react';

export const NAV_ITEMS = [
  { id: 'home', label: '首页', icon: Home },
  { id: 'about', label: '关于我', icon: User },
  { id: 'articles', label: '我的文章', icon: FileText },
  { id: 'works', label: '我的作品', icon: Layout },
];

export const ARTICLES = [
  {
    id: 1,
    title: '我有可有可无的网友',
    date: '2021-08-19',
    tag: '随笔',
    tagColor: 'bg-pink-400',
    description: '关于那些在生命中出现又消失的数字连接。',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 2,
    title: '#SJTU游离日记#0004',
    date: '2021-05-03',
    tag: '日记',
    tagColor: 'bg-pink-400',
    description: '在交大的日子里，那些破碎而真实的瞬间。',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400',
  },
  {
    id: 3,
    title: '关于枸杞岛和我的恋爱',
    date: '2021-02-28',
    tag: '情感',
    tagColor: 'bg-red-400',
    description: '海风、岛屿，还有那段关于夏天的记忆。',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400',
  },
];

export const WORKS = [
  {
    id: 1,
    title: '等会儿吃啥？',
    description: '基于 LBS 地理位置自动获取周边餐厅并随机抽取一家「盲盒」餐厅。',
    icon: '🍴',
    iconBg: 'bg-blue-400',
  },
  {
    id: 2,
    title: '更多作品开发中...',
    description: 'COMING SOON',
    icon: null,
    iconBg: 'bg-gray-100',
    isPlaceholder: true,
  },
];
