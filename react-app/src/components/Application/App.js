import React,{ Component } from "react";
import PropTypes from "prop-types";
import { Checkbox, Input } from 'element-react';

export default class Ucc extends Component{
	componentDidMount() {
	}
	render(){
		const { 
			path, 
			production,
      password,
      example,
      handlePath,
      handleProduction,
      handlePassword
		} = this.props;

		return(
			<div>
        <Input  prepend="证书" onInput={handlePath} value={path} placeholder="" />
        <Checkbox checked={production} onChange={handleProduction}>生产配置</Checkbox>
        <Input  prepend="密码" onInput={handlePassword} value={password} placeholder="" />
        <Input value={example} type='textarea' autosize={{ minRows: 15, maxRows: 15 }} placeholder='请输入内容'></Input>
			</div>
		)
	}
}

Ucc.propTypes = {
	handlePath: PropTypes.func.isRequired,
}