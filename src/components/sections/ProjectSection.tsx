import { ExternalLink, Folder, Github } from "lucide-react";

const ProjectSection = () => {
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
                    {/* <!-- Project 1 --> */}
                    <div className="project-card">
                        <div className="project-image">
                            <div className="image-overlay">
                                <ExternalLink/>
                            </div>
                            <img src="https://placehold.co/600x400/6366f1/ffffff?text=NFT+Marketplace" alt="NFT Marketplace"/>
                        </div>
                        <div className="project-content">
                            <div className="project-header">
                                <h3>NFT Marketplace Platform</h3>
                                <div className="project-links">
                                    <a href="/serv" className="project-link" aria-label="View project">
                                        <ExternalLink/>
                                    </a>
                                    <a href="#" className="project-link" aria-label="View code">
                                       <Github/>
                                    </a>
                                </div>
                            </div>
                            <p className="project-description">
                                Full-featured NFT marketplace with minting, trading, and auction capabilities. Built on Ethereum with ERC-721 standards and IPFS integration.
                            </p>
                            <div className="project-tags">
                                <span className="tag">Solidity</span>
                                <span className="tag">React</span>
                                <span className="tag">Web3.js</span>
                                <span className="tag">IPFS</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Project 2 --> */}
                    <div className="project-card">
                        <div className="project-image">
                            <div className="image-overlay">
                                <ExternalLink/>
                            </div>
                            <img src="https://placehold.co/600x400/8b5cf6/ffffff?text=DeFi+Protocol" alt="DeFi Protocol"/>
                        </div>
                        <div className="project-content">
                            <div className="project-header">
                                <h3>DeFi Lending Protocol</h3>
                                <div className="project-links">
                                    <a href="#" className="project-link" aria-label="View project">
                                        <ExternalLink/>
                                    </a>
                                    <a href="#" className="project-link" aria-label="View code">
                                       <Github/>
                                    </a>
                                </div>
                            </div>
                            <p className="project-description">
                                Decentralized lending and borrowing platform with dynamic interest rates, collateral management, and yield farming capabilities.
                            </p>
                            <div className="project-tags">
                                <span className="tag">Solidity</span>
                                <span className="tag">Next.js</span>
                                <span className="tag">Ethers.js</span>
                                <span className="tag">DeFi</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Project 3 --> */}
                    <div className="project-card">
                        <div className="project-image">
                            <div className="image-overlay">
                                <ExternalLink/>
                            </div>
                            <img src="https://placehold.co/600x400/06b6d4/ffffff?text=DAO+Platform" alt="DAO Platform"/>
                        </div>
                        <div className="project-content">
                            <div className="project-header">
                                <h3>DAO Governance System</h3>
                                <div className="project-links">
                                    <a href="#" className="project-link" aria-label="View project">
                                        <ExternalLink/>
                                    </a>
                                    <a href="#" className="project-link" aria-label="View code">
                                        <ExternalLink/>
                                    </a>
                                </div>
                            </div>
                            <p className="project-description">
                                Comprehensive DAO platform with proposal creation, voting mechanisms, treasury management, and multi-signature wallet integration.
                            </p>
                            <div className="project-tags">
                                <span className="tag">Solidity</span>
                                <span className="tag">TypeScript</span>
                                <span className="tag">Hardhat</span>
                                <span className="tag">DAO</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Project 4 --> */}
                    <div className="project-card">
                        <div className="project-image">
                            <div className="image-overlay">
                               <ExternalLink/>
                            </div>
                            <img src="https://placehold.co/600x400/ec4899/ffffff?text=Crypto+Exchange" alt="Crypto Exchange"/>
                        </div>
                        <div className="project-content">
                            <div className="project-header">
                                <h3>Decentralized Exchange (DEX)</h3>
                                <div className="project-links">
                                    <a href="#" className="project-link" aria-label="View project">
                                        <ExternalLink/>
                                    </a>
                                    <a href="#" className="project-link" aria-label="View code">
                                        <Github/>
                                    </a>
                                </div>
                            </div>
                            <p className="project-description">
                                Automated market maker (AMM) DEX with liquidity pools, token swaps, and yield farming. Supports multiple token pairs and provides real-time analytics.
                            </p>
                            <div className="project-tags">
                                <span className="tag">Solidity</span>
                                <span className="tag">React</span>
                                <span className="tag">Web3.js</span>
                                <span className="tag">DEX</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Project 5 --> */}
                    <div className="project-card">
                        <div className="project-image">
                            <div className="image-overlay">
                                <ExternalLink/>
                            </div>
                            <img src="https://placehold.co/600x400/10b981/ffffff?text=Blockchain+Game" alt="Blockchain Game"/>
                        </div>
                        <div className="project-content">
                            <div className="project-header">
                                <h3>Play-to-Earn Gaming Platform</h3>
                                <div className="project-links">
                                    <a href="#" className="project-link" aria-label="View project">
                                        <ExternalLink/>
                                    </a>
                                    <a href="#" className="project-link" aria-label="View code">
                                        <Github/>
                                    </a>
                                </div>
                            </div>
                            <p className="project-description">
                                Blockchain-based gaming ecosystem with NFT characters, in-game economy, and play-to-earn mechanics. Features marketplace and staking rewards.
                            </p>
                            <div className="project-tags">
                                <span className="tag">Solidity</span>
                                <span className="tag">Unity</span>
                                <span className="tag">NFT</span>
                                <span className="tag">GameFi</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Project 6 --> */}
                    <div className="project-card">
                        <div className="project-image">
                            <div className="image-overlay">
                               <ExternalLink/>
                            </div>
                            <img src="https://placehold.co/600x400/f59e0b/ffffff?text=Mobile+Wallet" alt="Mobile Wallet"/>
                        </div>
                        <div className="project-content">
                            <div className="project-header">
                                <h3>Multi-Chain Crypto Wallet</h3>
                                <div className="project-links">
                                    <a href="#" className="project-link" aria-label="View project">
                                       <ExternalLink/>
                                    </a>
                                    <a href="#" className="project-link" aria-label="View code">
                                       <Github/>
                                    </a>
                                </div>
                            </div>
                            <p className="project-description">
                                Cross-platform mobile wallet supporting multiple blockchains. Features secure key management, token swaps, and dApp browser integration.
                            </p>
                            <div className="project-tags">
                                <span className="tag">Flutter</span>
                                <span className="tag">Dart</span>
                                <span className="tag">Web3</span>
                                <span className="tag">Mobile</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;