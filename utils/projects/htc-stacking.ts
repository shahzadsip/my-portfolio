import { TProject } from "../TProjects";

export  const htc_stacking: TProject = {
  hero: {
    breadcrumb: "Projects / Blockchain",
    title: "Staking Platform Development for HitTheCircle",
    description:
      "Developed a comprehensive staking platform for HitTheCircle, enabling users to stake tokens, earn compound rewards, and participate in governance. The platform encourages long-term holding and community engagement with automated reward distribution and user-friendly interfaces.",
    client: "HitTheCircle",
    time_line: "3 months",
    year: "2024",
    role: "Full-stack Blockchain Developer",
    stack: ["Solidity", "React", "Web3.js", "Ethereum", "Smart Contracts", "DeFi"],
    url: "htc-stacking-platform",
    github: "",
  },

  images: [
    
    {
      url: "/images/htc-staking.webp",
      alt: "HitTheCircle fundraising token tokenomics overview",
    },
  ],

  achievements: [
    {
      stats: "70%",
      label: "Token staking rate achieved",
    },
    {
      stats: "$100K+",
      label: "Rewards distributed to users",
    },
    {
      stats: "0%",
      label: "Security issues reported",
    },
    {
      stats: "200%",
      label: "Increase in user engagement",
    },
  ],

  detailed_overview: [
    {
      title: "Overview",
      data: [
        "Comprehensive staking platform for HitTheCircle ecosystem",
        "Supports flexible staking periods and compound reward calculation",
        "Governance participation and automated reward distribution",
      ],
    },
    {
      title: "Key Features",
      data: [
        "Flexible staking periods for users",
        "Compound reward calculation",
        "Governance participation rewards",
        "Staking pool management",
        "Automated reward distribution",
        "User-friendly interface and dashboard",
      ],
    },
    {
      title: "Technical Challenges & Solutions",
      data: [
        "Implemented secure staking logic with time-locked smart contracts",
        "Designed fair reward algorithms for compound rewards",
        "Added anti-exploitation measures to prevent abuse",
        "Created intuitive UI/UX for seamless user experience",
      ],
    },
    {
  title: 'Challenges & Solutions',
  data: [
    'Implemented secure staking logic by using time-locked smart contracts and well-defined staking lifecycles.',
    'Ensured fair and accurate reward calculations by designing transparent and deterministic reward algorithms.',
    'Prevented staking and reward exploitation by introducing anti-gaming safeguards and contract-level validations.',
    'Delivered a user-friendly staking experience by designing an intuitive UI/UX for managing stakes and rewards.',
  ],
},
{
  title: 'Results & Impact',
  data: [
    'Achieved a strong 70% token staking participation rate across the ecosystem.',
    'Distributed over $100K in staking rewards to users.',
    'Maintained a perfect security record with zero reported incidents.',
    'Increased overall user engagement by more than 200%.',
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
      content: "Solo project",
    },
    {
      label: "Role",
      content: "Full-stack Blockchain Developer",
    },
    {
      label: "Category",
      content: "Blockchain / DeFi",
    },
  ],

  project_stack: ["Solidity", "React", "Web3.js", "Ethereum", "Smart Contracts", "DeFi"],

  service_provided: [
    "Full-stack blockchain development",
    "Smart contract staking logic implementation",
    "Compound reward algorithms and governance features",
    "UI/UX development for staking dashboards",
    "Security and anti-exploitation mechanisms",
  ],
};
