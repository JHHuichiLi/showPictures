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
import DownMenu from './components/downMenu';
import Words1 from './components/words1';
import Words2 from './components/words2';
import Words3 from './components/words3';
import Words4 from './components/words4';
import Words5 from './components/words5';
import Listen1 from './components/listen1';
import Listen2 from './components/listen2';
import Course1 from './components/course1';
import Course2 from './components/course2';
import Course3 from './components/course3';
import Course4 from './components/course4';
import Course5 from './components/course5';
import Course6 from './components/course6';
import Course7 from './components/course7';
import Course8 from './components/course8';
import Course9 from './components/course9';
import Course10 from './components/course10';
import Course11 from './components/course11';
import Course12 from './components/course12';
import Course13 from './components/course13';
import Course14 from './components/course14';
import Course15 from './components/course15';
import Course16 from './components/course16';
import Course17 from './components/course17';
import Course18 from './components/course18';
import Course19 from './components/course19';
import Course20 from './components/course20';
import Course21 from './components/course21';
import Course22 from './components/course22';
import Course23 from './components/course23';
import Course24 from './components/course24';
import Course25 from './components/course25';
import Course26 from './components/course26';
import Course27 from './components/course27';

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
                <Route path="downMenu" component={DownMenu} />
                <Route path="words1" component={Words1} />
                <Route path="words2" component={Words2} />
                <Route path="words3" component={Words3} />
                <Route path="words4" component={Words4} />
                <Route path="words5" component={Words5} />
                <Route path="listen1" component={Listen1} />
                <Route path="listen2" component={Listen2} />
                <Route path="course1" component={Course1} />
                <Route path="course2" component={Course2} />
                <Route path="course3" component={Course3} />
                <Route path="course4" component={Course4} />
                <Route path="course5" component={Course5} />
                <Route path="course6" component={Course6} />
                <Route path="course7" component={Course7} />
                <Route path="course8" component={Course8} />
                <Route path="course9" component={Course9} />
                <Route path="course10" component={Course10} />
                <Route path="course11" component={Course11} />
                <Route path="course12" component={Course12} />
                <Route path="course13" component={Course13} />
                <Route path="course14" component={Course14} />
                <Route path="course15" component={Course15} />
                <Route path="course16" component={Course16} />
                <Route path="course17" component={Course17} />
                <Route path="course18" component={Course18} />
                <Route path="course19" component={Course19} />
                <Route path="course20" component={Course20} />
                <Route path="course21" component={Course21} />
                <Route path="course22" component={Course22} />
                <Route path="course23" component={Course23} />
                <Route path="course24" component={Course24} />
                <Route path="course25" component={Course25} />
                <Route path="course26" component={Course26} />
                <Route path="course27" component={Course27} />
            </Route>
        </Router>
    ), document.getElementById('app')
);
