import React,{ Component } from "react";
import PropTypes from "prop-types";
import { Radio, Input } from 'element-react';

export default class Openfire extends Component{
	componentDidMount() {
	}
	render(){
		const { 
			http, 
			switchHttp,
      switchHttps,
      example,
      domain,
      inside,
      outside,
      handelDomain,
      handelInside,
      handelOutside
		} = this.props;

		return(
			<div>
        <Radio value="1" checked={!http} onChange={switchHttp}>http</Radio>
        <Radio value="2" checked={http} onChange={switchHttps}>https</Radio>
        <Input prepend="内部调用地址" onInput={handelDomain} value={domain} placeholder="" />
        <Input  prepend="内网地址" onInput={handelInside} value={inside} placeholder="" />
        <Input  prepend="外网地址" onInput={handelOutside} value={outside} placeholder="" />
        <Input value={example} type='textarea' autosize={{ minRows: 15, maxRows: 15 }} placeholder='请输入内容'></Input>
			</div>
		)
	}
}

Openfire.propTypes = {
	switchHttp: PropTypes.func.isRequired,
  switchHttps: PropTypes.func.isRequired,
}