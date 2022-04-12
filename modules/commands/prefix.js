module.exports.config = {
  name: "prefix",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "", 
  description: "no prefix",
  commandCategory: "Không cần dấu lệnh",
  usages: "Prefix",
    cooldowns: 5
};

module.exports.handleEvent = async ({ api, event, Users, Threads }) => {
  if (!event.body) return;
  var { threadID, messageID } = event;
  if (event.body.toLowerCase().indexOf("prefix") == 0) {
    //getPrefix
    const threadSetting = (await Threads.getData(String(threadID))).data || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
    const admins = global.config.ADMINBOT;
    var msg = {
      body: `🔖Prefix [ ${prefix} ]\n\n[=== DS ADMIN BOT ===]`,
    }
    for (let i of admins) {
      let count = admins.indexOf(i) + 1;
      let name = await Users.getNameUser(i) || "Admin";
      msg.body += `\n\n💎 ${count + "/ " +name} \nhttps://www.facebook.com/profile.php?id=${i}\n`;
    }
    api.sendMessage(msg, threadID, messageID);
  }
};
module.exports.run = () => {};