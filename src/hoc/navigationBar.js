import React, { Component } from 'react';
import styles from './hoc.module.css';
import { Link } from 'react-router-dom';

class NavigationBar extends Component {
    render() {
        return (
            <div className={styles.navigationBar}>
                <div className={styles.navItem}>
                    <Link to="/">
                        Home
                    </Link>
                </div>
                <div className={styles.navItem}>
                    <Link to="/about">
                        About
                    </Link>
                </div>
                <div className={styles.navItem}>
                    <Link to="/products">
                        Products
                    </Link>
                </div>
                <div className={styles.navItem}>
                    <Link to="/partners">
                        Partners
                    </Link>
                </div>
                <div className={styles.navItem}>
                    <Link to="/contact">
                        Contact
                    </Link>
                </div>
            </div>
        );
    }
}

export default NavigationBar;