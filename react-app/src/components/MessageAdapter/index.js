import { connect } from "react-redux";
// import UI component
import UI_Ucc from "./Ucc";
// import actions
import { UCC_ACTIONS } from "../../actions";

import { uccExample } from './ucc-selector'

// mapStateToProps goes here
function mapStateToProps(state){
	return{
		http: state.ucc.httpselect,
    domain: state.ucc.domain,
    example: uccExample(state),
    webPage:  state.ucc.webPage,
    authKey:  state.ucc.authKey,
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch){
	return{
		switchHttp(){
			dispatch(UCC_ACTIONS.switchHttp(true))
		},
    switchHttps(){
			dispatch(UCC_ACTIONS.switchHttp(false))
		},
    handelDomain(event){
      dispatch(UCC_ACTIONS.handelDomain(event.target.value))
    },
    handelExample(example){
      dispatch(UCC_ACTIONS.handelExample(example))
    },
    handelWebPage(event){
      dispatch(UCC_ACTIONS.handelWebPage(event.target.value))
    },
    handelAuthKey(event){
      dispatch(UCC_ACTIONS.handelAuthKey(event.target.value))
    },
	}
}

// build container-component
const Ucc = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UI_Ucc);

export default Ucc;