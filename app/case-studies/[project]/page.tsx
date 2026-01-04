import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { projects } from "@/utils/projects"
import { TProject } from "@/utils/TProjects"
import ProjectView from "./components/ProjectView"

export const dynamic = "force-dynamic" 

export async function generateMetadata(
  { params }: { params: { project: string } }
): Promise<Metadata> {
  // const page = pages.find(p => p.slug === params.slug)
  const {project} = await params;
  const page_data:TProject = projects[project]

  if (!page_data) return {}

  return {
    title: page_data.hero.title,
    description: page_data.hero.description,
  }
}


type Props = {
  params: { project: string }
}

export default async function Page({ params }: Props) {
  const {project} = await params;
   const page_data:TProject = projects[await project]
  // if (!page_data) notFound()

  return (
    <main> 
      
      {/* {project} */}
    <ProjectView project={page_data}/>
    </main>
  )
}
