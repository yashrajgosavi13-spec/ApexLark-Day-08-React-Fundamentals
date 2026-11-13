
function About() {
    const aboutPoints = [
        "Creative and innovative solutions",
        "Experienced development team",
        "Customer-focused approach",
        "Modern technologies and tools"
    ];

    return (
        <section className="about section" id="about">
            <div className="about-visual">
                <div className="about-card">
                    <span>💡</span>
                    <h2>Innovation</h2>
                    <p>Ideas that create impact.</p>
                </div>
                <div className="about-badge">
                    100% Creative
                </div>
            </div>

            <div className="about-content">
                <span className="section-tag">ABOUT US</span>

                <h2>
                    We Turn Ideas Into
                    <span> Reality.</span>
                </h2>

                <p>
                    Digital World is a creative digital solutions company
                    focused on helping businesses build their online
                    presence and achieve digital growth.
                </p>

                <p>
                    We combine technology, creativity, and strategy
                    to deliver meaningful digital experiences.
                </p>

                <ul className="about-list">
                    {aboutPoints.map((point, index) => (
                        <li key={index}>
                            <span>✓</span> {point}
                        </li>
                    ))}
                </ul>

                <a href="#contact" className="btn btn-primary">
                    Learn More
                </a>
            </div>
        </section>
    );
}

export default About;
