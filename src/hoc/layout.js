import React, { Component } from 'react';

import Header from './header';

class Layout extends Component {
    render() {
        return (
            <div> 
                <Header/>
                {this.props.children}
                This could be a footer
            </div>
        )
    }
} 
export default Layout;