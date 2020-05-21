import React, { Component } from 'react';
import styles from './contacts.module.css'
import headImg from './contactHeader.jpeg';

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
                    <h1>Contact</h1>
                </div>
            );
        }    
    }
};

export default Header;