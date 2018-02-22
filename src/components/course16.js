import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
import { Link, hashHistory} from 'react-router';

 class Course16 extends Component {
    constructor(props) {
        super(props);
    }

    previous = () => {
        hashHistory.push('/course1'); 
    }

    next = () => {
        hashHistory.push('/course17'); 
    }
    
    render() {
        return(
            <div style={{width: "100%", height: "100%"}}>
                <img src="./build/src/pic/course16.png"  style={{width: "100%", height: "100%"}} onClick={this.next}/>
                <Button style={{position: "absolute", height: 50, width: 160, left:20, top: 20, }} onClick={this.previous}>返回</Button>
            </div>
        );
    }
}

export default Course16;