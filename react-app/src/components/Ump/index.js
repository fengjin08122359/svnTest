import { connect } from "react-redux";
// import UI component
import UI_Ump from "./Ump";
// import actions
import { UMP_ACTIONS } from "../../actions";

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
			dispatch(UMP_ACTIONS.switchHttp(true))
		},
    switchHttps(){
			dispatch(UMP_ACTIONS.switchHttp(false))
		},
    handelDomain(event){
      dispatch(UMP_ACTIONS.handelDomain(event.target.value))
    },
    handelInside(event){
      dispatch(UMP_ACTIONS.handelInside(event.target.value))
    },
    handelOutside(event){
      dispatch(UMP_ACTIONS.handelOutside(event.target.value))
    },
	}
}

// build container-component
const Ump = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UI_Ump);

export default Ump;