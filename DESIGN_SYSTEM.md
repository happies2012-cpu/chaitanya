# Complete Design System Documentation

## 🎨 Color Palette

### Primary Colors
- **Primary (Indigo):** `#6366F1` - Modern, trustworthy, professional
- **Secondary (Purple):** `#8B5CF6` - Creative, premium, innovative
- **Accent (Pink):** `#EC4899` - Energy, action, engagement

### Neutral Colors
- **Background (Light):** `#F8FAFC` - Clean, minimal
- **Background (Dark):** `#0F172A` - Deep, professional
- **Foreground (Light):** `#1E293B` - Text on light backgrounds
- **Foreground (Dark):** `#F8FAFC` - Text on dark backgrounds

### Semantic Colors
- **Success:** `#10B981` (Emerald) - Positive actions, confirmations
- **Destructive:** `#EF4444` (Red) - Errors, warnings, deletions
- **Muted:** `#F1F5F9` (Light) / `#1E293B` (Dark) - Secondary content

### Usage Guidelines
- Use **Primary** for main CTAs, links, and brand elements
- Use **Secondary** for secondary actions and accents
- Use **Accent** sparingly for highlights and important elements
- Maintain 4.5:1 contrast ratio for accessibility

---

## 📝 Typography

### Font Families
- **Primary:** Inter (Google Fonts) - Headings and body text
- **Accent:** Outfit (Google Fonts) - Special headings (optional)

### Font Scale & Weights

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| **H1** | 48px (3rem) | Bold (700) | 1.2 | Page titles, hero headings |
| **H2** | 36px (2.25rem) | SemiBold (600) | 1.2 | Section headings |
| **H3** | 28px (1.75rem) | SemiBold (600) | 1.3 | Subsection headings |
| **H4** | 24px (1.5rem) | Medium (500) | 1.4 | Card titles, smaller headings |
| **H5** | 20px (1.25rem) | Medium (500) | 1.4 | Minor headings |
| **Body** | 16px (1rem) | Regular (400) | 1.6 | Main content, paragraphs |
| **Small** | 14px (0.875rem) | Regular (400) | 1.5 | Secondary text, captions |
| **Caption** | 12px (0.75rem) | Regular (400) | 1.4 | Labels, metadata |

### Responsive Typography
```css
/* Mobile First */
h1 { font-size: 36px; }
h2 { font-size: 28px; }

/* Tablet (768px+) */
@media (min-width: 768px) {
  h1 { font-size: 42px; }
  h2 { font-size: 32px; }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  h1 { font-size: 48px; }
  h2 { font-size: 36px; }
}
```

---

## 📐 Layout & Spacing

### Container Widths
- **Max Width:** 1280px (80rem)
- **Content Width:** 1024px (64rem)
- **Narrow Width:** 768px (48rem)

### Spacing Scale (Tailwind-based)
- **xs:** 4px (0.25rem)
- **sm:** 8px (0.5rem)
- **md:** 16px (1rem)
- **lg:** 24px (1.5rem)
- **xl:** 32px (2rem)
- **2xl:** 48px (3rem)
- **3xl:** 64px (4rem)
- **4xl:** 96px (6rem)

### Section Padding
```css
.section-padding {
  padding: 3rem 0; /* Mobile */
}

@media (min-width: 768px) {
  .section-padding {
    padding: 4rem 0; /* Tablet */
  }
}

@media (min-width: 1024px) {
  .section-padding {
    padding: 6rem 0; /* Desktop */
  }
}
```

### Centered Layout
```css
.container-center {
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container-center {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container-center {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Min Width | Target Devices |
|------------|-----------|----------------|
| **sm** | 640px | Large phones |
| **md** | 768px | Tablets |
| **lg** | 1024px | Laptops |
| **xl** | 1280px | Desktops |
| **2xl** | 1536px | Large screens |

### Mobile-First Approach
Always design for mobile first, then enhance for larger screens:

```css
/* Mobile (default) */
.grid { grid-template-columns: 1fr; }

/* Tablet */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

---

## 🎭 Effects & Animations

