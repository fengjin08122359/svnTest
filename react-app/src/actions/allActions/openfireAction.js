const ACTIONS = {
	switchHttp(value){
		return {
			type:"OPENFIRE_HTTPSELECT",
      value
		}
	},
  handelDomain(value){
    return {
      type: "OPENFIRE_CHANGEDOMAIN",
      value
    }
  },
  handelInside(value){
    return {
      type: "OPENFIRE_CHANGEINSIDE",
      value
    }
  },
  handelOutside(value){
    return {
      type: "OPENFIRE_CHANGEOUTSIDE",
      value
    }
  },
  handelExample(value){
    return {
      type: "OPENFIRE_CHANGEEXAMPLE",
      value
    }
  },
}

export default ACTIONS;