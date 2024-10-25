import React from 'react';
import Typed from 'react-typed';
import "../../styles/section/_landing.scss";
import Profile from "../../assets/image/profileIvan.svg";
import Button from "../../components/Button/Button.jsx";
import cv from '../../assets/icon/Landing/cvIvan.svg';
import LinkedIn from '../../assets/icon/Footer/Linkedin.svg'
import Github from '../../assets/icon/Footer/Github.svg'
import Instagram from '../../assets/icon/Footer/Instagram.svg'
import ParticlesBG from '../../components/Particles/ParticleBG.js';
import { Fade } from 'react-reveal';

const Landing = () => {
    return (
        <section className="landing-page" id='landing'>
            <div className="landing-background">
                <ParticlesBG />
            </div>
            <div className="landing-container">
                <div className="landing-top">
                    <div className="landing-description">
                        <div className="greetings">
                            <h1>
                                <Typed
                                    strings={[
                                        "Welcome to My Portfolio!"
                                    ]}
                                    typeSpeed={150}
                                    loop
                                />
                            </h1>
                        </div>
                        <div className="landing-name">
                            <h1>I'm Ivan Adrian</h1>
                        </div>
                        <div className="landing-job">
                            <h1>Software Developer</h1>
                        </div>
                        <div className="landing-social-media">
                            <a target="__blank" href="https://www.linkedin.com/in/ivan-adriannn/">
                                <img src={LinkedIn} alt="LinkedInIvan" />
                            </a>
                            <a target="__blank" href="https://github.com/ivanadriannn">
                                <img src={Github} alt="GithubIvan" />
                            </a>
                            <a target="__blank" href="https://www.instagram.com/ivan_adriannn/">
                                <img src={Instagram} alt="Instagram" />
                            </a>
                        </div>
                        <br />
                        <br />
                        <Fade top>
                            <div className="landing-bottom">
                                <Button image={cv} text="CV" link="" />
                                <Button text="Portfolio" link="" />
                            </div>
                            <div className="landing-profile">
                                <img src={Profile} alt="" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;
