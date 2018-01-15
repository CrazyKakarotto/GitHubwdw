import React, { Component } from 'react';
import { Footer } from './router/footer.js';
import { NavLink, Route, Switch } from 'react-router-dom';
import style from './App.css'
class App extends Component {
    render () {
        return (
            <div>
                <p className={style.p}>分秒必猜</p>
                <Switch>
                    {
                        Footer.Route.map((item, idx) => {
                            return <Route key = { idx } path={item.path} component={item.component}></Route>;
                        })
                    }
                </Switch>
                <div className={style.footer}>
                    {
                        Footer.Footer.map((item, idx) => {
                            return <NavLink className={style.link} key={idx} to={item.to}>{item.text}</NavLink>;
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;
