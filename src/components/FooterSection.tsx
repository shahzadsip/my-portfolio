import { Heart } from "lucide-react";

const FooterSection = () => {
    return (
         <footer className="footer">
        <div className="container">
            <div className="bg-pattern-dots"></div>
            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-brand">
                        <div className="logo">DevChain</div>
                        <p className="footer-description">
                            Building the future of decentralized applications, one smart contract at a time.
                        </p>
                    </div>
                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="#about">About</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#experience">Experience</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="#">Smart Contract Development</a></li>
                                <li><a href="#">DApp Development</a></li>
                                <li><a href="#">Blockchain Consulting</a></li>
                                <li><a href="#">Security Audits</a></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <h4>Connect</h4>
                            <ul>
                                <li><a href="https://github.com/yourusername" target="_blank">GitHub</a></li>
                                <li><a href="https://linkedin.com/in/yourusername" target="_blank">LinkedIn</a></li>
                                <li><a href="https://twitter.com/yourusername" target="_blank">Twitter</a></li>
                                <li><a href="mailto:your.email@example.com">Email</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 DevChain. All rights reserved.</p>
                    <p>Crafted with <Heart className="heart-icon"/> using blockchain technology</p>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default FooterSection;