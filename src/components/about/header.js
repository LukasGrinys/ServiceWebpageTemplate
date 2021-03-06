import React, { Component } from 'react';
import styles from './about.module.css'
import headImg from './header.jpg';

class Header extends Component {
    state = {
        imageIsReady : false
    }
    componentDidMount(){
        const img = new Image();
        img.src = headImg;
        img.onload = () => { this.setState({ imageIsReady : true}) }
    }

    render() {
        const { imageIsReady } = this.state;
        if (!imageIsReady) {
            return (
                <div className={styles.header_loading}>
                    
                </div>
            )
        } else {
            return (
                <div className={styles.header}>
                    <img src={headImg} alt="About" className={styles.headerImg}/>
                    <div className={styles.filter}/>
                    <h1>About us</h1>
                </div>
            );
        }    
    }
};

export default Header;