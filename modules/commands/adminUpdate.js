module.exports.config = {
    name: "adminUpdate",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thanhh",
    description: "Bật tắt thông báo adminUpdate cho nhóm hiện tại",
    commandCategory: "config",
    usages: "",
    cooldowns: 2
};

module.exports.languages = {
  "vi": {"on": "Bật","off": "Tắt","successText": "gửi tin nhắn thông báo khi thay đổi biệt danh, tên box và admin",},
  "en": {"on": "on","off": "off","successText": "send notification message when changing nickname, box name and admin",}
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["adminUpdate"] == "undefined" || data["adminUpdate"] == true) data["adminUpdate"] = false;
  else data["adminUpdate"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["adminUpdate"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}
