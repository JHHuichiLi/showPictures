import React, { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
const FormItem = Form.Item;

import { Link, hashHistory} from 'react-router';

import 'whatwg-fetch';

 class DownMenu extends Component {
    constructor(props) {
        super(props);
    }

    previous = () => {
        hashHistory.push('/index'); 
    }

    dragup = () => {
        hashHistory.push('/menu'); 
    }

    listen = () => {
        hashHistory.push('/listen1');
    }
    render() {
        return(
            <div style={{width: "100%", height: "100%"}}>
                <img src="./src/pic/dragdown.png"  style={{width: "100%", height: "100%"}} onClick={this.imgClick}/>
                <Button style={{position: "absolute", height: 50, width: 160, left:20, top: 20, }} onClick={this.previous}>返回</Button>
                <Button style={{position: "absolute", height: 50, width: 160, left:"25%", top: "49%", }} onClick={this.listen}>听力浸泡</Button>
                <Button style={{position: "absolute", height: 50, width: 160, left:20, bottom: 20, }} onClick={this.dragup}>上拉</Button>
            </div>
        );
    }
}

export default DownMenu;