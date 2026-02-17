import { TProject } from "../TProjects";

export  const burlcore_p2p: TProject = {
  hero: {
    breadcrumb: "Projects / Web / Blockchain / FinTech",
    title: "Burlcore Marketplace — P2P Trading Platform",
    description:
      "Burlcore Marketplace is a decentralized peer-to-peer trading platform built around BURL, a reward-based asset token representing fractional ownership in an active mining operation. It provides secure P2P trading with escrow, dynamic order books, and trustless transaction flows.",
    client: "Burlcore",
    time_line: "3 months",
    year: "2024",
    role: "Lead Full-stack Developer",
    stack: ["Next.js", "React", "Solidity", "Web3", "Supabase", "PostgreSQL"],
    url: "burlcore-p2p-marketplace",
    github: "",
  },

  images: [
    {
      url: "/images/BurlcoreMarketplace.webp",
      alt: "Burlcore Marketplace trading dashboard",
    }
  ],

  achievements: [
    {
      stats: "MVP",
      label: "Delivered a robust decentralized P2P trading marketplace",
    },
    {
      stats: "Secure",
      label: "Enabled trust-minimized transactions with escrow flows",
    },
    {
      stats: "Real-time",
      label: "Dynamic order book and balance tracking with high data integrity",
    },
  ],

  detailed_overview: [
    {
      title: "Overview",
      data: [
        "Decentralized marketplace for P2P trading using BURL token",
        "Reward-based fractional ownership token for mining operations",
        "Trustless escrow and secure transaction flows",
      ],
    },
    {
      title: "Key Features",
      data: [
        "Peer-to-peer trading with escrow safety",
        "Dynamic order book and trade history tracking",
        "Wallet and balance monitoring",
        "Secure transaction flows with auditability",
        "Admin/operations monitoring capabilities",
      ],
    },
    {
      title: "Technical Challenges & Solutions",
      data: [
        "Ensured consistent balances across concurrent actions with transactional safeguards",
        "Designed escrow lifecycle with clear states and audit trails",
        "Optimized database queries and real-time updates for fast trading UX",
      ],
    },
    {
  title: 'Challenges & Solutions',
  data: [
    'Prevented inconsistent balances during concurrent actions by implementing transactional safeguards and server-side trade matching logic.',
    'Designed auditable escrow and settlement flows by defining clear escrow lifecycles with traceable state transitions.',
    'Delivered a fast and reliable trading experience by optimizing database queries and enabling real-time updates without compromising data integrity.',
  ],
},
{
  title: 'Results & Impact',
  data: [
    'Successfully delivered a robust P2P trading marketplace MVP.',
    'Enabled secure and trust-minimized peer-to-peer exchanges through escrow-backed transaction flows.',
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
      content: "Lead Full-stack Developer",
    },
    {
      label: "Category",
      content: "Web / Blockchain / FinTech",
    },
  ],

  project_stack: ["Next.js", "React", "Solidity", "Web3", "Supabase", "PostgreSQL"],

  service_provided: [
    "Full-stack web development",
    "Smart contract and Web3 integration",
    "P2P trading logic with escrow and settlement flows",
    "Real-time order book and wallet tracking",
    "Database optimization and transactional safeguards",
  ],
};
