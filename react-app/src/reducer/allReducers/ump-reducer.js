import { umpExample } from "../selectors/ump-selector.js"

export default function ump(state = {
	rootPath: "/opt/ucc/data/",
  prePath: "file/",
  domain: "http://127.0.0.1:8080",
  example: ""
},action){
	switch(action.type){
		case "IMAGE_ROOTPATH":
			state = Object.assign({}, state, {
        rootPath:action.value
      })
      break
    case "IMAGE_PREPATH":
      state = Object.assign({}, state, {
        prePath: action.value
      })
      break
    case "IMAGE_DOMAIN":
      state = Object.assign({}, state, {
        domain: action.value
      })
      break
    case "IMAGE_EXAMPLE":
      state = Object.assign({}, state, {
        example: action.value
      })
      break
		// this is required
		default:
      break
	}
  return Object.assign({}, state, {
    example: umpExample(state)
  })
}
