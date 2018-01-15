import React, { Component } from 'react';
import style from './style.css';
export default class RightContent extends Component {
    show () {
        const { id } = this.props;
        localStorage[id] = id;
    }
    quxiao () {
        const { quxiaoL, id } = this.props;
        quxiaoL(localStorage, id);
    }
    render() {
        const { h33, matchTime, ico, zhi } = this.props;
        return (<div className={style.wrap}>
            <h3>{h33}{matchTime.slice(9)} {(localStorage.length !== 0 && zhi == '我的关注') ? <button onClick={this.quxiao.bind(this)}>取消</button> : <button onClick={this.show.bind(this)}>收藏</button>}</h3>
            <div>
                <p><img src={ico[0].picUrl} alt="" />{ico[0].shortName}</p>
                <p><img src={ico[1].picUrl} alt="" />{ico[1].shortName}</p>
            </div>
        </div>)
    }
}