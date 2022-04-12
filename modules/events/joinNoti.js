module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "CatalizCS",
	description: "Thông báo bot hoặc người vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		api.changeNickname(`[ ${global.config.PREFIX} ] • ${(!global.config.BOTNAME) ? "Made by CatalizCS and SpermLord" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
		const fs = require("fs");
		return api.sendMessage("", event.threadID, () => api.sendMessage({body:`𝐋𝐨𝐚𝐝𝐢𝐧𝐠...𝟏𝟎𝟎%\nĐã kết nối thành công với nhóm\nChào mọi người mình là 𝘽𝙤𝙩•𝙏𝙖𝙣 <3\nRất vui khi được phục vụ nhóm và mọi người\nBot là 1 tài khoản được lập trình để hỗ trợ nhóm\nPrefix bot: [ . ]\nCác bạn dùng bot không spam tránh die bot mất cái chơi 😄\nTÔN TRỌNG ADMIN BOT, KHÔNG CHỬI BOT\nChúc các bạn có trải nghiệm với bot của mình vui vẻ 🌵\n Gõ .menu hoặc .help để xem lệnh của BOT. \nAdmin: https://www.facebook.com/profile.php?id=100077529039506 . \n <3 CẢM ƠN MỌI NGƯỜI <3`, attachment: fs.createReadStream(__dirname + "/cache/joinbox/join.mp4")} ,threadID));
	}
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);

			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
				const userName = event.logMessageData.addedParticipants[id].fullName;
				nameArray.push(userName);
				mentions.push({ tag: userName, id });
				memLength.push(participantIDs.length - i++);
			}
			memLength.sort((a, b) => a - b);
			
			(typeof threadData.customJoin == "undefined") ? msg = "🌺 Ra đón thành viên mới nè mọi người:3\n🌵 𝑊𝑒𝑙𝑐𝑜𝑚𝑒 𝑡𝑜 {threadName}\n🌸 Chào mừng bạn {name} đã đến với {threadName} <3\n🍀 Bạn là thành viên thứ {soThanhVien} của nhóm:>\n📈 Cố gắng tương tác với nhóm nhé {name}\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n<3 Nhật Tân <3 " : msg = threadData.customJoin;
			msg = msg
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : 'bạn')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
}