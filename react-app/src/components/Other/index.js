import { connect } from "react-redux";
// import UI component
import UI_Other from "./Other";
// import actions
import { OTHER_ACTIONS } from "../../actions";

// mapStateToProps goes here
function mapStateToProps(state){
	return{
    wxUrl: state.other.wxUrl,
    wccUrl: state.other.wccUrl,
    pluginUrl: state.other.pluginUrl,
    ip: state.other.ip,
    mail: state.other.mail,
    umpInterface: state.other.umpInterface,
    ump: state.other.ump,
    replace: state.other.replace,
    example: state.other.example,
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch){
	return{
		handleWx(event){
			dispatch(OTHER_ACTIONS.handleWx(event.target.value))
		},
    handleWcc(event){
      dispatch(OTHER_ACTIONS.handleWcc(event.target.value))
    },
    handlePlugin(event){
      dispatch(OTHER_ACTIONS.handlePlugin(event.target.value))
    },
    handleIp(event){
      dispatch(OTHER_ACTIONS.handleIp(event.target.value))
    },
    handleMail(event){
			dispatch(OTHER_ACTIONS.handleMail(event.target.value))
		},
    handleUmp(event){
      dispatch(OTHER_ACTIONS.handleUmp(event.target.value))
    },
    handleUmpInterface(event){
      dispatch(OTHER_ACTIONS.handleUmpInterface(event.target.value))
    },
    handleReplace(event){
      dispatch(OTHER_ACTIONS.handleReplace(event.target.value))
    },
	}
}

// build container-component
const Other = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UI_Other);

export default Other;