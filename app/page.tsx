
import "../style/home.css";
import HomePage from "../src/components/HomePage";
import "../style/globals.css"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Full Stack & Blockchain Developer',
  description: 'Custom web design, blockchain solutions, and full-stack development services for businesses. Specializing in shopify, eCommerce, and smart contracts. Get quality solutions at competitive rates.',
  keywords: [
    "Blockchain Developer",
    "Blockchain Development Services",
    "Custom Web Development",
    "Full Stack Developer",
    "Attorney Website Design",
    "Smart Contract Development",
    "Solidity Developer",
    "eCommerce Website Development",
    "Affordable Web Design",
    "Front-End Developer",
    "Mobile App Development",
    "Angular Development",
    "Minimalist Website Design",
    "Law Firm Web Design",
    "Blockchain Healthcare Solutions",
    "Web Application Development"
  ],
  authors: [{ name: "Babar S." }],
  applicationName: 'Blockchain Developer',
  alternates: {
    canonical: 'https://babarsip.pages.com'
  },
  openGraph: {
    title: 'FullStack & Blockchain Developer - Expert Web & Blockchain Development Services',
    description: 'Transform your business with custom web design, blockchain solutions, and full-stack development. Specializing in Shopify store, eCommerce & smart contracts and blockchain.',
    type: 'website',
    siteName: "Blockchain Developer",
    locale: "en_US",
    url: "https://babarsip.pages.com",
    images: [
      {
        url: 'https://babarsip.pages.com/.........png',
        width: 1200,
        height: 630,
        alt: 'CodeHazel Development Services',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blockchain Developer - Expert Web & Blockchain Development',
    description: 'Custom websites, blockchain solutions & mobile apps that drive business growth. Quality development at competitive rates.',
    creator: '@babar-s-sipra',
    images: ['https://babarsip.pages.com/wp-content/uploads/2025/01/........png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png', 
    shortcut: '/images/logo.png', 
  },
  robots: 'index, follow',
  themeColor: '#FFFFFF',
};




export default function Home() {
  return (
    <>
    <HomePage/>
    </>
  );
}
