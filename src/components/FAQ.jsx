
import { useState } from "react";

function FAQ() {
    const [activeFAQ, setActiveFAQ] = useState(null);

    const questions = [
        {
            question: "What services does Digital World provide?",
            answer: "We provide web development, UI/UX design, app development, digital marketing, software, and cloud solutions."
        },
        {
            question: "How can I start a project?",
            answer: "You can contact our team using the contact form and share your project requirements."
        },
        {
            question: "Do you create responsive websites?",
            answer: "Yes, we design websites that work smoothly on mobile, tablet, and desktop devices."
        },
        {
            question: "How long does a project take?",
            answer: "Project timelines depend on the requirements, features, and overall complexity."
        },
        {
            question: "How can I contact your team?",
            answer: "You can reach us through the contact section available on this website."
        }
    ];

    return (
        <section className="faq section" id="faq">
            <div className="section-heading">
                <span className="section-tag">FAQ</span>
                <h2>
                    Frequently Asked <span>Questions</span>
                </h2>
                <p>
                    Find answers to some common questions.
                </p>
            </div>

            <div className="faq-container">
                {questions.map((item, index) => (
                    <div className="faq-item" key={index}>
                        <button
                            className="faq-question"
                            onClick={() =>
                                setActiveFAQ(
                                    activeFAQ === index ? null : index
                                )
                            }
                        >
                            {item.question}

                            <span>
                                {activeFAQ === index ? "−" : "+"}
                            </span>
                        </button>

                        {activeFAQ === index && (
                            <div className="faq-answer">
                                {item.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQ;
