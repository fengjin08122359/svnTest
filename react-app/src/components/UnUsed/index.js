import { connect } from "react-redux";
// import UI component
import UI_UnUsed from "./UnUsed";
// import actions
import { UNUSED_ACTIONS } from "../../actions";

// mapStateToProps goes here
function mapStateToProps(state){
	return{
    example: state.unUsed.example,
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch){
	return{
    handelExample(example){
      dispatch(UNUSED_ACTIONS.handelExample(example))
    },
	}
}

// build container-component
const UnUsed = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UI_UnUsed);

export default UnUsed;