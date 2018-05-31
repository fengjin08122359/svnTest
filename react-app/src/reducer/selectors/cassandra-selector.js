export const cassandraExample = (state) => {
  var textarea = "#cassandra\r\n";
  textarea += "cassandra.host:" + state.host + "\r\n"
  textarea += "cassandra.default.cluster.name:" + state.cluster + "\r\n"
  textarea += "cassandra.default.keyspace.name:" + state.defaultKeyspace + "\r\n"
  textarea += "cassandra.strategy.keyspace.name:" + state.strategyKeyspace + "\r\n"
  textarea += "cassandra.default.columnfamily.name:" + state.columnfamily + "\r\n"
  textarea += "cassandra.replication.factor:" + state.replication + "\r\n"
  textarea += "\r\n";
  return textarea
}