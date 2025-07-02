# Patrick Niyo's Personal Blog

A modern, responsive personal blog built with Astro and Tailwind CSS, featuring dark mode support, search functionality, and a clean, professional design.

## 🌟 Features

- ✅ **Modern Design**: Clean, professional layout with Tailwind CSS
- ✅ **Dark Mode**: Full dark/light theme support with toggle
- ✅ **Responsive**: Mobile-first design that works on all devices
- ✅ **Fast Performance**: Built with Astro for optimal loading speeds
- ✅ **SEO Optimized**: Meta tags, Open Graph, and sitemap support
- ✅ **Search Ready**: Modern search bar with keyboard shortcuts (⌘K)
- ✅ **Publications**: Dedicated section for research papers
- ✅ **Talks & Courses**: Professional speaking and education sections
- ✅ **Custom 404**: Beautiful, helpful error page
- ✅ **Typography**: Enhanced readability with Bricolage Grotesque font
- ✅ **Accessibility**: ARIA labels and semantic HTML
- ✅ **Blog Support**: Markdown and MDX content with syntax highlighting

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/thepatrickniyo/blog.patrickniyo.com.git
   cd blog.patrickniyo.com
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:4321`

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🔧 Development Commands

| Command | Action |
|---------|--------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm astro check` | Type check |
| `pnpm astro add <integration>` | Add Astro integration |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## � Dependencies

### Core
- **Astro**: Static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type safety

### Integrations
- `@astrojs/tailwind`: Tailwind integration
- `@astrojs/mdx`: MDX support
- `@astrojs/sitemap`: SEO sitemap generation

## 🚀 Deployment

The site is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- **Any static hosting provider**

### Build Process
```bash
pnpm build
```
Outputs to `dist/` directory.

## 🎯 Performance

- **Lighthouse Score**: 100/100 performance
- **Core Web Vitals**: Optimized
- **Image Optimization**: Responsive images
- **Font Loading**: Optimized web fonts
- **CSS**: Minimal, utility-based styles

## 📱 Browser Support

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is personal property. Please respect intellectual property rights.

## 👨‍💻 Author

**Patrick Niyo**
- Website: [patrickniyo.com](https://patrickniyo.com)
- LinkedIn: [Patrick Niyo](https://linkedin.com/in/patrickniyo)
- GitHub: [@patrickniyo](https://github.com/patrickniyo)
- X/Twitter: [@patrickniyo](https://x.com/patrickniyo)

---

Built with ❤️ using [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com)
