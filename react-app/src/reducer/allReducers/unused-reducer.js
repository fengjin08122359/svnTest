import { unusedExample } from "../selectors/unused-selector.js"

export default function unused(state = {
  example: ""
},action){
  switch(action.type){
    case "UNUSED_EXAMPLE":
      return Object.assign({}, state, {
        example:action.value
      })
    default:
      break
  }
  return Object.assign({}, state, {
    example: state.example || unusedExample(state)
  })
}


