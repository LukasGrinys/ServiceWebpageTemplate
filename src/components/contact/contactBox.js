import React from 'react';
import styles from './contacts.module.css';

const ContactBox = (props) => {
    return (
        <div className={styles.contactBox}>
            <div className={styles.left}>
                <img className={styles.contactPicture} src={props.pictureSrc} alt="Contact Person"/>
            </div>
            <div className={styles.right}>
                <h2>{props.name}</h2>
                <p>{props.position}</p>
                <p><img className={styles.icon} src="Images/icons/phone.png" alt="Phone"/>{props.phone}</p>
                <p><img className={styles.icon} src="Images/icons/mail.png" alt="Mail"/>{props.mail}</p>
            </div>
            
        </div>
    );
};

export default ContactBox;