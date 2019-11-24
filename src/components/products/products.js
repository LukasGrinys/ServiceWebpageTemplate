import React from 'react';
import styles from './products.module.css'

import ContentWrapper from '../../hoc/contentWrapper';
import Plans from './plans';
const Service = () => {
    return (
        <div>
            <div className={styles.header}>
                <h1>
                    Service
                </h1>
            </div>
            <ContentWrapper>
                <div className={styles.productsContent}>
                    <p>
                    Etiam pharetra mauris sed viverra hendrerit. Proin bibendum egestas 
                    orci non molestie. Donec id blandit tellus, quis bibendum sem. 
                    Praesent pharetra ultrices orci, ultrices venenatis sem 
                    pellentesque et.
                    </p>
                    <p>
                    Quisque fringilla molestie diam, ut commodo 
                    magna gravida vitae. Integer convallis scelerisque lobortis. 
                    Fusce convallis nibh dui, ac congue nisl ornare id. 
                    Aenean sagittis neque cursus lorem maximus auctor.
                    </p>
                    <h2>Our plans</h2>
                    <Plans></Plans>
                    <p>
                    Duis eget ligula non risus aliquam vehicula. 
                    Interdum et malesuada fames ac ante ipsum primis 
                    in faucibus. Integer interdum sit amet urna eu 
                    congue. Pellentesque posuere, purus sed faucibus 
                    tempus, nibh nisi interdum lorem, ac pharetra arcu
                    velit quis est. Duis iaculis tellus non rhoncus 
                    aliquet.
                    </p>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Service;