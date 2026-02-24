# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Minimalist and visually appealing interface
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Fast Performance**: Static Site Generation (SSG) for optimal loading
- 🎯 **SEO Optimized**: Built-in Next.js SEO features
- 🧩 **Component-Based**: Modular React components for easy maintenance
- 🎭 **Professional Sections**: About, Skills, Projects, and Contact

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout with Header and Footer
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   └── components/
│       ├── Header.tsx      # Navigation header
│       ├── Hero.tsx        # Hero section
│       ├── About.tsx       # About Me section
│       ├── Skills.tsx      # Skills showcase
│       ├── Projects.tsx    # Projects portfolio
│       ├── Contact.tsx     # Contact form
│       └── Footer.tsx      # Footer
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
└── next.config.ts          # Next.js configuration
```

## Customization

### Update Personal Information

Edit the following files to customize with your information:

1. **Hero Section**: [src/components/Hero.tsx](src/components/Hero.tsx)
2. **About Section**: [src/components/About.tsx](src/components/About.tsx)
3. **Skills Section**: [src/components/Skills.tsx](src/components/Skills.tsx)
4. **Projects Section**: [src/components/Projects.tsx](src/components/Projects.tsx)
5. **Contact Section**: [src/components/Contact.tsx](src/components/Contact.tsx)

### Color Scheme

Customize colors in [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: "#0F4C75",    // Main brand color
  secondary: "#3282B8",  // Secondary color
  accent: "#BBE1FA",     // Accent color
}
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

Build the production version:
```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider.

## License

This project is open source and available for personal use.

## Contact

- **Email**: rathanakchouncadt@gmail.com
- **Phone**: 092 697 056
- **LinkedIn**: [Your Profile](https://www.linkedin.com/in/yourprofile)

---

Built with ❤️ using Next.js and Tailwind CSS
