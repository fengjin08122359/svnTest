import { redisExample } from "../selectors/redis-selector.js"

export default function redis(state = {
	mode: "SINGLE",
  slaveIpPort: "",
  masterIpPort: "127.0.0.1:6379",
  modeType: [{
    label: "SINGLE",
    value: "SINGLE"
  },{
    label: "CLUSTER",
    value: "CLUSTER"
  },{
    label: "ELASTICACHE",
    value: "ELASTICACHE"
  },{
    label: "SENTINEL",
    value: "SENTINEL"
  },{
    label: "MASTER_SLAVE",
    value: "SLAVE"
  }],
  password: "9client2016",
  example: ""
},action){
	switch(action.type){
		case "REDIS_MODE":
			state = Object.assign({}, state, {
        mode:action.value
      })
      break
    case "REDIS_SLAVE":
      state = Object.assign({}, state, {
        slaveIpPort: action.value
      })
      break
    case "REDIS_MASTER":
      state = Object.assign({}, state, {
        masterIpPort: action.value
      })
      break
    case "REDIS_PWD":
      state = Object.assign({}, state, {
        password: action.value
      })
      break
    case "REDIS_EXAMPLE":
      state = Object.assign({}, state, {
        example: action.value
      })
      break
		// this is required
		default:
      break
	}
  return state = Object.assign({}, state, {
    example: redisExample(state)
  })
}
