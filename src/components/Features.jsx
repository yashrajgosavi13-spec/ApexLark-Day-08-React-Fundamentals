
function Features() {
    const features = [
        {
            icon: "⚡",
            title: "Fast Performance",
            description: "Optimized solutions for smooth and faster performance."
        },
        {
            icon: "🔒",
            title: "Secure Solutions",
            description: "Security-focused development to protect your data."
        },
        {
            icon: "📱",
            title: "Responsive Design",
            description: "Seamless experience across mobile, tablet, and desktop."
        },
        {
            icon: "💡",
            title: "Creative Ideas",
            description: "Innovative approaches to solve real business problems."
        },
        {
            icon: "🤝",
            title: "Dedicated Support",
            description: "Reliable assistance to help your business grow."
        },
        {
            icon: "🚀",
            title: "Scalable Growth",
            description: "Flexible digital solutions built for future expansion."
        }
    ];

    return (
        <section className="features section" id="features">
            <div className="section-heading">
                <span className="section-tag">WHY CHOOSE US</span>

                <h2>
                    Features That Make Us
                    <span> Different</span>
                </h2>

                <p>
                    We focus on quality, innovation, and customer satisfaction.
                </p>
            </div>

            <div className="features-grid">
                {features.map((feature, index) => (
                    <div className="feature-card" key={index}>
                        <div className="feature-icon">
                            {feature.icon}
                        </div>

                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;
