module.exports.config = {
    name: "autosetname",
    version: "1.0.1",
    hasPermssion: 1,
    credits: "D-Jukie",
    description: "Tự động setname cho thành viên mới",
    commandCategory: "group",
    usages: "[add <name> /remove] ",
    cooldowns: 5
}

module.exports.onLoad = () => {
    const { existsSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const pathData = join(__dirname, "cache", "autosetname.json");
    if (!existsSync(pathData)) return writeFileSync(pathData, "[]", "utf-8"); 
}

module.exports.run = async function  ({ event, api, args, permssionm, Users })  {
    const { threadID, messageID } = event;
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const pathData = join(__dirname, "cache", "autosetname.json");
    const content = (args.slice(1, args.length)).join(" ");
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var thisThread = dataJson.find(item => item.threadID == threadID) || { threadID, nameUser: [] };
    switch (args[0]) {
        case "add": {
            if (content.length == 0) return api.sendMessage("⛔Phần đặt biệt danh cho TVM m đặt cx ngu\nghi /autosetname add + BD", threadID, messageID);
            if (thisThread.nameUser.length > 0) return api.sendMessage("⛔Vui lòng xóa biệt danh hồi nãy m đặt đấy thằng ngu m ghi /autosetname remove", threadID, messageID); 
            thisThread.nameUser.push(content);
            const name = (await Users.getData(event.senderID)).name
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            api.sendMessage(`❯ Đã đặt biệt danh tạm thời cho thằng cắt moi mới vô box là:${content} ${name}`, threadID, messageID);
            break;
        }
        case "rm":
        case "remove":
        case "delete": {
                if (thisThread.nameUser.length == 0) return api.sendMessage("Nhóm bạn chưa đặt BD tên thành viên mới!!", threadID, messageID);
                thisThread.nameUser = [];
                api.sendMessage(`❯ Xóa thành công phần cấu hình tên thành viên mới`, threadID, messageID);
                break;
        }
        default: {
                api.sendMessage(`❯ Dùng: autosetname add + BD ( để cấu hình biệt danh cho thành viên mới )\n❯ Dùng: autosetname remove ( để xóa cấu hình đặt biệt danh cho thành viên mới)`, threadID, messageID);
        }
    }
    if (!dataJson.some(item => item.threadID == threadID)) dataJson.push(thisThread);
    return writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
}