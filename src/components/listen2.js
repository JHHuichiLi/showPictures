import React, { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
import { Link, hashHistory} from 'react-router';

 class Listen2 extends Component {
    constructor(props) {
        super(props);
    }

    previous = () => {
        hashHistory.push('/listen1'); 
    }

    imgClick = () => {
        // hashHistory.push('/listen2'); 
    }

    render() {
        return(
            <div style={{width: "100%", height: "100%"}}>
                <img src="./src/pic/listen2.png"  style={{width: "100%", height: "100%"}} onClick={this.imgClick}/>
                <Button style={{position: "absolute", height: 50, width: 160, left:20, top: 20, }} onClick={this.previous}>返回</Button>
            </div>
        );
    }
}

export default Listen2;