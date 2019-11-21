import React, { Component, Fragment } from 'react';
import styles from './hoc.module.css';
import { Link } from 'react-router-dom';
import Media from 'react-media';
import SmallNavBar from './smallNavBar';

const FullNavBar = () => {
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
    )
}

class NavigationBar extends Component {
    render() {
        return (
            <div>
            <Media queries={{
                small: "(max-width: 720px)",
                large: "(min-width: 721px)"
            }}>
            {matches => (
            <Fragment>
            {matches.small && <SmallNavBar/>}
            {matches.large && <FullNavBar/>}
            </Fragment>
          )}
        </Media>
      </div>
        )
    }

}

export default NavigationBar;