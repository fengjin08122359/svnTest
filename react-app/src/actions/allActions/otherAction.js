const ACTIONS = {
	handleWx(value){
		return {
			type:"OTHER_WX",
      value
		}
	},
  handleWcc(value){
    return {
      type: "OTHER_WCC",
      value
    }
  },
  handlePlugin(value){
    return {
      type: "OTHER_PLUGIN",
      value
    }
  },
  handleIp(value){
    return {
      type: "OTHER_IP",
      value
    }
  },
  handleMail(value){
    return {
      type: "OTHER_MAIL",
      value
    }
  },
  handleUmp(value){
    return {
      type: "OTHER_UMP",
      value
    }
  },
  handleUmpInterface(value){
    return {
      type: "OTHER_UMPINTERFACE",
      value
    }
  },
  handleReplace(value){
    return {
      type: "OTHER_REPLACE",
      value
    }
  },
}

export default ACTIONS;