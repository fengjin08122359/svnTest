import { connect } from "react-redux";
// import UI component
import UI_Openfire from "./Openfire";
// import actions
import { OPENFIRE_ACTIONS } from "../../actions";

// mapStateToProps goes here
function mapStateToProps(state){
	return{
		http: state.openfire.httpselect,
    domain: state.openfire.domain,
    example: state.openfire.example,
    inside:  state.openfire.inside,
    outside:  state.openfire.outside,
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch){
	return{
		switchHttp(){
			dispatch(OPENFIRE_ACTIONS.switchHttp(true))
		},
    switchHttps(){
			dispatch(OPENFIRE_ACTIONS.switchHttp(false))
		},
    handelDomain(event){
      dispatch(OPENFIRE_ACTIONS.handelDomain(event.target.value))
    },
    handelInside(event){
      dispatch(OPENFIRE_ACTIONS.handelInside(event.target.value))
    },
    handelOutside(event){
      dispatch(OPENFIRE_ACTIONS.handelOutside(event.target.value))
    },
	}
}

// build container-component
const Openfire = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UI_Openfire);

export default Openfire;