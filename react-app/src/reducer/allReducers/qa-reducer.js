import { qaExample } from "../selectors/qa-selector.js"

export default function app(state = {
	url: "http://192.168.11.215:7006/QASystemInterface",
  enable: true,
  example: ""
},action){
	switch(action.type){
		case "QA_URL":
			state = Object.assign({}, state, {
        url:action.value
      })
      break
    case "QA_ENABLE":
      state = Object.assign({}, state, {
        enable: action.value
      })
      break
    default:
      break
	}
  return Object.assign({}, state, {
    example: qaExample(state)
  })
}


