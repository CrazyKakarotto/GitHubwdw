import React, { Component } from 'react';
import style from './style.css';
export default class Main extends Component {
    render() {
        const { children } = this.props;
        return (<div>
                {children}
            </div>
        )
    }
}