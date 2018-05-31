const ACTIONS = {
	handelHost(value){
		return {
			type:"CASSANDRA_HOST",
      value
		}
	},
  handelCluster(value){
    return {
      type: "CASSANDRA_CLUSTER",
      value
    }
  },
  handelDefault(value){
    return {
      type: "CASSANDRA_DEFAULT",
      value
    }
  },
  handelStrategy(value){
    return {
      type: "CASSANDRA_STRATEGY",
      value
    }
  },
  handelColumnfamily(value){
    return {
      type: "CASSANDRA_COLUMNFAMILY",
      value
    }
  },
  handelReplication(value){
    return {
      type: "CASSANDRA_REPLICATION",
      value
    }
  },
}

export default ACTIONS;