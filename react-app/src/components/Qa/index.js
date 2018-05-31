import { connect } from "react-redux";
// import UI component
import UI_QA from "./QA";
// import actions
import { QA_ACTIONS } from "../../actions";

// mapStateToProps goes here
function mapStateToProps(state){
	return{
		url: state.qa.url,
    enable: state.qa.enable,
    example: state.qa.example,
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch){
	return{
    handleEnable(value){
			dispatch(QA_ACTIONS.handleEnable(value))
		},
    handleUrl(event){
      dispatch(QA_ACTIONS.handleUrl(event.target.value))
    },
	}
}

// build container-component
const QA = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UI_QA);

export default QA;