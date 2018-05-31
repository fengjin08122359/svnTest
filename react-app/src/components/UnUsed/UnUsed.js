import React,{ Component } from "react";
import { Input } from 'element-react';

export default class UnUsed extends Component{
	componentDidMount() {
	}
	render(){
		const { 
			example,
      handelExample
		} = this.props;

		return(
			<div>
        <Input value={example} onChange={handelExample} type='textarea' autosize={{ minRows: 15, maxRows: 15 }} placeholder='请输入内容'></Input>
			</div>
		)
	}
}
