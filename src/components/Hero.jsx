
import StatsCounter from "./StatsCounter";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-content">
                <span className="hero-tag">
                    Welcome to Digital World
                </span>

                <h1>
                    Building Digital
                    <span> Experiences </span>
                    That Matter.
                </h1>

                <p>
                    We help businesses grow with modern technology,
                    creative solutions, and innovative digital
                    experiences.
                </p>

                <div className="hero-buttons">
                    <a href="#services" className="btn btn-primary">
                        Explore Services
                    </a>

                    <a href="#contact" className="btn btn-outline">
                        Contact Us
                    </a>
                </div>

                <StatsCounter />
            </div>

            <div className="hero-visual">
                <div className="hero-card">
                    <span>🚀</span>
                    <h2>Think. Create. Grow.</h2>
                    <p>Turning ideas into digital reality.</p>
                </div>
            </div>
        </section>
    );
}

export default Hero;
