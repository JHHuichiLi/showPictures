import React, { Component } from 'react';

import { Form, Icon, Input, Button, Checkbox, message} from 'antd';
import { Link, hashHistory} from 'react-router';

 class Info extends Component {
    constructor(props) {
        super(props);
    }

    next = () => {
        hashHistory.push('/index'); 
    }

    render() {
        return(
            <div style={{width: "100%", height: "100%"}}>
                <img src="/src/pic/left.png"  style={{width: "100%", height: "100%"}}/>
                <Button style={{position: "absolute", height: 50, width: 160, right:20, top: 20}} onClick={this.next}>右滑</Button>
            </div>
        );
    }
}

export default Info;