import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
import { Link, hashHistory} from 'react-router';

 class Course1 extends Component {
    constructor(props) {
        super(props);
    }

    previous = () => {
        hashHistory.push('/index'); 
    }

    next = () => {
        hashHistory.push('/course2'); 
    }

    introduce = () => {
        hashHistory.push('/course2'); 
    }

    list = () => {
        hashHistory.push('/course9'); 
    }

    render() {
        return(
            <div style={{width: "100%", height: "100%"}}>
                <img src="./src/pic/course1.png"  style={{width: "100%", height: "100%"}} onClick={this.next}/>
                <Button style={{position: "absolute", height: 50, width: 160, left:20, top: 20, }} onClick={this.previous}>返回</Button>
                <Button style={{position: "absolute", height: 50, width: 160, right:20, top: 20}} onClick={this.list}>列表</Button>
                <Button style={{position: "absolute", height: 50, width: 160, right:"5%", top: "60%", }} onClick={this.introduce}>查看介绍</Button>
            </div>
        );
    }
}

export default Course1;