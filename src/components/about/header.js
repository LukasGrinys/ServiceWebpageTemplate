import React from 'react';
import styles from './about.module.css'
import headImg from './header.jpg';

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={headImg} alt="About" className={styles.headerImg}/>
            <div className={styles.filter}/>
            <h1>About us</h1>
        </div>
    );
};

export default Header;