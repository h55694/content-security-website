# 内容安全内参网站

一个专业的**内容安全技术与资讯平台**，提供前沿技术洞察、对抗技术分析、AI应用实践，以及最新的法律法规解读和监管动向追踪。

## 🌟 功能特点

### 两大核心版块

#### 1. 内容安全技术洞察
- **前沿技术**：多模态内容理解、实时审核系统等最新技术进展
- **对抗技术**：深度伪造检测、对抗样本攻防等对抗技术分析
- **AI技术**：大模型安全对齐、AIGC内容检测等AI应用实践

#### 2. 内容安全资讯
- **法律法规**：最新发布的法律法规及专业解读
- **监管动向**：执法行动、政策更新、典型案例追踪

### 设计亮点

- ✅ **响应式设计**：完美适配桌面、平板、手机
- ✅ **专业配色**：采用蓝色系专业配色，体现科技感与可信度
- ✅ **清晰分类**：技术文章按类型分类，资讯按法规/监管分类
- ✅ **交互友好**：平滑滚动、卡片悬停效果、标签切换
- ✅ **无障碍支持**：键盘导航、焦点样式、语义化标签
- ✅ **性能优化**：CSS动画、懒加载、防抖处理

## 📁 文件结构

```
content-security-website/
├── index.html      # 主页面
├── styles.css      # 样式文件
├── script.js       # 交互脚本
└── README.md       # 说明文档
```

## 🚀 快速开始

### 本地预览

1. **直接打开**
   ```bash
   # 在浏览器中打开 index.html 文件
   open index.html
   ```

2. **使用本地服务器**（推荐）
   ```bash
   # 使用 Python
   python -m http.server 8000
   
   # 或使用 Node.js
   npx serve
   ```

3. 访问 `http://localhost:8000`

### 部署上线

#### 方式一：静态托管平台

**Vercel**（推荐）
```bash
npm install -g vercel
vercel
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy
```

**GitHub Pages**
1. 创建 GitHub 仓库
2. 上传文件到仓库
3. Settings → Pages → 选择分支 → Deploy

#### 方式二：传统服务器

将文件上传到服务器的 Web 目录（如 `/var/www/html/`）

## 🎨 设计系统

### 颜色系统

```css
/* 主色 */
--color-primary: #2563eb;      /* 专业蓝 */
--color-secondary: #7c3aed;    /* 科技紫 */

/* 分类色 */
--color-frontier: #8b5cf6;     /* 前沿技术 - 紫色 */
--color-adversarial: #ef4444;  /* 对抗技术 - 红色 */
--color-ai: #3b82f6;           /* AI技术 - 蓝色 */
--color-laws: #10b981;         /* 法律法规 - 绿色 */
--color-regulation: #f59e0b;   /* 监管动向 - 橙色 */
```

### 间距系统

采用非线性间距系统：`4, 8, 12, 16, 24, 32, 48, 64, 96, 128px`

### 字体系统

```css
--font-size-xs: 12px;
--font-size-sm: 14px;
--font-size-base: 16px;
--font-size-lg: 20px;
--font-size-xl: 24px;
--font-size-2xl: 30px;
--font-size-3xl: 40px;
--font-size-4xl: 48px;
```

## 📱 响应式断点

- **桌面**：> 768px
- **平板**：≤ 768px
- **手机**：≤ 480px

## 🔧 自定义修改

### 修改内容

编辑 `index.html` 文件中的对应部分：

- **文章内容**：修改 `.article-card` 元素
- **新闻内容**：修改 `.news-item` 元素
- **统计数据**：修改 `.hero-stats` 部分

### 修改样式

编辑 `styles.css` 文件：

- **颜色**：修改 `:root` 中的 CSS 变量
- **间距**：调整 `--spacing-*` 变量
- **字体**：调整 `--font-size-*` 变量

### 添加新功能

编辑 `script.js` 文件：

- 添加新的交互逻辑
- 集成后端 API
- 添加数据加载功能

## 📊 技术栈

- **HTML5**：语义化标签
- **CSS3**：Flexbox、Grid、CSS变量、动画
- **JavaScript**：原生 ES6+
- **设计系统**：Design Tokens、组件化思维

## 🎯 后续优化建议

### 功能扩展
- [ ] 集成后端 API，实现动态内容加载
- [ ] 添加搜索功能
- [ ] 添加文章详情页
- [ ] 添加用户评论系统
- [ ] 添加 RSS 订阅

### 性能优化
- [ ] 图片懒加载
- [ ] 代码分割
- [ ] CDN 加速
- [ ] Gzip 压缩

### SEO 优化
- [ ] 添加结构化数据（Schema.org）
- [ ] 生成 sitemap.xml
- [ ] 优化 meta 标签
- [ ] 添加 Open Graph 标签

## 📄 许可证

MIT License

## 👥 联系方式

- 📧 Email: contact@contentsec.cn
- 📍 地址: 北京市海淀区

---

**内容安全内参** - 专注内容安全，守护网络空间 🛡️
