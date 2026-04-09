import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '陪跑商学院 - 70/80后老板的数字化转型伙伴',
  description: 'AI赋能传统企业转型，认知提升与价值展示专家。帮助70/80后中小微企业老板突破营销困境，实现业务持续增长。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}
