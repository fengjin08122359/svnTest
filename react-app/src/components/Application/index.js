import { connect } from "react-redux";
// import UI component
import UI_App from "./App";
// import actions
import { APP_ACTIONS } from "../../actions";

// mapStateToProps goes here
function mapStateToProps(state){
	return{
		path: state.app.path,
    production: state.app.production,
    example: state.app.example,
    password:  state.app.password,
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch){
	return{
		handlePath(event){
			dispatch(APP_ACTIONS.handlePath(event.target.value))
		},
    handleProduction(value){
			dispatch(APP_ACTIONS.handleProduction(value))
		},
    handlePassword(event){
      dispatch(APP_ACTIONS.handlePassword(event.target.value))
    },
	}
}

// build container-component
const Application = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UI_App);

export default Application;