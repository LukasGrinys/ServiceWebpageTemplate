import React from 'react';
import styles from './partners.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

import ContentWrapper from '../../hoc/contentWrapper';

import ToTopBtn from '../../hoc/toTopBtn';


const Partners = () => {
    return (
        <div>
            <div className={styles.header}>
                <h1>Partners</h1>
            </div>
            <ContentWrapper>
                <div className={styles.partnersSection}>
                <h1>Hear from our partners</h1>
                    <ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce={true}>
                        <div className={styles.partnerItem}>
                            <div className={styles.left}>
                                <img src="Images/logo.png" alt="logo" className={styles.partnerLogo}/>
                                <h2>Partner 1</h2>
                            </div>
                            <div className={styles.right}>
                                <p>Phasellus sit amet sem mi. Morbi ac auctor 
                                    quam, eget mollis mauris. Mauris nec varius 
                                    tortor, vitae vehicula felis. Phasellus 
                                    rutrum in nisi ac bibendum. Nam eleifend 
                                    aliquet metus, id tincidunt urna faucibus 
                                    a. In vitae justo sapien. Morbi commodo 
                                    semper porta. Proin sagittis varius nibh 
                                    eget viverra.</p>
                            </div>
                            
                        </div>
                    </ScrollAnimation>
                    <ToTopBtn/>
                    <ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce={true}>
                        <div className={styles.partnerItem}>
                            <div className={styles.left}>
                                <img src="Images/logo.png" alt="logo" className={styles.partnerLogo}/>
                                <h2>Partner 2</h2>
                            </div>
                            <div className={styles.right}>
                                <p>Phasellus sit amet sem mi. Morbi ac auctor 
                                    quam, eget mollis mauris. Mauris nec varius 
                                    tortor, vitae vehicula felis. Phasellus 
                                    rutrum in nisi ac bibendum. Nam eleifend 
                                    aliquet metus, id tincidunt urna faucibus 
                                    a. In vitae justo sapien. Morbi commodo 
                                    semper porta. Proin sagittis varius nibh 
                                    eget viverra.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                    
                    <ScrollAnimation animateIn="fadeInLeft" duration={2} animateOnce={true}>
                        <div className={styles.partnerItem}>
                            <div className={styles.left}>
                                <img src="Images/logo.png" alt="logo" className={styles.partnerLogo}/>
                                <h2>Partner 3</h2>
                            </div>
                            <div className={styles.right}>
                                <p>Phasellus sit amet sem mi. Morbi ac auctor 
                                    quam, eget mollis mauris. Mauris nec varius 
                                    tortor, vitae vehicula felis. Phasellus 
                                    rutrum in nisi ac bibendum. Nam eleifend 
                                    aliquet metus, id tincidunt urna faucibus 
                                    a. In vitae justo sapien. Morbi commodo 
                                    semper porta. Proin sagittis varius nibh 
                                    eget viverra.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Partners;