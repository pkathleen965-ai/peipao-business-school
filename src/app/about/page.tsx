import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white">陪</div>
            <span className="font-bold text-xl">陪跑商学院</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">首页</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">关于</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">服务</Link>
            <Link href="/cases" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">案例</Link>
          </div>
          <Link href="/contact" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors shadow-lg shadow-blue-600/25">预约诊断</Link>
        </div>
      </nav>

      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">关于陪跑商学院</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            我们是认知提升与价值展示专家，专为70/80后中小微企业老板
            提供系统性数字化转型解决方案。
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">我们的故事</h2>
              <div className="space-y-6 text-xl text-gray-600 leading-relaxed font-light">
                <p>
                  2023年，我们发现了一个令人心痛的现象：越来越多的70/80后传统企业老板，
                  他们的产品质量很好，经验很丰富，但就是"卖不出去"。
                </p>
                <p>
                  他们知道抖音、小红书很重要，但不知道从哪里开始。
                  他们想转型，但团队缺乏人才，资源有限。
                </p>
                <p>
                  传统的咨询公司给他们高大上的方案，但落地不了。
                  互联网公司要的是GMV，不懂传统企业的真实困境。
                </p>
                <p className="font-semibold text-gray-900 text-2xl">
                  于是，我们决定创建一个真正懂他们、愿意陪他们一起走的机构——陪跑商学院。
                </p>
              </div>
            </div>
            <div className="p-12 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100">
              <div className="text-6xl mb-8">🏛️</div>
              <p className="text-2xl font-bold mb-4 leading-relaxed">
                "我们不是来给你一套方案的，
                <br />
                我们是来陪你一起走过这段路的。"
              </p>
              <p className="text-gray-500 text-lg">—— 陪跑商学院创始人</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold">核心价值观</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🎯', title: '实战导向', desc: '不给理论方案，只给可落地的执行步骤' },
              { icon: '❤️', title: '真诚陪伴', desc: '不只是服务，是真正站在你的角度思考' },
              { icon: '🤝', title: '共创共建', desc: '和你一起制定方案，而不是替你做决定' },
              { icon: '🚀', title: '持续迭代', desc: '陪跑不是一阵子，是持续的支持与优化' },
            ].map((v, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white shadow-sm border border-gray-100">
                <div className="text-5xl mb-6">{v.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{v.title}</h3>
                <p className="text-lg text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-12">核心理念</h2>
          <div className="p-16 rounded-3xl bg-gradient-to-br from-blue-600 to-purple-600 text-white">
            <div className="text-6xl mb-8">⚙️</div>
            <p className="text-3xl md:text-4xl font-bold mb-6">
              机器只是工具，人性才是本质。
            </p>
            <p className="text-xl text-white/80 leading-relaxed">
              AI可以生成内容、分析数据、回复客服，
              <br />
              但它无法替代真人之间的信任、温度和真心。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">想了解更多？</h2>
          <p className="text-xl text-gray-500 mb-8">预约一次免费咨询，让我们聊聊你的企业现状</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold transition-colors shadow-lg">
            立即预约咨询
          </Link>
        </div>
      </section>

      <footer className="bg-gray-950 text-white py-12">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <p className="text-gray-400">© 2026 陪跑商学院 All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )
}
