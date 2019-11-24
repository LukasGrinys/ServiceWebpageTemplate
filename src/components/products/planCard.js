import React from 'react';
import styles from './products.module.css';

const PlanCard = (props) => {
    const renderFeature = (featureNumber, featureName) => {
        let featuresToOffer = props.featuresToOffer;
        if (featureNumber < featuresToOffer) {
            return <div className={styles.feature}>{featureName}</div>
        } else {
            return <div style={{ opacity: 0.3 }} className={styles.feature}>{featureName}</div>
        }
    }
    return (
        <div className={styles.planItem}>
            <div className={styles.planNameBack}></div>
            <div className={styles.planName}>{props.planName}</div>
            <div className={styles.planPriceWrapper}>
                <div className={styles.planPriceCurrency}>$</div>
                <div className={styles.planPrice}>{props.price}</div>
                <div className={styles.planPriceMonth}>/year</div>
            </div>
            <div className={styles.featureList}>
                {renderFeature(0, "Feature A")}
                {renderFeature(1, "Feature B")}
                {renderFeature(2, "Feature C")}
                {renderFeature(3, "Feature D")}
                {renderFeature(4, "Feature E")}
            </div>
            <button className={styles.planButton} type="button">Get started</button>
        </div>
    );
};

export default PlanCard;