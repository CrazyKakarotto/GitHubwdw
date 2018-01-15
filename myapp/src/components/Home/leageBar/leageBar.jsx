import React, { Component } from 'react';
import style from './style.css';
export default class LeageBar extends Component {
    fn1 () {
        const { fnn, id1, text } = this.props;
        fnn(id1, text)
    }
    render () {
        const { text, flag1 } = this.props;
        return (<span className={flag1} onClick={this.fn1.bind(this)}>{text}</span>)
    }
}