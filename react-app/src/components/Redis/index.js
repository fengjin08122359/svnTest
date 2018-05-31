import { connect } from "react-redux";
// import UI component
import UI_Redis from "./Redis";
// import actions
import { REDIS_ACTIONS } from "../../actions";

// mapStateToProps goes here
function mapStateToProps(state){
	return{
		mode: state.redis.mode,
    slaveIpPort: state.redis.slaveIpPort,
    masterIpPort: state.redis.masterIpPort,
    modeType: state.redis.modeType,
    example: state.redis.example,
    password:  state.redis.password,
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch){
	return{
    handelMode(value){
      dispatch(REDIS_ACTIONS.handelMode(value))
    },
    handelSlave(event){
      dispatch(REDIS_ACTIONS.handelSlave(event.target.value))
    },
    handelMaster(event){
      dispatch(REDIS_ACTIONS.handelMaster(event.target.value))
    },
    handelPwd(event){
      dispatch(REDIS_ACTIONS.handelPwd(event.target.value))
    },
	}
}

// build container-component
const Redis = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UI_Redis);

export default Redis;