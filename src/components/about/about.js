import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Header from './header';
import ContentWrapper from '../../hoc/contentWrapper';
import { ReactComponent as Illustration} from '../home/connection.svg';
import styles from './about.module.css';
import Line from './../../hoc/line';

import ToTopBtn from '../../hoc/toTopBtn';
class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <ContentWrapper>
                    <div className={styles.aboutContent}>
                        <h2>Our story</h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam fermentum ipsum non justo tempus, eu hendrerit ex 
                        interdum. <br></br>
                        </p>
                        <ToTopBtn/>
                        <ScrollAnimation animateIn={"fadeInLeft"} animateOnce={true} >
                            <div className={styles.imageContainer}>
                            <Illustration className={styles.illustration}/>          
                            </div>   
                        </ScrollAnimation> 
                        <p>
                        Vivamus vitae magna tortor. Quisque porta dolor sed quam 
                        egestas volutpat. Duis scelerisque metus id luctus eleifend. 
                        Pellentesque ornare nunc eget ligula dapibus, vitae placerat 
                        neque eleifend.
                        </p>
                        <h2>Our goal</h2>
                        <p>
                        Phasellus ac odio a ex tempor consequat. Quisque ultrices 
                        leo sed leo iaculis, id mattis felis efficitur. Cras vel 
                        eleifend enim, non viverra orci. Nam accumsan lorem in augue 
                        condimentum gravida. 
                        </p>
                        <Line/>
                        <p>
                        Aenean a nulla dui. Sed a porta erat. Donec egestas efficitur 
                        sollicitudin. Curabitur a eros quis justo luctus pharetra in 
                        nec ligula. Cras quis dictum est.
                        </p>
                        <h2>More information</h2>
                        <p>
                        Sed egestas congue fringilla. Sed molestie lorem tortor, id 
                        vestibulum velit ullamcorper non. In felis est, sagittis 
                        interdum scelerisque quis, vehicula non nunc. Nam scelerisque 
                        malesuada venenatis. Maecenas lacinia arcu justo, nec pulvinar
                        lacus venenatis eu. 
                        </p>
                    </div>
                    
                </ContentWrapper>
            </div>
        );
    }
}

export default About;