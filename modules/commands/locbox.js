module.exports.config = {
  name: "locbox",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "chinhle",
  description: "Rời khỏi nhóm dưới 30",
  commandCategory: "Admin",
  usages: "Rời khỏi nhóm dưới 30",
  cooldowns: 0
};

module.exports.run = async ({ api, event, args }) => {
  const permission = ["100077529039506"];
  if (!permission.includes(event.senderID)) return api.sendMessage("ngu quá em ?", event.threadID, event.messageID);
  var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);
  var msg = [];
  var lengthID = [];
  var members = args[0] || 30
    for (var groupInfo of list) {
      if(groupInfo.threadID != event.threadID) {
        if ( groupInfo.participants.length < members) {
            lengthID.push(groupInfo.name)
            api.removeUserFromGroup(api.getCurrentUserID(), groupInfo.threadID) 
        }
      }
    }
  msg = 'đã Lọc thành công ' + lengthID.length + ' nhóm dưới ' + members + ' thành viên';
  return api.sendMessage(msg, event.threadID, event.messageID)
}
