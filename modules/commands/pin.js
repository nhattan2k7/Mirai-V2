module.exports.config = {
    name: "pin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Tìm kiếm hình ảnh",
    commandCategory: "Tiện ích",
    usages: "[Text]",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const request = require("request");
    try {
    const keySearch = args.join(" ");
    if(keySearch.includes("-") == false) return api.sendMessage('Vui lòng nhập theo định dạng: từ khóa cần tìm kiếm - số ảnh cần tìm', event.threadID, event.messageID)
    const keySearchs = keySearch.substr(0, keySearch.indexOf('-'))
    const numberSearch = keySearch.split("-").pop() || 6
    const res = await axios.get(`http://api-ttk.herokuapp.com/social/pinterest?text=${encodeURIComponent(keySearchs)}&apikey=ttk`);
    const data = res.data.result;
    var num = 0;
    var imgData = [];
    for (var i = 0; i < parseInt(numberSearch); i++) {
      let path = __dirname + `/cache/${num+=1}.png`;
      let getDown = (await axios.get(`${data[i]}`, { responseType: 'arraybuffer' })).data;
      fs.writeFileSync(path, Buffer.from(getDown, 'utf-8'));
      imgData.push(fs.createReadStream(__dirname + `/cache/${num}.png`));
    }
    api.sendMessage({
        attachment: imgData,
        body: numberSearch + ' kết quả tìm kiếm của từ khóa: '+ keySearchs
    }, event.threadID, event.messageID)
    for (let ii = 1; ii < parseInt(numberSearch); ii++) {
        fs.unlinkSync(__dirname + `/cache/${ii}.png`)
    }
}
catch {
        return api.sendMessage('Đã có lỗi xảy ra, vui lòng thử lại sau!!!', event.threadID, event.messageID);
    }
}
