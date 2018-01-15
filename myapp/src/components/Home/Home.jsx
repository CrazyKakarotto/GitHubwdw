import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNav, getOriginNav, getTypeNumber1, getGameList, getLeftInd, getRight } from '../../store/action/Home.js';
import { get, getTypeshu } from '../common/axiosGet.js';
import NavCell from './navCell';
import NavItem from './navCell/navItem';
import style from './style.css';
import LeageBar from './leageBar';
import Main from './main';
import LeftContent from './main/leftContent';
import RightContent from './main/rightContent';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ind: 0,
            leage: ['按时间', '按联赛', '我的关注'],
            indL: 0,
            zhi: '按时间',
            localStorage: null
        }
    }
    componentDidMount () {
        const { getNav, getOriginNav } = this.props;
        // 默认首页内容
        get('/nav').then((res) => {
            const nav = [...res, ...res]
            getOriginNav(nav);
            let newNav = [];
            if (nav.length > 8) {
                newNav = nav.slice(0,7);
                newNav.push({ name: '更多....', gameId: -1})
            }
            getNav(newNav);
        });
        this.fengzhuang('01', 0);
    }
    //封装
    fengzhuang(sportType, id1) {
        let { getGameList, getRight } = this.props;
        const { indL, zhi } = this.state;
        this.fengzhuang2(zhi, id1, sportType) //时间联赛筛选封装
    }
    fengzhuang2(zhi, id1, sportType) {
        let { getGameList, getRight } = this.props;
        if (zhi == '按时间') { //按时间筛选
            getTypeshu(`https://trad-pusher.8win.com/match/v2?k=cn0100${sportType}`)
                .then((res) => {
                    const data1 = JSON.parse(res);
                    let arr = [];
                    for (let item of data1) {
                        arr.push(item.matchTime.split(' ')[0]);
                    }
                    const slieKey = new Set(arr);
                    const json = {};
                    for (let item of slieKey) {
                        json[item] = [];
                        for (let i of data1) {
                            const matchTime = i.matchTime.split(' ')[0];
                            if (item === matchTime) {
                                json[item].push(i);
                            }
                        }
                    }
                    let wdw = [];
                    for (let val in json) {
                        wdw.push(json[val]);
                    }
                    getGameList(wdw);
                    const { initDate } = this.props;
                    getRight(initDate[id1]);
                });
        } else if (zhi == '按联赛') { //按联赛筛选
            getTypeshu(`https://trad-pusher.8win.com/match/v2?k=cn0100${sportType}`)
                .then((res) => {
                    const dataL = JSON.parse(res);
                    let arrL = [];
                    for (let item of dataL) {
                        arrL.push(item.leagueName.split(' ')[0]);
                    }
                    const quchong = new Set(arrL);
                    const json = {};
                    for (let item of quchong) {
                        json[item] = [];
                        for (let i of dataL) {
                            const leagueName = i.leagueName.split(' ')[0];
                            if (item === leagueName) {
                                json[item].push(i);
                            }
                        }
                    }
                    let wdw = [];
                    for (let val in json) {
                        wdw.push(json[val]);
                    }
                    getGameList(wdw);
                    const { initDate } = this.props;
                    getRight(initDate[id1]);
                });
        }
    }
    //点击导航
    setId(id, num, sportType) {
        const { originList, getTypeNumber1, getNav, leftInd, navlist } = this.props;
        this.setState({
            ind: id
        })
        if (num === -1) {
            if (Object.keys(originList).length == 14) {
                originList.push({ name: '隐藏', gameId: -2 })
            }
            getNav(originList)
        } else if (num === -2) {
            const arr1 = navlist.slice(0, 7);
            arr1.push({ name: '更多....', gameId: -1 })
            getNav(arr1)
        }else {
            if (sportType < 10) sportType = `0${sportType}`;
            if (navlist.length === 15) {
                navlist[7] = originList[id];
                const arr1 = navlist.slice(0, 8);
                getNav(arr1)
            }
            getTypeNumber1(sportType);
            this.fengzhuang(sportType, leftInd)
            
        }
    }
    // 点击时间联赛TAB切换
    setNum (id1, zhi1) {
        const { typeNumber1, leftInd } = this.props;
        this.setState({
            indL: id1,
            zhi: zhi1
        })
        this.fengzhuang2(zhi1, leftInd, typeNumber1)
    }
    //点击左侧
    setLi (id) {
        const { getLeftInd, getRight, initDate } = this.props;
        getLeftInd(id);
        getRight(initDate[id]);
    }
    //点击取消
    quxiaoL (local, id) {
        if (localStorage !== null ) {
            localStorage.removeItem(`${id}`);
            this.setState({
                localStorage: local
            })
        }
    }
    render () {
        const { navlist, typeNumber1, initDate, leftInd, initRight } = this.props;
        const { ind, leage, indL, zhi } = this.state;
        return (
        <div>
        <NavCell>
            {
                navlist !== null && navlist.map((item, idx) => {
                    return <NavItem sporttype={item.sportType} id={idx} flag = { idx === ind ? style.bg : style.span } fn = {this.setId.bind(this)} key={idx} name={item.name} num={item.gameId}></NavItem>
                })
            }
        </NavCell>
            {
                leage.map((item, idx) => {
                    let flag = typeNumber1 == '01' || typeNumber1 == '00';
                    if ( !flag ) {
                        return <LeageBar key={idx} id1 = {idx} text={ idx != 2 ? item : ''} fnn = {this.setNum.bind(this)} flag1={ idx === indL ? style.wdw : ''}/>
                    } else {
                        return <LeageBar key={idx} id1={idx} text={item} fnn={this.setNum.bind(this)} flag1={idx === indL ? style.wdw : ''}/>
                    }
                })
            }
            <Main>
            <div>
                <div className={style.left}>
                    {
                        initDate.length !== 0 && initDate.map((item, idx) => {
                            if (zhi !== '我的关注') {
                                return <LeftContent key={idx} id={idx} indL={indL} idxx={leftInd} gai={this.setLi.bind(this)} text={item[0].matchTime} leagueName={item[0].leagueName} />
                            }
                        })
                    }
                </div>
                <div className={style.right}>
                    {
                        initRight[0] !== undefined && initRight.map((item, idx) => {
                            if (zhi === '我的关注') {
                                if (localStorage.length !== 0 && Object.keys(localStorage).indexOf(String(idx)) != -1 ) {
                                    return <RightContent zhi = {zhi} key={idx} id={idx} h33={item.leagueName} matchTime={item.matchTime} ico={item.players} quxiaoL={this.quxiaoL.bind(this)}/>
                                }
                            } else {
                                return <RightContent zhi={zhi} key={idx} id = {idx} h33={item.leagueName} matchTime={item.matchTime} ico={item.players}/>
                            }
                        })
                    }
                </div>
            </div>
            </Main>
        </div>);
    }
}
const mapStateToProps = (state) => {
    return {
        navlist: state.Home.navlist,
        originList: state.Home.originList,
        typeNumber1: state.Home.typeNumber1,
        initDate: state.Home.initDate,
        leftInd: state.Home.leftInd,
        initRight: state.Home.initRight
    };
};
const mapDispatchToProps = {
    getTypeNumber1,
    getNav,
    getOriginNav,
    getGameList,
    getLeftInd,
    getRight
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);