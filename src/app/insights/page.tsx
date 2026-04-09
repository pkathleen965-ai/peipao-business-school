import Link from 'next/link'

const articles = [
  { title: '70/80后老板的"数字武器"：当传统企业遇上AI陪跑', category: '转型指南', date: '2026-04-08', excerpt: '那些在新时代竞争中"产品好但卖不出去"的70/80后老板们，如何用一套全新的"数字武器"实现老树发新芽。' },
  { title: '转型四步法：从诊断到落地的完整攻略', category: '方法论', date: '2026-04-05', excerpt: '深度诊断、认知重构、工具赋能、持续迭代——一套可复制的传统企业数字化转型路径。' },
  { title: 'AI时代，什么最稀缺？"活人感"', category: '深度思考', date: '2026-04-01', excerpt: 'AI可以生成内容、分析数据、回复客服，但它无法替代真人之间的信任、温度和真心。' },
  { title: '老板必看：五大平台内容发布节奏', category: '实操技巧', date: '2026-03-25', excerpt: '微信视频号、抖音、小红书、公众号、朋友圈——每周标准发布流程全攻略。' },
]

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-sm">陪</div>
            <span className="font-semibold text-lg">陪跑商学院</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">首页</Link>
            <Link href="/about" className="text-sm text-white/60 hover:text-white transition-colors">关于</Link>
            <Link href="/services" className="text-sm text-white/60 hover:text-white transition-colors">服务</Link>
            <Link href="/cases" className="text-sm text-white/60 hover:text-white transition-colors">案例</Link>
          </div>
          <Link href="/contact" className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition-colors">预约诊断</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0" style={{background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(96, 165, 250, 0.2), transparent 70%)'}}></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">知识中心</h1>
          <p className="text-xl text-white/60">
            转型干货、方法论、成功案例，
            <br />
            帮助你从认知提升到行动落地。
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((a, i) => (
              <article key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">{a.category}</span>
                  <span className="text-xs text-white/40">{a.date}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{a.title}</h3>
                <p className="text-sm text-white/50 mb-4 line-clamp-2">{a.excerpt}</p>
                <span className="text-sm text-blue-400 font-medium">阅读全文 →</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 text-center">
            <h2 className="text-3xl font-bold mb-4">订阅转型干货</h2>
            <p className="text-white/60 mb-8">每周一篇深度文章，陪你一起成长</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="输入你的邮箱" className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-500" />
              <button type="submit" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition-colors">订阅</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-white/40">© 2026 陪跑商学院 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
