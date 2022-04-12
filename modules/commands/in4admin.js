const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "in4admin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "tiện ích",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`✘ 𝑻𝒉𝒐̂𝒏𝒈 𝑻𝒊𝒏 𝑨𝒅𝒎𝒊𝒏 𝑩𝒐𝒕 ✘\n
👀 Tên: Hồ NHật Tân
💮 Biệt danh: ... 
❎ Ngày tháng năm sinh: 30/11/2007 
👤 Giới tính: Nam
💫 Chiều cao cân nặng: 1m74 x 54kg
💘 Mối quan hệ: <3
🌎 Quê quán: Ninh Hòa - Khánh Hòa
👫 Gu: ...
🌸 Tính cách: Nhạt =))
🌀 Sở thích: Chả biết nữa:)
💻Contact💻
☎ SĐT&Zalo: 0706231362
\n🌐 Facebook: https://www.facebook.com/profile.php?id=100077529039506
⛱ TikTok: https://www.tiktok.com/@hnhattan3011
⛲ Instagram: https://www.instagram.com/hnhattan3011
✉️ Email: nhattan.301107@gmail.com || nhattan040507@gmail.com
❗ Mọi thắc mắc hay bot không hoạt động có thể hỏi trực tiếp admin theo các link ở trên.
📌 Hãy đồng hành cùng BOT và mình nhé. Cảm ơn mọi người <3
✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏
📝 Bot được điều hành bởi Nhật Tân`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${100077529039506}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };