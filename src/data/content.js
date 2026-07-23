export const siteContent = {
  nav: {
    logoName: "PrimeTime",
    links: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Templates", href: "#templates" },
    ],
    ctaText: "Get Started",
  },
  hero: {
    badge: "🚀 The Ultimate Domain & Template Ecosystem",
    title: "Secure Your Domain & Launch Instantly with Prime Time",
    description: "Buy premium domains directly and instantly deploy production-ready project templates. Skip the boilerplate and take your ideas live in seconds.",
    primaryCta: "Explore Domains",
    secondaryCta: "View Templates",
  },
  // Add this features section data:
  features: {
    badge: "Powerful Capabilities",
    title: "Everything you need to go from domain to live app",
    description: "We bridge the gap between domain acquisition and development so you can launch your next venture at lightspeed.",
    items: [
      {
        icon: "🌐",
        title: "Direct Domain Purchasing",
        description: "Search and secure premium, brand-ready domains directly inside the platform with zero hassle or hidden markups."
      },
      {
        icon: "⚡",
        title: "Instant Project Templates",
        description: "Choose from a curated collection of high-performance SaaS, e-commerce, and landing page boilerplate templates."
      },
      {
        icon: "🔗",
        title: "One-Click Live Syncing",
        description: "Automatically bind your purchased domain to your selected template infrastructure with automatic SSL and DNS routing."
      },
      {
        icon: "🛠️",
        title: "Developer Friendly",
        description: "Built with modern stacks like Next.js, Tailwind CSS, and TypeScript so you can easily customize code post-launch."
      },
      {
        icon: "📈",
        title: "Scalable Architecture",
        description: "Deploy onto high-availability cloud infrastructure designed to scale seamlessly as your user traffic grows."
      },
      {
        icon: "🔒",
        title: "Enterprise Security",
        description: "Benefit from built-in DDoS protection, secure domain privacy, and automated secure certificate generation."
      }
    ]
  },
  howItWorks: {
    badge: "Simple Process",
    title: "How Prime Time Works",
    description: "Get your next web venture online in three simple steps. No complex configuration required.",
    steps: [
      {
        number: "01",
        title: "Claim Your Domain",
        description: "Search our registry and instantly purchase your ideal domain name with zero intermediary delays."
      },
      {
        number: "02",
        title: "Choose a Template",
        description: "Select from our library of production-ready project boilerplates tailored for your specific use case."
      },
      {
        number: "03",
        title: "Launch Live",
        description: "Deploy instantly with automatic DNS mapping and SSL certificates configured out of the box."
      }
    ]
  },
  templates: {
    badge: "Production Ready",
    title: "Launch with Pre-Built Templates",
    description: "Skip weeks of setup. Choose a battle-tested template built with Next.js, Tailwind CSS, and TypeScript, and deploy instantly.",
    items: [
      {
        title: "SaaS Starter Pro",
        category: "SaaS",
        description: "Complete boilerplate with authentication, Stripe billing, and dashboard UI pre-configured.",
        tags: ["Next.js", "Tailwind", "TypeScript"],
        badgeText: "Most Popular"
      },
      {
        title: "Crypto Web3 Exchange",
        category: "Crypto",
        description: "High-performance interface for cryptocurrency tracking, token swaps, and wallet connections.",
        tags: ["Next.js", "Web3", "Tailwind"],
        badgeText: "New"
      },
      {
        title: "AI Voice Agent Dashboard",
        category: "AI",
        description: "Sleek administration panel designed for managing automated call configurations and voice bots.",
        tags: ["TypeScript", "API", "Tailwind"],
        badgeText: "Featured"
      }
    ]
  },
  pricing: {
    badge: "Flexible Plans",
    title: "Simple, Transparent Pricing",
    description: "Choose the perfect plan to launch your next project with zero hidden fees.",
    plans: [
      {
        name: "Starter",
        price: "$19",
        period: "per month",
        description: "Ideal for individual developers launching their first SaaS or side project.",
        features: [
          "1 Production Template",
          "Custom Domain Connect",
          "Standard SSL & Security",
          "Community Support"
        ],
        ctaText: "Get Started",
        popular: false
      },
      {
        name: "Pro",
        price: "$49",
        period: "per month",
        description: "Best for growing teams and startups scaling high-traffic applications.",
        features: [
          "All Templates Unlocked",
          "Priority DNS Routing",
          "Advanced DDoS Protection",
          "24/7 Priority Support",
          "Automated Backups"
        ],
        ctaText: "Start Free Trial",
        popular: true
      },
      {
        name: "Enterprise",
        price: "$199",
        period: "per month",
        description: "Custom infrastructure and dedicated support for large scale operations.",
        features: [
          "Unlimited Deployments",
          "Dedicated Account Manager",
          "Custom SLA & Security",
          "White-label Options"
        ],
        ctaText: "Contact Sales",
        popular: false
      }
    ]
  }
};