import { projects } from "@/utils/projects";
import { Blocks, Brain, Code2, FileText, PlayCircle, Rocket } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="hero">
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-label">
                    <Brain/>
                    AI Developer
                </div>
                <div className="hero-label">
                    <Blocks/>
                    Blockchain Developer
                </div>
                <div className="hero-label">
                    <Code2/>
                    Web Application Developer
                </div>
                <h1>
                    Building the Future of<br/>
                    <span className="gradient-text">Decentralized Web</span>
                </h1>
                <p className="hero-description">
                    Full-stack blockchain developer specializing in NFTs, DAOs, DeFi platforms, and Web3 applications. 
                    Turning complex blockchain concepts into elegant, scalable solutions.
                </p>
                <div className="hero-buttons">
                    <a onClick={()=>console.log(projects)} href="#projects" className="btn btn-primary">
                        <Rocket/>
                        View My Work
                    </a>
                    <a href="/resume.pdf" target="_blank" className="btn btn-secondary">
                        <FileText/>
                        Download Resume
                    </a>
                </div>
            </div>
            <div className="hero-video">
                <div className="video-placeholder">
                    {/* <!-- Replace with your video embed -->
                    <!-- <iframe src="YOUR_VIDEO_URL" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> --> */}
                    {/* <div style={{textAlign: 'center'}}>
                        <PlayCircle style={{width: '64px', height: '64px', marginBottom: '1rem'}}/>
                        <p>Add your intro video here</p>
                    </div> */}
                    {/* <img src="/image.png" style={{width:'100%',  objectFit:'cover', objectPosition:'top'}}/> */}
                    <img src="/Portfolio-Image.png" style={{width:'100%',  objectFit:'cover', objectPosition:'top'}}/>
                </div>
            </div>
        </div>
    </section>
    );
}

export default HeroSection;