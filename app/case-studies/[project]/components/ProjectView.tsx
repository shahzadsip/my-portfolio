
'use client'
import { useTheme } from '@/src/hooks/useTheme';
import '@/style/projects.css'
import Link from 'next/link';
import { TProject } from '@/utils/TProjects';
import Image from 'next/image';
interface IProps {
  project: TProject;
}
export default function ProjectView  ({project}:IProps)  {

     const { theme } = useTheme();


    
const hero = project.hero;
const images = project.images;
const overview = project.detailed_overview;
const achievements = project.achievements;
const detail = project.project_detail;
const stack = project.project_stack;
const services = project.service_provided;


    return (
       <body>
    <div className="bg-pattern-dots"></div>

    
    <nav className="navbar">
        <div className="nav-container">
            <Link href="/" className="logo">Shahzad</Link>
            <Link href="/" className="back-btn">
                ← Back to Portfolio
            </Link>
        </div>
    </nav>

    
    <section className="project-hero">
        <div className="hero-content">
            <div className="breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/case-studies">Case Studies</Link>
                <span>/</span>
                <span>{hero.breadcrumb}</span>
            </div>

            <h1>{hero.title}</h1>
            <p className="project-subtitle">
                {hero.description}
            </p>

            <div className="project-meta">
                <div className="meta-item">
                    <span className="meta-label">Client</span>
                    <span className="meta-value">{hero.client}</span>
                </div>
                <div className="meta-item">
                    <span className="meta-label">Timeline</span>
                    <span className="meta-value">{hero.time_line}</span>
                </div>
                <div className="meta-item">
                    <span className="meta-label">Year</span>
                    <span className="meta-value">{hero.year}</span>
                </div>
                <div className="meta-item">
                    <span className="meta-label">Role</span>
                    <span className="meta-value">{hero.role}</span>
                </div>
            </div>

            <div className="project-tags">
                {/* <span className="tag">Solidity</span>
                <span className="tag">React</span>
                <span className="tag">Web3.js</span>
                <span className="tag">IPFS</span>
                <span className="tag">Ethereum</span>
                <span className="tag">Smart Contracts</span> */}
                {hero.stack.map((s)=> <span key={s} className="tag">{s}</span>)}
            </div>

            <div className="action-buttons">
                <a href="#" className="btn btn-primary">View Live Demo</a>
                <a href="#" className="btn btn-secondary">View on GitHub</a>
            </div>
        </div>
    </section>

    {/* <!-- Main Content --> */}
    <div className="container">
        {/* <!-- Image Gallery --> */}
        <div className="image-gallery">
            <div className="main-image">
                <img src="https://placehold.co/1200x600/6366f1/ffffff?text=NFT+Marketplace+Dashboard" alt="NFT Marketplace Dashboard"/>
            </div>
            <div className="thumbnail-grid">
                {images.map((i)=><div key={i.alt}  className="thumbnail">
                    <Image src={i.url} alt={i.alt} height={150} width={250} />
                </div> )}
                {/* <div className="thumbnail">
                    <img src="https://placehold.co/400x300/06b6d4/ffffff?text=Trading+View" alt="Trading View"/>
                </div>
                <div className="thumbnail">
                    <img src="https://placehold.co/400x300/ec4899/ffffff?text=Auction+Page" alt="Auction Page"/>
                </div>
                <div className="thumbnail">
                    <img src="https://placehold.co/400x300/10b981/ffffff?text=User+Profile" alt="User Profile"/>
                </div> */}
            </div>
        </div>

      
        <div className="stats-grid">
            {achievements.map((a)=><div key={a.label} className="stat-card">
                <div className="stat-number">{a.stats}</div>
                <div className="stat-label">{a.label}</div>
            </div>)}
            {/* <div className="stat-card">
                <div className="stat-number">100K+</div>
                <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-card">
                <div className="stat-number">$50M+</div>
                <div className="stat-label">Trading Volume</div>
            </div>
            <div className="stat-card">
                <div className="stat-number">250K+</div>
                <div className="stat-label">NFTs Minted</div>
            </div> */}
        </div>

        
        <div className="content-grid">
            <div className="main-content">


                {
                    overview.map((d)=>(<div key={d.title} className='content-section'>
                        <h2 className="">{d.title}</h2>
                        <ul>{d.title == 'Key Features'? d.data.map((i)=><li key={i}>{i}</li>) : d.data.map((i)=><p key={i}>{i}</p>)}</ul>
                        
                    </div>))
                }


                {/* <div className="content-section">
                    <h2>Project Overview</h2>
                    <p>
                        The NFT Marketplace Platform is a fully decentralized application built on the Ethereum blockchain, designed to empower digital artists and collectors. The platform provides a seamless experience for minting, buying, selling, and auctioning NFTs while ensuring security, transparency, and true ownership through blockchain technology.
                    </p>
                    <p>
                        This project was developed for CryptoArt Labs, a leading digital art platform seeking to bridge the gap between traditional art collectors and the emerging NFT space. The marketplace handles thousands of transactions daily and has become one of the top NFT platforms in the ecosystem.
                    </p>
                </div>

                <div className="content-section">
                    <h2>Key Features</h2>
                    <ul>
                        <li>ERC-721 and ERC-1155 token standard support for both unique and semi-fungible NFTs</li>
                        <li>Gasless minting using meta-transactions and lazy minting techniques</li>
                        <li>Integrated IPFS storage for decentralized metadata and media hosting</li>
                        <li>Dutch and English auction mechanisms with automatic settlement</li>
                        <li>Royalty distribution system ensuring creators earn from secondary sales</li>
                        <li>Multi-chain support (Ethereum, Polygon, BSC)</li>
                        <li>Advanced search and filtering with collection analytics</li>
                        <li>Wallet integration (MetaMask, WalletConnect, Coinbase Wallet)</li>
                        <li>Real-time price tracking and market analytics dashboard</li>
                        <li>Social features including following, commenting, and sharing</li>
                    </ul>
                </div>

                <div className="content-section">
                    <h2>Technical Implementation</h2>
                    <p>
                        The smart contract architecture was designed with security and gas optimization as top priorities. We implemented OpenZeppelin's audited contracts as a foundation and added custom functionality for marketplace operations, royalty management, and auction mechanics.
                    </p>
                    <p>
                        The frontend was built using React with Web3.js for blockchain interactions. We implemented optimistic UI updates to provide instant feedback while transactions are being confirmed on-chain. The application uses a GraphQL API to index blockchain data, providing fast queries for marketplace listings and transaction history.
                    </p>
                    <p>
                        All NFT metadata and media files are stored on IPFS to ensure decentralization and permanence. We implemented a pinning service to guarantee content availability and developed a caching layer to optimize load times while maintaining decentralization principles.
                    </p>
                </div>

                <div className="content-section">
                    <h2>Challenges & Solutions</h2>
                    <p>
                        One of the primary challenges was reducing gas costs for users. We implemented lazy minting, which allows creators to list NFTs without paying gas fees upfront. The minting transaction only occurs when a buyer purchases the NFT, significantly reducing barriers to entry for creators.
                    </p>
                    <p>
                        Another challenge was ensuring security in the auction mechanism. We implemented thorough testing using Hardhat and conducted multiple security audits. The smart contracts include reentrancy guards, overflow checks, and time-lock mechanisms to prevent exploitation.
                    </p>
                    <p>
                        Scaling was addressed through implementing layer-2 solutions and multi-chain support. Users can choose to mint and trade on networks with lower fees while maintaining the security guarantees of the Ethereum mainnet.
                    </p>
                </div>

                <div className="content-section">
                    <h2>Results & Impact</h2>
                    <p>
                        Since launch, the platform has facilitated over $50 million in trading volume and has onboarded more than 100,000 active users. Over 250,000 NFTs have been minted on the platform, representing artists from over 80 countries worldwide.
                    </p>
                    <p>
                        The platform's success has led to partnerships with major digital art galleries and traditional auction houses looking to enter the NFT space. The royalty distribution system has generated over $5 million in creator earnings from secondary sales, demonstrating the platform's commitment to supporting digital artists.
                    </p>
                </div> */}



            </div>

           
            <div className="sidebar">
                <div className="info-card">
                    <h3>Project Details</h3>
                    {detail.map((d)=><div key={d.label} className="info-item">
                        <span className="info-label">{d.label}</span>
                        <span className="info-value">{d.content}</span>
                    </div>)}
                    {/* <div className="info-item">
                        <span className="info-label">Category</span>
                        <span className="info-value">Web3 / NFT Marketplace</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Blockchain</span>
                        <span className="info-value">Ethereum, Polygon</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Token Standard</span>
                        <span className="info-value">ERC-721, ERC-1155</span>
                    </div>
                    <div className="info-item">
                        <span className="info-label">Status</span>
                        <span className="info-value">Live in Production</span>
                    </div> */}
                </div>

                <div className="info-card">
                    <h3>Tech Stack</h3>
                    <div className="tech-stack">
                        {stack.map((s)=> <span key={s} className="tech-tag">{s}</span>)}
                        {/* <span className="tech-tag">Solidity</span>
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">Web3.js</span>
                        <span className="tech-tag">Hardhat</span>
                        <span className="tech-tag">IPFS</span>
                        <span className="tech-tag">The Graph</span>
                        <span className="tech-tag">Node.js</span>
                        <span className="tech-tag">PostgreSQL</span>
                        <span className="tech-tag">Redis</span>
                        <span className="tech-tag">Docker</span>
                        <span className="tech-tag">AWS</span> */}
                    </div>
                </div>

                <div className="info-card">
                    <h3>Services Provided</h3>
                     <ul style={{listStyle: 'none', padding: 0}}>
                        {services.map((s)=><li key={s} style={{
    padding: '0.5rem 0',
    borderBottom: '1px solid var(--border-color)',
  }}>Smart Contract Development</li>)}
                        {/* <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">Smart Contract Development</li>
                        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">Frontend Development</li>
                        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">Backend API Design</li>
                        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">Security Auditing</li>
                        <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--border-color);">DevOps & Deployment</li>
                        <li style="padding: 0.5rem 0;">Ongoing Maintenance</li> */}
                    </ul> 
                </div>
            </div>
        </div>
    </div>
 
     
</body>
    );
}
