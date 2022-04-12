module.exports.config = {
	name: "reload",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "D-Jukie",
	description: "tải lại dữ liệu file config",
	commandCategory: "Admin",
	usages: "[]",
	cooldowns: 0
};
module.exports.run = async function({ api, event, args,Threads, Users }) {
delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
return api.sendMessage("Đã reload thành công config.json", event.threadID, event.messageID);    
}