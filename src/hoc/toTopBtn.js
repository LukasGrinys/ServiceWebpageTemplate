import React from 'react';
import styles from './toTopBtn.module.css'

import * as Scroll from 'react-scroll';

const ToTopBtn = () => {
    const goToTop = () => {
        const scroll = Scroll.animateScroll;
        scroll.scrollToTop();
    }
    return (
        <div className={styles.button} onClick={goToTop}>
            <img className={styles.arrow} src="Images/icons/toTop.png" alt="To Top"/>
            <div className={styles.text}>Go to top</div>
            <div className={styles.ring}></div>
        </div>
    );
};

export default ToTopBtn;