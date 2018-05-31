import { connect } from "react-redux";
// import UI component
import UI_Mongo from "./Mongo";
// import actions
import { MONGO_ACTIONS } from "../../actions";

// mapStateToProps goes here
function mapStateToProps(state){
	return{
    host: state.mongo.host,
    port: state.mongo.port,
    db: state.mongo.db,
    collection: state.mongo.collection,
    imCollection: state.mongo.imCollection,
    imGroupCollection: state.mongo.imGroupCollection,
    opCollection: state.mongo.opCollection,
    example: state.mongo.example
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch){
	return{
		handelHost(event){
			dispatch(MONGO_ACTIONS.handelHost(event.target.value))
		},
    handelPort(event){
			dispatch(MONGO_ACTIONS.handelPort(event.target.value))
		},
    handelDb(event){
      dispatch(MONGO_ACTIONS.handelDb(event.target.value))
    },
    handelCollection(event){
      dispatch(MONGO_ACTIONS.handelCollection(event.target.value))
    },
    handelIm(event){
      dispatch(MONGO_ACTIONS.handelIm(event.target.value))
    },
    handelImGroup(event){
      dispatch(MONGO_ACTIONS.handelImGroup(event.target.value))
    },
    handelOp(event){
      dispatch(MONGO_ACTIONS.handelOp(event.target.value))
    },
	}
}

// build container-component
const Mongo = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UI_Mongo);

export default Mongo;