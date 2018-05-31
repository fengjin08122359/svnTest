export const mongoExample = (state) => {
  var textarea = "#mongo\r\n";
  textarea += "#mongodb配置\r\n"
  textarea += "mongo.host:" + state.host + "\r\n"
  textarea += "mongo.port:" + state.port + "\r\n"
  textarea += "mongo.db:" + state.db + "\r\n"
  textarea += "#对话记录\r\n"
  textarea += "mongo.collection:" + state.collection + "\r\n"
  textarea += "#IM对话记录\r\n"
  textarea += "mongo.im.collection:" + state.imCollection + "\r\n"
  textarea += "#IM群聊对话记录\r\n"
  textarea += "mongo.imgroup.collection:" + state.imGroupCollection + "\r\n"
  textarea += "#记录IM操作时间，比如座席进入/离开群聊窗口时间\r\n"
  textarea += "mongo.im.op.behavior.collection:" + state.opCollection + "\r\n"
  textarea += "\r\n";
  return textarea
}