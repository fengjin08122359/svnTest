export const redisExample = (state) => {
  var textarea = "#redis\r\n";
  textarea += "#默认为SINGLE.其他：CLUSTER,ELASTICACHE,SENTINEL,MASTER_SLAVE\r\n"
  textarea += "REDIS_MODE:" + state.mode + "\r\n"
  textarea += "#主从模式时需要配置，多slave用“；”分割\r\n"
  textarea += "REDIS_SLAVE_IP_PORT:" + state.slaveIpPort + "\r\n"
  textarea += "REDIS_MASTER_IP_PORT:" + state.masterIpPort + "\r\n"
  textarea += "#redis密码\r\n"
  textarea += "REDIS_PWD:" + state.password + "\r\n"
  textarea += "REDIS_IP_PORT:" + (state.slaveIpPort || state.masterIpPort) + "\r\n"
  textarea += "\r\n";
  return textarea
}