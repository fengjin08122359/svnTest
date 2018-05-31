import React,{ Component } from "react";
import PropTypes from "prop-types";
import { Button, Radio, Input } from 'element-react';

export default class Ucc extends Component{
	componentDidMount() {
	}
	render(){
		const { 
			http, 
			user,
			switchHttp,
      switchHttps,
      example,
      domain,
      webPage,
      authKey,
      handelDomain,
      handelExample,
      handelWebPage,
      handelAuthKey
		} = this.props;

		return(
			<div>
        <Radio value="1" checked={!http} onChange={switchHttp}>http</Radio>
        <Radio value="2" checked={http} onChange={switchHttps}>https</Radio>
        <Input prepend="域名" onInput={handelDomain} value={domain} placeholder="" />
        <Input  prepend="网址" onInput={handelWebPage} value={webPage} placeholder="" />
        <Input  prepend="authKey" onInput={handelAuthKey} value={authKey} placeholder="" />
				<button onClick = {switchHttp}>http</button>
				<span dangerouslySetInnerHTML = {{__html:"<-->"}}></span>
				<button onClick = {switchHttps}>https</button>
        <Input value={example} type='textarea' autosize={{ minRows: 15, maxRows: 15 }} placeholder='请输入内容'></Input>
        <Button onClick={() => handelExample(example)}>确定</Button>
			</div>
		)
	}
}

Ucc.propTypes = {
	switchHttp: PropTypes.func.isRequired,
  switchHttps: PropTypes.func.isRequired,
}