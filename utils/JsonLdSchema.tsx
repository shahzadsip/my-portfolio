// Place this script in your Next.js layout.tsx or specific page components
// For NextJS, you can use next-seo package or create a custom component

import Script from 'next/script'

export const JsonLdSchema = () => {
  return (
    <Script
      id="json-ld-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            // Organization schema
            {
              "@type": "Organization",
              "@id": "https://babarsip.pages.com/#organization",
              "name": "Blockchain Developer",
              "url": "https://babarsip.pages.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://babarsip.pages.com/images/logo.png",
                "width": 112,
                "height": 112
              },
              "sameAs": [
                "https://twitter.com/babar-s-sipra",
                "www.linkedin.com/in/babar-s-sipra",
                "https://github.com/shahzadsip" 
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+92-300-110-1403",
                "contactType": "customer service",
                "email": "babarsip@gmail.com"
              }
            },
            
            // WebSite schema
            {
              "@type": "WebSite",
              "@id": "https://babarsip.pages.com/#website",
              "url": "https://babarsip.pages.com",
              "name": "Blockchain Developer",
              "description": "Expert Web, Mobile & Blockchain Development Services",
              "publisher": {
                "@id": "https://babarsip.pages.com/#organization"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://babarsip.pages.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            },
            
            // Professional Service schema
            {
              "@type": "ProfessionalService",
              "@id": "https://babarsip.pages.com/#service",
              "name": "Blockchain Development Services",
              "description": "Custom web design, blockchain solutions, and full-stack development services for businesses. Specializing in attorney websites, eCommerce, and smart contracts.",
              "url": "https://babarsip.pages.com",
              "provider": {
                "@id": "https://babarsip.pages.com/#organization"
              },
              "areaServed": "Worldwide",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Development Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Blockchain Development",
                    "description": "Enterprise blockchain solutions and smart contract development",
                    "url": "https://babarsip.pages.com/#blockchain-development-services/"
                  },
                  {
                    "@type": "Offer",
                    "name": "Custom Web Development",
                    "description": "Tailored web solutions for businesses of all sizes",
                    "url": "https://babarsip.pages.com/#custom-web-development-services/"
                  },
                  {
                    "@type": "Offer",
                    "name": "Mobile App Development",
                    "description": "Native and cross-platform mobile applications",
                    "url": "https://babarsip.pages.com/#hire-a-mobile-developer/"
                  }, 
                  {
                    "@type": "Offer",
                    "name": "eCommerce Development",
                    "description": "Online store creation and optimization",
                    "url": "https://babarsip.pages.com/#hire-ecommerce-developer/"
                  }
                ]
              }
            }
          ]
        })
      }}
    />
  )
}
 