import React, { Component } from 'react';
import styles from './footer.module.css';
import { Link } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div className={styles.footer}>
                <p>All rights reserved. 2019-2020</p>
                <div className={styles.socialIcons}>
                    <Link to="/" className={styles.socialLink}>
                        <img src="Images/icons/facebook.png" alt="Facebook"/>
                    </Link>
                    <Link to="/" className={styles.socialLink}>
                        <img src="Images/icons/instagram.png" alt="Instagram"/>
                    </Link>
                    <Link to="/" className={styles.socialLink}>
                        <img src="Images/icons/twitter.png" alt="Twitter"/>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Footer;