import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { projects } from "@/utils/projects"
import ProjectView from "./components/ProjectView"
export const runtime = 'edge';
export const dynamic = "force-dynamic"

const BASE_URL = "https://babarsip.pages.com"
const BRAND = "Blockchain Developer"

type Params = {
  params: { project: string }
}


export async function generateMetadata(
  { params }: Params
): Promise<Metadata> {
  const {project} = await params;
  const page = projects.find(p => p.hero.url === project)
  if (!page) return {}

  const primaryImage = page.images?.[0]

  const title = `${page.hero.title} | ${page.hero.client} Case Study`
  const description = `${page.hero.description} Built using ${page.project_stack
    .slice(0, 4)
    .join(", ")}. View full project details, tech stack, and results.`

  const url = `${BASE_URL}/projects/${page.hero.url}`

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND,
      type: "article",
      images: primaryImage
        ? [
            {
              url: `${BASE_URL}${primaryImage.url}`,
              width: 1200,
              height: 630,
              alt: primaryImage.alt,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: primaryImage
        ? [`${BASE_URL}${primaryImage.url}`]
        : [],
    },
  }
}

export default async function Page({ params }: Params) {
  const {project } = await params
  const page = projects.find(p => p.hero.url === project)
  if (!page) notFound()

  const breadcrumbItems = Array.isArray(page.hero.breadcrumb)
    ? page.hero.breadcrumb
    : page.hero.breadcrumb.split("/")

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item,
      "item":
        index === 0
          ? `${BASE_URL}/projects`
          : `${BASE_URL}/projects/${page.hero.url}`,
    })),
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": page.hero.title,
    "description": page.hero.description,
    "url": `${BASE_URL}/projects/${page.hero.url}`,
    "dateCreated": page.hero.year,
    "keywords": page.project_stack.join(", "),
    "about": page.project_stack,
    "author": {
      "@type": "Organization",
      "name": BRAND,
      "url": BASE_URL,
    },
    "client": {
      "@type": "Organization",
      "name": page.hero.client,
    },
    "image": page.images?.map(img => `${BASE_URL}${img.url}`),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      <ProjectView project={page} />
    </main>
  )
}




// import { notFound } from "next/navigation"
// import type { Metadata } from "next"
// import { projects } from "@/utils/projects"
// import ProjectView from "./components/ProjectView"

// export const dynamic = "force-dynamic"

// const BASE_URL = "https://babarsip.pages.com" 
// const BRAND = "Blockchain Developer"

// type Params = {
//   params: { project: string }
// }

// export async function generateMetadata(
//   { params }: Params
// ): Promise<Metadata> {
//   const page = projects.find(p => p.hero.url === params.project)
//   if (!page) return {}

//   const primaryImage = page.images?.[0]

//   // 🔥 CTR-focused title formula
//   const title = `${page.hero.title} | ${page.hero.client} Case Study`
//   const description =
//     `${page.hero.description} Built using ${page.project_stack.slice(0, 4).join(", ")}. View full project details, tech stack, and results.`

//   const url = `${BASE_URL}/${page.hero.url}`

//   return {
//     title,
//     description,
//     alternates: {
//       canonical: url,
//     },
//     openGraph: {
//       title,
//       description,
//       url,
//       siteName: BRAND,
//       type: "article",
//       images: primaryImage
//         ? [
//             {
//               url: `${BASE_URL}${primaryImage.url}`,
//               width: 1200,
//               height: 630,
//               alt: primaryImage.alt,
//             },
//           ]
//         : [],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: primaryImage
//         ? [`${BASE_URL}${primaryImage.url}`]
//         : [],
//     },
//   }
// }

// export default async function Page({ params }: Params) {
//   const {project} = await params
//   const page = projects.find(p => p.hero.url === project)
//   if (!page) notFound() 

//   /* -------------------------
//      Breadcrumb JSON-LD
//   -------------------------- */
//   const breadcrumbSchema = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": page.hero.breadcrumb.split('/').map((item, index) => ({
//       "@type": "ListItem",
//       "position": index + 1,
//       "name": item,
//       "item":
//         index === 0
//           ? `${BASE_URL}/projects`
//           : `${BASE_URL}/projects/${page.hero.url}`,
//     })),
//   }

//   /* -------------------------
//      Project / Case Study JSON-LD
//   -------------------------- */
//   const projectSchema = {
//     "@context": "https://schema.org",
//     "@type": "CreativeWork",
//     "name": page.hero.title,
//     "description": page.hero.description,
//     "url": `${BASE_URL}/projects/${page.hero.url}`,
//     "dateCreated": page.hero.year,
//     "keywords": page.project_stack.join(", "),
//     "about": page.project_stack,
//     "author": {
//       "@type": "Organization",
//       "name": BRAND,
//       "url": BASE_URL,
//     },
//     "provider": {
//       "@type": "Organization",
//       "name": BRAND,
//     },
//     "client": {
//       "@type": "Organization",
//       "name": page.hero.client,
//     },
//     "image": page.images?.map(img => `${BASE_URL}${img.url}`),
//   }

//   return (
//     <main>
//       {/* Breadcrumb Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(breadcrumbSchema),
//         }}
//       />

//       {/* Project Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(projectSchema),
//         }}
//       />

//       <ProjectView project={page} />
//     </main>
//   )
// }




// import { notFound } from "next/navigation"
// import type { Metadata } from "next"
// import { projects } from "@/utils/projects" 
// import ProjectView from "./components/ProjectView" 

// export const dynamic = "force-dynamic" 

// export async function generateMetadata(
//   { params }: { params: { project: string } }
// ): Promise<Metadata> {
//   const {project} = await params;
//   const page = projects.find(p => p.hero.url === project) 

//   if (!page) return {}

//   return {
//     title: page.hero.title,
//     description: page.hero.description,
//   }
// }


// type Props = {
//   params: { project: string }
// }

// export default async function Page({ params }: Props) {
//   const {project} = await params; 
//   const page = projects.find(p => p.hero.url === project)
//   if (!page) notFound()
 
//   return (
//     <main>  
//     <ProjectView project={page}/>
//     </main>
//   )
// }
