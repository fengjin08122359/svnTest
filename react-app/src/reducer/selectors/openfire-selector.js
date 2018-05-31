const uccUrls = [
  {
    pre:"OPERATOR_URL",
    after:"/plugins/echat/userservice",
  },
  {
    pre:"BROADCAST",
    after:"/plugins/broadcast/service",
  },
  {
    pre:"ONLINE_STATUS",
    after:"/plugins/online/status",
  },
  {
    pre:"SYSTEM_NOTIFIY",
    after:"/plugins/systemNotifiy/service",
  },
]

export const openfireExample = (state) => {
  var durl = "";
  var textarea = "#openfire\r\n";
  if ( state.httpselect ) {
    durl = 'https://'+state.domain
  } else {
    durl = 'http://'+state.domain
  }
  for (let i in uccUrls) {
    if (uccUrls[i].explain) {
      textarea += "# " +uccUrls[i].explain + "\r\n"
    }
    textarea += uccUrls[i].pre + ":" + durl + uccUrls[i].after + "\r\n"
  }
  textarea += "\r\n"
  textarea += "OPENFIREMAP:"+ state.outside +"@" + state.inside + "\r\n"
  textarea += "\r\n";
  return textarea
}