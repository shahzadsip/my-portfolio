import { Blocks, FileText, PlayCircle, Rocket } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="hero">
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-label">
                    <Blocks/>
                    Blockchain Developer
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
                    <a href="#projects" className="btn btn-primary">
                        <Rocket/>
                        View My Work
                    </a>
                    <a href="YOUR_GOOGLE_DOCS_RESUME_LINK" target="_blank" className="btn btn-secondary">
                        <FileText/>
                        Download Resume
                    </a>
                </div>
            </div>
            <div className="hero-video">
                <div className="video-placeholder">
                    {/* <!-- Replace with your video embed -->
                    <!-- <iframe src="YOUR_VIDEO_URL" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> --> */}
                    <div style={{textAlign: 'center'}}>
                        <PlayCircle style={{width: '64px', height: '64px', marginBottom: '1rem'}}/>
                        <p>Add your intro video here</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default HeroSection;