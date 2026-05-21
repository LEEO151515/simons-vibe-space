import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Lightbulb, Zap, Target, BookOpen } from 'lucide-react';

interface Tip {
  id: number;
  title: string;
  category: string;
  categoryColor: string;
  description: string;
  content: string;
  image: string;
  date: string;
  readTime: string;
  likes: number;
}

const TIPS: Tip[] = [
  {
    id: 1,
    title: '小红书爆款标题的10个公式',
    category: '社媒运营',
    categoryColor: 'bg-pink-400',
    description: '学会这10个标题公式，让你的笔记点击率提升300%',
    content: '1. 数字+悬念：《5个动作让你瘦10斤，第3个太绝了》\n2. 痛点+方案：《手残党必看！3分钟学会日常眼妆》\n3. 身份+经历：《作为过来人，劝你别轻易转行》\n4. 对比+反差：《月薪3000和30000的差距在哪里？》\n5. 热点+话题：《最近超火的XX，我帮你们试了》\n6. 情绪+共鸣：《看完这个视频，我失眠了》\n7. 干货+承诺：《学会这5点，写作再也不卡壳》\n8. 挑战+互动：《挑战30天不喝奶茶，第5天我崩溃了》\n9. 盘点+列表：《2024年最值得买的10款护肤品》\n10. 教程+结果：《手把手教你从0开始做账号》',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600',
    date: '2024-01-15',
    readTime: '5分钟',
    likes: 2880
  },
  {
    id: 2,
    title: 'TikTok剪辑技巧大全',
    category: '短视频',
    categoryColor: 'bg-blue-400',
    description: '从剪辑到配乐，手把手教你做出爆款短视频',
    content: '【剪辑节奏】\n- 开头3秒必须有钩子\n- 每5-8秒切换镜头\n- 结尾留悬念或反转\n\n【热门音乐选择】\n- 优先使用当日热门音乐\n- 音乐节奏要与内容匹配\n- 善用音乐高潮部分\n\n【字幕技巧】\n- 关键台词放大\n- 使用表情包字幕\n- 添加动态效果',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600',
    date: '2024-01-10',
    readTime: '8分钟',
    likes: 3560
  },
  {
    id: 3,
    title: 'AI写作神器大盘点',
    category: 'AI工具',
    categoryColor: 'bg-purple-400',
    description: '这5款AI工具让我效率提升10倍',
    content: '1. ChatGPT - 万能助手，什么都能问\n2. Midjourney - AI绘图神器\n3. Notion AI - 笔记整理专家\n4. Copy.ai - 营销文案生成器\n5. Canva AI - 设计助手\n\n【使用技巧】\n- 学会给AI正确的指令\n- 多次迭代优化结果\n- 结合人工审核修改',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
    date: '2024-01-08',
    readTime: '6分钟',
    likes: 4200
  },
  {
    id: 4,
    title: '海外社媒涨粉必看',
    category: '社媒运营',
    categoryColor: 'bg-pink-400',
    description: 'Insider分享：我是如何在3个月涨粉10万的',
    content: '【内容策略】\n- 保持统一视觉风格\n- 发布频率：每天1-2条\n- 善用Reels短视频\n\n【互动技巧】\n- 回复每一条评论\n- 发起有趣的话题挑战\n- 与同类型博主合作\n\n【发布时间】\n- 美国用户：晚上8-11点\n- 欧洲用户：下午3-6点\n- 亚洲用户：中午12点和晚上8点',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600',
    date: '2024-01-05',
    readTime: '7分钟',
    likes: 5100
  },
  {
    id: 5,
    title: '短视频脚本模板大全',
    category: '短视频',
    categoryColor: 'bg-blue-400',
    description: '拿来就能用！10种热门短视频脚本模板',
    content: '1. 对比型：《使用前vs使用后》\n2. 教程型：《手把手教你XXX》\n3. 测评型：《真实测评XX，第X天惊喜发现》\n4. 挑战型：《挑战30天XXX，结果...》\n5. 清单型：《10个XXX，90%人都不知道第7个》\n6. 揭秘型：《行业内幕：XXX的真相》\n7. 故事型：《我因为XXX，差点XXX》\n8. 合集型：《XX合集，持续更新中》',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600',
    date: '2024-01-02',
    readTime: '10分钟',
    likes: 6800
  },
  {
    id: 6,
    title: '数据分析入门指南',
    category: '技能提升',
    categoryColor: 'bg-green-400',
    description: '从零开始学数据分析，看这一篇就够了',
    content: '【基础概念】\n- DAU/MAU（日活/月活）\n- 转化率、留存率\n- 环比、同比\n\n【常用工具】\n- Excel/Google Sheets\n- Tableau\n- Python数据分析\n\n【实操案例】\n通过分析账号数据，找到最佳发布时间\n通过用户画像，优化内容方向',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    date: '2023-12-28',
    readTime: '12分钟',
    likes: 3200
  },
  {
    id: 7,
    title: '自媒体变现全攻略',
    category: '社媒运营',
    categoryColor: 'bg-pink-400',
    description: '从0到月入过万，自媒体变现的5种方式',
    content: '【变现方式】\n1. 广告植入（品牌合作）\n2. 带货佣金（电商变现）\n3. 知识付费（卖课/咨询）\n4. 直播打赏\n5. 私域流量变现\n\n【注意事项】\n- 不要过早追求变现\n- 先把粉丝量做到1万+\n- 保持内容质量优先',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600',
    date: '2023-12-25',
    readTime: '9分钟',
    likes: 7800
  },
  {
    id: 8,
    title: 'ChatGPT进阶使用技巧',
    category: 'AI工具',
    categoryColor: 'bg-purple-400',
    description: '解锁ChatGPT的隐藏技能，效率翻倍',
    content: '【高级技巧】\n1. Chain of Thought（思维链）\n让AI一步步思考复杂问题\n\n2. Few-shot Learning\n给AI几个例子，效果更好\n\n3. Role Playing\n设定角色，获得更专业的回答\n\n【实用prompts】\n- "用专业XXX的身份，帮我分析..."\n- "假设你是...，请用...风格..."\n- "请分步骤解释..."',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
    date: '2023-12-20',
    readTime: '8分钟',
    likes: 9200
  },
  {
    id: 9,
    title: '爆款封面设计秘诀',
    category: '技能提升',
    categoryColor: 'bg-green-400',
    description: '一张好封面价值1000个点击',
    content: '【封面公式】\n1. 大字体+关键词\n2. 人物+情绪\n3. 数字+悬念\n4. 对比+反差\n\n【设计工具】\n- Canva（模板丰富）\n- Photoshop（专业设计）\n- Figma（协作方便）\n\n【避坑指南】\n- 字体不要超过3种\n- 颜色不要超过5种\n- 留白要适当',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600',
    date: '2023-12-18',
    readTime: '6分钟',
    likes: 4500
  },
  {
    id: 10,
    title: '内容创作灵感库',
    category: '技能提升',
    categoryColor: 'bg-green-400',
    description: '不再为选题发愁！100个爆款选题方向',
    content: '【生活类】\n- 日常vlog\n- 家居好物分享\n- 美食制作\n- 穿搭分享\n\n【知识类】\n- 技能教程\n- 经验分享\n- 行业揭秘\n- 工具推荐\n\n【情感类】\n- 成长故事\n- 职场感悟\n- 人际关系\n- 自我提升\n\n【热点类】\n- 节日话题\n- 影视综艺\n- 社会新闻\n- 流行趋势',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600',
    date: '2023-12-15',
    readTime: '15分钟',
    likes: 5600
  },
  {
    id: 11,
    title: '跨境电商入门指南',
    category: '社媒运营',
    categoryColor: 'bg-pink-400',
    description: '手把手教你从0开始做跨境电商',
    content: '【平台选择】\n- Amazon（综合平台）\n- Shopify（独立站）\n- TikTok Shop（新兴平台）\n- Etsy（手工艺品）\n\n【选品技巧】\n- 参考亚马逊畅销榜\n- 分析竞品评价\n- 关注社交媒体趋势\n\n【物流方案】\n- FBA（亚马逊仓储）\n- 海外仓\n- 直邮',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600',
    date: '2023-12-10',
    readTime: '11分钟',
    likes: 4100
  },
  {
    id: 12,
    title: '短视频配音技巧',
    category: '短视频',
    categoryColor: 'bg-blue-400',
    description: '声音好听=流量密码？配音技巧大全',
    content: '【配音设备】\n- 入门：手机+耳机\n- 进阶：USB麦克风\n- 专业：声卡+电容麦\n\n【声音训练】\n- 每天朗读10分钟\n- 注意语速和停顿\n- 练习情绪表达\n\n【AI配音工具】\n- 微软语音合成\n- 讯飞配音\n- 腾讯智影\n\n【注意事项】\n- 保持录音环境安静\n- 距离麦克风15-20cm\n- 录音后降噪处理',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600',
    date: '2023-12-05',
    readTime: '7分钟',
    likes: 3800
  }
];

