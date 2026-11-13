
function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Team", href: "#team" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <a href="#home" className="logo">
                        Digital<span>World.</span>
                    </a>

                    <p>
                        Building meaningful digital experiences
                        through creativity and technology.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>

                    {footerLinks.map((link) => (
                        <a href={link.href} key={link.name}>
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="footer-social">
                    <h3>Follow Us</h3>

                    <div className="social-icons">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    © {currentYear} Digital World. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
