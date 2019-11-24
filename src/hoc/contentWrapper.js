import React, { Component } from 'react';
import styles from './hoc.module.css'
class ContentWrapper extends Component {
    render() {
        return (
            <div className={styles.contentWrapper}>
                {this.props.children}
            </div>
        );
    }
}

export default ContentWrapper;
