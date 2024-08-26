import React from "react";
import "../../styles/section/_about.scss";
import AboutPhoto from "../../assets/image/aboutPhoto.svg";
import AboutIcon from "../../assets/icon/About/about.svg"
import People from "../../assets/icon/About/people.svg"
import {Fade} from 'react-reveal'

const About = () => {
    return(
        <section className="about-page" id="about">
            <div className="about-container">
                <div className="about-top">
                    <h1></h1>
                    <div className="title">
                        <img src={AboutIcon} alt="" />
                        <h1>Myself</h1>
                    </div>
                    <div className="right">
                        <img src={People} alt="" />
                    </div>
                </div>
                    <div className="about-mid">
                        <Fade left >
                            <div className="description">
                                <p>
                                    Welcome to my Portofolio Website! I am a Binusian'26 from Computer Science Major Streaming on Software Engineering and currently in my fifth term studying. I like overcoming challenges, can work well in a team, love to explore new things, and am able to work under pressure. I have a good communication, presentation, teaching, and negotiation skills. I am interesting in web/mobile development, programming, design, business, and technology. A good performance with high care, responsibility, commitment, and discipline are my aspects of life. I also joined several organizations to expand my skills to help me prepare for my career. One of them is called Bina Nusantara Computer Club, where I learn more both hard skills like Web/Mobile Development/UI/UXDesign and soft skills such as leadership, problem solving, and critical thinking. 
                                </p>
                            </div>
                        </Fade>
                        <Fade right>
                            <img src={AboutPhoto} alt="" />
                        </Fade>
                    </div>
            </div>
        </section>
    );
};

export default About;