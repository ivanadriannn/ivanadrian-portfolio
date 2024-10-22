import React, { useState, useRef } from "react";
import "../../styles/section/_contact.scss";
import { Input } from 'technotic';
import Button from "../../components/Button/Button.jsx";
import contactIcon from '../../assets/icon/Contact/contactme.png';
import Gmail from '../../assets/icon/Contact/Gmail.svg';
import Line from '../../assets/icon/Contact/Line.svg';
import Whatsapp from '../../assets/icon/Contact/Whatsapp.svg';
import Submit from '../../assets/icon/Contact/Submit.svg';
import Photo from '../../assets/icon/Contact/fotocontact.png';
import { Zoom } from 'react-reveal';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const subject = form.current.user_subject.value;
    const message = form.current.message.value;

    if (!name || !email || !subject || !message) {
      setValidationError("Please fill in all the required fields.");
      return;
    }

    emailjs
      .sendForm('service_tgp8b4o', 'template_lh11n17', form.current, 'k8Mgr0C27aDMIltha')
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          setIsSubmitted(true);
          setValidationError("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Title Section */}
        <div className="contact-title">
          <img src={contactIcon} alt="Contact Icon" />
          <h1>Reach Me</h1>
        </div>

        {/* Contact Card Section */}
        <Zoom bottom>
          <div className="contact-card">
            {/* Left Section with Profile and Contact Information */}
            <div className="contact-left">
            <p>|| Undergraduate Computer Science Student at BINUS || <br /> || Streaming on Software Engineering || <br /></p>
              <div className="social-media">
                <div className="list-social-media">
                  <img src={Whatsapp} alt="WhatsApp Icon" />
                  <p>08979780001</p>
                </div>
                <div className="list-social-media">
                  <img src={Line} alt="Line Icon" />
                  <p>ivanadrian_</p>
                </div>
                <div className="list-social-media">
                  <img src={Gmail} alt="Gmail Icon" />
                  <p>ivanadriann02@gmail.com</p>
                </div>
                <div className="contact-photo">
                  <img src={Photo} alt="Profile Photo" />
                </div>
              </div>
              <br></br>
            <p>Coding is more about problem-solving<br /> than memorizing syntax.<br /> Let's find solutions together!</p>
            </div>

            {/* Right Section with Form */}
            <div className="contact-right">
              {isSubmitted ? (
                <div className="success-message">Message sent successfully!</div>
              ) : (
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                  <h1>Contact Me</h1>

                  <div className="contact-input">
                    <Input.TextField
                      inputSize={'large'}
                      fontSize={'24px'}
                      textPlaceholder={'Name'}
                      name="user_name" />
                    <Input.TextField
                      inputSize={'large'}
                      fontSize={'24px'}
                      textPlaceholder={'Email'}
                      name="user_email" />
                    <Input.TextField
                      inputSize={'large'}
                      fontSize={'24px'}
                      textPlaceholder={'Subject'}
                      name="user_subject" />
                    <Input.TextField
                      inputSize={'large'}
                      fontSize={'24px'}
                      textPlaceholder={'Message'}
                      name="message" />
                  </div>

                  {/* Validation Error Display */}
                  {validationError && (
                    <div className="validation-error">{validationError}</div>
                  )}

                  {/* Submit Button */}
                  <div className="right-button">
                    <Button text='Submit' image={Submit} />
                  </div>
                </form>
              )}
            </div>
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default Contact;