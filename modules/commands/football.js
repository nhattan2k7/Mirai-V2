/*Credits NguyenQuocAnh vui lòng không chỉnh sửa*/
module.exports.config = {
	name: "football",
	version: "1.1.2",
	hasPermssion: 0,
	credits: "NguyenQuocAnh",
	description: "Football",
	commandCategory: "game",
	usages: "",
	cooldowns: 5,
	envConfig: {}
};
module.exports.onLoad = () => {
 const chalk = require('chalk');
	console.log(chalk.bold.hex("# 473C8B").bold("--SUCCESFULLY LOADED THE FOOTBALL COMMAND--"));
}
module.exports.run = async ({
	event,
	api,
	handleReply,
	Currencies,
	getText
}) => {
	const fs = require("fs-extra");
	const axios = require("axios");
	const Home = (await axios.get(`https://i.imgur.com/YBAARt6.jpeg`, {
		responseType: "stream"
	})).data
	return api.sendMessage({
		body: `Email: john@smith.com` +
			"\nFOOTBALLGAMESPORTS" +
			"\n(1/-m) [ Market ]" +
			"\n(2/-gP) [ Game Play ]" +
			"\n(3/-vM) [ Ví MFG]" +
			"\n(4/-Ex) [ Extras ]",
		attachment: (Home)
	}, event.threadID, (error, info) => {
		global.client.handleReply.push({
			type: "choosee",
			name: this.config.name,
			author: event.senderID,
			messageID: info.messageID
		})
	})
}
module.exports.handleReply = async function({
	args,
	event,
	Users,
	api,
	handleReply,
	Currencies
}) {
	const {
		threadID,
		messageID,
		senderID
	} = event;
	const axios = require("axios")
	const fs = require('fs-extra');
	const request = require('request');
	let data = (await Currencies.getData(senderID)).data;
	const money = (await Currencies.getData(senderID)).money;
	var msg = "";
	//VAR FUNCTION
	/////////////////Gameplay-Rotation

	/////////////////////////
	//lớn nhất là 100000mCoin nhỏ nhất là 100mCoin 
	var coinMrandom = Math.floor(Math.random() * 100000) + 100;
	///////////


	/*MIRAI @FOOTBALL GAME ALL LIST CHOOSE*/
	switch (handleReply.type) {
		case "choosee": {
			switch (event.body) {
				case "1":
				case "-m": {
					msg = `(1/-goiRandomMcoin) [ GÓI RANDOM MCOIN ]\nSố tiền bỏ ra để thực hiện giao dịch là [ 1005mCoin ] có cơ hội nhận được phần thưởng [ 100000mCoin ]`;
					return api.sendMessage({
						body: msg
					}, threadID, (error, info) => {
						global.client.handleReply.push({
							type: "Market",
							name: this.config.name,
							author: senderID,
							messageID: info.messageID
						})
					}, messageID)
				}
				break;
			case "2":
			case "-gP": {
				msg = `(1/-rT) [ Rotation ]\n(2/-tN) [ Tournament ]`;
				return api.sendMessage({
					body: msg
				}, threadID, (error, info) => {
					global.client.handleReply.push({
						type: "GamePlay",
						name: this.config.name,
						author: senderID,
						messageID: info.messageID
					})
				}, messageID)
			}
			break;
			case "3":
			case "-vM": {
				msg = `(1/-xC) [ Xem số tiền của bạn còn dư(mCoin) ]`;
				return api.sendMessage({
					body: msg
				}, threadID, (error, info) => {
					global.client.handleReply.push({
						type: "vMFG",
						name: this.config.name,
						author: senderID,
						messageID: info.messageID
					})
				}, messageID)
			}
			break;
			case "4":
			case "-Ex": {
				msg = `(1/-Se) [ Setting ] \n(2/-heG) [ Help Game ]`;
				return api.sendMessage({
					body: msg
				}, threadID, (error, info) => {
					global.client.handleReply.push({
						type: "Extras",
						name: this.config.name,
						author: senderID,
						messageID: info.messageID
					})
				}, messageID)
			}
			}
		}
	}
	/*MIRAI @FOOTBALL GAME #MARKET CHOOSE*/
	switch (handleReply.type) {
		case "Market": {
			switch (event.body) {
				case "1":
				case "-goiRandomMcoin": {
					msg = `⚡Giao dịch thành công tài khoản của bạn bị -[ 1005mCoin ]\nBạn mở random được [ ${coinMrandom}mCoin ]`;
					await Currencies.decreaseMoney(senderID, 1005);
					await
					Currencies.increaseMoney(senderID, parseInt(coinMrandom));
					return api.sendMessage({
						body: msg
					}, threadID, messageID)
				}
			}
		}
	}
	/*MIRAI @FOOTBALL GAME #VI MFG CHOOSE*/
	switch (handleReply.type) {
		case "vMFG": {
			switch (event.body) {
				case "1":
				case "-xC": {
					msg = `⚡Số mCoin của bạn là: [ ${money}mCoin ]`;
					return api.sendMessage({
						body: msg
					}, threadID, messageID)
				}
			}
		}
	}
	/*MIRAI @FOOTBALL #GAMEPLAY CHOOSE*/
	switch (handleReply.type) {
		case "GamePlay": {
			switch (event.body) {
				case "1": {
					msg = `(1/-RotaPl) [ ⚡Vòng Quay Cầu Thủ ]`;
					return api.sendMessage({
						body: msg
					}, threadID, (error, info) => {
						global.client.handleReply.push({
							type: "Gameplay-Rotation",
							name: this.config.name,
							author: senderID,
							messageID: info.messageID
						})
					}, messageID)
				}
				break;
			}
		}
	}
	/*MIRAI @FOOTBALL #GAMEPLAY-Rotation*/
	switch (handleReply.type) {
		case "Gameplay-Rotation": {
			switch (event.body) {
				case "1": {
const reply = function (reply){
  return api.sendMessage(reply, threadID,messageID)
};

					var char = ["Neymar","Adama Traoré"];
					var random = Math.floor(Math.random() * char.length);
					if (char[random] == "Neymar") {
						var link = "https://i.imgur.com/j3yCP8n.jpeg"
					} else if (char[random] == "Adama Traoré") {
					  var link = "https://i.imgur.com/1OIbSoF.jpeg"
					}
					const img = (await axios.get(link, {
						responseType: "stream"
					})).data;
					//
					reply(`Bạn Mất [ 5000000mCoin] Khi Quay`);await Currencies.decreaseMoney(senderID, 5000000);
					//quay
      reply(`[ Đang Quay...... ]`);
      setTimeout(() => {reply({body: `(Result) [ Bạn Quay Được Cầu Thủ ] ->  ${char[random]}`,attachment: img})}, 1000);
				}
				break;
			}
		}
	}
}







