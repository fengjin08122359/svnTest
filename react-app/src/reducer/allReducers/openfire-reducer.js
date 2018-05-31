import { openfireExample } from "../selectors/openfire-selector.js"

export default function openfire(state = {
	httpselect: false,
  example: "",
  domain: "127.0.0.1:9090",
  inside: "127.0.0.1:9090",
  outside: "127.0.0.1:9090",
},action){
	switch(action.type){
		case "OPENFIRE_HTTPSELECT":
			state = Object.assign({}, state, {
        httpselect:!action.value
      })
      break
    case "OPENFIRE_CHANGEDOMAIN":
      state = Object.assign({}, state, {
        domain: action.value
      })
      break
    case "OPENFIRE_CHANGEINSIDE":
      state = Object.assign({}, state, {
        inside: action.value
      })
      break
    case "OPENFIRE_CHANGEOUTSIDE":
      state = Object.assign({}, state, {
        outside: action.value
      })
      break
    case "OPENFIRE_CHANGEEXAMPLE":
      state = Object.assign({}, state, {
        example: action.value
      })
      break
		// this is required
		default:
      break
	}
  return Object.assign({}, state, {
    example: openfireExample(state)
  })
}
