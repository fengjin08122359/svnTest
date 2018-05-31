import React,{ Component } from "react";
import PropTypes from "prop-types";
import { Radio, Input, Checkbox } from 'element-react';

export default class Ucc extends Component{
	componentDidMount() {
	}
	render(){
		const { 
			http,
			switchHttp,
      switchHttps,
      example,
      domain,
      webPage,
      authKey,
      webSocket,
      redis,
      jpushAppkey,
      jpushSecret,
      jpushProduction,
      browserMerge,
      handelDomain,
      handelWebPage,
      handelAuthKey,
      handelWebSocket,
      handelRedis,
      handelBrowserMerge,
      handelJpushAppKey,
      handelJpushSecret,
      handelJpushProduction
		} = this.props;

		return(
			<div>
        <Radio value="1" checked={!http} onChange={switchHttp}>http</Radio>
        <Radio value="2" checked={http} onChange={switchHttps}>https</Radio>
        <Checkbox checked={webSocket} onChange={handelWebSocket}>启用webSocket</Checkbox>
        <Checkbox checked={redis} onChange={handelRedis}>启用访客监控</Checkbox>
        <Checkbox checked={browserMerge} onChange={handelBrowserMerge}>启用对话合并</Checkbox>
        <Input prepend="内部调用地址" onInput={handelDomain} value={domain} placeholder="" />
        <Input  prepend="外部调用地址" onInput={handelWebPage} value={webPage} placeholder="" />
        <Input  prepend="authKey" onInput={handelAuthKey} value={authKey} placeholder="" />
        <Input prepend="jpush.appkey" onInput={handelJpushAppKey} value={jpushAppkey} placeholder="" />
        <Input  prepend="jpush.secret" onInput={handelJpushSecret} value={jpushSecret} placeholder="" />
        <Input  prepend="jpush.production" onInput={handelJpushProduction} value={jpushProduction} placeholder="" />
        <Input value={example} type='textarea' autosize={{ minRows: 15, maxRows: 15 }} placeholder='请输入内容'></Input>
			</div>
		)
	}
}

Ucc.propTypes = {
	switchHttp: PropTypes.func.isRequired,
  switchHttps: PropTypes.func.isRequired,
}