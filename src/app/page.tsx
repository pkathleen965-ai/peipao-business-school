import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold text-white">
              陪
            </div>
            <span className="font-bold text-xl text-gray-900">陪跑商学院</span>
          </Link>
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">首页</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">关于</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">服务</Link>
            <Link href="/cases" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">案例</Link>
            <Link href="/insights" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">知识</Link>
          </div>
          <Link href="/contact" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors shadow-lg shadow-blue-600/25">
            预约诊断
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              已有 128 位企业主加入转型
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              AI帮我们更快
              <br />
              <span className="gradient-text">我们用真心陪你更远</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-600 max-w-3xl mb-12 leading-relaxed font-light">
              专为70/80后传统企业老板打造的数字化转型陪跑服务。
              <br />
              不是淘汰，是武器升级。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="/contact" className="px-10 py-5 bg-blue-600 hover:bg-blue-700 rounded-2xl text-white font-bold text-xl transition-all shadow-xl shadow-blue-600/30">
                立即预约免费诊断 →
              </Link>
              <Link href="/cases" className="px-10 py-5 bg-gray-100 hover:bg-gray-200 rounded-2xl text-gray-800 font-semibold text-xl transition-all">
                查看成功案例
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              你是否也在经历这些困境？
            </h2>
            <p className="text-2xl text-gray-500 font-light">
              "我的产品明明很好，为什么就是卖不出去？"
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '📉', title: '营销思路落后', desc: '知道抖音小红书重要，但无从下手' },
              { icon: '👥', title: '人才难招难留', desc: '团队缺乏90/00后数字人才' },
              { icon: '📦', title: '产品呈现弱', desc: '好产品无法被新客户看见' },
              { icon: '🎯', title: '战略迷茫', desc: '想转型但不知道从哪里开始' },
            ].map((pain, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="text-5xl mb-6">{pain.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{pain.title}</h3>
                <p className="text-lg text-gray-500">{pain.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              五大核心服务模块
            </h2>
            <p className="text-2xl text-gray-500 font-light">
              从诊断到落地，一站式陪跑服务
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { num: '01', title: '认知诊断', desc: '62问深度访谈，精准识别痛点' },
              { num: '02', title: '架构梳理', desc: '扁平化组织优化，人才管理建议' },
              { num: '03', title: '新媒体展示', desc: '短视频矩阵+小程序+企业网站' },
              { num: '04', title: '内容传播', desc: '全平台内容策略，私域闭环' },
              { num: '05', title: '运营优化', desc: '持续迭代，数据驱动增长' },
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-100 hover:border-blue-300 transition-all group">
                <div className="text-7xl font-black text-blue-100 mb-6 group-hover:text-blue-200 transition-colors">
                  {service.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              他们已经成功转型
            </h2>
            <p className="text-2xl text-white/80">
              真实案例，真实数据
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: '李总', industry: '服装制造业', before: '5%', after: '35%', label: '线上营收占比', result: '+600%' },
              { name: '张姐', industry: '餐饮连锁', before: '2000人', after: '8000人', label: '私域会员', result: '+300%' },
              { name: '陈工', industry: '机械加工', before: '0个', after: '3个', label: '90后新客订单', result: '突破' },
            ].map((c, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-3xl font-bold">
                    {c.name[0]}
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{c.name}</div>
                    <div className="text-white/70 text-lg">{c.industry}</div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <div className="text-white/60 text-lg mb-2">{c.label}</div>
                  <div className="flex items-baseline gap-4">
                    <span className="text-3xl font-bold text-white/40 line-through">{c.before}</span>
                    <span className="text-4xl font-black">→ {c.after}</span>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-white/20">
                  <span className="text-5xl font-black">{c.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="text-7xl mb-10">⚙️ + ❤️</div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            AI赋能，但不止于AI
          </h2>
          <p className="text-3xl md:text-4xl font-bold mb-10 gradient-text">
            "机器只是工具，人性才是本质。"
          </p>
          <p className="text-2xl text-gray-600 mb-16 leading-relaxed font-light">
            AI负责"快、专业"，真人负责"温度、真心"。
            <br />
            二者结合，才是制胜之道。
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="p-10 rounded-3xl bg-blue-50 border-2 border-blue-100">
              <div className="text-5xl mb-6">🤖</div>
              <h3 className="text-2xl font-bold mb-3">AI 负责</h3>
              <p className="text-xl text-gray-500">7×24小时客服 · 文案生成 · 数据分析</p>
            </div>
            <div className="p-10 rounded-3xl bg-purple-50 border-2 border-purple-100">
              <div className="text-5xl mb-6">👤</div>
              <h3 className="text-2xl font-bold mb-3">真人 负责</h3>
              <p className="text-xl text-gray-500">情感连接 · 信任建立 · 战略咨询</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            准备好开始转型了吗？
          </h2>
          <p className="text-2xl text-gray-400 mb-12">
            第一步：预约免费诊断，发现你的核心痛点
          </p>
          <Link href="/contact" className="inline-block px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 rounded-2xl font-bold text-2xl transition-all shadow-2xl shadow-purple-600/30">
            立即预约免费诊断
          </Link>
          <p className="text-lg text-gray-500 mt-6">
            平均诊断时长 45 分钟 · 专业顾问1v1沟通
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white py-16">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center font-bold">
                陪
              </div>
              <span className="font-bold text-xl">陪跑商学院</span>
            </div>
            <p className="text-gray-400">
              © 2026 陪跑商学院 All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
