import React from "react";
import "../../styles/section/_skills.scss";
import skillsIcon from "../../assets/icon/Skills/skills.svg"
import Laravel from "../../assets/icon/Skills/laravel.svg"
import React1 from "../../assets/icon/Skills/react.svg"
import HTML from "../../assets/icon/Skills/html.svg"
import CSS from "../../assets/icon/Skills/css.svg"
import js from "../../assets/icon/Skills/js.svg"
import Github from "../../assets/icon/Skills/github.svg"
import Asp from "../../assets/icon/Skills/asp.svg"
import Java from "../../assets/icon/Skills/java.svg"
import MySql from "../../assets/icon/Skills/mysql.svg"
import Python from "../../assets/icon/Skills/python.svg"
import NodeJS from "../../assets/icon/Skills/nodejs.svg"
import Typescript from "../../assets/icon/Skills/typescript.svg"
import Php from "../../assets/icon/Skills/php.svg"
import C from "../../assets/icon/Skills/c.svg"
import Flutter from "../../assets/icon/Skills/flutter.png"
import VisualStudio from "../../assets/icon/Skills/visualstudiocode.png"
import VSCode from "../../assets/icon/Skills/vscode.png"
import Figma from "../../assets/icon/Skills/figma.png"
import Golang from "../../assets/icon/Skills/golang.png"
import SQLServer from "../../assets/icon/Skills/sqlserver.png"
import AndroidStudio from "../../assets/icon/Skills/androidstudio.png"
import GoogleCollab from "../../assets/icon/Skills/googlecollab.png"
import MonggoDB from "../../assets/icon/Skills/monggoDB.png"

const Skills = () => {
    return (
        <section id="skills">
            <div className="skills-container">
                <div className="skills-title">
                    <img src={skillsIcon} alt="" />
                    <h1>My Skills</h1>
                </div>

                <div className="additional-skills">
                    <div className="skill-circle">
                        <img src={VisualStudio} alt="Visual Studio Code" />
                    </div>
                    <div className="skill-circle">
                        <img src={VSCode} alt="VS Code" />
                    </div>
                    <div className="skill-circle">
                        <img src={AndroidStudio} alt="Android Studio" />
                    </div>
                    <div className="skill-circle">
                        <img src={Figma} alt="Figma" />
                    </div>
                </div>
                <div className="additional-skills">
                    <div className="skill-circle">
                        <img src={Golang} alt="Golang" />
                    </div>
                    <div className="skill-circle">
                        <img src={Flutter} alt="Google Collab" />
                    </div>
                    <div className="skill-circle">
                        <img src={GoogleCollab} alt="Google Collab" />
                    </div>
                    <div className="skill-circle">
                        <img src={SQLServer} alt="SQL Server" />
                    </div>
                </div>
                <div className="additional-skills">
                    <div className="skill-circle">
                        <img src={MonggoDB} alt="MonggoDB" />
                    </div>
                </div>

                <br />
                <br />

                <div className="slide-container">
                    {/* Container untuk slide-show1 */}
                    <div className="slide-wrapper">
                        <div className="slide-show1">
                            <img src={js} alt="js" />
                            <img src={CSS} alt="CSS" />
                            <img src={HTML} alt="HTML" />
                            <img src={Typescript} alt="Typescript" />
                            <img src={NodeJS} alt="NodeJS" />
                            <img src={React1} alt="React" />
                            <img src={Laravel} alt="Laravel" />
                        </div>
                    </div>

                    {/* Container untuk slide-show2 */}
                    <div className="slide-wrapper">
                        <div className="slide-show2">
                            <img src={Github} alt="Github" />
                            <img src={Asp} alt="Asp" />
                            <img src={Java} alt="Java" />
                            <img src={Php} alt="Php" />
                            <img src={MySql} alt="MySql" />
                            <img src={Python} alt="Python" />
                            <img src={C} alt="C" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
