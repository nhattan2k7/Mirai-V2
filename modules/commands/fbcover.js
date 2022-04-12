module.exports.config = {
  name: "fbcover",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "chinhle",
  description: "Tạo ra một avt trên taoanhdep.",
  commandCategory: "phương tiện",
  cooldowns: 0,
  dependencies: {
      "fs-extra": "",
      "request": "",
      "axios": ""
  }
};

module.exports.run = async function ({ api, args, event, permssion , handleReply}) {
const request = require('request');
const fs = require("fs-extra")
const axios = require("axios")
const { threadID, messageID, senderID, body } = event;
if (args[0] == "list") {
var listAnime = (await axios.get(`https://www.phamvandienofficial.xyz/taoanhdep/list/`)).data
      var lengthID = [];
    var i = 1
    var msg = []
    var msgg = []
    for (let ID of listAnime) { 
        lengthID.push(ID.imgAnime)
        const text3 = ID.imgAnime.split("s0/").pop()
        const text1 = text3.substr(0, text3.indexOf('.')); 

        msgg.push(text1.charAt(0).toUpperCase() + text1.slice(1).replace("-", " "))
    }           
    var page = 1;
        page = parseInt(args[1]) || 1;
        page < -1 ? page = 1 : "";
    var limit = 15;
    var msg = "==== DANH SÁCH NHÂN VẬT ===\n\n";
    var numPage = Math.ceil(msgg.length / limit);
      for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
        if (i >= msgg.length) break;
          let name = msgg[i];                  
          msg +=` » ID: ${i+1}. ${name}\n`;             
      }
    msg += `\n» Trang ${page}/${numPage}\n`
    msg += `» Hiện tại có ${(lengthID.length)} nhân vật\n`
    return api.sendMessage(msg, threadID)}
  else if (senderID == api.getCurrentUserID()) return;
api.sendMessage(`Reply tin nhắn để chọn nhân vật`,event.threadID, (err, info) => {
     return global.client.handleReply.push({
        type: "characters",
        name: this.config.name,
        author: senderID,
        tenchinh: args.join(" ").toUpperCase(),
        messageID: info.messageID
      });
  },event.messageID);
}
module.exports.handleReply = async function({ api, event, args, handleReply, client, __GLOBAL, Threads, Users, Currencies }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    var info = await api.getUserInfo(event.senderID);
    var nameSender = info[event.senderID].name;
    var arraytag = [];
        arraytag.push({id: event.senderID, tag: nameSender});
    if (handleReply.author != event.senderID) return;
    const {
        threadID,
        messageID,
        senderID
    } = event;

    switch (handleReply.type) {
        case "characters": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍Bạn đã chọn ID nhân vật là ${event.body}\n(Reply tin nhắn này nhập vào tên chính của bạn)`,threadID , function (err, info) { 
        	  return global.client.handleReply.push({ 
        	  	type: 'subname',
        	  	name: 'fbcover',
        	  	author: senderID,
        	  	characters: event.body,
        	  	messageID: info.messageID
        	  })
        	}, messageID);
        }
        case "subname": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍Bạn đã chọn tên chính là ${event.body}\n(Reply tin nhắn này nhập vào tên phụ của bạn)`,threadID , function (err, info) { 
        		return global.client.handleReply.push({ 
        			type: 'color',
        			name: 'fbcover',
        			author: senderID,
        			characters: handleReply.characters,
        			name_s: event.body,
        			messageID: info.messageID
        		})
        	}, messageID);
        }
        case "color": { 
        	api.unsendMessage(handleReply.messageID);
        	return api.sendMessage(`🔍Bạn đã chọn tên phụ là ${event.body}\nNhập màu nền của bạn (lưu ý: nhập tên tiếng anh của màu - Nếu không muốn nhập màu thì nhập "no")\n(Reply tin nhắn này)`,threadID , function (err, info) {
        		return global.client.handleReply.push({ 
        			type: 'create',
        			name: 'fbcover',
        			author: senderID,
        			characters: handleReply.characters,
        			subname: event.body,
        			name_s: handleReply.name_s,
        			messageID: info.messageID
        		})
        	}, messageID)
        }
        case "create": {
            var nhanvat = handleReply.characters;
            var name = handleReply.name_s;
            var color = event.body;
            var subname = handleReply.subname;
            api.unsendMessage(handleReply.messageID);
            api.sendMessage(`⏳ Đang khởi tạo chương trình tạo ảnh!`,threadID, (err, info) => {
            setTimeout(() => {
            	api.unsendMessage(info.messageID);
            	var callback = () => api.sendMessage({body:`Đây là ảnh bìa của ${nameSender}\nMã số nhân vật: ${nhanvat}\nTên chính: ${name}\nTên phụ: ${subname}\nMàu nền: ${color}`,mentions: arraytag,attachment: fs.createReadStream(__dirname + "/cache/fbcover.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/fbcover.png"),event.messageID);
                return request(encodeURI(`https://www.phamvandienofficial.xyz/fbcover/v2?name=${name}&id=${nhanvat}&subname=${subname}&color=${color}`)).pipe(fs.createWriteStream(__dirname + '/cache/fbcover.png')).on('close', () => callback());
            }, 1000);
          }, messageID);
        }
    }
}