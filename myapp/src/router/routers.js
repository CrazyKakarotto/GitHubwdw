import Loadable from 'react-loadable';
import React from 'react';
const Loading = () => {
    return (<div>loading....</div>)
};
const Shouye = Loadable({
    loader: () => import('../components/Home'),
    loading: Loading
})
const Mine = Loadable({
    loader: () => import('../components/Mine'),
    loading: Loading
})
const BaoLiao = Loadable({
    loader: () => import('../components/BaoLiao'),
    loading: Loading
})
const BiFen = Loadable({
    loader: () => import('../components/BiFen'),
    loading: Loading
})
const JingCar = Loadable({
    loader: () => import('../components/JingCai'),
    loading: Loading
})
export default {
    Shouye,
    Mine,
    BaoLiao,
    BiFen,
    JingCar
}