const ACTIONS = {
	switchHttp(value){
		return {
			type:"UCC_HTTPSELECT",
      value
		}
	},
  handelDomain(value){
    return {
      type: "UCC_CHANGEDOMAIN",
      value
    }
  },
  handelWebPage(value){
    return {
      type: "UCC_CHANGEWEBPAGE",
      value
    }
  },
  handelAuthKey(value){
    return {
      type: "UCC_CHANGEAUTHKEY",
      value
    }
  },
  handelWebSocket(value){
    return {
      type: "UCC_CHANGEWEBSOCKET",
      value
    }
  },
  handelRedis(value){
    return {
      type: "UCC_REDIS",
      value
    }
  },
  handelBrowserMerge(value){
    return {
      type: "UCC_BROWSERMERGE",
      value
    }
  },
  handelExample(value){
    return {
      type: "UCC_CHANGEEXAMPLE",
      value
    }
  },
  handelJpushAppKey(value){
    return {
      type: "UCC_JPUSHAPPKEY",
      value
    }
  },
  handelJpushSecret(value){
    return {
      type: "UCC_JPUSHSECRET",
      value
    }
  },
  handelJpushProduction(value){
    return {
      type: "UCC_JPUSHPRODUCTION",
      value
    }
  },
}

export default ACTIONS;