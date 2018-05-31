import React,{ Component } from "react";
import { Button, Input, Message } from 'element-react';

export default class ExportHtml extends Component{
	componentDidMount() {
	}
  save () {
    Message({
      message: '保存成功',
      type: 'success'
    });
  }
	render(){
		const { 
			example,
      state,
      saveExample
		} = this.props;

		return(
			<div>
        <Input value={example} type='textarea' autosize={{ minRows: 25, maxRows: 25 }} placeholder='请输入内容'></Input>
        <Button onClick={(event) => {  saveExample(state, example); this.save.bind(this)}}>保存</Button>
			</div>
		)
	}
}
