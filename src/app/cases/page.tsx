import Link from 'next/link'

const cases = [
  { name: '李总', industry: '服装制造业', challenge: '外贸订单减少，国内年轻人不认"老品牌"', results: ['5%→35%', '线上营收'], quote: '没想到我58岁还能学会拍视频，现在客户都说我是"国风网红"' },
  { name: '张姐', industry: '餐饮连锁', challenge: '堂食客流下降，外卖平台抽成太高', results: ['2000→8000', '私域会员'], quote: '以前觉得抖音是年轻人玩的，现在我每天自己直播教做菜' },
  { name: '陈工', industry: '机械加工', challenge: '客户都是"老关系"，年轻人找不到他', results: ['0→3个', '新客订单'], quote: '没想到年轻人真的会在网上找供应商，现在找上门的都是90后创业者' },
]

export default function CasesPage() {
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
          <h1 className="text-6xl md:text-7xl font-bold mb-6">成功案例</h1>
          <p className="text-2xl text-gray-600">
            他们曾经和你一样迷茫，现在已经成功转型。
            <br />真实案例，真实数据，真实改变。
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="space-y-16">
            {cases.map((c, i) => (
              <div key={i} className="p-12 rounded-3xl bg-gray-50 border border-gray-100">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-3xl font-bold text-white">{c.name[0]}</div>
                  <div>
                    <div className="text-3xl font-bold">{c.name}</div>
                    <div className="text-xl text-gray-500">{c.industry}</div>
                  </div>
                </div>
                <div className="mb-10">
                  <div className="text-lg text-gray-500 mb-2 font-medium">面临挑战</div>
                  <p className="text-xl text-gray-700">{c.challenge}</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  {c.results.map((r, j) => (
                    <div key={j} className="p-6 rounded-2xl bg-white text-center border border-gray-100">
                      <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{r}</span>
                    </div>
                  ))}
                </div>
                <div className="p-6 rounded-2xl bg-blue-50 border-l-4 border-blue-600">
                  <p className="text-xl text-gray-700 italic">"{c.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">下一个成功案例，会是你的企业吗？</h2>
          <p className="text-xl text-gray-500 mb-8">预约免费诊断，让我们一起找到属于你的转型路径</p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold transition-colors shadow-lg">
            立即预约免费诊断
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
