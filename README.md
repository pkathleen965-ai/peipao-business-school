# 陪跑商学院 官方网站

> AI赋能传统企业转型，认知提升与价值展示专家

## 技术栈

- **框架**: Next.js 15
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React

## 快速开始

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务
npm start
```

## 项目结构

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── about/             # 关于我们
│   ├── services/          # 服务体系
│   ├── cases/             # 成功案例
│   ├── insights/          # 知识中心
│   └── contact/           # 联系我们
├── components/            # 通用组件
│   ├── Header.tsx
│   └── Footer.tsx
└── lib/                   # 工具函数
```

## 页面说明

| 页面 | 路径 | 功能 |
|------|------|------|
| 首页 | `/` | 品牌展示、痛点共鸣、服务概览、案例展示 |
| 关于我们 | `/about` | 品牌故事、核心价值观、服务流程 |
| 服务体系 | `/services` | 五大服务模块详解 |
| 成功案例 | `/cases` | 转型案例展示 |
| 知识中心 | `/insights` | 干货文章、订阅功能 |
| 联系我们 | `/contact` | 预约诊断表单 |

## 部署

本项目可免费部署到以下平台：

- **Vercel** (推荐): `npm i -g vercel && vercel`
- **Netlify**: 连接 GitHub 仓库自动部署

## 待完成

- [ ] 添加真实联系方式
- [ ] 替换占位内容为真实数据
- [ ] 添加案例详情页
- [ ] 添加文章详情页
- [ ] 集成 CMS 内容管理
- [ ] 添加数据分析（如 Google Analytics）
- [ ] SEO 优化

## 版权

© 2026 陪跑商学院 All Rights Reserved.
