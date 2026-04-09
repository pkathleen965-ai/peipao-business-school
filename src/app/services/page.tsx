import Link from 'next/link'

const services = [
  { num: '01', title: '认知诊断', subtitle: '62问深度访谈', items: ['企业基本信息与发展历程', '企业理念、价值观与文化', '产品/服务梳理', '人员与组织架构', '营销方法与现状', '数字化工具与转型现状'] },
  { num: '02', title: '架构梳理', subtitle: '扁平化组织优化', items: ['公司架构重新设计', '岗位职责梳理', '人才招聘建议', '团队培训方案', '绩效考核优化'] },
  { num: '03', title: '新媒体展示', subtitle: '全渠道内容矩阵', items: ['企业官网制作', '产品承载小程序', '短视频矩阵搭建', '直播脚本策划', '企业文化展示'] },
  { num: '04', title: '内容传播', subtitle: '五平台矩阵运营', items: ['微信视频号运营', '抖音短视频发布', '小红书种草', '公众号深度内容', '朋友圈精准触达'] },
  { num: '05', title: '运营优化', subtitle: '持续迭代陪跑', items: ['周/月数据复盘', '策略动态调整', '工具持续升级', '团队能力建设', '长期顾问支持'] },
]

export default function ServicesPage() {
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
          <h1 className="text-6xl md:text-7xl font-bold mb-6">服务体系</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            五大核心服务模块，从诊断到落地，一站式陪跑。
            <br />不是给你一套方案，是陪你一起走过这段路。
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="space-y-10">
            {services.map((s, i) => (
              <div key={i} className="p-12 rounded-3xl bg-gray-50 border border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                  <div className="lg:w-1/3 flex items-start gap-6">
                    <div className="text-8xl font-black text-blue-100">{s.num}</div>
                    <div>
                      <h3 className="text-3xl font-bold mb-1">{s.title}</h3>
                      <p className="text-gray-500 text-lg">{s.subtitle}</p>
                    </div>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="grid sm:grid-cols-3 gap-4">
                      {s.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-3 text-lg text-gray-600">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="text-7xl mb-10">💰</div>
          <h2 className="text-5xl font-bold mb-6">服务收费</h2>
          <h3 className="text-3xl font-bold mb-4">基础诊断服务</h3>
          <div className="text-7xl font-black mb-6">免费</div>
          <p className="text-xl text-white/80 mb-10">包含1次45分钟深度访谈 + 初步诊断报告</p>
          <Link href="/contact" className="inline-block px-10 py-5 bg-white text-blue-600 hover:bg-gray-100 rounded-2xl font-bold text-xl transition-all shadow-xl">
            预约免费诊断
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
