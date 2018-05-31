export const qaExample = (state) => {
  var textarea = "#qa\r\n";
  textarea += "#智能问答更新接口\r\n"
  textarea += "QASYSTEMUPDATEURL:" + state.url + "\r\n"
  textarea += "export_unknown_knowledge_point:" + state.url + "/resteasy/Knowledge/exportUnknown?companyPk=\r\n"
  textarea += "export_total_knowledge_point:" + state.url + "/resteasy/Knowledge/export?companyPk=\r\n"
  textarea += "import_unknown_knowledge_point:" + state.url + "/resteasy/Knowledge/report?companyPk=\r\n"
  textarea += "ReportQASystemController_report:" + state.url + "/resteasy/Knowledge/report?companyPk\r\n"
  textarea += "ReportQASystemController_reportTopTen:" + state.url + "/resteasy/Knowledge/salient?companyPk=\r\n"
  textarea += "#是否启用智能推荐\r\n"
  textarea += "IS_ENABLE_QA:" + state.enable + "\r\n"
  textarea += "\r\n";
  return textarea
}