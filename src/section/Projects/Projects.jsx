import React from "react";
import "../../styles/section/_projects.scss";
import ProjectsIcon from "../../assets/icon/Projects/projects.svg"
import GithubIcon from '../../assets/icon/Projects/github.svg'
import JuiceTip from "../../assets/image/juicetip.png"
import Jetflix from "../../assets/image/jetflix.png"
import Raiso from "../../assets/image/raiso.png"
import FunMath from "../../assets/image/funmath.png"
import OrelWestern from "../../assets/image/orel.png"
import Edukami from "../../assets/image/edukami.png"
import LevelUp from "../../assets/image/levelup.png"
import CodeSmell from "../../assets/image/codesmell.png"
import Calm from "../../assets/image/calm.png"
import NekoFinyace from "../../assets/image/nekofinyace.png"
import Dermazen from "../../assets/image/dermazen.png"
import Browse from "../../assets/icon/Projects/browse.png"
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
                                        <a target="__blank" href="https://drive.google.com/file/d/1y_EvZLgui_jmPNSLORPrHDUR5LFyn1WW/view?usp=sharing&t=2">
                                            <img src={Browse} alt="" />
                                        </a>
                                    </div>,
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/ivanadriannn/JuiceTip">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="JuiceTip"
                                        description="JuiceTip is a user-friendly web-based platform to facilitate international entrustment services."
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
                                        <a target="__blank" href="https://jetflix-movies-website.vercel.app/">
                                            <img src={Browse} alt="" />
                                        </a>
                                    </div>,
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/ivanadriannn/MovieWebsite_Jetflix_ProjectHumanComputerInteraction">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="Jetflix"
                                        description="Jetflix is ​​a revolutionary streaming platform, offering users easy access to a variety of the latest and exciting films."
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
                                        <a target="__blank" href="https://drive.google.com/file/d/1mKksf3EU5pQ04bdFjPVau2dDKjTmbBZ-/view?usp=sharing">
                                            <img src={Browse} alt="" />
                                        </a>
                                    </div>,
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/ivanadriannn/RAiso">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="RAiso"
                                        description="RAiso aims to streamline transaction management with an integrated website for more efficient data handling."
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
                                        <a target="__blank" href="https://drive.google.com/file/d/1ZcCliPmvTacidg4zz3yQtI5InYqXNupY/view?usp=sharing">
                                            <img src={Browse} alt="" />
                                        </a>
                                    </div>,
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/ivanadriannn/MADFinProject_Ivan">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="FunMath"
                                        description="FunMath is a mathemathic digital learning application for Jakarta students aged 5-10 for calculating area, volume, and counters with login verification."
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
                                        <a target="__blank" href="https://www.figma.com/design/OU9vt1yXI8GPduAZs4fqo3/FAVExRND?node-id=0-1&t=EYCQKwKmmY5vLu2h-">
                                            <img src={Browse} alt="" />
                                        </a>
                                    </div>,
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
                                        <a target="__blank" href="https://drive.google.com/file/d/1KXIa7sus2ZLNAP2JUcdK8vJPuxRjN-Gc/view?usp=sharing">
                                            <img src={Browse} alt="" />
                                        </a>
                                    </div>,
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/ivanadriannn/LevelUp-Proficiency-Language-Level-Assessment-and-Learning-System-with-Visual-Recognition">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="LevelUp"
                                        description="LevelUp provides a tiered Chinese language learning platform from basic to advanced using Convolutional Neural Network."
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
                    <div className="projects-row">
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="CodeSmell"
                                    src={CodeSmell}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://code-smell.vercel.app/">
                                            <img src={Browse} alt="" />
                                        </a>
                                    </div>,
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/ivanadriannn/code-smell">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="Code Smell Website"
                                        description="This website contains about code reengineering such as Dispensable and Change Preventer along with explanations, code before, and code after refactoring."
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            React
                                        </div>
                                        <div className="list-tech">
                                            Typescript
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="Edukami"
                                    src={Edukami}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://edukami-educational-website.vercel.app/">
                                            <img src={Browse} alt="" />
                                        </a>
                                    </div>,
                                    <div className="card-image">
                                        <a target="__blank" href="https://github.com/ivanadriannn/Edukami_EducationalWebsite">
                                            <img src={GithubIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="Edukami"
                                        description="Edukami is an educational site that empowers people with knowledge appropriate to the field they want to pursue. Here we can also choose a mentor to help users deepen their favorite field."
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            HMTL
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
                                    alt="Calm"
                                    src={Calm}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://www.figma.com/design/1hNdoHVg0oggwT613ylDNs/Kasus-1_2602076323_IvanAdrian?node-id=0-1&t=shxeDuQCGbqq7t2b-1">
                                            <img src={Browse} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="Calm"
                                        description="Calm is a mental health website that provides 24-hour service, an expert directory, concise information, an easy booking system, and convenient payments in a user-friendly interface."
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            UI
                                        </div>
                                        <div className="list-tech">
                                            UX
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="Dermazen"
                                    src={Dermazen}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://www.figma.com/design/1yqSDfWxbF8UYi06a2JfUk/Groot?node-id=0-1&t=WxXXrpdbgq44k0Yp-1">
                                            <img src={Browse} alt="" />
                                        </a>
                                    </div>,
                                    <div className="card-image">
                                        <a target="__blank" href="https://drive.google.com/file/d/1fFn1uBYJMe5FjMrLvBgcja4lcQpHapOW/view?usp=sharing">
                                            <img src={Browse} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="Dermazen"
                                        description="DermaZen is an AI-based application for skin health that allows users to check skin type, consult with experts, buy medicine, choose a doctor, and view consultation schedules where users can also edit profiles, check history, and make payments easily and efficiently."
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            UI
                                        </div>
                                        <div className="list-tech">
                                            UX
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="Neko Finyace"
                                    src={NekoFinyace}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://drive.google.com/file/d/1gBGdkVW3UWbUyLyalUp6FHluJbeRM7Qs/view?usp=sharing">
                                            <img src={Browse} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="Neko Finyace"
                                        description="NekoFinyance is an apps to help users in monitoring their expenses and income, plan short and long-term purchases, and provide automatic reminders when users start to waste or when financial targets have been achieved."
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            UI
                                        </div>
                                        <div className="list-tech">
                                            UX
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

