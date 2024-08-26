import React, { useState, useRef } from "react";
import "../../styles/section/_contact.scss";
import {Input} from 'technotic';
import Button from "../../components/Button/Button.jsx"
import contactIcon from '../../assets/icon/Contact/Contact.svg'
import Gmail from '../../assets/icon/Contact/Gmail.svg'
import Line from '../../assets/icon/Contact/Line.svg'
import Whatsapp from '../../assets/icon/Contact/Whatsapp.svg'
import Submit from '../../assets/icon/Contact/Submit.svg'
import {Zoom} from 'react-reveal'
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
          console.log("message sent");
          setIsSubmitted(true); 
          setValidationError("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return(
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-title">
          <img src={contactIcon} alt="" />
          <h1>Reach Me</h1>
        </div>
        <Zoom bottom>
          <div className="contact-card">
            <div className="contact-left">
              <p>Programming is not about<br/> what you know; it’s about <br/> what you can figure out<br/></p>
              <div className="social-media">
                <div className="list-social-media">
                  <img src={Whatsapp} alt="" />
                  <p>08979780001</p>
                </div>
                <div className="list-social-media">
                  <img src={Line} alt="" />
                  <p>ivanadrian_</p>
                </div>
                <div className="list-social-media">
                  <img src={Gmail} alt="" />
                  <p>ivan.adrian@binus.ac.id</p>
                </div>
              </div>
            </div>
            <div className="contact-right">
              {isSubmitted ? (
                <div className="success-message">Message sent successfully!</div>
                  ) : (
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                      <h1>Feel Free to Contact Me</h1>

                      <div className="contact-input">
                        
                        <Input.TextField 
                        inputSize={'large'}
                        fontSize={'24px'}
                        textPlaceholder={'Name'}
                        name="user_name"/>

                        <Input.TextField 
                        inputSize={'large'}
                        fontSize={'24px'}
                        textPlaceholder={'Email'}
                        name="user_email"/>

                        <Input.TextField 
                        inputSize={'large'}
                        fontSize={'24px'}
                        textPlaceholder={'Subject'}
                        name="user_subject"/>

                        <Input.TextField 
                        inputSize={'large'}
                        fontSize={'24px'}
                        textPlaceholder={'Message'}
                        name="message"/>
                      </div>

                      {validationError && (
                        <div className="validation-error">{validationError}</div>
                      )}
                      <div className="right-button">
                          <Button text='Submit' image={Submit}/>
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