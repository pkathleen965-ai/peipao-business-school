import Link from 'next/link'
import { Home, Info, Wrench, Trophy, BookOpen, Phone } from 'lucide-react'

const navItems = [
  { href: '/', label: '首页', icon: Home },
  { href: '/about', label: '关于我们', icon: Info },
  { href: '/services', label: '服务体系', icon: Wrench },
  { href: '/cases', label: '成功案例', icon: Trophy },
  { href: '/insights', label: '知识中心', icon: BookOpen },
  { href: '/contact', label: '联系我们', icon: Phone },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center">
              <span className="text-white font-bold text-lg">陪</span>
            </div>
            <div>
              <span className="font-bold text-lg text-gray-900">陪跑商学院</span>
              <p className="text-xs text-gray-500 -mt-1 hidden sm:block">AI赋能传统企业转型</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:text-blue-900 hover:bg-blue-50 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-blue-900 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              预约诊断
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