export default function Tips() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-6 py-2 rounded-full font-bold mb-6">
            <Sparkles size={20} />
            <span>干货分享</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            实用干货
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"> 分享</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            从社媒运营到AI工具，从短视频技巧到变现攻略
            <br />这里有我踩过的坑和总结的经验
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {[
            { icon: Sparkles, label: '全部', color: 'bg-black text-white' },
            { icon: TrendingUp, label: '社媒运营', color: 'bg-pink-400 text-black' },
            { icon: Zap, label: '短视频', color: 'bg-blue-400 text-white' },
            { icon: Lightbulb, label: 'AI工具', color: 'bg-purple-400 text-white' },
            { icon: Target, label: '技能提升', color: 'bg-green-400 text-white' },
          ].map((cat, i) => (
            <button
              key={i}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all hover:scale-105 ${i === 0 ? cat.color : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              <cat.icon size={16} />
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TIPS.map((tip, index) => (
            <motion.article
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group bg-white border-4 border-black rounded-[24px] overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={tip.image} 
                  alt={tip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className={`absolute top-4 left-4 ${tip.categoryColor} border-2 border-black px-3 py-1 rounded-full text-xs font-bold text-black`}>
                  {tip.category}
                </span>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
                  <span className="flex items-center gap-1">
                    📅 {tip.date}
                  </span>
                  <span className="flex items-center gap-1">
                    ⏱️ {tip.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-black mb-2 line-clamp-2 group-hover:text-pink-500 transition-colors">
                  {tip.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {tip.description}
                </p>
                
                {/* Preview Content */}
                <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-4 mb-4 text-sm text-gray-700 whitespace-pre-line line-clamp-4">
                  {tip.content.substring(0, 150)}...
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
                  <span className="text-pink-500 font-bold text-sm flex items-center gap-1">
                    ❤️ {tip.likes.toLocaleString()}
                  </span>
                  <button className="bg-black text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-800 transition-colors flex items-center gap-2">
                    <BookOpen size={16} />
                    阅读全文
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
            🚀 加载更多干货
          </button>
        </motion.div>
      </div>
    </section>
  );
}
