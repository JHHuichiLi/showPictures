import React, { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
const FormItem = Form.Item;

import { Link, hashHistory} from 'react-router';

import 'whatwg-fetch';

 class Index extends Component {
    constructor(props) {
        super(props);
    }

    previous = () => {
        hashHistory.push('/info'); 
    }

    next = () => {
        hashHistory.push('/menu'); 
    }

    imgClick = () => {
        hashHistory.push('/indexNext'); 
    }

    render() {
        return(
            <div style={{width: "100%", height: "100%"}}>
                <img src="/src/pic/1.png"  style={{width: "100%", height: "100%"}} onClick={this.imgClick}/>
                <Button style={{position: "absolute", height: 50, width: 160, left:20, top: 20, }} onClick={this.previous}>左滑</Button>
                <Button style={{position: "absolute", height: 50, width: 160, right:20, top: 20}} onClick={this.next}>右滑</Button>
            </div>
        );
    }
}

export default Index;