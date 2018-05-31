import { uccExample } from "../selectors/ucc-selector.js"

export default function ucc(state =  {
	httpselect: false,
  example: "",
  domain: "127.0.0.1:8080",
  webPage: "127.0.0.1:8080",
  authKey: "HYgvCfcfF5123IHHu74566666",
  webSocket: true,
  redis: true,
  browserMerge:true,
  jpushAppkey: "f7431914a57c577ecc7a860a",
  jpushSecret: "e48ab8d92dbd7f0253a1ad44",
  jpushProduction: true,
},action){
	switch(action.type){
		case "UCC_JPUSHAPPKEY":
			state = Object.assign({}, state, {
        jpushAppkey:action.value
      })
      break
		case "UCC_JPUSHSECRET":
			state = Object.assign({}, state, {
        httpselect:action.value
      })
      break
		case "UCC_JPUSHPRODUCTION":
			state = Object.assign({}, state, {
        jpushProduction:action.value
      })
      break
		case "UCC_HTTPSELECT":
			state = Object.assign({}, state, {
        httpselect:action.value
      })
      break
    case "UCC_CHANGEDOMAIN":
      state = Object.assign({}, state, {
        domain: action.value
      })
      break
    case "UCC_CHANGEWEBPAGE":
      state = Object.assign({}, state, {
        webPage: action.value
      })
      break
    case "UCC_CHANGEAUTHKEY":
      state = Object.assign({}, state, {
        authKey: action.value
      })
      break
    case "UCC_CHANGEEXAMPLE":
      state = Object.assign({}, state, {
        example: action.value
      })
      break
    case "UCC_CHANGEWEBSOCKET":
			state = Object.assign({}, state, {
        webSocket: action.value
      })
      break
    case "UCC_REDIS":
      state = Object.assign({}, state, {
        redis: action.value
      })
      break
    case "UCC_BROWSERMERGE":
      state = Object.assign({}, state, {
        browserMerge: action.value
      })
      break
		// this is required
		default:
      break
	}
  return Object.assign({}, state, {
    example: uccExample(state)
  })
}
