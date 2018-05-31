import { createSelector } from 'reselect'

const getHost = (state) => state.cassandra.host
const getCluster = (state) => state.cassandra.cluster
const getDefaultKeyspace = (state) => state.cassandra.defaultKeyspace
const getStrategyKeyspace = (state) => state.cassandra.strategyKeyspace
const getColumnfamily = (state) => state.cassandra.columnfamily
const getReplication = (state) => state.cassandra.replication

export const cassandraExample = createSelector(
  [ getHost, getCluster, getDefaultKeyspace, getStrategyKeyspace, getColumnfamily, getReplication ],
  (host, cluster, defaultKeyspace, strategyKeyspace, columnfamily, replication) => {
    var textarea = "";
    textarea += "cassandra.host:" + host + "\r\n"
    textarea += "cassandra.default.cluster.name:" + cluster + "\r\n"
    textarea += "cassandra.default.keyspace.name:" + defaultKeyspace + "\r\n"
    textarea += "cassandra.strategy.keyspace.name:" + strategyKeyspace + "\r\n"
    textarea += "cassandra.default.columnfamily.name:" + columnfamily + "\r\n"
    textarea += "cassandra.replication.factor:" + replication + "\r\n"
    return textarea
  }
)