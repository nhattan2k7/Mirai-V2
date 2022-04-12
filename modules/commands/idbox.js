  

module.exports.config = {
  name: "idbox",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "F",
  description: "Kiểm tra thông tin nhóm chat.",
  commandCategory: "Group",
  usages: "",
  cooldowns: 5,
  dependencies: {

  }
};

module.exports.run = async({api,event, Threads}) => {
	let threadInfo = (await Threads.getData(event.threadID)).threadInfo;
    let threadName = global.data.threadInfo.get(event.threadID).threadName || threadInfo.threadName || "Tên không tồn tại";
    return api.sendMessage(`${event.threadID}`, event.threadID, event.messageID);
}