import React, {Component} from 'react';
export default class navCell extends Component {
    render () {
        const { children } = this.props;
        return (
            <div>
                {children}
            </div>);
    }
}