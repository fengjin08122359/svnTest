import { mongoExample } from "../selectors/mongo-selector.js"

export default function mongo(state = {
	host: "192.168.11.214",
  port: "29017",
  db: "ucc",
  collection: "ecchatrecords",
  imCollection: "ecimrecords",
  imGroupCollection: "ecimgrouprecords",
  opCollection: "ecopbehavior",
  example: ""
},action){
	switch(action.type){
		case "MONGO_HOST":
			state = Object.assign({}, state, {
        host:action.value
      })
      break
    case "MONGO_PORT":
      state = Object.assign({}, state, {
        port: action.value
      })
      break
    case "MONGO_DB":
      state = Object.assign({}, state, {
        db: action.value
      })
      break
    case "MONGO_COLLECTION":
      state = Object.assign({}, state, {
        collection: action.value
      })
      break
    case "MONGO_IM":
      state = Object.assign({}, state, {
        imCollection: action.value
      })
      break
    case "MONGO_IMGROUP":
      state = Object.assign({}, state, {
        imGroupCollection: action.value
      })
      break
    case "MONGO_OP":
      state = Object.assign({}, state, {
        opCollection: action.value
      })
      break
		// this is required
		default:
      break
	}
  return Object.assign({}, state, {
    example: mongoExample(state)
  })
}


