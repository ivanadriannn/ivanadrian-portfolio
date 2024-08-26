import React from "react";
import "../../styles/section/_projects.scss";
import ProjectsIcon from "../../assets/icon/Projects/projects.svg"
import GithubIcon from '../../assets/icon/Projects/github.svg'
import JuiceTip from "../../assets/image/juicetip.png"
import Jetflix from "../../assets/image/jetflix.png"
import Raiso from "../../assets/image/raiso.png"
import FunMath from "../../assets/image/funmath.png"
import OrelWestern from "../../assets/image/orel.png"
import LevelUp from "../../assets/image/levelup.png"
import {Fade} from 'react-reveal'
import { Card } from 'antd';
const { Meta } = Card;
const Projects = () => {
    return(
        <section className="projects" id="projects">
            <div className="projects-container">
                <div className="projects-title">
                    <img src={ProjectsIcon} alt="" />
                    <h1>My Projects</h1>
                </div>
                <div className="projects-content">
                    
                    <div className="projects-row">
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                    <img style={{ width:'350px', marginLeft:'0.5px' }}
                                        alt="JuiceTip"
                                        src={JuiceTip}
                                    />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/stevenaruu/JuiceTip-FE">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="JuiceTip"
                                        description="JuiceTip is a user-friendly web-based platform to facilitate international entrustment services"
                                    />
                                    <div className="tech">
                                        <div className="list-tech">
                                            C#
                                        </div>
                                        <div className="list-tech">
                                            React
                                        </div>
                                        <div className="list-tech">
                                            API
                                        </div>
                                        <div className="list-tech">
                                            Firebase
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="Jetflix"
                                    src={Jetflix}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/ivanadriannn/MovieWebsite_Jetflix_ProjectHumanComputerInteraction">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="Jetflix"
                                        description="Jetflix is ​​a revolutionary streaming platform, offering users easy access to a variety of the latest and exciting films"
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            HTML
                                        </div>
                                        <div className="list-tech">
                                            CSS
                                        </div>
                                        <div className="list-tech">
                                            JS
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                    </div>
                    <div className="projects-row">
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="Raiso"
                                    src={Raiso}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/Ryldi/Raiso-Stationery-Shop">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="RAiso"
                                        description="RAiso aims to streamline transaction management with an integrated website for more efficient data handling"
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            C#
                                        </div>
                                        <div className="list-tech">
                                            API
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="FunMath"
                                    src={FunMath}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/ivanadriannn/MADFinProject_Ivan">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="FunMath"
                                        description="FunMath is a mathemathic digital learning application for Jakarta students aged 5-10 for calculating area, volume, and counters with login verification"
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            Java
                                        </div>
                                        <div className="list-tech">
                                            Android
                                        </div>
                                        <div className="list-tech">
                                            OOP
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                    </div>
                    <div className="projects-row">
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="OrelWestern"
                                    src={OrelWestern}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/ivanadriannn/WebsiteRestaurant_OrelWestern_FaveXRnd_BNCC">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="Orel Western"
                                        description="Orel Western enables easy online food ordering, allowing customers to browse menus, place orders, and track deliveries in real-time."
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            Laravel
                                        </div>
                                        <div className="list-tech">
                                            PhP
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="LevelUp"
                                    src={LevelUp}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/ivanadriannn/LevelUp-Proficiency-Language-Level-Assessment-and-Learning-System-with-Visual-Recognition">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="LevelUp"
                                        description="LevelUp provides a tiered Chinese language learning platform from basic to advanced using Convolutional Neural Network"
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            Python
                                        </div>
                                        <div className="list-tech">
                                            Google Collab
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;

