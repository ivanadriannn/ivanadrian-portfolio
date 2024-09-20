import React from 'react';
import "../../styles/section/_landing.scss";
import Profile from "../../assets/image/profileIvan.svg";
import Button from "../../components/Button/Button.jsx";
import Typed from 'react-typed';
import cv from '../../assets/icon/Landing/cvIvan.svg';
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
                            <h1>Junior Software Engineer</h1>
                        </div>
                        <br />
                        <br />
                        <Fade top>
                            <div className="landing-bottom">
                                <Button image={cv} text="CV" link="https://drive.google.com/file/d/13rKU-QUcKzV5UWPxBOpvMDbkIsVo9r-u/view?usp=sharing" />
                                <Button text="Portfolio >>" link="https://bit.ly/file-portfolioivan" />
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