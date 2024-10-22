import React from "react";
import "../../styles/components/_footer.scss";
import LinkedIn from '../../assets/icon/Footer/Linkedin.svg'
import Instagram from '../../assets/icon/Footer/Instagram.svg'
import Github from '../../assets/icon/Footer/Github.svg'

const Footer = () => {
    return(
        <footer>
            <div className="footer-container">
                <div className="footer-text">
                    <p>© 2024 Ivan Adrian's Portfolio, All Right Reserved</p>
                </div>
                <div className="footer-social-media">
                    <a href="https://www.linkedin.com/in/ivan-adriannn/">
                        <img src={LinkedIn} alt="" />
                    </a>
                    <a href="https://www.instagram.com/ivan_adriannn/">
                        <img src={Instagram} alt="" />
                    </a>
                    <a href="https://github.com/ivanadriannn">
                        <img src={Github} alt="" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;