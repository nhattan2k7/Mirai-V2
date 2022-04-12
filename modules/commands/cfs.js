module.exports.config = {
	name: "cfs",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "tdungUwU - KIRA",
	description: "JUST CFS",
	commandCategory: "Tiện ích",
	usages: "",
	cooldowns: 5,
	dependencies: {
        "fs-extra": "",
        "path": ""
    }
};
module.exports.onLoad = function () {
	const fs = require("fs-extra");
	if (!fs.existsSync(__dirname + "/cache/cfs.json")) {
		const cfsList = [];
		fs.writeFileSync(__dirname + "/cache/cfs.json", JSON.stringify(cfsList));
	}
}
module.exports.run = ({ event, api, args, permssion }) => {
  const { threadID, messageID, senderID } = event;
  const fs = require("fs-extra")
  const axios = require("axios")
  
  	const dirFile = __dirname + "/cache/cfs.json";
	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);
  if (args[0] == "send" || args[0] == "-s") {
    if (permssion == 1) return api.sendMessage("[ CFS ] Bạn không đủ quyền hạn để có thể sử dụng send cfs!", threadID, messageID);
    	var id = args[1];
    var reason = args.slice(2);
	if (args.length == 0) api.sendMessage("THIẾU ID NGƯỜI DÙNG !!!", event.threadID, event.messageID);
	else if(reason == "")api.sendMessage("KHOAN BẠN PHẢI ĐỂ LẠI LỜI NHẮN ĐÃ ;-;", event.threadID, event.messageID);
	else
		api.sendMessage("»REP CFS FROM ADIMIN\n\n" + reason.join(" "), id, () =>
			api.sendMessage(`${api.getCurrentUserID()}`, () =>
				api.sendMessage("Đã gửi lời nhắn: " + reason.join(" "), event.threadID)));
  }
  if (args[0] == "list" || args[0] == "-l") {
    const permission = ["100077529039506"];
    		if (!permission.includes(event.senderID)) return api.sendMessage("Quyền lồn biên giới?", event.threadID, event.messageID);
    if (getData.length == 0) return api.sendMessage(`Hiện tại chưa có cfs nào để hiển thị!`, event.threadID, event.messageID);
			var cfs = "";
			getData.map(item => cfs += `\n- ${item}\n==========`);
			return api.sendMessage(`Sau đây là toàn bộ CFS: ${cfs}`, event.threadID, event.messageID);
  }
  else if (args.join() == "") { 
    return api.sendMessage(`reply tin nhắn này để ghi cfs dành cho ai đó UwU`, event.threadID, (err, info) => {
        return global.client.handleReply.push({
            type: "cfs",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
        });
    }, event.messageID);
}
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
  const fs = require("fs-extra");
	const content = event.body;
	const dirFile = __dirname + "/cache/cfs.json";
	var getList = fs.readFileSync(dirFile);
	var getData = JSON.parse(getList);
  var info = await api.getUserInfo(event.senderID);
    
    switch (handleReply.type) {
        case "cfs": {
          api.unsendMessage(handleReply.messageID); 
           const suggest = `\n[ ${event.senderID} ]\n=> ${content}`
			getData.push(suggest);
			fs.writeFileSync(dirFile, JSON.stringify(getData));
			return api.sendMessage(`[ CFS ]: THÊM CFS THÀNH CÔNG`, event.threadID, event.messageID);
		}
    }
}