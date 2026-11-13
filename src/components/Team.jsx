
import { useState } from "react";

function Team() {
    const [selectedMember, setSelectedMember] = useState(null);

    const teamMembers = [
        {
            name: "Nitesh Rane",
            role: "Creative Director",
            icon: "👨‍💼",
            bio: "Leads creative strategy and turns ideas into meaningful digital experiences."
        },
        {
            name: "Pravin Tarde",
            role: "UI/UX Designer",
            icon: "👨‍🎨",
            bio: "Designs beautiful and user-friendly interfaces for digital products."
        },
        {
            name: "Karan Shinde",
            role: "Web Developer",
            icon: "👨‍💻",
            bio: "Builds responsive and scalable websites using modern technologies."
        },
        {
            name: "Siddhant Joshi",
            role: "Marketing Specialist",
            icon: "🧑‍💼",
            bio: "Creates digital strategies to improve brand visibility and growth."
        }
    ];

    return (
        <section className="team section" id="team">
            <div className="section-heading">
                <span className="section-tag">OUR TEAM</span>

                <h2>
                    Meet Our <span>Creative Minds</span>
                </h2>

                <p>
                    A passionate team working together to create
                    something amazing.
                </p>
            </div>

            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div className="team-card" key={index}>
                        <div className="team-avatar">
                            {member.icon}
                        </div>

                        <h3>{member.name}</h3>
                        <p>{member.role}</p>

                        <button
                            className="team-btn"
                            onClick={() => setSelectedMember(member)}
                        >
                            View Profile
                        </button>
                    </div>
                ))}
            </div>

            {selectedMember && (
                <div
                    className="modal-overlay"
                    onClick={() => setSelectedMember(null)}
                >
                    <div
                        className="team-modal"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="modal-close"
                            onClick={() => setSelectedMember(null)}
                        >
                            ✕
                        </button>

                        <div className="team-avatar">
                            {selectedMember.icon}
                        </div>

                        <h2>{selectedMember.name}</h2>
                        <h4>{selectedMember.role}</h4>
                        <p>{selectedMember.bio}</p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Team;
