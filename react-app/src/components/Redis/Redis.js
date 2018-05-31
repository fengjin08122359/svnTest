import React,{ Component } from "react";
import { Select, Input } from 'element-react';

export default class Redis extends Component{
	componentDidMount() {
	}
	render(){
		const { 
			mode,
      slaveIpPort,
      masterIpPort,
      modeType,
      password,
      example,
      handelMode,
      handelSlave,
      handelMaster,
      handelPwd
		} = this.props;

		return(
			<div>
        <Select value={mode} onChange={handelMode}>
          {
            modeType.map(el => {
              return <Select.Option key={el.value} label={el.label} value={el.value} />
            })
          }
        </Select>
        <Input prepend="多台" onInput={handelSlave} value={slaveIpPort} placeholder="" />
        <Input prepend="单台" onInput={handelMaster} value={masterIpPort} placeholder="" />
        <Input  prepend="密码" onInput={handelPwd} value={password} placeholder="" />
        <Input value={example} type='textarea' autosize={{ minRows: 15, maxRows: 15 }} placeholder='请输入内容'></Input>
			</div>
		)
	}
}
