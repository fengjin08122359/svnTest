import React,{ Component } from "react";
import PropTypes from "prop-types";
import { Input } from 'element-react';

export default class Mongo extends Component{
	componentDidMount() {
	}
	render(){
		const { 
      host,
      port,
      db,
      collection,
      imCollection,
      imGroupCollection,
      opCollection,
      example,
      handelHost,
      handelPort,
      handelDb,
      handelCollection,
      handelIm,
      handelImGroup,
      handelOp
		} = this.props;

		return(
			<div>
        <Input prepend="host" onInput={handelHost} value={host} placeholder="" />
        <Input prepend="port" onInput={handelPort} value={port} placeholder="" />
        <Input prepend="db" onInput={handelDb} value={db} placeholder="" />
        <Input prepend="collection" onInput={handelCollection} value={collection} placeholder="" />
        <Input prepend="imCollection" onInput={handelIm} value={imCollection} placeholder="" />
        <Input prepend="imGroupCollection" onInput={handelImGroup} value={imGroupCollection} placeholder="" />
        <Input prepend="opCollection" onInput={handelOp} value={opCollection} placeholder="" />
        <Input value={example} type='textarea' autosize={{ minRows: 15, maxRows: 15 }} placeholder='请输入内容'></Input>
			</div>
		)
	}
}

Mongo.propTypes = {
	handelHost: PropTypes.func.isRequired,
}