
import { useState } from "react";

function Services() {
    const [activeService, setActiveService] = useState(null);

    const services = [
        {
            icon: "💻",
            title: "Web Development",
            description: "Modern, responsive, and user-friendly websites.",
            details: "We build fast and scalable websites using modern web technologies."
        },
        {
            icon: "🎨",
            title: "UI/UX Design",
            description: "Beautiful designs with smooth user experiences.",
            details: "We create intuitive interfaces focused on usability and visual appeal."
        },
        {
            icon: "📱",
            title: "App Development",
            description: "Smart mobile applications for growing businesses.",
            details: "We develop useful applications with reliable performance."
        },
        {
            icon: "📈",
            title: "Digital Marketing",
            description: "Strategies to improve your online presence.",
            details: "We help businesses reach their audience through digital strategies."
        },
        {
            icon: "⚙️",
            title: "Software Solutions",
            description: "Custom software for your business needs.",
            details: "We create tailored software solutions to improve business workflows."
        },
        {
            icon: "☁️",
            title: "Cloud Solutions",
            description: "Reliable and scalable cloud-based services.",
            details: "We help businesses use cloud technology for better flexibility."
        }
    ];

    return (
        <section className="services section" id="services">
            <div className="section-heading">
                <span className="section-tag">OUR SERVICES</span>
                <h2>
                    What We <span>Offer</span>
                </h2>
                <p>
                    We provide digital solutions to help your
                    business move forward.
                </p>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">
                            {service.icon}
                        </div>

                        <h3>{service.title}</h3>
                        <p>{service.description}</p>

                        <button
                            className="service-btn"
                            onClick={() =>
                                setActiveService(
                                    activeService === index ? null : index
                                )
                            }
                        >
                            {activeService === index
                                ? "Show Less −"
                                : "Learn More +"}
                        </button>

                        {activeService === index && (
                            <p className="service-details">
                                {service.details}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
