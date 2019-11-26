import React, { Component } from 'react';
import styles from './home.module.css';

import { ReactComponent as Illustration } from './connection.svg'
import { ReactComponent as Illustration2 } from './service.svg'
import { ReactComponent as Illustration3 } from './options.svg';

import ToTopBtn from '../../hoc/toTopBtn';
import SectionCard from './sectionCard';
import PartnersCard from './partnersCard';
import ContactsCard from './contactsCard';

class Home extends Component {
    render() {
        return (
            <div>
                <div className={styles.cloudSection}>
                    <div className={styles.cloud}></div>
                </div>
                <SectionCard 
                type="purple" flexDirection="row"
                headlineText="Welcome!"
                text="Here is the short info about the service we provide."
                isButton={true}
                buttonText="Get Started"
                buttonLink="/"
                isAnimated={true}
                >
                    <Illustration className={styles.illustration}/>    
                </SectionCard>
                <ToTopBtn/>
                <SectionCard 
                type="white" flexDirection="row-reverse"
                headlineText="What we are about"
                text="We offer you a reliable and trustworthy service from any place in the world"
                isButton={true}
                buttonText="Learn More"
                buttonLink="/about"
                isAnimated={false}
                >
                    <Illustration2 className={styles.illustration}/>    
                </SectionCard>

                <SectionCard 
                type="dark" flexDirection="row"
                headlineText="Flexible options"
                text="Evaluate your needs and choose from different options we offer"
                isButton={true}
                buttonText="Learn More"
                buttonLink="/service"
                isAnimated={false}
                >
                    <Illustration3 className={styles.illustration}/>    
                </SectionCard>
                <PartnersCard/>
                <ContactsCard/>
            </div>

        );
    }
}

export default Home;