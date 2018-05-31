import React,{ Component } from "react";
import { Input } from 'element-react';

export default class Image extends Component{
	componentDidMount() {
	}
	render(){
		const { 
			rootPath, 
			domain,
      example,
      prePath,
      codeImgFile,
      faceDir,
      handelDomain,
      handelRootPath,
      handelPrePath,
      handelCodeImgFile,
      handelFaceDir
		} = this.props;

		return(
			<div>
        <Input prepend="文件保存相对路径" onInput={handelDomain} value={domain} placeholder="" />
        <Input prepend="文件上传根目录" onInput={handelRootPath} value={rootPath} placeholder="" />
        <Input prepend="文件上传主目录" onInput={handelPrePath} value={prePath} placeholder="" />
        <Input prepend="二维码文件目录" onInput={handelCodeImgFile} value={codeImgFile} placeholder="" />
        <Input prepend="表情路径" onInput={handelFaceDir} value={faceDir} placeholder="" />
        <Input value={example} type='textarea' autosize={{ minRows: 15, maxRows: 15 }} placeholder='请输入内容'></Input>
			</div>
		)
	}
}
