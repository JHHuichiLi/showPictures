import React from 'react'
import ReactDom from 'react-dom'
/*import Calendar from './calendar.js'*/

/*ReactDom.render(
   <Calendar />, document.getElementById("app")
);*/
import {Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'
import {Icon, Switch} from 'antd'
const SubMenu = Menu.SubMenu

import 'font-awesome/css/font-awesome.min.css'
import './main.css';
import Index from './components/index.js'
import Info from './components/info';
import IndexNext from './components/indexNext';
import Menu from './components/menu';

const ACTIVE = { color: 'red' }

ReactDom.render(
    (
        <Router history={hashHistory} >
            <Route path="/" >
                <IndexRoute component={Index}/>
                <Route path="index" component={Index} />
                <Route path="info" component={Info} />
                <Route path="indexNext" component={IndexNext} />
                <Route path="menu" component={Menu} />
            </Route>
        </Router>
    ), document.getElementById('app')
);
