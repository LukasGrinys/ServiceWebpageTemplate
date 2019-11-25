import React from 'react';
import styles from './contacts.module.css';
import ScrollAnimation from 'react-animate-on-scroll'
import ContactBox from './contactBox';
const Contact = () => {
    return (
        <div>
            <div className={styles.header}>
                <h1>Contact</h1>
            </div>
            <div className={styles.contactsWrapper}>
                <h1>Get in touch</h1>
                <ScrollAnimation animateIn={'fadeInLeft'} animateOnce={true}>
                    <ContactBox
                    name={"Jane Doe"}
                    position={"Administrator"}
                    mail={"mail@mail.com"}
                    phone={"+00 1515151515"}
                    pictureSrc={"Images/contact.png"}
                    />
                </ScrollAnimation>

                <ScrollAnimation delay={1000} animateIn={'fadeInLeft'} animateOnce={true}>
                    <ContactBox
                    name={"John Doe"}
                    position={"Administrator"}
                    mail={"mail@mail.com"}
                    phone={"+00 1515151515"}
                    pictureSrc={"Images/contact.png"}
                    />    
                </ScrollAnimation>               
                
                <ScrollAnimation delay={2000} animateIn={'fadeInLeft'} animateOnce={true}>
                    <ContactBox
                    name={"James Doe"}
                    position={"Administrator"}
                    mail={"mail@mail.com"}
                    phone={"+00 1515151515"}
                    pictureSrc={"Images/contact.png"}
                    />
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default Contact;