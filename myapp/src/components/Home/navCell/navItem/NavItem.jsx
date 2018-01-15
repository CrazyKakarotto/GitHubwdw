import React, { Component } from 'react';
export default class NavItem extends Component {
    toggle () {
        const { id, fn, num, sporttype } = this.props;
        fn(id, num, sporttype)
    }
    render () {
        const { name, num, flag } = this.props;
        return (<span className= {flag} onClick={() => this.toggle()}>{name}{(num === -1 || num === -2) ? '' : num}</span>)
    }
}