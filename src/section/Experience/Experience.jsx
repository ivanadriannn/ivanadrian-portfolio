import React from 'react';
import "../../styles/section/_experiences.scss";

const Experience = () => {
    const experiences = [
        { year: '2023-Now', title: 'Ureeka BINUS - Software Community', description: 'Participated in Gemastik 2024, developing Neko Finyace, an AI-based financial management application, and was a Top Finalist at Hackathon BINUS x Microsoft AI4A 2024 for Read4U, an audiobook app designed to assist the visually impaired.' },
        { year: '2022-Now', title: 'Bina Nusantara Computer Club - BNCC', description: 'Becoming an Activist, Member of Mobile Application Development, Member of Back-End Development, and Master of Ceremony at BNCC Techno Talk 1 & Technoscape 2023.' },
        { year: '2024', title: 'Project Based Internship Program - BTPN Syariah', description: 'As a full stack developer, I created project using Vue.js for the front-end and Golang for the back-end.' },
        { year: '2023-2024', title: 'Google Developer Student Club Bandung Institute of Technology', description: 'Member of web development, learning about Web Development from front to back end using HTML, CSS, JS, React, SQL, Node.JS and learn about HTTP method.' },
        { year: '2023-2024', title: 'Data Science Club BINUS University', description: 'Member & Activist, Working in team consisting of 4-5 or individually to do some creative design for internal DSC such as academy, training, or events that focuses on Data Science Technology.' },
        { year: '2023-2024', title: 'Teach for Indonesia Student Community BINUS', description: 'Led a team of 30 activists in CP Education for social projects and served as Creative Design Coordinator for 7 activists at Greener Day 2023 and Self-Love Campaign 2024.' },
        { year: '2022-2024', title: 'BINUS Higher Education', description: 'As a recipient of the BINUS Scholarship, I joined the promotion team outside Jakarta, achieving targets by tracking admissions, handling confirmations and negotiations, and presenting BINUS University at senior high schools.' },
    ];

    return (
        <div id="experiences" className="experience-container">
            <div className="experience-line"></div>
            {experiences.map((exp, index) => (
                <div key={index} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="experience-content">
                        <h4>{exp.title} ({exp.year})</h4>
                        <p>{exp.description}</p>
                    </div>
                    <div className="experience-node"></div>
                </div>
            ))}
        </div>
    );
};

export default Experience;