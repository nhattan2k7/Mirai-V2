module.exports.config = {
	name: "passgen",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "tdunguwu",
	description: "",
	commandCategory: "Phương tiện",
	usages: "",
	cooldowns: 5,
	dependencies: {
		"axios":""}
	
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];

const res = await axios.get(`https://api.reiyuura.me/api/gen-password`);
var low = res.data.result.low;
var medium = res.data.result.medium;
var str = res.data.result.strong;
var vrstr = res.data.result.verStrong
return api.sendMessage(`======== PASS ========\nyếu: ${low}\nbình thường: ${medium}\nmạnh: ${str}\ncực mạnh: ${vrstr}`, event.threadID, event.messageID)
}