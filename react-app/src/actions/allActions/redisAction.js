const ACTIONS = {
	handelMode(value){
		return {
			type:"REDIS_MODE",
      value
		}
	},
  handelSlave(value){
    return {
      type: "REDIS_SLAVE",
      value
    }
  },
  handelMaster(value){
    return {
      type: "REDIS_MASTER",
      value
    }
  },
  handelPwd(value){
    return {
      type: "REDIS_PWD",
      value
    }
  },
  handelExample(value){
    return {
      type: "REDIS_EXAMPLE",
      value
    }
  },
}

export default ACTIONS;