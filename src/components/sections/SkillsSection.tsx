import { Blocks, Layout, Server, Smartphone, Zap } from "lucide-react";

const SkillsSection = () => {
    return (
        <section className="skills">
            
            <div className="container">
                <div className="section-header">
                    <span className="section-label">
                        <Zap/>
                        My expertise
                    </span>
                    <h2>Skills & Technologies</h2>
                    <p className="section-description">
                        A comprehensive toolkit for building world-class blockchain solutions
                    </p>
                </div>
                <div className="skills-grid">
                    {/* <!-- Blockchain & Web3 --> */}
                    <div className="skill-category">
                        <div className="category-header">
                            <Blocks/>
                            <h3>Blockchain & Web3</h3>
                        </div>
                        <div className="skill-tags">
                            <span className="skill-tag">Solidity</span>
                            <span className="skill-tag">Ethereum</span>
                            <span className="skill-tag">Smart Contracts</span>
                            <span className="skill-tag">Web3.js</span>
                            <span className="skill-tag">Ethers.js</span>
                            <span className="skill-tag">Hardhat</span>
                            <span className="skill-tag">Truffle</span>
                            <span className="skill-tag">IPFS</span>
                            <span className="skill-tag">NFTs</span>
                            <span className="skill-tag">DAOs</span>
                            <span className="skill-tag">DeFi</span>
                        </div>
                    </div>

                    {/* <!-- Frontend Development --> */}
                    <div className="skill-category">
                        <div className="category-header">
                            <Layout/>
                            <h3>Frontend Development</h3>
                        </div>
                        <div className="skill-tags">
                            <span className="skill-tag">React</span>
                            <span className="skill-tag">Next.js</span>
                            <span className="skill-tag">TypeScript</span>
                            <span className="skill-tag">JavaScript</span>
                            <span className="skill-tag">Tailwind CSS</span>
                            <span className="skill-tag">HTML5/CSS3</span>
                            <span className="skill-tag">Redux</span>
                            <span className="skill-tag">Vue.js</span>
                        </div>
                    </div>

                    {/* <!-- Backend Development --> */}
                    <div className="skill-category">
                        <div className="category-header">
                            <Server/>
                            <h3>Backend Development</h3>
                        </div>
                        <div className="skill-tags">
                            <span className="skill-tag">Node.js</span>
                            <span className="skill-tag">Express</span>
                            <span className="skill-tag">Python</span>
                            <span className="skill-tag">Django</span>
                            <span className="skill-tag">PostgreSQL</span>
                            <span className="skill-tag">MongoDB</span>
                            <span className="skill-tag">REST APIs</span>
                            <span className="skill-tag">GraphQL</span>
                        </div>
                    </div>

                    {/* <!-- Mobile & Other --> */}
                    <div className="skill-category">
                        <div className="category-header">
                            <Smartphone/>
                            <h3>Mobile & Platforms</h3>
                        </div>
                        <div className="skill-tags">
                            <span className="skill-tag">Flutter</span>
                            <span className="skill-tag">Dart</span>
                            <span className="skill-tag">React Native</span>
                            <span className="skill-tag">WordPress</span>
                            <span className="skill-tag">Shopify</span>
                            <span className="skill-tag">Firebase</span>
                            <span className="skill-tag">AWS</span>
                            <span className="skill-tag">Docker</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;