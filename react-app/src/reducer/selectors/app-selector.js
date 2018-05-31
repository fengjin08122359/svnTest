export const appExample = (state) => {
  var textarea = "#app\r\n";
  textarea += "#app证书路径\r\n"
  textarea += "app.p12.file.path:" + state.path + "\r\n"
  textarea += "#区分是否生产配置	exp:true,false\r\n"
  textarea += "app.production:" + state.production + "\r\n"
  textarea += "#证书密码\r\n"
  textarea += "app.p12.file.password:" + state.password + "\r\n"
  textarea += "\r\n";
  return textarea
}