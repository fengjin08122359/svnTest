import React,{ Component } from "react";
import { Input } from 'element-react';

export default class Other extends Component{
	componentDidMount() {
	}
	render(){
		const { 
			wxUrl, 
      wccUrl,
      pluginUrl,
      ip,
      mail,
      umpInterface,
      ump,
      replace,
      example,
      handleWx,
      handleWcc,
      handlePlugin,
      handleIp,
      handleMail,
      handleUmp,
      handleUmpInterface,
      handleReplace,
		} = this.props;

		return(
			<div>
        <Input prepend="微信认证" onInput={handleWx} value={wxUrl} placeholder="" />
        <Input prepend="wcc接口" onInput={handleWcc} value={wccUrl} placeholder="" />
        <Input prepend="插件中心" onInput={handlePlugin} value={pluginUrl} placeholder="" />
        <Input prepend="邮件webservice" onInput={handleMail} value={mail} placeholder="" />
        <Input prepend="UMP的内部调用地址" onInput={handleUmpInterface} value={umpInterface} placeholder="" />
        <Input prepend="UMP的地址" onInput={handleUmp} value={ump} placeholder="" />
        <Input prepend="IP库配置" onInput={handleIp} value={ip} placeholder="" />
        <Input prepend="BS内外网替换" onInput={handleReplace} value={replace} placeholder="" />
        <Input value={example} type='textarea' autosize={{ minRows: 15, maxRows: 15 }} placeholder='请输入内容'></Input>
			</div>
		)
	}
}
