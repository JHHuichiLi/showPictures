import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
import { Link, hashHistory} from 'react-router';

 class Course8 extends Component {
    constructor(props) {
        super(props);
    }

    previous = () => {
        hashHistory.push('/course1'); 
    }

    list = () => {
        hashHistory.push('/course9'); 
    }

    render() {
        return(
            <div style={{width: "100%", height: "100%"}}>
                <img src="./src/pic/course8.png"  style={{width: "100%", height: "100%"}}/>
                <Button style={{position: "absolute", height: 50, width: 160, left:20, top: 20, }} onClick={this.previous}>返回</Button>
                <Button style={{position: "absolute", height: 50, width: 160, right:20, top: 20}} onClick={this.list}>列表</Button>
            </div>
        );
    }
}

export default Course8;