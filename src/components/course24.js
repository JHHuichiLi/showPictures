import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
import { Link, hashHistory} from 'react-router';

 class Course24 extends Component {
    constructor(props) {
        super(props);
    }

    previous = () => {
        hashHistory.push('/course1'); 
    }

    next = () => {
        hashHistory.push('/course25'); 
    }

    report = () => {
        hashHistory.push('/course25'); 
    }

    follow = () => {
        hashHistory.push('/course26'); 
    }
    
    render() {
        return(
            <div style={{width: "100%", height: "100%"}}>
                <img src="./build/src/pic/course24.png"  style={{width: "100%", height: "100%"}}/>
                <Button style={{position: "absolute", height: 50, width: 160, left:20, top: 20, }} onClick={this.previous}>返回</Button>
                <Button style={{position: "absolute", height: 50, width: 160, right:"5%", top: "38%", }} onClick={this.report}>Report</Button>
                <Button style={{position: "absolute", height: 50, width: 160, right:"5%", top: "56%", }} onClick={this.follow}>Follow me</Button>
            </div>
        );
    }
}

export default Course24;