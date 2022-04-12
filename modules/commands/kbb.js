const chalk = require('chalk');
module.exports.config = {
    name: "kbb",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Adonis",
    description: "kéo búa bao nhiều người chơi",
    commandCategory: "Game",
    usages: "[create/join/leave/start/end]",
    cooldowns: 0
};
module.exports.onLoad = () => {
console.log(chalk.bold.hex("#FF00FF").bold("--SUCCESFULLY LOADED THE KEOBUABAO COMMAND--"));
  }
module.exports.handleEvent = async function ({
    api,
    event,
    Currencies
}) {
    const fs = require("fs-extra")
    const axios = require("axios")
    const {
        threadID,
        messageID,
        body,
        senderID
    } = event;
    if (!body) return;
    async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return false;
        else return true;
    }
    async function replace(item) {
        var bua = 'https://imgur.com/IiAhDRT.png',
    keo = 'https://imgur.com/9JIRw7Z.png',
    bao = 'https://imgur.com/1M9MlaV.png';
        if (item == "búa") {
            var icon = "👊",
                path = "bua";
            let img_bua = (await axios.get(bua, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path}.png`, Buffer.from(img_bua, "utf-8"));
        }
        if (item == "kéo") {
            var icon = "✌️",
                path = "keo";
            let img_keo = (await axios.get(keo, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path}.png`, Buffer.from(img_keo, "utf-8"));
        }
        if (item == "bao") {
            var icon = "🖐️",
                path = "bao";
            let img_bao = (await axios.get(bao, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path}.png`, Buffer.from(img_bao, "utf-8"));
        }
       
        var imgKbb = [];
        imgKbb.push(fs.createReadStream(__dirname + `/cache/${path}.png`));
        var msg = {
            body: `» Kết quả: ${icon}`,
            attachment: imgKbb
        }
        api.sendMessage(msg, threadID, messageID)
    }
    const typ = ['kéo', 'búa', 'bao', 'keo', 'bua', 'bao'];

    const item = typ[Math.floor(Math.random() * typ.length)];

    var ketqua = [item]
    const choosee = body.split(" ")

    if (typ.includes(choosee[0].toLowerCase()) == true) {
        if (!global.kbb) return
        const gameThread = global.kbb.get(threadID) || {};
        if (!gameThread) return;
        if (gameThread.start != true) return;
        if (!choosee[1]) return api.sendMessage('Vui lòng nhập số tiền cược!', threadID, messageID);
        if (await checkMoney(senderID, choosee[1]) == false) return api.sendMessage('Bạn không đủ tiền cược!', threadID, messageID)
        else {
            var playerGame = gameThread.player.length
            if (!gameThread.player.find(i => i.userID == senderID)) return;

            else {
                var s, q;
                var s = gameThread.player.findIndex(i => i.userID == senderID);
                var q = gameThread.player[s];
                if (q.choose.status == true) return api.sendMessage('⚠ Bạn đã chọn rồi không thể chọn lại!', threadID, messageID);
                else {
                    if (typ.includes(choosee[0].toLowerCase()) == true) {
                        gameThread.player.splice(s, 1);
                        gameThread.player.push({
                            name: q.name,
                            userID: senderID,
                            choose: {
                                status: true,
                                msg: choosee[0].toLowerCase(),
                                money: parseInt(choosee[1])
                            }
                        });
                        api.sendMessage(`👤 Người chơi ${q.name} đã chọn ${choosee[0].toLowerCase()} với mức đặt cược ${choosee[1]}$`, threadID, messageID);
                    }
                    var vv = 0,
                        vvv = gameThread.player.length;
                    for (var c of gameThread.player) {
                        if (c.choose.status == true) vv++;
                    }
                    if (vv == vvv) {
                        let gifKbb = (await axios.get('https://imgur.com/yEFri7a.gif', {
                            responseType: "arraybuffer"
                        })).data;
                        fs.writeFileSync(__dirname + `/cache/gifkbb.gif`, Buffer.from(gifKbb, "utf-8"));
                        var gifkbb = [];
                        gifkbb.push(fs.createReadStream(__dirname + `/cache/gifkbb.gif`));
                        var msg1 = {
                            body: "» Đang chơi....",
                            attachment: gifkbb
                        }
                        api.sendMessage(msg1, threadID, async (error, info) => {
                            await new Promise(resolve => setTimeout(resolve, 3000));
                        
                            api.unsendMessage(info.messageID);
                        }, messageID);
                        await new Promise(resolve => setTimeout(resolve, 7000));
                        await replace(item)
                        await new Promise(resolve => setTimeout(resolve, 3000));
                        await checkWin(ketqua, gameThread);
                    } else return;
                }
            }
        }
    }
    async function checkWin(ketqua, gameThread) {
        var checkwin = gameThread.player.filter(i => ketqua.includes(i.choose.msg) == true)
        var checklose = gameThread.player.filter(i => ketqua.includes(i.choose.msg) == false)
        var msg;
        if(checkwin.length != 0) {
          msg = '[====NHỮNG NGƯỜI THẮNG CUỘC====]\n'
          for (let i of checkwin) {
              var checkItem = ketqua.filter(a => a == i.choose.msg)
              console.log(checkItem)
              await Currencies.increaseMoney(i.userID, parseInt(i.choose.money) * checkItem.length);
              msg += `👤: ${i.name} đặt ${i.choose.msg} + ${parseInt(i.choose.money) * checkItem.length}$\n`
          }
        }
        if(checklose.length != 0) {
          msg += '\n[====NHỮNG NGƯỜI THUA CUỘC====]\n'
          for (let i of checklose) {
              await Currencies.decreaseMoney(i.userID, parseInt(i.choose.money));
              msg += `👤: ${i.name} đặt ${i.choose.msg} - ${i.choose.money}$\n`
          }
        }
        global.kbb.delete(threadID);
        return api.sendMessage(msg, threadID, messageID);
    }
}
module.exports.run = async function ({ api, event,args,Threads,Users,Currencies,getText}) {
    try {
        if (!global.kbb) global.kbb = new Map();
        const {
            threadID,
            messageID,
            senderID
        } = event;
              
    if (args.length == 0) return api.sendMessage(`===[ KÉO BÚA BAO ]===\n» create/new/-c: Tạo bàn\n» join/-j: Tham gia\n» leave/-l: Rời khỏi bàn\n» start/-s: Bắt đầu\n» end/-e: Kết thúc`, threadID, messageID);
        var gameThread = global.kbb.get(threadID);
        switch (args[0]) {
        case "create":
        case "new":
        case "-c": {
            if (await checkMoney(senderID, 50) == false) return api.sendMessage('Yêu cầu có ít nhất 50$ để tham gia!', threadID, messageID)
            if (global.kbb.has(threadID)) return api.sendMessage('⚠ Nhóm này đã được mở bàn game!', threadID, messageID);
            var name = await Users.getNameUser(senderID);
            global.kbb.set(threadID, {
                box: threadID,
                start: false,
                author: senderID,
                player: [{
                    name,
                    userID: senderID,
                    choose: {
                        status: false,
                        msg: null,
                        money: null
                    }
                }]
            });
            return api.sendMessage('Tạo bàn thành công\nkbb join để tham gia chơi', threadID, messageID);
            break;
        }
        case "join":
        case "-j": {
            if (await checkMoney(senderID, 50) == false) return api.sendMessage('Yêu cầu có ít nhất 50$ để tham gia!', threadID, messageID)
            if (!global.kbb.has(threadID)) return api.sendMessage('Không có bàn kéo búa bao nào để tham gia!', threadID, messageID);
            if (gameThread.start == true) return api.sendMessage('Game đã bắt đầu trước đó!', threadID, messageID);
            if (gameThread.player.find(i => i.userID == senderID)) return api.sendMessage('Bạn đã tham gia trước đó rồi!', threadID, messageID);
            var name = await Users.getNameUser(senderID);
            gameThread.player.push({
                name,
                userID: senderID,
                choose: {
                    stats: false,
                    msg: null,
                    money: null
                }
            });
            global.kbb.set(threadID, gameThread);
            return api.sendMessage('Tham gia thành công!', threadID, messageID);
            break;
        }
        case "leave":
        case "-l'": {
            if (!global.kbb.has(threadID)) return api.sendMessage('Không có bàn kéo búa bao nào để rời khỏi!', threadID, messageID);
            if (!gameThread.player.find(i => i.userID == senderID)) return api.sendMessage('Bạn chưa tham gia nên không thể rời!', threadID, messageID);
            if (gameThread.start == true) return api.sendMessage('Game đã bắt đầu rồi, hơi muộn nha!', threadID, messageID);
            if (gameThread.author == senderID) {
                global.kbb.delete(threadID);
                var name = await Users.getNameUser(senderID);
                return api.sendMessage('⚠ Bàn game đã được bắt đầu không thể rời!', threadID, messageID);
            } else {
                gameThread.player.splice(gameThread.player.findIndex(i => i.userID == senderID), 1);
                global.kbb.set(threadID, gameThread);
                var name = await Users.getNameUser(senderID);
                api.sendMessage('Rời thành công!', threadID, messageID);
                return api.sendMessage(`${name} đã rời khỏi, số lượng người chơi còn lại là ${gameThread.player.length}`, threadID);
            }
            break;
        }
        case "start":
        case "-s": {
            if (!gameThread) return api.sendMessage('Không có bàn kéo búa bao nào để bắt đầu!', threadID, messageID);
            if (gameThread.author != senderID) return api.sendMessage('Chỉ có người tạo mới có thể bắt đầu!', threadID, messageID);
            if (gameThread.player.length <= 1) return api.sendMessage('Số lượng người chơi phải từ 2 trở lên!', threadID, messageID);
            if (gameThread.start == true) return api.sendMessage('Game đã bắt đầu trước đó', threadID, messageID);
            gameThread.start = true;
            global.kbb.set(threadID, gameThread);
            return api.sendMessage(`Bắt đầu thành công, số lượng người chơi là ${gameThread.player.length}\nVui lòng nhập [kéo/búa/bao] [số tiền cược]`, threadID);
            break;
        }
        case "end":
        case "-e": {
            if (!gameThread) return api.sendMessage('Không có bàn kéo búa bao nào để kết thúc!', threadID, messageID);
            if (gameThread.author != senderID) return api.sendMessage('Chỉ có người tạo mới có thể kết thúc!', threadID, messageID);
            global.kbb.delete(threadID);
            return api.sendMessage(`Kết thúc thành công`, threadID, messageID);
            break;
        }break;
          
            
        }
    } catch (err) {
        return api.sendMessage(getText("error", err), event.threadID, event.messageID);
    }
    async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return false;
        else return true;
    }
};