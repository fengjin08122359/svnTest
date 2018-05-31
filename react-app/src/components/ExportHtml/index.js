import { connect } from "react-redux";
// import UI component
import UI_ExportHtml from "./ExportHtml";
// mapStateToProps goes here
function mapStateToProps(state){
	return{
    example: state.cassandra.example + state.app.example + state.images.example + state.ucc.example + state.openfire.example + state.redis.example + state.mongo.example + state.qa.example + state.unUsed.example + state.other.example,
    state: state
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch){
	return{
    saveExample(state, example){
      fetch('../postMsg/example', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          example: state,
          exampleBody: example
        })
      }).then((res)=>{
          if(res.ok){
              res.text().then((data)=>{
                  console.log(data);
              })
          }
      })
		},
	}
}

// build container-component
const ExportHtml = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UI_ExportHtml);

export default ExportHtml;