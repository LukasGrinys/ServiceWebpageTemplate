import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styles from './hoc.module.css';
import BarsButton from './barsButton.svg';
import CloseButton from './closeButton.svg'
import * as Scroll from 'react-scroll';
const scroll = Scroll.animateScroll;

class SmallNavBar extends Component {
    state = {
        openNav : false,
        something: "Another"
    };
    returnButton = () => {
        let buttonTemplate = '';
        if (this.state.openNav) {
            buttonTemplate = (
                <img src={CloseButton} alt="Close"/>
            )
        } else {
            buttonTemplate = (
                <img src={BarsButton} alt="Open Navigation"/>
            )
        }
        return buttonTemplate
    }
    scrollToTop = () => {
        scroll.scrollToTop();
    }
    returnButtonStyle = () => {
        let buttonStyle = {};
        if (this.state.openNav) {
            buttonStyle = {
                opacity: 0.3,
                transform: 'rotateZ(180deg)'
            }
        } else {
            buttonStyle = {
                opacity: 0.9
            }
        }
        return buttonStyle
    }
    openNavigation = () => {
        this.setState({
           openNav : this.state.openNav ? false : true
        })
    };

    closeNavigation = () => {
        this.setState({
            openNav : false
        })
    }

    buttonFunction = () => {
        this.closeNavigation();
        this.scrollToTop();
    }

    returnTemplate = () => {
        let template = '';
        if (this.state.openNav) {
            template = (
            <div>
                <div className={styles.navModal} onClick={this.openNavigation}></div>
                <div className={styles.smallNavBar}>
                    <div className={styles.smallNavItem} onClick={this.buttonFunction}>
                        <Link to="/">
                            Home
                        </Link>
                    </div>
                    <div className={styles.smallNavItem} onClick={this.buttonFunction}>
                        <Link to="/about">
                            About
                        </Link>
                    </div>
                    <div className={styles.smallNavItem} onClick={this.buttonFunction}>
                        <Link to="/service">
                            Service
                        </Link>
                    </div>
                    <div className={styles.smallNavItem} onClick={this.buttonFunction}>
                        <Link to="/partners">
                            Partners
                        </Link>
                    </div>
                    <div className={styles.smallNavItem} onClick={this.buttonFunction}>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
            )
        } else {
            template = '';
        }
        return template
    };
    
    render(){
        return (
            <div>
                <div onClick={this.openNavigation} className={styles.navBarBtn}
                style={this.returnButtonStyle()}
                >
                    {this.returnButton()}
                </div>
                {this.returnTemplate()}
            </div>
        )
    }
}

export default SmallNavBar;