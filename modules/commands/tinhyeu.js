const fs = require("fs");
module.exports.config = {
name: "caunoivetinhyeu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "caunoivetinhyeu",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("caunoivetinhyeu")==0 || (event.body.indexOf("Caunoivetinhyeu")==0)) {
		var msg = {
				body: "câu nói về tình yêu-độ mixi",
				attachment: fs.createReadStream(__dirname + `/noprefix/yeu.mp4 - Tổng Hợp Những Câu Nói Hay Nhất, Tạo động lực vươn lên trong cuộc sống, gia đình và xã hội`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}