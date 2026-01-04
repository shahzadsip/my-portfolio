import {  User } from "lucide-react";

const AboutSection = () => {
    return (
         <section className="about" id="about">
            
            <div className="bg-pattern-lines"></div>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">
                        <User/>
                        Get to know me
                    </span>
                    <h2>About Me</h2>
                    <p className="section-description">
                        Passionate about building decentralized solutions that make a difference
                    </p>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <p className="lead">
                            I'm a full-stack blockchain developer with extensive experience in building cutting-edge Web3 applications, 
                            decentralized platforms, and blockchain-based solutions.
                        </p>
                        <p>
                            My journey in blockchain development has led me to work on diverse projects including NFT marketplaces, 
                            DAO governance systems, DeFi protocols, cryptocurrency exchanges, and blockchain gaming platforms. 
                            I combine deep technical expertise with a strong understanding of tokenomics and smart contract security.
                        </p>
                        <p>
                            Beyond blockchain, I bring solid full-stack development skills with mobile app development using Flutter 
                            and web platforms like WordPress and Shopify, allowing me to deliver complete end-to-end solutions.
                        </p>
                        
                    </div>
                    {/* <div className="about-image">
                        <div className="image-placeholder">
                            <Code2/>
                            <p>Add your professional photo here</p>
                        </div>
                    </div> */}
                         <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-number">5+</div>
                                <div className="stat-label">Years Experience</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">50+</div>
                                <div className="stat-label">Projects Delivered</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">30+</div>
                                <div className="stat-label">Happy Clients</div>
                            </div>
                            <div className="stat-card">
                                <div className="stat-number">1000+</div>
                                <div className="stat-label">Cups Of Coffee</div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;

// import { Code2, User } from "lucide-react";

// const AboutSection = () => {
//     return (
//          <section className="about" id="about">
            
//             <div className="bg-pattern-lines"></div>
//             <div className="container">
//                 <div className="section-header">
//                     <span className="section-label">
//                         <User/>
//                         Get to know me
//                     </span>
//                     <h2>About Me</h2>
//                     <p className="section-description">
//                         Passionate about building decentralized solutions that make a difference
//                     </p>
//                 </div>
//                 <div className="about-content">
//                     <div className="about-text">
//                         <p className="lead">
//                             I'm a full-stack blockchain developer with extensive experience in building cutting-edge Web3 applications, 
//                             decentralized platforms, and blockchain-based solutions.
//                         </p>
//                         <p>
//                             My journey in blockchain development has led me to work on diverse projects including NFT marketplaces, 
//                             DAO governance systems, DeFi protocols, cryptocurrency exchanges, and blockchain gaming platforms. 
//                             I combine deep technical expertise with a strong understanding of tokenomics and smart contract security.
//                         </p>
//                         <p>
//                             Beyond blockchain, I bring solid full-stack development skills with mobile app development using Flutter 
//                             and web platforms like WordPress and Shopify, allowing me to deliver complete end-to-end solutions.
//                         </p>
//                         <div className="stats-grid">
//                             <div className="stat-card">
//                                 <div className="stat-number">5+</div>
//                                 <div className="stat-label">Years Experience</div>
//                             </div>
//                             <div className="stat-card">
//                                 <div className="stat-number">50+</div>
//                                 <div className="stat-label">Projects Delivered</div>
//                             </div>
//                             <div className="stat-card">
//                                 <div className="stat-number">30+</div>
//                                 <div className="stat-label">Happy Clients</div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="about-image">
//                         <div className="image-placeholder">
//                             <Code2/>
//                             <p>Add your professional photo here</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default AboutSection;