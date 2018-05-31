const ACTIONS = {
	handelRootPath(value){
		return {
			type:"IMAGE_ROOTPATH",
      value
		}
	},
  handelPrePath(value){
    return {
      type: "IMAGE_PREPATH",
      value
    }
  },
  handelDomain(value){
    return {
      type: "IMAGE_DOMAIN",
      value
    }
  },
  handelExample(value){
    return {
      type: "IMAGE_EXAMPLE",
      value
    }
  },
  handelCodeImgFile(value){
    return {
      type: "IMAGE_CODEIMGFILE",
      value
    }
  },
  handelFaceDir(value){
    return {
      type: "IMAGE_FACEDIR",
      value
    }
  }
}

export default ACTIONS;