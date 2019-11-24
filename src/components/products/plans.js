import React from 'react';
import styles from './products.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

import PlanCard from './planCard';

const Plans = () => {
    return (
        <ScrollAnimation animateIn="fadeInUp" duration={1.5} animateOnce={true}>
            <div className={styles.planWrapper}>
                <PlanCard
                planName={"Minimal"}
                price={25}
                featuresToOffer={1}    
                />
                <PlanCard
                planName={"Standart"}
                price={35}
                featuresToOffer={3}
                />
                <PlanCard
                planName={"Maximal"}
                price={50}
                featuresToOffer={5}
                />
            </div>
        </ScrollAnimation>

    );
};

export default Plans;