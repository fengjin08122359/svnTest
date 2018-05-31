const ACTIONS = {
	handlePath(value){
		return {
			type:"APP_PATH",
      value
		}
	},
  handleProduction(value){
    return {
      type: "APP_PRODUCITON",
      value
    }
  },
  handlePassword(value){
    return {
      type: "APP_PASSWORD",
      value
    }
  },
}

export default ACTIONS;