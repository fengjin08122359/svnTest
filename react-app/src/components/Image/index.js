import { connect } from "react-redux";
// import UI component
import UI_Image from "./Image";
// import actions
import { IMAGE_ACTIONS } from "../../actions";

// mapStateToProps goes here
function mapStateToProps(state){
	return{
		rootPath: state.images.rootPath,
    domain: state.images.domain,
    example: state.images.example,
    prePath:  state.images.prePath,
    codeImgFile: state.images.codeImgFile,
    faceDir: state.images.faceDir,
	}
}

// mapDispatchToProps goes here
function mapDispatchToProps(dispatch){
	return{
		handelRootPath(event){
			dispatch(IMAGE_ACTIONS.handelRootPath(event.target.value))
		},
    handelDomain(event){
      dispatch(IMAGE_ACTIONS.handelDomain(event.target.value))
    },
    handelPrePath(event){
      dispatch(IMAGE_ACTIONS.handelPrePath(event.target.value))
    },
    handelCodeImgFile(event){
      dispatch(IMAGE_ACTIONS.handelCodeImgFile(event.target.value))
    },
    handelFaceDir(event){
      dispatch(IMAGE_ACTIONS.handelFaceDir(event.target.value))
    },
	}
}

// build container-component
const Image = connect(
	mapStateToProps,
	mapDispatchToProps,
)(UI_Image);

export default Image;