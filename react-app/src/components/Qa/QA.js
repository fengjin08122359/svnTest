import React,{ Component } from "react";
import { Checkbox, Input } from 'element-react';

export default class QA extends Component{
	componentDidMount() {
	}
	render(){
		const { 
			url, 
			enable,
      example,
      handleUrl,
      handleEnable
		} = this.props;

		return(
			<div>
        <Input prepend="调用地址" onInput={handleUrl} value={url} placeholder="" />
        <Checkbox checked={enable} onChange={handleEnable}>启用智能推荐</Checkbox>
        <Input value={example} type='textarea' autosize={{ minRows: 15, maxRows: 15 }} placeholder='请输入内容'></Input>
			</div>
		)
	}
}
