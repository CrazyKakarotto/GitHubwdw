import routers from './routers.js';
export const Footer = {
    Footer: [
        { 'to': 'home', 'text': '大厅' },
        { 'to': 'jingcai', 'text': '竞猜' },
        { 'to': 'baoliao', 'text': '爆料' },
        { 'to': 'bifen', 'text': '比分' },
        { 'to': 'wode', 'text': '我的' }
    ],
    Route: [
        { path: '/home', component: routers.Shouye },
        { path: '/jingcai', component: routers.JingCar },
        { path: '/baoliao', component: routers.BaoLiao },
        { path: '/bifen', component: routers.BiFen },
        { path: '/wode', component: routers.Mine }
    ]
};