import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Header from './header';
import ContentWrapper from '../../hoc/contentWrapper';
import { ReactComponent as Illustration} from '../home/connection.svg';
import { ReactComponent as Illustration2} from '../home/options.svg';
import styles from './about.module.css';
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
                        interdum. Integer sollicitudin, tortor vitae aliquam eleifend, 
                        mi leo venenatis lacus, ut mollis quam dolor id libero.<br></br>
                        </p>
                        <ScrollAnimation animateIn={"fadeInUp"}>
                            <div className={styles.imageContainer}>
                            <Illustration className={styles.illustration}/>          
                            </div>   
                        </ScrollAnimation> 
                        <p>
                        Vivamus vitae magna tortor. Quisque porta dolor sed quam 
                        egestas volutpat. Duis scelerisque metus id luctus eleifend. 
                        Pellentesque ornare nunc eget ligula dapibus, vitae placerat 
                        neque eleifend. Duis a hendrerit dolor, at venenatis nibh.
                        </p>
                        <h2>Our goal</h2>
                        <p>
                        Phasellus ac odio a ex tempor consequat. Quisque ultrices 
                        leo sed leo iaculis, id mattis felis efficitur. Cras vel 
                        eleifend enim, non viverra orci. Nam accumsan lorem in augue 
                        condimentum gravida. Sed porta purus sit amet velit auctor, 
                        non efficitur enim pharetra. 
                        </p>
                        <ScrollAnimation animateIn={"fadeInUp"}>
                            <div className={styles.imageContainer}>
                            <Illustration2 className={styles.illustration}/>          
                            </div>   
                        </ScrollAnimation> 
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
                        <p>
                        Aenean non velit tortor. Vestibulum convallis dolor a sapien 
                        tincidunt, sit amet faucibus justo pharetra. Morbi semper 
                        hendrerit ipsum vel aliquet. Proin eu eros vulputate diam feugiat
                         elementum eu at mauris. Nullam id fermentum erat. Pellentesque 
                         pharetra blandit iaculis. Donec sollicitudin dictum massa, quis 
                         finibus arcu tincidunt vitae. Fusce mollis dui erat. In hac 
                         habitasse platea dictumst.
                        </p>
                    </div>
                    
                </ContentWrapper>
            </div>
        );
    }
}

export default About;