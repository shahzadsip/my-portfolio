import { Briefcase } from "lucide-react";

const ExperiSection = () => {
    return (
        <section className="experience" id="experience">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">
                        <Briefcase/>
                        Career Journey
                    </span>
                    <h2>Work Experience</h2>
                    <p className="section-description">
                        Building innovative blockchain solutions across diverse industries
                    </p>
                </div>
                <div className="timeline">
                    {/* <!-- Experience Item 1 --> */}
                    <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <div>
                                    <h3>Senior Blockchain Developer</h3>
                                    <p className="company">CryptoTech Solutions</p>
                                </div>
                                <span className="timeline-date">2022 - Present</span>
                            </div>
                            <div className="timeline-description">
                                <p>Leading blockchain development initiatives and architecting scalable Web3 solutions for enterprise clients.</p>
                                <ul className="timeline-highlights">
                                    <li>Architected and deployed 5+ DeFi protocols managing $50M+ in TVL</li>
                                    <li>Led team of 6 developers in building NFT marketplace with 100K+ users</li>
                                    <li>Implemented advanced smart contract security measures reducing vulnerabilities by 95%</li>
                                    <li>Mentored junior developers and established blockchain development best practices</li>
                                </ul>
                                <div className="timeline-skills">
                                    <span className="skill-badge">Solidity</span>
                                    <span className="skill-badge">DeFi</span>
                                    <span className="skill-badge">Smart Contracts</span>
                                    <span className="skill-badge">Team Leadership</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Experience Item 2 --> */}
                    <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <div>
                                    <h3>Blockchain Developer</h3>
                                    <p className="company">Web3 Innovations Lab</p>
                                </div>
                                <span className="timeline-date">2020 - 2022</span>
                            </div>
                            <div className="timeline-description">
                                <p>Developed decentralized applications and smart contracts for various blockchain ecosystems.</p>
                                <ul className="timeline-highlights">
                                    <li>Built DAO governance platform serving 10,000+ active community members</li>
                                    <li>Created automated market maker (AMM) with $10M+ in daily trading volume</li>
                                    <li>Developed cross-chain bridge enabling seamless asset transfers</li>
                                    <li>Conducted security audits and optimized gas efficiency for smart contracts</li>
                                </ul>
                                <div className="timeline-skills">
                                    <span className="skill-badge">Ethereum</span>
                                    <span className="skill-badge">Web3.js</span>
                                    <span className="skill-badge">React</span>
                                    <span className="skill-badge">Node.js</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Experience Item 3 --> */}
                    <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <div>
                                    <h3>Full-Stack Developer</h3>
                                    <p className="company">Digital Ventures Inc.</p>
                                </div>
                                <span className="timeline-date">2018 - 2020</span>
                            </div>
                            <div className="timeline-description">
                                <p>Specialized in building scalable web and mobile applications with blockchain integrations.</p>
                                <ul className="timeline-highlights">
                                    <li>Developed mobile crypto wallet app with 50K+ downloads</li>
                                    <li>Built e-commerce platforms using WordPress and Shopify for 20+ clients</li>
                                    <li>Integrated blockchain payment systems into existing web applications</li>
                                    <li>Created Flutter-based mobile apps with real-time data synchronization</li>
                                </ul>
                                <div className="timeline-skills">
                                    <span className="skill-badge">Flutter</span>
                                    <span className="skill-badge">WordPress</span>
                                    <span className="skill-badge">Shopify</span>
                                    <span className="skill-badge">API Development</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Experience Item 4 --> */}
                    <div className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <div className="timeline-header">
                                <div>
                                    <h3>Junior Developer</h3>
                                    <p className="company">TechStart Solutions</p>
                                </div>
                                <span className="timeline-date">2017 - 2018</span>
                            </div>
                            <div className="timeline-description">
                                <p>Started career building web applications and learning blockchain fundamentals.</p>
                                <ul className="timeline-highlights">
                                    <li>Contributed to frontend development of multiple client projects</li>
                                    <li>Learned smart contract development and blockchain architecture</li>
                                    <li>Assisted in building RESTful APIs and database management</li>
                                    <li>Participated in agile development processes and code reviews</li>
                                </ul>
                                <div className="timeline-skills">
                                    <span className="skill-badge">JavaScript</span>
                                    <span className="skill-badge">React</span>
                                    <span className="skill-badge">Python</span>
                                    <span className="skill-badge">PostgreSQL</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ExperiSection;