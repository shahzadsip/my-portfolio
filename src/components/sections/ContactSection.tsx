import { Clock, Github, Linkedin, Mail, MapPin, Send, X } from "lucide-react";

const ContactSection = () => {
    return (
        <section className="contact" id="contact">
            <div className="bg-pattern-code" id="codePatternContainer"></div>
            <div className="container">
                <div className="section-header">
                    <span className="section-label">
                        <Mail/>
                        Get in touch
                    </span>
                    <h2>Let's Work Together</h2>
                    <p className="section-description">
                        Have a project in mind? Let's discuss how I can help bring your blockchain vision to life
                    </p>
                </div>
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p className="contact-intro">
                            I'm always interested in hearing about new projects and opportunities. Whether you need a blockchain developer, 
                            want to collaborate, or just want to say hi, feel free to reach out!
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <Mail/>
                                </div>
                                <div className="contact-text">
                                    <h4>Email</h4>
                                    <a href="mailto:your.email@example.com">your.email@example.com</a>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <MapPin/>
                                </div>
                                <div className="contact-text">
                                    <h4>Location</h4>
                                    <p>Rawalpindi, Punjab, Pakistan</p>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-icon">
                                    <Clock/>
                                </div>
                                <div className="contact-text">
                                    <h4>Availability</h4>
                                    <p>Open to freelance & full-time opportunities</p>
                                </div>
                            </div>
                        </div>
                        <div className="social-links">
                            <a href="https://github.com/yourusername" target="_blank" className="social-link" aria-label="GitHub">
                                <Github/>
                            </a>
                            <a href="https://linkedin.com/in/yourusername" target="_blank" className="social-link" aria-label="LinkedIn">
                                <Linkedin/>
                            </a>
                            <a href="https://twitter.com/yourusername" target="_blank" className="social-link" aria-label="Twitter">
                                <X/>
                            </a>
                            <a href="https://t.me/yourusername" target="_blank" className="social-link" aria-label="Telegram">
                                <Send/>
                            </a>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        <form className="contact-form" id="contactForm">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input type="text" id="name" name="name" required placeholder="Your name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input type="email" id="email" name="email" required placeholder="your@email.com"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <input type="text" id="subject" name="subject" required placeholder="What's this about?"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea id="message" name="message" rows={6} required placeholder="Tell me about your project..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary submit-btn">
                                <Send/>
                                Send Message
                            </button>
                            <div className="form-message" id="formMessage"></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;