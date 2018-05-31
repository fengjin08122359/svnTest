export const imageExample = (state) => {
  var textarea = "#img\r\n";
  textarea += "ROOT_UPLOAD_PATH:" + state.rootPath + "\r\n"
  textarea += "PREFIX_UPLOAD_PATH:" + state.prePath + "\r\n"
  textarea += "MAPPING_ROOT_PATH:" + state.domain + "\r\n"
  textarea += "CODE_DOMAIN:" + state.rootPath + "\r\n"
  textarea += "CODE_IMG_DEPLOY_NAME:" + state.prePath + "\r\n"
  textarea += "CODE_IMG_FILE:" + state.codeImgFile + "\r\n"
  textarea += "#对话记录表情\r\n"
  textarea += "FACEIMAGEURL:" + state.faceDir + "\r\n"
  textarea += "\r\n";
  return textarea
}