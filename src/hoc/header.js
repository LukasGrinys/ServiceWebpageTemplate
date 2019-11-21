import React, { Component } from 'react';
import styles from './hoc.module.css';
import NavigationBar from './navigationBar';

class Header extends Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.logo}>Logo</div>
                <NavigationBar/>
            </div>
        );
    }
}

export default Header;