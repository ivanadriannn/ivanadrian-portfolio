import React, { useState, useEffect } from 'react';
import "../../styles/section/_landing.scss";
import Profile from "../../assets/image/profileIvan.svg"
import Github from "../../assets/icon/Landing/githubIvan.svg"
import Gmail from "../../assets/icon/Landing/gmailIvan.svg"
import Instagram from "../../assets/icon/Landing/instagramIvan.svg"
import Linkedin from "../../assets/icon/Landing/linkedinIvan.svg"
import Button from "../../components/Button/Button.jsx"
import Typed from 'react-typed'
import cv from '../../assets/icon/Landing/cvIvan.svg'
import ParticlesBG from '../../components/Particles/ParticleBG.js';
import { Fade, Bounce } from 'react-reveal';

const Landing = () => {
    return (
        <section className="landing-page" id='landing'>
            <div className="landing-background" >
                <ParticlesBG/>
            </div>
            <div className="landing-container">
                <div className="landing-top">
                    <div className="landing-decription">
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
                            <h1>Junior Software Engineer</h1>
                        </div>
                        <div className="landing-social-media">
                            <a target="__blank" href="https://www.linkedin.com/in/ivan-adriannn/">
                                <img src={Linkedin} alt="LinkedInIvan" />
                            </a>
                            <a target="__blank" href="https://github.com/ivanadriannn">
                                <img src={Github} alt="GithubIvan" />
                            </a>
                            <a target="__blank" href="https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRnZnKMRkvhNJFJJwrkgbtzprlqJsBVgxJvxlcHKzvnxXKQVvdJlwvhqZnpJZjNzMxSZTKQ">
                                <img src={Gmail} alt="GmailIvan" />
                            </a>
                            <a target="__blank" href="https://www.instagram.com/ivan_adriannn/">
                                <img src={Instagram} alt="Instagram" />
                            </a>
                        </div>
                        <br />
                        <br />
                        <Fade top>
                            <div className="landing-profile">
                                <img src={Profile} alt="" />
                            </div>
                            <div className="landing-bottom">
                                <Button image={cv} text="See My CV" link="https://drive.google.com/file/d/1pxyin9hCjpw7PtSsd06UyITHKYHmr9lC/view?usp=sharing" />
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>  
        </section>
    );
};

export default Landing;