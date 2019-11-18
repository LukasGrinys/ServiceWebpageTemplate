import React, { Component } from 'react';
import styles from './home.module.css';

import { ReactComponent as Illustration } from './connection.svg'
import { ReactComponent as Illustration2 } from './service.svg'

class Home extends Component {
    render() {
        return (
            <div>
                <div className={styles.sectionPurple}>
                    <div className={styles.sectionInfo}>
                        <h1 className={styles.animated}>Welcome!</h1>
                        <p className={styles.animated}>Here is the short info about our services, a new experience</p>
                        <button className={styles.animated} type="button">Get Started</button>
                    </div>
                    <div className={styles.graphicBox}>
                        <div className={styles.cloud}></div>
                        <Illustration className={styles.illustration} />
                    </div>
                </div>
                <div className={styles.sectionWhite}>
                    <div className={styles.graphicBox}>
                        <Illustration2 className={styles.illustration}/>
                    </div>
                    <div className={styles.sectionInfo}>
                        <h1>What we are about</h1>
                        <p>We offer you a reliable and trustworthy service from any place in the world</p>
                        <button type="button">Learn More <img src="Images/arrow.png" alt="Learn more"></img></button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;