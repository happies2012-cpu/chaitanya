# horizoneb1techadvisors

**Elite EB-1A Technical Advisory Platform**

A premium Next.js application designed to streamline the EB-1A extraordinary ability petition process through data-driven intelligence, strategic advisory, and automated workflows.

---

## 🌟 Overview

**horizoneb1techadvisors** bridges the gap between extraordinary technical innovation and complex adjudicative standards. We engineer global mobility for technical pioneers through elite data engineering and strategic legal architecture.

### Key Features

- **🎯 Eligibility Intelligence Scan**: AI-powered assessment of EB-1A petition strength
- **📊 Strategic Roadmap Builder**: Personalized timeline and milestone tracking
- **✍️ Automated Drafting Engine**: AI-assisted petition brief generation
- **👥 Expert Network**: Connect with verified journal editors, peer reviewers, and industry authorities
- **📈 Authority Amplifier**: Automated professional narrative and social media strategy
- **🔒 Secure Dashboard**: Role-based access for advisors and clients

---

## 🚀 Tech Stack

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) (App Router + Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (with custom design system)
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod
- **Fonts**: Google Fonts (Outfit + Inter)
- **Theme**: next-themes (Dark/Light mode support)

---

## 📦 Installation

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/chaitanya.git
cd chaitanya

# Install dependencies
npm install
# or
bun install

# Run the development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🏗️ Project Structure

```
chaitanya/
├── public/
│   ├── logo.png              # Brand logo
│   └── favicon.ico           # Site favicon
├── src/
│   ├── app/
│   │   ├── (dashboard)/      # Protected dashboard routes
│   │   │   ├── admin/        # Case Control Center
│   │   │   ├── authorities/  # Expert Network
│   │   │   ├── dashboard/    # Main Intelligence Center
│   │   │   ├── drafting/     # Petition Drafting Engine
│   │   │   ├── eligibility/  # Eligibility Scan
│   │   │   ├── marketing/    # Authority Amplifier
│   │   │   └── roadmap/      # Strategic Roadmap
│   │   ├── login/            # Authentication
│   │   ├── globals.css       # Global styles + Tailwind config
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Landing page
│   ├── components/
│   │   ├── dashboard/        # Dashboard components
│   │   ├── landing/          # Landing page components
│   │   ├── providers/        # Context providers
│   │   └── ui/               # Reusable UI components
│   └── lib/
│       ├── schemas.ts        # Zod validation schemas
│       └── store.ts          # Zustand state management
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

---

## 🎨 Design System

### Typography

- **H1**: 28px (Internal sections and cards)
- **H2**: 24px (Sub-sections)
- **H3**: 20px (Card titles)
- **Body**: 16px (Inter font)

### Color Palette

- **Primary**: Elite Orange (`oklch(0.65 0.22 45)`)
- **Accent**: Amber (`oklch(0.7 0.15 60)`)
- **Background**: Midnight Blue (Dark mode) / Off-white (Light mode)
- **Foreground**: Dynamic based on theme

### Animations

- **Standard Duration**: 0.8s
- **Easing**: Cubic Bezier `[0.215, 0.61, 0.355, 1]`

---

## 🔐 Authentication

### Demo Credentials

**Advisor Account:**
- Email: `admin@horizoneb1.com`
- Password: `admin123`

**Client Account:**
- Email: `client@horizoneb1.com`
- Password: `client123`

---

## 📄 Available Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

---

## 🛠️ Configuration

### Environment Variables

Create a `.env.local` file:

```env
# Optional: Add your environment variables here
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Tailwind Configuration

The project uses Tailwind CSS v4 with a custom design system defined in `globals.css`:
- Custom color tokens
- Typography scale
- Animation utilities
- Glass morphism effects

---

## 📱 Features Breakdown

### 1. **Landing Page**
- Premium hero section with parallax effects
- Feature showcase with glassmorphism cards
- Pricing tiers
- Trust signals and social proof

### 2. **Dashboard**
- Real-time petition strength analytics
- Evidence tracking and verification
- AI-powered recommendations
- Progress visualization

### 3. **Roadmap Builder**
- Milestone-based timeline
- Evidence gap analysis
- Strategic recommendations
- Timeline optimization

### 4. **Eligibility Scan**
- Multi-source data ingestion
- Federal compliance checks
- Automated profile analysis
- Strength scoring

### 5. **Drafting Engine**
- AI-assisted brief generation
- Section-by-section guidance
- Evidence mapping
- Export capabilities

### 6. **Expert Network**
- Verified authority matching
- Reputation scoring
- Ethical introduction system
- Sub-niche alignment

### 7. **Authority Amplifier**
- Social media content generation
- Narrative optimization
- Platform integration
- Impact analytics

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is proprietary software. All rights reserved.

---

## 👥 Team

**horizoneb1techadvisors** - Elite EB-1A Technical Advisory

- Website: [Coming Soon]
- Email: contact@horizoneb1techadvisors.com
- Support: support@horizoneb1techadvisors.com

---

## 🙏 Acknowledgments

- Next.js team for the incredible framework
- Radix UI for accessible components
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- shadcn/ui for the component library

---

## 📊 Build Status

✅ **Production Build**: Passing  
✅ **TypeScript**: No errors  
✅ **Linting**: Passing  
✅ **Deployment**: Ready

---

**Built with ❤️ for extraordinary talent worldwide**
