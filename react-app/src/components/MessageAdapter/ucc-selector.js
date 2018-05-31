import { createSelector } from 'reselect'

const getHttp = (state) => state.ucc.httpselect
const getDomain = (state) => state.ucc.domain
const getWebPage = (state) => state.ucc.webPage
const getAuthKey = (state) => state.ucc.authKey
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
    after:"http://127.0.0.1:8080/Any800Chat/",
    explain:"Any800Chat"
  },
]

export const uccExample = createSelector(
  [ getHttp, getDomain, getWebPage, getAuthKey],
  (http, domain, webPage, authKey) => {
    var durl = "";
    var purl = "";
    var textarea = "";
    if ( http ) {
      durl = 'https'+'://'+domain
      purl = 'https'+'://'+webPage
    } else {
      durl = 'http'+'://'+domain
      purl = 'https'+'://'+webPage
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
    textarea += "FS_AUTH_KEY:" + authKey + "\r\n"
    return textarea
  }
)