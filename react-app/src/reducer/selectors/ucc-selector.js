const uccUrls = [
  {
    pre:"HESSIAN_TALK_REMOTESERVICE_URL",
    after:"/Jtalk_dbs/remoting/jtalkRemoteservice",
    explain:"hessian接口配置"
  },
  {
    pre:"HESSIAN_CACHE_REMOTESERVICE_URL",
    after:"/Jtalk_dbs/remoting/remoteServiceCache",
  },
  {
    pre:"HESSIAN_ECHAT_REMOTESERVICE_URL",
    after:"/any800/remoting/echatRemoteservice",
  },
  {
    pre:"HESSIAN_WEBSERVICE_REMOTESERVICE_URL",
    after:"/Jtalk_dbs/remoting/webserviceRemoteservice",
  },
  {
    pre:"HESSIAN_TALK_REPORTSERVICE_URL",
    after:"/Jtalk_reportService/remoting/reportRemoteservice",
  },
  {
    pre:"HESSIAN_WEBSERVICE_JTALKMANAGER_REMOTESERVICE_URL",
    after:"/any800/remoting/echatRemoteservice",
  },
  {
    pre:"SYSTEM_URL",
    after:"/Jtalk",
    explain:"SYSTEM Jtalk URL ，Jtalk 和 JtalkManager使用"
  },
  {
    pre:"JTALMANAGERURL",
    after:"/any800",
    explain:"JtalkManager URL ,openfire_src使用"
  },
  {
    pre:"UCC_INTERFACE_URL",
    after:"/any800/resteasy/Ump2UccService",
    explain:"ucc接口地址"
  },
  {
    pre:"FACEIMAGEURL",
    after:"/any800/style/images/mobileImages/newImages/",
    explain:"图片地址"
  },
]

const uccWebUrls = [
  {
    pre:"monitorUrl",
    after:"/any800/monitorPage.do",
    explain:"Monitor 大屏监控"
  },
  {
    pre:"Any800ChatURL",
    after:"/Any800Chat/",
    explain:"Any800Chat"
  },
]

export const uccExample = (state) => {
  var durl = "";
  var purl = "";
  var textarea = "#ucc\r\n";
  if ( state.httpselect ) {
    durl = 'https://'+state.domain
    purl = 'https://'+state.webPage
  } else {
    durl = 'http://'+state.domain
    purl = 'https://'+state.webPage
  }
  for (let i in uccUrls) {
    if (uccUrls[i].explain) {
      textarea += "# " +uccUrls[i].explain + "\r\n"
    }
    textarea += uccUrls[i].pre + ":" + durl + uccUrls[i].after + "\r\n"
  }
  textarea += "\r\n"
  for (let i in uccWebUrls) {
    if (uccWebUrls[i].explain) {
      textarea += "# " +uccWebUrls[i].explain + "\r\n"
    }
    textarea += uccWebUrls[i].pre + ":" + purl + uccWebUrls[i].after + "\r\n"
  }
  textarea += "FS_AUTH_KEY:" + state.authKey + "\r\n"
  textarea += "HTTP_CORE:" + (state.webSocket? 0 : 1) + "\r\n"
  textarea += "IS_ENABLED_REDIS:" + (state.redis? "true" : "false") + "\r\n"
  textarea += "IS_BROWSER_TO_MERGE:" + (state.browserMerge? "true" : "false") + "\r\n\r\n"
  textarea += "#jpush配置 金盘\r\n"
  textarea += "jpush.appkey:" + state.jpushAppkey + "\r\n"
  textarea += "jpush.secret:" + state.jpushSecret + "\r\n"
  textarea += "jpush.production:" + state.jpushProduction + "\r\n"
  textarea += "\r\n";
  return textarea
}