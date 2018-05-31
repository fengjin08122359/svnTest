export const unusedExample = () => {
  var textarea = `#unused
#Version 未使用
SYSTEM_VERSION:4.1.0.0

#浏览轨迹导出路径 the export file path  未使用
TXT_SAVE_PATH:D://data//misdata//

#is need encrypt 0 not need,1 need .暂未使用
SYSTEM_IS_NEED_ENCRYPT :1

#浏览轨迹
#lucene index
BROWSE_THE_TRAJECTORY:E://UccIndex//BrowseTrajectory
BROWSE_THE_TRAJECTORY_VISITOR:E://UccIndex//BrowseTrajectoryVisitor
#浏览轨迹文件前缀 the prefix name of then export file 未使用
EXP_FILE_PREFIX:misdata

#数据库产品配置	未使用
#database type 0->mysql; 1->oracle; 2->sqlserver
SYSTEM_DB_TYPE : 0

#抢单功能需要
LOCAL_IP:121.43.150.14:7005

#client robot 机器人接口
token_appid:PjFaewoUe1PNs1Z42q
token_appsecret:JQsBJon7d937C9D7B41A
token_url:http://v3.faqrobot.org/Token/getToken?appId=PjFaewoUe1PNs1Z42q&secret=JQsBJon7d937C9D7B41A
token_expiretime:7200
robot_url:http://v3.faqrobot.org/servlet/ApiChat

#Wx interface path 微信接口相关
WX_ACCOUNT:nineclient
WX_INTERFACE_PATH:http://42.120.49.203/wechat-web/resteasy/WxInfoPort/
WX_BUSINESSID:4028b88149ad0c480149ad14c7dc0119
WX_BUSINESSNAME:test
WX_COMPANYPK:4028b88149ad0c480149ad1170f7001b

`
  return textarea
}