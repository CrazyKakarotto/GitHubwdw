import React, { Component } from 'react';
import style from './style.css';
import classNames from 'classnames';
export default class leftContent extends Component {
    getLi () {
        const { gai, id } = this.props;
        gai(id);
    }
    render() {
        const { text, idxx, id, indL, leagueName } = this.props;
        const dataParse = Date.parse(text.slice(0,9))
        const week = new Date(dataParse).getDay();
        const week1 = ['日', '一', '二', '三', '四', '五', '六']
        return (<li className={classNames({ [style.blue]: id == idxx })} onClick={this.getLi.bind(this)}><p>{indL != 1 ? `星期${week1[week]}` : leagueName}</p><p>{text.slice(0, 10)}</p></li>)
    }
}