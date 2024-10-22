import React from "react";
import "../../styles/section/_about.scss";
import AboutIcon from "../../assets/icon/Contact/contactme.png";
import People from "../../assets/icon/About/people.svg";
import { Fade } from "react-reveal";

const About = () => {
    return (
        <section className="about-page" id="about">

            <div className="about-container">
                <div className="about-top">
                    <h1></h1>
                    <div className="title">
                        <img src={AboutIcon} alt="About Icon" />
                        <h1>Myself</h1>
                    </div>
                    <div className="right">
                        <img src={People} alt="People Icon" />
                    </div>
                </div>
                <div className="about-mid">
                    <Fade right>
                        <img src={require('../../assets/image/AboutPhoto1.png')} alt="About Me" />
                    </Fade>
                </div>
                <div className="about-mid">
                    <div style={{
                        backgroundColor: '#1E1E2F', // Latar belakang gelap
                        padding: '20px',
                        fontFamily: 'monospace',
                        borderRadius: '8px',
                        lineHeight: '1.6',
                        color: '#FFFFFF' // Warna default untuk teks, putih agar tidak ada hitam
                    }}>
                        <p style={{ color: '#FF6F61' }}>
                            <span style={{ color: '#FF6F61' }}>ivan</span> --<span style={{ color: '#FFD700' }}>About</span>|
                        </p>
                        <p>
                            <span style={{ color: '#7FFFD4' }}>{'>'}</span> <span style={{ color: '#FFB6C1' }}>Ivan Adrian</span>
                        </p>
                        <p>
                            <span style={{ color: '#7FFFD4' }}>{'>'}</span> Binusian '26 from <span style={{ color: '#ADD8E6' }}>Computer Science Major</span>, specializing in <span style={{ color: '#FFA07A' }}>Software Engineering</span>
                        </p>
                        <p>
                            <span style={{ color: '#7FFFD4' }}>{'>'}</span> Currently in the <span style={{ color: '#FF6347' }}>fifth term</span> of studies
                        </p>
                        <p>
                            <span style={{ color: '#7FFFD4' }}>{'>'}</span> Enjoys <span style={{ color: '#FFA500' }}>overcoming challenges</span>, works well in teams, and loves exploring new things
                        </p>
                        <p>
                            <span style={{ color: '#7FFFD4' }}>{'>'}</span> Can work effectively under pressure with <span style={{ color: '#BA55D3' }}>good communication</span>, presentation, and negotiation skills
                        </p>
                        <p>
                            <span style={{ color: '#7FFFD4' }}>{'>'}</span> Interested in <span style={{ color: '#00FA9A' }}>web/mobile development</span>, <span style={{ color: '#FF69B4' }}>programming</span>, <span style={{ color: '#8A2BE2' }}>design</span>, business, and technology
                        </p>
                        <p>
                            <span style={{ color: '#7FFFD4' }}>{'>'}</span> Values performance with <span style={{ color: '#DC143C' }}>high care</span>, responsibility, commitment, and discipline
                        </p>
                        <p>
                            <span style={{ color: '#7FFFD4' }}>{'>'}</span> Joined several organizations, including <span style={{ color: '#4169E1' }}>Bina Nusantara Computer Club</span>
                        </p>
                        <p>
                            <span style={{ color: '#7FFFD4' }}>{'>'}</span> Expanding <span style={{ color: '#32CD32' }}>hard skills</span> (Web-Mobile Development, UI/UX Design) and <span style={{ color: '#FF4500' }}>soft skills</span> (leadership, problem solving, critical thinking)
                        </p>
                    </div>

                    {/* <div className="content-container">
                        <Fade left>
                            <div className="description">
                                <p>
                                    Welcome to my Portfolio Website! I am a Binusian'26 from Computer Science Major
                                    Streaming on Software Engineering and currently in my fifth term studying. I like
                                    overcoming challenges, can work well in a team, love to explore new things, and am
                                    able to work under pressure. I have good communication, presentation, teaching, and
                                    negotiation skills. I am interested in web or mobile development, programming, design,
                                    business, and technology. A good performance with high care, responsibility,
                                    commitment, and discipline are my aspects of life. I also joined several
                                    organizations to expand my skills to help me prepare for my career. One of them is
                                    called Bina Nusantara Computer Club, where I learn more both hard skills like
                                    Web-Mobile Development or UI/UX Design and soft skills such as leadership, problem
                                    solving, and critical thinking.
                                </p>
                            </div>
                        </Fade>
                    </div> */}
                </div>
                <div className="quote-container">
                    <Fade bottom>
                        <blockquote>
                            "The only way to do great work is to love what you do." – Steve Jobs
                        </blockquote>
                    </Fade>
                </div>
            </div>
        </section>
    );
};

export default About;
