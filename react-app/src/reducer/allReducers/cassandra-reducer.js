import { cassandraExample } from "../selectors/cassandra-selector.js"

export default function cassandra(state = {
	host: "127.0.0.1:9160",
  cluster: "ecCluster",
  defaultKeyspace: "echat",
  strategyKeyspace: "strategy",
  columnfamily: "users",
  replication: "2",
  example: ""
},action){
	switch(action.type){
		case "CASSANDRA_HOST":
			state = Object.assign({}, state, {
        host:action.value
      })
      break
    case "CASSANDRA_CLUSTER":
      state = Object.assign({}, state, {
        cluster: action.value
      })
      break
    case "CASSANDRA_DEFAULT":
      state = Object.assign({}, state, {
        defaultKeyspace: action.value
      })
      break
    case "CASSANDRA_STRATEGY":
      state = Object.assign({}, state, {
        strategyKeyspace: action.value
      })
      break
    case "CASSANDRA_COLUMNFAMILY":
      state = Object.assign({}, state, {
        columnfamily: action.value
      })
      break
    case "CASSANDRA_REPLICATION":
      state = Object.assign({}, state, {
        replication: action.value
      })
      break
		// this is required
		default:
      break
	}
  return Object.assign({}, state, {
    example: cassandraExample(state)
  })
}


