import { TProject } from "../TProjects";

export  const bera_royal: TProject = {
  hero: {
    breadcrumb: "Projects / Blockchain / GameDev",
    title: "BeraRoyale — On-chain Trading Game",
    description:
      "BeraRoyale is an on-chain trading game that combines real market dynamics with interactive gameplay. Players use HONEY tokens to predict asset price movements (e.g., BTC, BERA) in UP/DOWN game modes, fully executed via smart contracts for trustless, transparent gameplay.",
    client: "BeraRoyale",
    time_line: "1–2 months",
    year: "2024",
    role: "Blockchain & Full-stack Developer",
    stack: ["Solidity", "EVM", "Web3", "Next.js", "React", "Oracle / Price Feeds"],
    url: "beraroyale-crypto-game",
    github: "#",
  },

  images: [
    {
      url: "/images/bera-royale1.png",
      alt: "BeraRoyale on-chain game interface",
    },
    {
      url: "/images/bera-royale2.png",
      alt: "BeraRoyale trading dashboard and price prediction panel",
    },
    {
      url: "/images/bera-royale3.png",
      alt: "BeraRoyale on-chain game ",
    },
    {
      url: "/images/bera-royale4.png",
      alt: "BeraRoyale trading dashboard ",
    },
  ],

  achievements: [
    {
      stats: "Fully on-chain",
      label: "Game execution and settlements through smart contracts",
    },
    {
      stats: "Scalable",
      label: "Base architecture supports additional game modes",
    },
    {
      stats: "Tokenized",
      label: "HONEY token deposits and payouts integrated",
    },
  ],

  detailed_overview: [
    {
      title: "Overview",
      data: [
        "On-chain trading game integrating real market data",
        "Players predict UP/DOWN price movements using HONEY tokens",
        "Designed to provide fair, transparent, and interactive gameplay",
      ],
    },
    {
      title: "Key Features",
      data: [
        "Smart contract-powered on-chain game modes",
        "UP/DOWN prediction tied to live market prices",
        "Token-based deposits, gameplay, and payouts",
        "Game lifecycle and settlement handling",
        "Modern responsive web UI for trading-like interactions",
      ],
    },
    {
      title: "Technical Challenges & Solutions",
      data: [
        "Ensured fair price resolution using verifiable oracle feeds",
        "Optimized on-chain settlement logic to reduce gas and latency",
        "Implemented clear UX states for pending, success, and failure",
        "Handled blockchain latency while maintaining smooth gameplay",
      ],
    },
    {
  title: 'Challenges & Solutions',
  data: [
    'Ensured fair and tamper-resistant price resolution by designing smart contract flows around verifiable oracle-based price inputs.',
    'Handled on-chain settlement efficiently by optimizing settlement logic and minimizing expensive on-chain operations.',
    'Delivered a smooth user experience despite blockchain latency by implementing clear pending, success, and failure UI states.',
  ],
},
{
  title: 'Results & Impact',
  data: [
    'Delivered a fully on-chain trading game with real-time market-based gameplay.',
    'Established a scalable smart contract foundation for introducing additional game modes in the future.',
  ],
},
  ],

  project_detail: [
    {
      label: "Duration",
      content: "1–2 months",
    },
    {
      label: "Team Size",
      content: "Team project",
    },
    {
      label: "Role",
      content: "Blockchain & Full-stack Developer",
    },
    {
      label: "Category",
      content: "Blockchain / GameDev",
    },
  ],

  project_stack: ["Solidity", "EVM", "Web3", "Next.js", "React", "Oracle / Price Feeds"],

  service_provided: [
    "Smart contract development for on-chain game logic",
    "Integration with price oracles for live asset data",
    "Full-stack web application development",
    "UX design for blockchain-based gameplay",
    "Optimization of on-chain settlement and token payouts",
  ],
};
