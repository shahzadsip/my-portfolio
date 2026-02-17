import { TProject } from "../TProjects";

export  const luxe_beauty: TProject = {
  hero: {
    breadcrumb: "Projects / Mobile / Web",
    title: "LuxeBeauty — Beauty Booking App",
    description:
      "LuxeBeauty is a mobile-first booking platform for beauty treatments in Bangkok, enabling users to discover services, book appointments, and chat directly with beauticians and salons. Delivered as an MVP, the app emphasizes seamless mobile UX and real-time interactions.",
    client: "LuxeBeauty",
    time_line: "2 months",
    year: "2024",
    role: "Full-stack Developer",
    stack: ["React Native", "React", "Node.js", "PostgreSQL", "Realtime Messaging"],
    url: "luxebeauty-app",
    github: "",
  },

  images: [
    {
      url: "/images/luxebeauty.webp",
      alt: "LuxeBeauty app home and service discovery",
    }, 
  ],

  achievements: [
    {
      stats: "MVP",
      label: "Delivered a fully functional end-to-end booking experience",
    },
    {
      stats: "Realtime",
      label: "Enabled live chat communication between users and providers",
    },
    {
      stats: "Mobile-first",
      label: "Optimized for smooth and responsive mobile performance",
    },
  ],

  detailed_overview: [
    {
      title: "Overview",
      data: [
        "Mobile-first platform for discovering and booking beauty services",
        "Supports appointment management and provider communication",
        "Designed for a polished, smooth mobile UX",
      ],
    },
    {
      title: "Key Features",
      data: [
        "Service discovery and appointment booking",
        "Beautician and salon profiles with details",
        "Live chat with service providers",
        "Appointment management system",
        "Mobile-first, optimized performance and UI",
      ],
    },
    {
      title: "Technical Challenges & Solutions",
      data: [
        "Implemented reliable real-time messaging with fallback states",
        "Optimized booking UI flows for speed and clarity",
        "Performance tuning for mobile rendering and network conditions",
      ],
    },
    {
  title: 'Challenges & Solutions',
  data: [
    'Implemented reliable real-time chat by building robust messaging flows with delivery confirmation and fallback states.',
    'Designed smooth, low-friction booking flows by optimizing user journeys for speed and clarity.',
    'Ensured strong mobile performance by applying targeted rendering optimizations and handling variable network conditions.',
  ],
},
{
  title: 'Results & Impact',
  data: [
    'Successfully delivered a complete MVP with an end-to-end beauty booking experience.',
    'Enabled seamless, real-time communication between users and beauticians or salons.',
  ],
},
  ],

  project_detail: [
    {
      label: "Duration",
      content: "2 months",
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
      content: "Mobile / Web",
    },
  ],

  project_stack: ["React Native", "React", "Node.js", "PostgreSQL", "Realtime Messaging"],

  service_provided: [
    "Full-stack mobile and web development",
    "Realtime messaging integration",
    "Booking flow and appointment management",
    "Mobile-first UI/UX design and optimization",
    "MVP delivery for beauty service platform",
  ],
};
