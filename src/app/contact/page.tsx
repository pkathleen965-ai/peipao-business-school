'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center px-8">
          <div className="text-8xl mb-8">✅</div>
          <h2 className="text-5xl font-bold mb-4">预约成功！</h2>
          <p className="text-2xl text-gray-500">我们的顾问将在24小时内联系你</p>
        </div>
      </div>
    )
  }

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
          <h1 className="text-6xl md:text-7xl font-bold mb-6">预约免费诊断</h1>
          <p className="text-2xl text-gray-600">
            第一步：告诉我们你的企业现状
            <br />我们的顾问将为你做一次深度诊断
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-2xl mx-auto px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-lg font-semibold mb-3">姓名 *</label>
                <input type="text" required placeholder="请输入你的姓名" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-blue-500 outline-none transition-colors text-lg" />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-3">公司名称 *</label>
                <input type="text" required placeholder="请输入公司名称" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-blue-500 outline-none transition-colors text-lg" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <label className="block text-lg font-semibold mb-3">所属行业 *</label>
                <select required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-blue-500 outline-none transition-colors text-lg">
                  <option value="">请选择行业</option>
                  <option value="manufacturing">制造业</option>
                  <option value="service">服务业</option>
                  <option value="retail">零售业</option>
                  <option value="restaurant">餐饮业</option>
                  <option value="other">其他</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-semibold mb-3">手机号码 *</label>
                <input type="tel" required placeholder="请输入手机号码" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-blue-500 outline-none transition-colors text-lg" />
              </div>
            </div>

            <div>
              <label className="block text-lg font-semibold mb-3">当前最大挑战 *</label>
              <select required className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-blue-500 outline-none transition-colors text-lg">
                <option value="">请选择最大挑战</option>
                <option value="marketing">营销思路落后，流量获取难</option>
                <option value="talent">人员与人才不足</option>
                <option value="product">产品与品牌呈现弱</option>
                <option value="structure">公司架构僵化</option>
                <option value="strategy">战略迷茫与转型门槛高</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold mb-3">补充说明</label>
              <textarea rows={4} placeholder="可以简单描述一下你目前的情况和期望" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-gray-100 focus:border-blue-500 outline-none transition-colors text-lg resize-none"></textarea>
            </div>

            <button type="submit" className="w-full py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 rounded-2xl text-white font-bold text-xl transition-all shadow-xl shadow-purple-600/30">
              提交预约
            </button>
          </form>

          <div className="mt-12 p-10 rounded-3xl bg-gray-50 border-2 border-gray-100">
            <h3 className="text-2xl font-bold mb-6">诊断服务说明</h3>
            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> 1次45分钟深度访谈</li>
              <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> 专业顾问1对1沟通</li>
              <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> 初步诊断报告</li>
              <li className="flex items-center gap-3"><span className="text-green-500 text-xl">✓</span> 定制化建议方案</li>
            </ul>
            <p className="text-lg text-gray-400 mt-6 font-medium">完全免费，不收取任何费用</p>
          </div>
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
