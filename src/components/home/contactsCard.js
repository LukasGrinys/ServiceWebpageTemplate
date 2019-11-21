import React from 'react';
import styles from './home.module.css';
import {ReactComponent as Illustration} from './contact.svg'
const ContactsCard = () => {
    return (
        <div className={styles.sectionCard} style={{
            backgroundColor: '#0a001a',
            color: '#f2f2f2'
        }}>
            <div>
                <Illustration className={styles.illustration}/>
            </div>
            <div>
                <h1>Contact us</h1>
                <div className={styles.contactInfo}>
                    <p><img className={styles.contactIcon} src="Images/icons/phone.png" alt="Phone"/>Phone: +00 (151)515</p>
                    <p><img className={styles.contactIcon} src="Images/icons/mail.png" alt="E-mail"/>Email: mail@mail.com</p>
                    <p><img className={styles.contactIcon} src="Images/icons/location.png" alt="Address"/>Location: Wondertown, Wonder st. 1</p>
                </div>

            </div>
        </div>
    );
};

export default ContactsCard;