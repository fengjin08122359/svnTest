import { otherExample } from "../selectors/other-selector.js"

export default function other(state = {
	wxUrl: "ronghe.any800.com", 
  wccUrl: "http://ronghe.any800.com/wccserver/server/callServer", 
  pluginUrl: "http://ronghe.any800.com/plugin_client/client", 
  ip: "/opt/ucc/data/nfsdata/ipdb/ip2region.db", 
  mail: "http://192.168.11.214:8888/WxWebserviceManage",
  umpInterface: "http://192.168.11.215:8080/ump/restUmp/umpServiceInterf",
  ump: "http://ronghe.any800.com/ump",
  replace: "192.168.11.215@192.168.11.215:7005;",
  example: ""
},action){
	switch(action.type){
		case "OTHER_WX":
			state = Object.assign({}, state, {
        wxUrl:action.value
      })
      break
    case "OTHER_WCC":
      state = Object.assign({}, state, {
        wccUrl: action.value
      })
      break
    case "OTHER_PLUGIN":
      state = Object.assign({}, state, {
        pluginUrl: action.value
      })
      break
    case "OTHER_IP":
      state = Object.assign({}, state, {
        ip: action.value
      })
      break
    case "OTHER_MAIL":
      state = Object.assign({}, state, {
        mail: action.value
      })
      break
    case "OTHER_UMP":
      state = Object.assign({}, state, {
        ump: action.value
      })
      break
    case "OTHER_UMPINTERFACE":
      state = Object.assign({}, state, {
        umpInterface: action.value
      })
      break
    case "OTHER_REPLACE":
      state = Object.assign({}, state, {
        replace: action.value
      })
      break
		// this is required
		default:
      break
	}
  return Object.assign({}, state, {
    example: otherExample(state)
  })
}


