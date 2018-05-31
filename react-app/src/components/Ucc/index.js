import { connect } from "react-redux";
// import UI component
import UI_Ucc from "./Ucc";
// import actions
import { UCC_ACTIONS } from "../../actions";

// mapStateToProps goes here
function mapStateToProps(state){
	return{
		http: state.ucc.httpselect,
    domain: state.ucc.domain,
    example: state.ucc.example,
    webPage:  state.ucc.webPage,
    authKey:  state.ucc.authKey,
    webSocket:  state.ucc.webSocket,
    redis:  state.ucc.redis,
    browserMerge: state.ucc.browserMerge,
    jpushAppkey: state.ucc.jpushAppkey,
    jpushSecret: state.ucc.jpushSecret,
    jpushProduction: state.ucc.jpushProduction,
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch){
	return{
		switchHttp(){
			dispatch(UCC_ACTIONS.switchHttp(false))
		},
    switchHttps(){
			dispatch(UCC_ACTIONS.switchHttp(true))
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
    handelWebSocket(value){
      dispatch(UCC_ACTIONS.handelWebSocket(value))
    },
    handelRedis(value){
      dispatch(UCC_ACTIONS.handelRedis(value))
    },
    handelBrowserMerge(value){
      dispatch(UCC_ACTIONS.handelBrowserMerge(value))
    },
    handelJpushAppKey(event){
      dispatch(UCC_ACTIONS.handelJpushAppKey(event.target.value))
    },
    handelJpushSecret(event){
      dispatch(UCC_ACTIONS.handelJpushSecret(event.target.value))
    },
    handelJpushProduction(event){
      dispatch(UCC_ACTIONS.handelJpushProduction(event.target.value))
    },
	}
}

// build container-component
const Ucc = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UI_Ucc);

export default Ucc;