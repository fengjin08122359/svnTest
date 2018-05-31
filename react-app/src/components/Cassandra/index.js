import { connect } from "react-redux";
// import UI component
import UI_Cassandra from "./Cassandra";
// import actions
import { CASSANDRA_ACTIONS } from "../../actions";

// mapStateToProps goes here
function mapStateToProps(state){
	return{
		host: state.cassandra.host,
    cluster:  state.cassandra.cluster,
    defaultKeyspace:  state.cassandra.defaultKeyspace,
    strategyKeyspace:  state.cassandra.strategyKeyspace,
    columnfamily:  state.cassandra.columnfamily,
    replication:  state.cassandra.replication,
    example: state.cassandra.example
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch){
	return{
    handelHost(event){
      dispatch(CASSANDRA_ACTIONS.handelHost(event.target.value))
    },
    handelCluster(event){
      dispatch(CASSANDRA_ACTIONS.handelCluster(event.target.value))
    },
    handelDefault(event){
      dispatch(CASSANDRA_ACTIONS.handelDefault(event.target.value))
    },
    handelStrategy(event){
      dispatch(CASSANDRA_ACTIONS.handelStrategy(event.target.value))
    },
    handelColumnfamily(event){
      dispatch(CASSANDRA_ACTIONS.handelColumnfamily(event.target.value))
    },
    handelReplication(event){
      dispatch(CASSANDRA_ACTIONS.handelReplication(event.target.value))
    },
	}
}

// build container-component
const Cassandra = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UI_Cassandra);

export default Cassandra;