import { TProject } from "../TProjects";

export const ocean_intel: TProject = {
  hero: {
    breadcrumb: "Projects / FinTech",
    title: "Ocean Intel — Market Intelligence Dashboard",
    description:
      "Ocean Intel is a full-spectrum market intelligence platform delivering real-time insights across stocks, cryptocurrencies, commodities, and forex. It empowers users with customizable alerts, advanced search, and analytics tools to surface actionable opportunities in fast-moving financial markets.",
    client: "Ocean Intel",
    time_line: "3 months",
    year: "2024",
    role: "Full-stack Developer",
    stack: [
      "Next.js",
      "React",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
      "Market Data APIs",
    ],
    url: "ocean-intel",
    github: "",
  },

  images: [
    {
      url: "/images/intel-ocean.webp",
      alt: "Ocean Intel market intelligence dashboard",
    }
  ],

  achievements: [
    {
      stats: "Real-time",
      label: "Multi-market intelligence across stocks, crypto, forex, and commodities",
    },
    {
      stats: "Production-grade",
      label: "High-performance dashboard with live data streaming",
    },
    {
      stats: "Faster decisions",
      label: "Improved decision-making speed with alerts and insights",
    },
  ],

  detailed_overview: [
    {
      title: "Overview",
      data: [
        "Full-spectrum financial market intelligence platform",
        "Real-time data visualization across multiple asset classes",
        "Designed for traders, analysts, and decision-makers",
      ],
    },
    {
      title: "Key Features",
      data: [
        "Real-time multi-market intelligence (stocks, crypto, commodities, forex)",
        "Custom alerts and watchlists",
        "Advanced search and filtering",
        "Dashboard analytics and insights panels",
        "Responsive, high-performance user interface",
      ],
    },
    {
      title: "Technical Challenges & Solutions",
      data: [
        "Handled high-frequency data updates using efficient streaming and caching strategies",
        "Designed scalable alerting and notification pipelines",
        "Optimized UI rendering patterns for complex, data-heavy dashboards",
      ],
    },
    {
  title: 'Challenges & Solutions',
  data: [
    'Handled high-frequency market data without UI lag by implementing efficient real-time streaming, caching, and throttling strategies.',
    'Built scalable alerting and notification systems by designing modular data pipelines for alerts and analytics.',
    'Delivered a clean and usable experience for complex datasets by optimizing UI rendering patterns for dashboard-heavy workloads.',
  ],
},
{
  title: 'Results & Impact',
  data: [
    'Delivered a production-grade market intelligence dashboard with real-time, multi-market coverage.',
    'Significantly improved user decision-making speed through instant insights, alerts, and analytics.',
  ],
},
  ],

  project_detail: [
    {
      label: "Duration",
      content: "3 months",
    },
    {
      label: "Team Size",
      content: "Team project",
    },
    {
      label: "Role",
      content: "Full-stack Developer",
    },
    {
      label: "Category",
      content: "FinTech / Market Intelligence",
    },
  ],

  project_stack: [
    "Next.js",
    "React",
    "Node.js",
    "PostgreSQL",
    "WebSockets",
    "Market Data APIs",
  ],

  service_provided: [
    "Full-stack web development",
    "Real-time data integration",
    "Dashboard UI/UX engineering",
    "Performance optimization",
    "Scalable alerting system design",
  ],
};
