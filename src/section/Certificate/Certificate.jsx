import React from "react";
import "../../styles/section/_certificates.scss";
import AchievementIcon from "../../assets/icon/Achievement/achievement.png"
import BackEnd from "../../assets/icon/Achievement/backend.png"
import Mobile from "../../assets/icon/Achievement/mobile.png"
import Intern from "../../assets/icon/Achievement/internfullstack.png"
import Alibaba1 from "../../assets/icon/Achievement/alibabacertifieddeveloper.png"
import LinkIcon from "../../assets/icon/Achievement/link.png"
import {Fade} from 'react-reveal'
import { Card } from 'antd';
const { Meta } = Card;
const Certificates = () => {
    return(
        <section className="certificates" id="certificates">
            <div className="certificates-container">
                <div className="certificates-title">
                    <img src={AchievementIcon} alt="" />
                    <h1>Certification</h1>
                </div>
                <div className="certificates-content">
                    
                    <div className="certificates-row">
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                    <img style={{ width:'350px', marginLeft:'0.5px' }}
                                        alt="Back-End Development"
                                        src={BackEnd}
                                    />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://drive.google.com/file/d/1AwyhsJUqSAcOO0T-r6xCuJ-39nAtGgjP/view?usp=drive_link">
                                            <img src={LinkIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="Back-End Course"
                                        description="2022-2023 ~ Bina Nusantara Computer Club"
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
                                        <div className="list-tech">
                                            Laravel
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="Mobile Develeopment Course"
                                    src={Mobile}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://drive.google.com/file/d/1XLq31GXPlSp4QBkURrvdAE637ZexYpY4/view?usp=drive_link">
                                            <img src={LinkIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="Mobile Application Development"
                                        description="2023-2024 ~ Bina Nusantara Computer Club"
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            Java
                                        </div>
                                        <div className="list-tech">
                                            OOP
                                        </div>
                                        <div className="list-tech">
                                            Android Studio
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                    </div>
                    <div className="certificates-row">
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="BPTN Syariah FullStack Developer Internship"
                                    src={Intern}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://drive.google.com/file/d/10NL3PdytlWJeYNwNeXJGqA6nACNssZk-/view?usp=drive_link">
                                            <img src={LinkIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="FullStack Developer Internship"
                                        description="2024 ~ BTPN Syariah x Rakamin Academy"
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            vue.js
                                        </div>
                                        <div className="list-tech">
                                            Golang
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                        <Fade bottom>
                            <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                cover={
                                <img style={{ width:'350px', marginLeft:'0.2px' }}
                                    alt="Certified Developer from Alibaba Cloud"
                                    src={Alibaba1}
                                />
                                }
                                actions={[
                                    <div className="card-image">
                                        <a target="__blank" href="https://drive.google.com/file/d/1wJT3j5R67XvFo60FmPARTTj53-Cin0Y8/view?usp=drive_link">
                                            <img src={LinkIcon} alt="" />
                                        </a>
                                    </div>
                                ]}  >
                                    <Meta
                                        title="Alibaba Certified Developer"
                                        description="2024 ~ Alibaba Cloud x Devhandal Academy"
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            Alibaba Cloud
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

export default Certificates;

