import * as types from '../constants/homeType';
export const getNav = (navlist) => {
    return {
        type: types.huoqu,
        navlist
    };
};
export const getOriginNav = (originList) => {
    return {
        type: types.origin,
        originList
    }
}
export const getTypeNumber1 = (typeNumber1) => {
    return {
        type: types.number1,
        typeNumber1
    }
}
export const getGameList = (initDate) => {
    return {
        type: types.data,
        initDate
    }
}
export const getLeftInd = (leftInd) => {
    return {
        type: types.left,
        leftInd
    }
}
export const getRight = (initRight) => {
    return {
        type: types.right,
        initRight
    }
}