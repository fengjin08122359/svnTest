const ACTIONS = {
	handelHost(value){
		return {
			type:"MONGO_HOST",
      value
		}
	},
  handelPort(value){
    return {
      type: "MONGO_PORT",
      value
    }
  },
  handelDb(value){
    return {
      type: "MONGO_DB",
      value
    }
  },
  handelCollection(value){
    return {
      type: "MONGO_COLLECTION",
      value
    }
  },
  handelIm(value){
    return {
      type: "MONGO_IM",
      value
    }
  },
  handelImGroup(value){
    return {
      type: "MONGO_IMGROUP",
      value
    }
  },
  handelOp(value){
    return {
      type: "MONGO_OP",
      value
    }
  },
}

export default ACTIONS;