import * as types from '../constants/homeType';
const initTotal = {
    navlist: null,
    originList: null,
    typeNumber1: '01',
    initDate: [],
    leftInd: 0,
    initRight: []
};
const Home = (state = initTotal, action) => {
    switch (action.type) {
    case types.huoqu:
        return Object.assign({}, state, {navlist: action.navlist});
    case types.origin:
        return Object.assign({}, state, {originList: action.originList});
    case types.number1:
        return Object.assign({}, state, { typeNumber1: action.typeNumber1 });
    case types.data:
            return Object.assign({}, state, { initDate: action.initDate });
    case types.left:
        return Object.assign({}, state, { leftInd: action.leftInd });
    case types.right:
        return Object.assign({}, state, { initRight: action.initRight });
    default:
        return state;
    }
};
export default Home;