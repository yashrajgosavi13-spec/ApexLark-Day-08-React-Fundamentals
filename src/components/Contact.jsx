
import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setSubmitted(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmitted(true);

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    };

    return (
        <section className="contact section" id="contact">
            <div className="section-heading">
                <span className="section-tag">CONTACT US</span>

                <h2>
                    Let's Start a <span>Conversation</span>
                </h2>

                <p>
                    Have a project in mind? We would love to hear from you.
                </p>
            </div>

            <div className="contact-container">
                <div className="contact-info">
                    <h3>Get In Touch</h3>

                    <p>
                        Let's discuss your ideas and create
                        something amazing together.
                    </p>

                    <div className="contact-item">
                        <span>📧</span>
                        <div>
                            <h4>Email</h4>
                            <p>hello@DigitalWorld.com</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span>📞</span>
                        <div>
                            <h4>Phone</h4>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <span>📍</span>
                        <div>
                            <h4>Location</h4>
                            <p>Mumbai, India</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>

                    {submitted && (
                        <p className="success-message">
                            Your message has been submitted successfully!
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
}

export default Contact;
