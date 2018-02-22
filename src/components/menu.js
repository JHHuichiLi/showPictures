import React, { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
const FormItem = Form.Item;

import { Link, hashHistory} from 'react-router';

import 'whatwg-fetch';

 class Menu extends Component {
    constructor(props) {
        super(props);
    }

    previous = () => {
        hashHistory.push('/index'); 
    }

    imgClick = () => {
        // hashHistory.push('/indexNext'); 
    }

    dragdown = () => {
        hashHistory.push('/downMenu'); 
    }

    words = () => {
        hashHistory.push('/words1');
    }

    render() {
        return(
            <div style={{width: "100%", height: "100%"}}>
                <img src="./src/pic/right.png"  style={{width: "100%", height: "100%"}} onClick={this.imgClick}/>
                <Button style={{position: "absolute", height: 50, width: 160, left:20, top: 20, }} onClick={this.previous}>返回</Button>
                <Button style={{position: "absolute", height: 50, width: 160, right:20, top: 20}} onClick={this.next}>学习足迹</Button>
                <Button style={{position: "absolute", height: 50, width: 160, left:"25%", top: "41%", }} onClick={this.words}>词汇流利说</Button>
                <Button style={{position: "absolute", height: 50, width: 160, left:"25%", top: "74%", }} onClick={this.previous}>ONE行动</Button>
                <Button style={{position: "absolute", height: 50, width: 160, left:20, bottom: 20, }} onClick={this.dragdown}>下拉</Button>
            </div>
        );
    }
}

export default Menu;