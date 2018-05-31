import { appExample } from "../selectors/app-selector.js"

export default function app(state = {
	path: "/opt/ucc/iphone_dev.p12",
  production: true,
  password: "123456",
  example: ""
},action){
	switch(action.type){
		case "APP_PATH":
			state = Object.assign({}, state, {
        path:action.value
      })
      break
    case "APP_PRODUCITON":
      state = Object.assign({}, state, {
        production: action.value
      })
      break
    case "APP_PASSWORD":
      state = Object.assign({}, state, {
        password: action.value
      })
      break
		// this is required
		default:
      break
	}
  return Object.assign({}, state, {
    example: appExample(state)
  })
}


