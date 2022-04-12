module.exports.config = {
name: "coverfbv3",
version: "1.0.0",
hasPermssion: 0,
credits: "tdunguwu",
description: "lỏ",
commandCategory: "phương tiện",
usages: "",
cooldowns: 0
};
module.exports.run = async function ({ api, args, event, permssion }) {
    const request = require('request');
  const fs = require("fs-extra")
  const axios = require("axios")
  const { threadID, messageID, senderID, body } = event;
  if(!args[0]) return api.sendMessage('Vui lòng nhập ngày sinh', threadID, messageID)
  else return api.sendMessage(`🔍 Bạn đã chọn ngày sinh là: ${args.join(" ").toUpperCase()}\n\n(Reply tin nhắn này và chọn số fl mà bạn muốn)`,event.threadID, (err, info) => {
     return global.client.handleReply.push({
        type: "ngaysinh",
        name: this.config.name,
        author: senderID,
        ngaysinh: args.join(" ").toUpperCase(),
        messageID: info.messageID
      });
  },event.messageID);
}
module.exports.handleReply = async function ({ event, api, handleReply }) {
	 if (handleReply.author != event.senderID) return;
   var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
  const { threadID, messageID, senderID, body } = event;
  const request = require('request');
  const fs = require("fs-extra");
  const axios = require("axios");
  var mentions = event.senderID
	let data = await api.getUserInfo(mentions);
	let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "Nam" : sex == 1 ? "Nữ" : "Trần Đức Bo";
   var  ngaysinh = handleReply. ngaysinh;
  switch (handleReply.type) {
    case "ngaysinh": {
      var sofl = handleReply.sofl;
      var  ngaysinh = handleReply.ngaysinh;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 Bạn đã chọn số fl là ${event.body.toUpperCase()}\n\n(Reply tin nhắn này nhập vào nơi bạn đến)`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "noiden",
          name: this.config.name,
          author: senderID,
          sofl: event.body,
           ngaysinh:  ngaysinh,
          messageID: info.messageID
        });
      },messageID)
    }
    case "noiden": {
      var noiden = handleReply.noiden;
      var ngaysinh = handleReply.ngaysinh;
      var sofl = handleReply.sofl;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 Bạn đã chọn nơi đến là : ${event.body.toUpperCase()}\n\(Reply tin nhắn này để nhập quê quán của bạn)`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "quequan",
          name: this.config.name,
          author: senderID,
          noiden: event.body,
          ngaysinh: ngaysinh,
          sofl: sofl,
          messageID: info.messageID
        });
      },messageID) 
    }
	case "quequan": {
      var noiden = handleReply.noiden;
      var ngaysinh = handleReply.ngaysinh;
      var sofl = handleReply.sofl;
      var quequan = handleReply.quequan;
      api.unsendMessage(handleReply.messageID);
      return api.sendMessage(`🔍 Bạn đã chọn quê quán là : ${event.body.toUpperCase()}\n\(Reply tin nhắn này để nhập mối quan hệ của bạn)`,event.threadID, (err, info) => {
        return global.client.handleReply.push({
          type: "create",
          name: this.config.name,
          author: senderID,
          ngaysinh: ngaysinh,
          noiden: noiden,
          sofl: sofl,
          quequan: event.body,
          messageID: info.messageID
        });
      },messageID) 
    }
    
    case "create": {
      var rela = event.body.toUpperCase()
      var ngaysinh = handleReply.ngaysinh.toUpperCase()
      var noiden = handleReply.noiden.toUpperCase()
      var quequan = handleReply.quequan.toUpperCase()
      
	  var sofl = handleReply.sofl.toUpperCase()
       api.unsendMessage(handleReply.messageID);
            api.sendMessage(`⏳ Đang khởi tạo chương trình tạo ảnh!`,threadID, (err, info) => {
            setTimeout(() => {
            	api.unsendMessage(info.messageID);
            	var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/fbcover.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbcover.png"),event.messageID);
                return request(encodeURI(`https://www.phamvandienofficial.xyz/fbcover/v3?uid=${senderID}&name=${name}&birthday=${ngaysinh}&love=${rela}&location=${noiden}&hometown=${quequan}&follow=${sofl}&gender=${gender}&color=red`)).pipe(fs.createWriteStream(__dirname + '/cache/fbcover.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }} 