import React from 'react';
import styles from './home.module.css';

import partnerOne from './partner1.svg';
import partnerTwo from './partner2.svg';
import partnerThree from './partner3.svg';

const PartnersCard = () => {
    return (
        <div>
                <div className={styles.sectionCard} style={{
                    backgroundColor: '#f1f1f1'
                }}>
                    <h1 style={{
                        color: '#6633ff'
                    }}>Our partners</h1>
                    <div className={styles.partnersSection}>
                        <div className={styles.partnerBox}>
                            <img src={partnerOne} alt="partnerOne"/>
                            <h2>Partner 1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                        <div className={styles.partnerBox}>
                            <img src={partnerTwo} alt="partnerTwo"/>
                            <h2>Partner 2</h2>
                            <p>Ut blandit, dui in fermentum hendrerit, risus tellus bibendum eros, at ullamcorper risus eros et sapien.</p>
                        </div>
                        <div className={styles.partnerBox}>
                            <img src={partnerThree} alt="partnerThree"/>
                            <h2>Partner 3</h2>
                            <p>Suspendisse feugiat turpis in ligula finibus fringilla.</p>
                        </div>
                    </div>
                </div>           
        </div>
    );
};

export default PartnersCard;