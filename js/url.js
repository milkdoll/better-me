//测试外网
//var URL = "http://118.122.119.75:2006/openApi/api";
//var FILEURL = "http://118.122.119.75:2006";

//测试本机
var URL = "http://192.168.3.82:8188/openApi/api";
//var URL = "http://192.168.3.2:8188/openApi/api";
var FILEURL = "http://localhost:8188";

//正式外网
//var URL = "http://101.207.255.251:8188/openApi/api";
//var FILEURL = "http://101.207.255.251:8188";

var LOGIN = URL + "/1.0/accounts/login";
var PERMISSION=URL+"/1.0/accounts/getLoginInfo";
var COUNT = URL + "/rest/base/portal/1.0/asset/getCount";
var DETAIL = URL + "/rest/base/portal/1.0/asset/getDetailInfo";
var CANCEL = URL + "/rest/base/portal/1.0/asset/outAsset";
var SAVE = URL + "/rest/base/portal/1.0/asset/savaDate";
var PRINT = URL + "/rest/base/portal/1.0/asset/printTwoCode";

/**
 *附件上传 
 */
//var UPLOAD = FILEURL + "/uploadPlugin/attach/file_upload.action";

var UPLOAD=FILEURL + "/fileserver/upload";
/**
 *附件下载 
 */
//var DOWNLOAD = FILEURL + "/uploadPlugin/attach/file_download.action";
var DOWNLOAD=FILEURL + "/fileserver/download";