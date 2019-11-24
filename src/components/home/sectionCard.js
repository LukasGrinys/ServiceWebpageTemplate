import React from 'react';
import styles from './home.module.css';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';

const SectionCard = (props) => {
    let settings = {
        backgroundColor: '',
        textColor: '',
        headlineColor: '',
    }
    const animatedClass = props.isAnimated ? styles.animated : '';
    let flexDirection = props.flexDirection;

    switch(props.type) {
        case('purple'):
            settings = {
                backgroundColor: '#6633ff',
                textColor: '#f1f1f1',
                headlineColor: '#f1f1f1'
            };
            break;
        case('white'):
            settings = {
                backgroundColor: '#f0e6ff',
                textColor: '#0a001a',
                headlineColor: '#6633ff'
            }
            break;
        case('dark'):
            settings = {
                backgroundColor: '#0a001a',
                textColor: '#f0e6ff',
                headlineColor: '#6633ff'
            }
            break;
        default:
            break;
    }
    let scroll = Scroll.animateScroll;

    const returnButton = () => {
        let isButton = props.isButton;
        let template = ''
        if (isButton) {
            template = (
                <Link to={props.buttonLink} onClick={()=>{
                    scroll.scrollToTop();
                }} duration={500}>
                    <button className={animatedClass}>{props.buttonText}</button>
                </Link>
            )
        } else {
            template = ''
        }
        return ( template );
    }
    return (
        <div className={styles.sectionCard}
        style={{
            backgroundColor: settings.backgroundColor,
            flexDirection: flexDirection
        }}>
            <div className={styles.sectionInfo}>
                <h1 className={animatedClass} style={{color:settings.headlineColor}}>{props.headlineText}</h1>
                <p className={animatedClass} style={{color:settings.textColor}}>{props.text}</p>
                {returnButton()}
            </div>
            <div className={styles.graphicBox}>
                {props.children}
            </div>
        </div>
    );
};

// <div className={styles.sectionPurple}>
//                     <div className={styles.sectionInfo}>
//                         <h1 className={styles.animated}>Welcome!</h1>
//                         <p className={styles.animated}>Here is the short info about our services, a new experience</p>
//                         <button className={styles.animated} type="button">Get Started</button>
//                     </div>
//                     <div className={styles.graphicBox}>
//                         <div className={styles.cloud}></div>
//                         <Illustration className={styles.illustration} />
//                     </div>
// </div>

export default SectionCard;
