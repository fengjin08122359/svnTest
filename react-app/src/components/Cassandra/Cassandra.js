import React,{ Component } from "react";
import PropTypes from "prop-types";
import { Input } from 'element-react';

export default class Cassandra extends Component{
	componentDidMount() {
	}
	render(){
		const {
      host,
      cluster,
      defaultKeyspace,
      strategyKeyspace,
      columnfamily,
      replication,
      example,
      handelHost,
      handelCluster,
      handelDefault,
      handelStrategy,
      handelColumnfamily,
      handelReplication
		} = this.props;

		return(
			<div>
        <Input prepend="host" onInput={handelHost} value={host} placeholder="" />
        <Input prepend="cluster" onInput={handelCluster} value={cluster} placeholder="" />
        <Input prepend="defaultKeyspace" onInput={handelDefault} value={defaultKeyspace} placeholder="" />
        <Input prepend="strategyKeyspace" onInput={handelStrategy} value={strategyKeyspace} placeholder="" />
        <Input prepend="columnfamily" onInput={handelColumnfamily} value={columnfamily} placeholder="" />
        <Input prepend="replication.factor" onInput={handelReplication} value={replication} placeholder="" />
        <Input value={example} type='textarea' autosize={{ minRows: 15, maxRows: 15 }} placeholder='请输入内容'></Input>
			</div>
		)
	}
}

Cassandra.propTypes = {
	handelHost: PropTypes.func.isRequired,
}