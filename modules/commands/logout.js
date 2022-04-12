module.exports.config = {
    name: "logout",
    version: "1.0.1",
    hasPermssion: 2,
    credits: "HĐGN",
    description: "Đăng xuất",
    commandCategory: "System",
    usages: "",
    cooldowns: 0
};

module.exports.run = async function({ api, event })
{
  const fs = global.nodemodule["fs-extra"];
  const permission = ["100042965476833"];


	if (!permission.includes(event.senderID)) return api.sendMessage("cút ", event.threadID, event.messageID);
api.sendMessage("Đang đăng xuất khỏi Facebook...",event.threadID,event.messageID)
api.logout()
}