### Glassmorphism
```css
.glass {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.dark .glass {
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Gradient Backgrounds
```css
.bg-gradient-primary {
  background: linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #EC4899 100%);
}

.bg-gradient-mesh {
  background-image:
    radial-gradient(at 0% 0%, rgba(99, 102, 241, 0.1) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(139, 92, 246, 0.1) 0px, transparent 50%),
    radial-gradient(at 100% 100%, rgba(236, 72, 153, 0.1) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(16, 185, 129, 0.1) 0px, transparent 50%);
}
```

### Animations

#### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out forwards;
}
```

#### Slide In
```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

#### Float
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

### Transitions
All elements have smooth transitions:
```css
* {
  transition-property: color, background-color, border-color, opacity, box-shadow, transform;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 🔘 Buttons & Icons

### Button Styles

#### Primary Button
```tsx
<Button className="bg-gradient-primary hover:opacity-90">
  Click Me
</Button>
```

#### Secondary Button
```tsx
<Button variant="outline" className="border-primary text-primary">
  Learn More
</Button>
```

#### Icon Button
```tsx
<Button size="icon" className="rounded-full">
  <Icon className="w-5 h-5" />
</Button>
```

### Icon Libraries
We recommend using **Lucide React** for consistent, modern icons:

```bash
npm install lucide-react
```

Common icons:
- **Navigation:** Menu, X, ChevronRight, ArrowRight
- **Actions:** Plus, Edit, Trash2, Save, Send
- **Social:** Mail, Phone, MapPin, Github, Linkedin
- **UI:** Check, AlertCircle, Info, Settings, User

### Icon Sizing
- **Small:** 16px (w-4 h-4)
- **Medium:** 20px (w-5 h-5)
- **Large:** 24px (w-6 h-6)
- **XL:** 32px (w-8 h-8)

---

## 🎬 Framer Motion Examples

### Page Transitions
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {content}
</motion.div>
```

### Stagger Children
```tsx
<motion.div
  variants={{
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }}
  initial="hidden"
  animate="show"
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

### Hover Effects
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Hover Me
</motion.button>
```

---

## 📋 Component Examples

### Hero Section
```tsx
<section className="section-padding bg-gradient-mesh relative overflow-hidden">
  <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
  <div className="container-center relative z-10">
    <h1 className="text-gradient-primary mb-6">Hero Title</h1>
    <p className="text-xl text-muted-foreground">Description</p>
  </div>
</section>
```

### Card Component
```tsx
<div className="glass-card p-8 rounded-2xl hover:premium-shadow transition-all">
  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
    <Icon className="w-7 h-7 text-white" />
  </div>
  <h3 className="mb-3">Card Title</h3>
  <p className="text-muted-foreground">Card description</p>
</div>
```

---

## ✅ Accessibility Guidelines

1. **Color Contrast:** Maintain minimum 4.5:1 ratio for text
2. **Focus States:** All interactive elements must have visible focus states
3. **Semantic HTML:** Use proper heading hierarchy (h1 → h2 → h3)
4. **Alt Text:** All images must have descriptive alt attributes
5. **Keyboard Navigation:** All functionality accessible via keyboard
6. **ARIA Labels:** Use for icon-only buttons and complex interactions

---

## 🚀 Quick Start Code Snippet

```tsx
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';

export default function ExamplePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-mesh relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        
        <div className="container-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">New Feature</span>
            </div>
            
            <h1 className="mb-6 text-gradient-primary">
              Build Amazing Experiences
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Create stunning, responsive applications with our modern design system.
            </p>
            
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 group">
              Get Started
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-center">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl hover:premium-shadow transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="mb-3">Feature {item}</h3>
                <p className="text-muted-foreground">
                  Description of this amazing feature.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
```

---

## 📦 Installation & Setup

### Required Packages
```bash
npm install framer-motion lucide-react
npm install @radix-ui/react-label @radix-ui/react-slot
npm install class-variance-authority clsx tailwind-merge
```

### Google Fonts Setup
Add to your `layout.tsx`:
```tsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

---

This design system ensures consistency, accessibility, and a premium user experience across all pages and components.
