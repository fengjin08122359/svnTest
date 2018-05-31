export const otherExample = (state) => {
  var textarea = `#other
#微信认证
WX_AUTHORITY_URL:${state.wxUrl}
#wcc接口
WCC_SERVER_URL:${state.wccUrl}
#插件中心
PLUGIN_CENTER_URL:${state.pluginUrl}
#IP库配置
ip2region.db:${state.ip}
#邮件webservice
WEBSERVICE_URL:${state.mail}
#BS内外网替换
REPLACEMAP:${state.replace}
#UMP的内部调用地址
UMP_INTERFACE_URL:${state.umpInterface}
#UMP的地址
UMP_URL:${state.ump}

`
  return textarea
}