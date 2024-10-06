import React from "react";
import "../../styles/section/_certificates.scss";
import AchievementIcon from "../../assets/icon/Achievement/achievement.png"
import BackEnd from "../../assets/icon/Achievement/backend.png"
import Mobile from "../../assets/icon/Achievement/mobile.png"
import Intern from "../../assets/icon/Achievement/internfullstack.png"
import Alibaba1 from "../../assets/icon/Achievement/alibabacertifieddeveloper.png"
import INC from "../../assets/icon/Achievement/icpc.jpeg"
import AWSCloud from "../../assets/icon/Achievement/awscloud.png"
import AlibabaGit from "../../assets/icon/Achievement/alibabagit.png"
import AlibabaCLI from "../../assets/icon/Achievement/alibabacli.png"
import AlibabaROS from "../../assets/icon/Achievement/alibabaros.png"
import AlibabaServerless from "../../assets/icon/Achievement/alibabaserverlesscomputing.png"
import AlibabaDevOps from "../../assets/icon/Achievement/devops.png"
import AlibabaJenkins from "../../assets/icon/Achievement/jenkins.png"
import SQL from "../../assets/icon/Achievement/sql.png"
import DataScience from "../../assets/icon/Achievement/datascience.png"
import Web from "../../assets/icon/Achievement/basicweb.png"
import Swift from "../../assets/icon/Achievement/swift.jpeg"
import JavaScript from "../../assets/icon/Achievement/javascript.jpeg"
import AndroidKotlint from "../../assets/icon/Achievement/androidkotlin.jpeg"
import DBxComNet from "../../assets/icon/Achievement/dbxcomputernetwork.png"
import Beelingua from "../../assets/icon/Achievement/beelingua.jpeg"
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
                                        description="2024 ~ PT BTPN Syariah x Rakamin Academy"
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
                                        description="2024 ~ Alibaba Cloud x Devhandal Academy (Codepolitan)"
                                        />
                                    <div className="tech">
                                        <div className="list-tech">
                                            Alibaba Cloud
                                        </div>
                                    </div>
                            </Card>
                        </Fade>
                    </div>
                    <div className="certificates-row">
                        <Fade bottom>
                                <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                    cover={
                                        <img style={{ width:'350px', marginLeft:'0.5px' }}
                                            alt="INC 2023"
                                            src={INC}
                                        />
                                    }
                                    actions={[
                                        <div className="card-image">
                                            <a target="__blank" href="https://drive.google.com/file/d/1RHfHDsRQ3eY-GlF9rocRw86H03XUyS6I/view?usp=sharing">
                                                <img src={LinkIcon} alt="" />
                                            </a>
                                        </div>
                                    ]}  >
                                        <Meta
                                            title="Indonesia National Contest"
                                            description="2023 ~ BINUS X The 2023 ICPC Asia Jakarta"
                                        />
                                        <div className="tech">
                                            <div className="list-tech">
                                                C
                                            </div>
                                        </div>
                                </Card>
                            </Fade>
                            <Fade bottom>
                                <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                    cover={
                                        <img style={{ width:'350px', marginLeft:'0.5px' }}
                                            alt="AWS Cloud"
                                            src={AWSCloud}
                                        />
                                    }
                                    actions={[
                                        <div className="card-image">
                                            <a target="__blank" href="https://drive.google.com/file/d/12VaG7N5hMbtFjOQdrmqDUFb-bZ-xpETv/view?usp=sharing">
                                                <img src={LinkIcon} alt="" />
                                            </a>
                                        </div>
                                    ]}  >
                                        <Meta
                                            title="Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)"
                                            description="2024 ~ Dicoding Academy x AWS Backend"
                                        />
                                        <div className="tech">
                                            <div className="list-tech">
                                                AWS Cloud
                                            </div>
                                        </div>
                                </Card>
                            </Fade>
                            <Fade bottom>
                                <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                    cover={
                                        <img style={{ width:'350px', marginLeft:'0.5px' }}
                                            alt="Alibaba DevOps"
                                            src={AlibabaDevOps}
                                        />
                                    }
                                    actions={[
                                        <div className="card-image">
                                            <a target="__blank" href="https://drive.google.com/file/d/16M3j_O3xjkHQH_N32xZNRIiUH_bCJ750/view?usp=drive_link">
                                                <img src={LinkIcon} alt="" />
                                            </a>
                                        </div>
                                    ]}  >
                                        <Meta
                                            title="Introduction to DevOps"
                                            description="2024 ~ Alibaba Cloud"
                                        />
                                        <div className="tech">
                                            <div className="list-tech">
                                                Git
                                            </div>
                                        </div>
                                </Card>
                            </Fade>
                            <Fade bottom>
                                <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                    cover={
                                        <img style={{ width:'350px', marginLeft:'0.5px' }}
                                            alt="Alibaba CLI"
                                            src={AlibabaCLI}
                                        />
                                    }
                                    actions={[
                                        <div className="card-image">
                                            <a target="__blank" href="https://drive.google.com/file/d/1ACOfy5_XtR66y7Fn2CXEk7GMldz8X-Rn/view?usp=sharing">
                                                <img src={LinkIcon} alt="" />
                                            </a>
                                        </div>
                                    ]}  >
                                        <Meta
                                            title="Introduction to Alibaba Cloud CLI"
                                            description="2024 ~ Alibaba Cloud"
                                        />
                                        <div className="tech">
                                            <div className="list-tech">
                                                CLI
                                            </div>
                                        </div>
                                </Card>
                            </Fade>
                    </div>
                    <div className="certificates-row">
                        <Fade bottom>
                                <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                    cover={
                                        <img style={{ width:'350px', marginLeft:'0.5px' }}
                                            alt="Alibaba ROS"
                                            src={AlibabaROS}
                                        />
                                    }
                                    actions={[
                                        <div className="card-image">
                                            <a target="__blank" href="https://drive.google.com/file/d/1T69oYDhkBddGAY_bk2a_xlAyAZxy1IaL/view?usp=drive_link">
                                                <img src={LinkIcon} alt="" />
                                            </a>
                                        </div>
                                    ]}  >
                                        <Meta
                                            title="Introduction to Alibaba Cloud ROS"
                                            description="2023 ~ Alibaba Cloud"
                                        />
                                        <div className="tech">
                                            <div className="list-tech">
                                                ROS
                                            </div>
                                        </div>
                                </Card>
                            </Fade>
                            <Fade bottom>
                                <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                    cover={
                                        <img style={{ width:'350px', marginLeft:'0.5px' }}
                                            alt="Alibaba Serveless Computing"
                                            src={AlibabaServerless}
                                        />
                                    }
                                    actions={[
                                        <div className="card-image">
                                            <a target="__blank" href="https://drive.google.com/file/d/17o7bcSrevNP77Il_ExEC-xJ0BNz6KEfU/view?usp=drive_link">
                                                <img src={LinkIcon} alt="" />
                                            </a>
                                        </div>
                                    ]}  >
                                        <Meta
                                            title="Introduction to Serverless Computing"
                                            description="2024 ~ Alibaba Cloud"
                                        />
                                        <div className="tech">
                                            <div className="list-tech">
                                                Serverless Computing
                                            </div>
                                        </div>
                                </Card>
                            </Fade>
                            <Fade bottom>
                                <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                    cover={
                                        <img style={{ width:'350px', marginLeft:'0.5px' }}
                                            alt="Alibaba Git"
                                            src={AlibabaGit}
                                        />
                                    }
                                    actions={[
                                        <div className="card-image">
                                            <a target="__blank" href="https://drive.google.com/file/d/1MwHZxPWdoTbGyzGt_bFbWs3f9v28PNjc/view?usp=drive_link">
                                                <img src={LinkIcon} alt="" />
                                            </a>
                                        </div>
                                    ]}  >
                                        <Meta
                                            title="Introduction to Git"
                                            description="2024 ~ Alibaba Cloud"
                                        />
                                        <div className="tech">
                                            <div className="list-tech">
                                                Git
                                            </div>
                                        </div>
                                </Card>
                            </Fade>
                            <Fade bottom>
                                <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                    cover={
                                        <img style={{ width:'350px', marginLeft:'0.5px' }}
                                            alt="Alibaba Jenkins"
                                            src={AlibabaJenkins}
                                        />
                                    }
                                    actions={[
                                        <div className="card-image">
                                            <a target="__blank" href="https://drive.google.com/file/d/1LqFgYwLH1X53Azk9a2rbc81m5hCSD-IF/view?usp=drive_link">
                                                <img src={LinkIcon} alt="" />
                                            </a>
                                        </div>
                                    ]}  >
                                        <Meta
                                            title="Introduction to Jenkins"
                                            description="2024 ~ Alibaba Cloud"
                                        />
                                        <div className="tech">
                                            <div className="list-tech">
                                                Jenkins
                                            </div>
                                        </div>
                                </Card>
                            </Fade>
                    </div>
                    <div className="certificates-row">
                        <Fade bottom>
                                <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                    cover={
                                        <img style={{ width:'350px', marginLeft:'0.5px' }}
                                            alt="SQL"
                                            src={SQL}
                                        />
                                    }
                                    actions={[
                                        <div className="card-image">
                                            <a target="__blank" href="https://drive.google.com/file/d/1v6vLYuNSoVi0KNGvkagIkWPA7ij8dBgb/view?usp=drive_link">
                                                <img src={LinkIcon} alt="" />
                                            </a>
                                        </div>
                                    ]}  >
                                        <Meta
                                            title="Belajar Dasar SQL"
                                            description="2023 ~ Dicoding Academy"
                                        />
                                        <div className="tech">
                                            <div className="list-tech">
                                                SQL
                                            </div>
                                        </div>
                                </Card>
                            </Fade>
                            <Fade bottom>
                                <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                    cover={
                                        <img style={{ width:'350px', marginLeft:'0.5px' }}
                                            alt="DataScience"
                                            src={DataScience}
                                        />
                                    }
                                    actions={[
                                        <div className="card-image">
                                            <a target="__blank" href="https://drive.google.com/file/d/1KpoSemskIpf5l-EBdKloi4JMjO9AJ-ou/view?usp=drive_link">
                                                <img src={LinkIcon} alt="" />
                                            </a>
                                        </div>
                                    ]}  >
                                        <Meta
                                            title="Belajar Dasar Data Science"
                                            description="2024 ~ Alibaba Cloud"
                                        />
                                        <div className="tech">
                                            <div className="list-tech">
                                                Data Science
                                            </div>
                                        </div>
                                </Card>
                            </Fade>
                            <Fade bottom>
                                <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                    cover={
                                        <img style={{ width:'350px', marginLeft:'0.5px' }}
                                            alt="Basic Web"
                                            src={Web}
                                        />
                                    }
                                    actions={[
                                        <div className="card-image">
                                            <a target="__blank" href="https://drive.google.com/file/d/1q3ZXos-5j5XGFBk_dGor1AYzaYY-DuAJ/view?usp=drive_link">
                                                <img src={LinkIcon} alt="" />
                                            </a>
                                        </div>
                                    ]}  >
                                        <Meta
                                            title="Belajar Dasar Pemrograman Web"
                                            description="2024 ~ Alibaba Cloud"
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
                            <Fade bottom>
                                <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                    cover={
                                        <img style={{ width:'350px', marginLeft:'0.5px' }}
                                            alt="Swift"
                                            src={Swift}
                                        />
                                    }
                                    actions={[
                                        <div className="card-image">
                                            <a target="__blank" href="https://drive.google.com/file/d/1VhAxyDZnIj6rwLeAN0BFlzqS2PXWIvFq/view?usp=drive_link">
                                                <img src={LinkIcon} alt="" />
                                            </a>
                                        </div>
                                    ]}  >
                                        <Meta
                                            title="Introduction to iOS Swift"
                                            description="2024 ~ Phincon Academy"
                                        />
                                        <div className="tech">
                                            <div className="list-tech">
                                                Swift
                                            </div>
                                        </div>
                                </Card>
                            </Fade>
                    </div>
                    <div className="certificates-row">
                        <Fade bottom>
                                <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                    cover={
                                        <img style={{ width:'350px', marginLeft:'0.5px' }}
                                            alt="Java Script"
                                            src={JavaScript}
                                        />
                                    }
                                    actions={[
                                        <div className="card-image">
                                            <a target="__blank" href="https://drive.google.com/file/d/1vDkba079NXMQlwNObx-5nnAMIHhfsgdz/view?usp=drive_link">
                                                <img src={LinkIcon} alt="" />
                                            </a>
                                        </div>
                                    ]}  >
                                        <Meta
                                            title="Introduction to Fullstack Javascript"
                                            description="2024 ~ Phincon Academy"
                                        />
                                        <div className="tech">
                                            <div className="list-tech">
                                                Javascript
                                            </div>
                                        </div>
                                </Card>
                            </Fade>
                            <Fade bottom>
                                <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                    cover={
                                        <img style={{ width:'350px', marginLeft:'0.5px' }}
                                            alt="Android Kotlin"
                                            src={AndroidKotlint}
                                        />
                                    }
                                    actions={[
                                        <div className="card-image">
                                            <a target="__blank" href="https://drive.google.com/file/d/107SYybnnVoO4Kr8e2nlBf20WAWpfDV6U/view?usp=drive_link">
                                                <img src={LinkIcon} alt="" />
                                            </a>
                                        </div>
                                    ]}  >
                                        <Meta
                                            title="Introduction to Android Kotlin"
                                            description="2024 ~ Phincon Academy"
                                        />
                                        <div className="tech">
                                            <div className="list-tech">
                                                Android Kotlin
                                            </div>
                                        </div>
                                </Card>
                            </Fade>
                            <Fade bottom>
                                <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                    cover={
                                        <img style={{ width:'350px', marginLeft:'0.5px' }}
                                            alt="DB x Computer Network"
                                            src={DBxComNet}
                                        />
                                    }
                                    actions={[
                                        <div className="card-image">
                                            <a target="__blank" href="https://drive.google.com/file/d/15msywTIwdwLPShxzymdm-Se5tqV9cUmN/view?usp=drive_link">
                                                <img src={LinkIcon} alt="" />
                                            </a>
                                        </div>
                                    ]}  >
                                        <Meta
                                            title="Database and Computer Network"
                                            description="2023 ~ Dacode"
                                        />
                                        <div className="tech">
                                            <div className="list-tech">
                                                SQL
                                            </div>
                                            <div className="list-tech">
                                                PHP
                                            </div>
                                            <div className="list-tech">
                                                IP Addressing
                                            </div>
                                        </div>
                                </Card>
                            </Fade>
                            <Fade bottom>
                                <Card hoverable style={{ width: '350px',  fontFamily: 'Poppins'}}
                                    cover={
                                        <img style={{ width:'350px', marginLeft:'0.5px' }}
                                            alt="Beelingua"
                                            src={Beelingua}
                                        />
                                    }
                                    actions={[
                                        <div className="card-image">
                                            <a target="__blank" href="https://drive.google.com/file/d/15QniAjcAibIQIGQVDy5R26dv5hXRhNNm/view?usp=drive_link">
                                                <img src={LinkIcon} alt="" />
                                            </a>
                                        </div>
                                    ]}  >
                                        <Meta
                                            title="English C Level Course"
                                            description="2024 ~ Beelingua BINUS"
                                        />
                                        <div className="tech">
                                            <div className="list-tech">
                                                Advance English 
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

