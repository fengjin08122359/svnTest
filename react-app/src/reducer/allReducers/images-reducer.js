import { imageExample } from "../selectors/img-selector.js"

export default function images(state = {
	rootPath: "/opt/ucc/data/",
  prePath: "file/",
  domain: "http://127.0.0.1:8080",
  codeImgFile: "code_img",
  faceDir: "http://ronghe.any800.com/any800/style/images/mobileImages/newImages/",
  example: ""
},action){
	switch(action.type){
		case "IMAGE_FACEDIR":
			state = Object.assign({}, state, {
        faceDir:action.value
      })
      break
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
    case "IMAGE_CODEIMGFILE":
      state = Object.assign({}, state, {
        codeImgFile: action.value
      })
      break
		// this is required
		default:
      break
	}
  return Object.assign({}, state, {
    example: imageExample(state)
  })
}
