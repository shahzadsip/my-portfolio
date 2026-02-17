'use client'
import { useState } from "react";
import { projects } from "@/utils/projects";
import { ExternalLink, Folder, Github } from "lucide-react";

const ProjectSection = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projects : projects.slice(0, 6);

    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">
                        <Folder/>
                        Portfolio
                    </span>
                    <h2>Featured Projects</h2>
                    <p className="section-description">
                        Showcasing innovative blockchain solutions and Web3 applications
                    </p>
                </div>
                <div className="projects-grid">
                  {displayedProjects.map((e,i)=>(<div key={i} className="project-card">
                        <div className="project-image">
                            <div className="image-overlay">
                                <ExternalLink/>
                            </div>
                            <img src={e.images[0].url} alt={e.images[0].alt}/>
                        </div>
                        <div className="project-content">
                            <div className="project-header">
                                <h3>{e.hero.title}</h3>
                                <div className="project-links">
                                    <a href={'/'+e.hero.url} className="project-link" aria-label="View project">
                                        <ExternalLink/>
                                    </a>
                                    <a href="#" className="project-link" aria-label="View code">
                                       <Github/>
                                    </a>
                                </div>
                            </div>
                            <p
                             style={{
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }}
   className="project-description">
                                {e.hero.description}
                            </p>
                            <div className="project-tags">
                                {e.hero.stack.map((s)=><span key={e.hero.title+s} className="tag">{s}</span>)}
                                
                            </div>
                        </div>
                    </div>))}
                  
                     
                </div>
                {projects.length > 6 && (
                    <div className="" style={{marginTop:'18px'}}>
                        <button 
                        style={{width:'100%', display:'flex', justifyContent:'center'}}
                            onClick={() => setShowAll(!showAll)}
                            className="btn btn-primary"
                        >
                            <span>{showAll ? "Show Less" : "Show More"}</span>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default ProjectSection;

// import { projects } from "@/utils/projects";
// import { ExternalLink, Folder, Github } from "lucide-react";

// const ProjectSection = () => {
//     return (
//         <section className="projects" id="projects">
//             <div className="container">
//                 <div className="section-header">
//                     <span className="section-label">
//                         <Folder/>
//                         Portfolio
//                     </span>
//                     <h2>Featured Projects</h2>
//                     <p className="section-description">
//                         Showcasing innovative blockchain solutions and Web3 applications
//                     </p>
//                 </div>
//                 <div className="projects-grid">
//                   {projects.map((e,i)=>(<div key={i} className="project-card">
//                         <div className="project-image">
//                             <div className="image-overlay">
//                                 <ExternalLink/>
//                             </div>
//                             <img src={e.images[0].url} alt={e.images[0].alt}/>
//                         </div>
//                         <div className="project-content">
//                             <div className="project-header">
//                                 <h3>{e.hero.title}</h3>
//                                 <div className="project-links">
//                                     <a href={'/'+e.hero.url} className="project-link" aria-label="View project">
//                                         <ExternalLink/>
//                                     </a>
//                                     <a href="#" className="project-link" aria-label="View code">
//                                        <Github/>
//                                     </a>
//                                 </div>
//                             </div>
//                             <p className="project-description">
//                                 {e.hero.description}
//                             </p>
//                             <div className="project-tags">
//                                 {e.hero.stack.map((s)=><span key={e.hero.title+s} className="tag">{s}</span>)}
                                
//                             </div>
//                         </div>
//                     </div>))}
                  
                     
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default ProjectSection;