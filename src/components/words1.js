import React, { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
const FormItem = Form.Item;

import { Link, hashHistory} from 'react-router';

import 'whatwg-fetch';

 class Words1 extends Component {
    constructor(props) {
        super(props);
    }

    previous = () => {
        hashHistory.push('/menu'); 
    }

    imgClick = () => {
        hashHistory.push('/words2'); 
    }

    render() {
        return(
            <div style={{width: "100%", height: "100%"}}>
                <img src="./build/src/pic/words1.png"  style={{width: "100%", height: "100%"}} onClick={this.imgClick}/>
                <Button style={{position: "absolute", height: 50, width: 160, left:20, top: 20, }} onClick={this.previous}>返回</Button>
            </div>
        );
    }
}

export default Words1;