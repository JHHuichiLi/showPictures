import React, { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
const FormItem = Form.Item;

import { Link, hashHistory} from 'react-router';

import 'whatwg-fetch';

 class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNo: 0,
        }
    }

    previous = () => {
        if(this.state.pageNo === 0){
            return;
        }
        let img = document.getElementsByTagName('img')[0];
        img.src = "/src/pic/login-background.jpg";
        this.setState({
            pageNo: this.state.pageNo - 1,
        });
    }

    next = () => {
        let img = document.getElementsByTagName('img')[0];
        img.src = "/src/pic/bg.jpeg";
        this.setState({
            pageNo: this.state.pageNo + 1,
        });
    }

    render() {
        return(
            <div style={{width: "100%", height: "100%"}}>
                <img src="/src/pic/1.png"  style={{width: "100%", height: "100%"}}/>
                <Button style={{position: "absolute", left:20, top: 20, }} onClick={this.previous}>上一张</Button>
                <Button style={{position: "absolute", right:20, top: 20}} onClick={this.next}>下一张</Button>
            </div>
        );
    }
}

export default Login;