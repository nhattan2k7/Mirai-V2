module.exports.config = {
	name:"upt",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "",
	description: "Random ảnh - uptime",
	commandCategory: "System",
	cooldowns: 3
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}


module.exports.run = async ({ api, event, Users, Threads}) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
    let name = await Users.getNameUser(event.senderID)
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
	const pidusage = await global.nodemodule["pidusage"](process.pid);
	const timeStart = Date.now();
  const lk = [
    "con bot này thông minh hơn bạn","tôi không có khả năng hiểu con gái","con bot này giúp bạn hỗ trợ trong việc học?","spam bot tôi sẽ ban bạn khỏi người dùng bot","đừng để tôi cáu nhé!","việc bạn đang làm là vô nghĩa","cái gì chưa biết chỉ cần biết là được","con chuột bị ốm uống thuốc chuột thì tại sao con chuột lại chết ?","chảy máu cam nhưng sao màu máu là màu đỏ ?","228922 là một con số tuyệt vời.","Đây là một lệnh vô dụng","177013 là một con số tuyệt vời","7749 là con số đẹp cho tình yêu","bạn có yêu tôi không ?","bạn rất ngu","Thời gian qua đi, có quá nhiều người chỉ là khách qua đường trong cuộc đời bạn… Chỉ cần không ở bên nhau thì sẽ có ngày quên lãng thôi.","Thời gian qua đi, bạn sẽ biết, có quá nhiều người chỉ là khách qua đường trong cuộc đời bạn… Chỉ cần không ở bên nhau thì sẽ có ngày quên lãng thôi.","Thời gian là câu nói hay nhất, đúng nhất cho một tình yêu.","Dù tình yêu có lớn đến mấy cũng chẳng ngăn được thời gian.","Đừng để thời gian biến nỗi nhớ thành gánh nặng của bạn.","Tuổi trẻ chúng ta đang trôi qua không ngừng.","Tuổi trẻ là hữu hạn - Hãy ngừng lãng phí thời gian và tập trung kiến tạo bản thân ngày một tốt hơn.","Thời gian không chờ đợi một ai cả, chớp mắt một cái thanh xuân đã qua nhanh như một giấc mộng.","Thời gian tuổi trẻ không phụ thuộc vào guồng quay của thế giới mà nó phụ thuộc vào chính mỗi người chúng ta.","Bầu trời sẽ xanh trở lại, nhưng thời gian sẽ không quay trở lại. Nơi ấy sẽ vẫn thế, nhưng tuổi trẻ thì không...","Biết mình còn trẻ và biết tuổi trẻ không hề kéo dài.","Trên đời này có hai thứ không thể quay trở lại đó là: thời gian và tuổi trẻ.","Rồi sẽ có một ngày bạn thức dậy và không còn đủ thời gian để làm những điều hàng ngày mình mong muốn. Hãy làm ngay bây giờ. - Paulo Coelho","Điều hối tiếc nhất trong cuộc đời là không được làm những điều mình thích, là đã không trân trọng thời gian tuổi trẻ của chính mình.","Nếu thời gian là thứ đáng giá nhất, phí phạm thời gian hẳn phải là sự lãng phí ngông cuồng nhất","Cuộc đời đã ngắn ngủi như vậy mà chúng ta vẫn rút ngắn nó thêm khi bất cẩn lãng phí thời gian.","Chúng ta cần phải đi ngang với thời gian chứ không phải để thời gian đi ngang qua."," Nếu bạn yêu đời, hãy đừng phung phí thời gian, vì chất liệu của cuộc sống làm bằng thời gian.","Có những lúc, không có lần sau, không có cơ hội bắt đầu lại. Có những lúc, bỏ lỡ hiện tại, vĩnh viễn không còn cơ hội nữa","Người nào dám lãng phí một giờ đồng hồ hãy còn chưa phát hiện ra giá trị của cuộc sống"," Cuộc sống quá ngắn ngủi. Hận thù chỉ tàn phá những hạnh phúc tuyệt vời bạn đang có. Hãy cười khi bạn có thể và quên đi những gì bạn không thể thay đổi.","Kẻ tầm thường chỉ lo tìm cách giết thời gian, còn người có tài thì tìm mọi cách tận dụng thời gian.","Một tuần lễ với người chăm chỉ có 7 ngày, còn với kẻ lười biếng có 7 ngày mai.","Tôi chỉ còn lại một ít thời gian, và tôi không muốn lãng phí nó với Chúa.","Thương hại chính mình và điều kiện hiện tại của mình không chỉ lãng phí thời gian mà là thói quen tồi tệ nhất mà bạn có thể.","Con người không bao giờ được lãng phí thời gian vô ích để nuối tiếc quá khứ hay phàn nàn về những thay đổi khiến mình khó chịu, bởi thay đổi là bản chất của cuộc sống","Hầu hết mọi người lãng phí phần nào đó của cuộc đời cố gắng thể hiện những phẩm chất mình không có","Ngày đi, tháng chạy, năm bay. Thời gian nước chảy, chẳng quay được về.","Giúp bạn bè khi họ cần thật dễ dàng, nhưng dành cho họ thời gian không phải lúc nào cũng thuận lợi.","Người khôn ngoan là người học được những sự thật này: Rắc rối là tạm thời. Thời gian là thuốc bổ. Khổ đau là ống nghiệm.","Thời gian mà bạn hưởng thụ để phung phí, không lãng phí.","Lòng kiên nhẫn và thời gian làm được nhiều hơn là sức mạnh hay nhiệt huyết.","Cuộc đời đã ngắn ngủi như vậy mà chúng ta vẫn rút ngắn nó thêm khi bất cẩn lãng phí thời gian.","Anh có thể trì hoãn, nhưng thời gian thì không"," Anh có yêu cuộc sống không? Vậy đừng lãng phí thời gian, vì đó là vật liệu của cuộc sống"," Anh có yêu cuộc sống không? Vậy đừng lãng phí thời gian, vì đó là vật liệu của cuộc sống","Giống như tuyết mùa đông trên bãi cỏ mùa hè, thời gian đã qua là thời gian đã mất."," Tiền bạc và thời gian là những gánh nặng ghê gớm nhất của cuộc đời… và những kẻ bất hạnh nhất là những người sở hữu chúng nhiều hơn mình có thể sử dụng.","Thời gian thay đổi tất cả, chỉ trừ thứ bên trong chúng ta luôn luôn khiến ta thấy ngạc nhiên vì thay đổi.","Tính cách là kết quả của hai thứ: thái độ tinh thần và cách chúng ta sử dụng thời gian","Nếu một người cho bạn thời gian của mình, anh ta không thể cho bạn món quà nào quý giá hơn nữa."," Người nào dám lãng phí một giờ đồng hồ hãy còn chưa phát hiện ra giá trị của cuộc sống","Hãy sống thật xứng đáng để những tháng ngày thanh xuân không trở nên lãng phí.","Tuổi thanh xuân tươi đẹp, thời gian quý báu của cuộc đời, hãy sống tự do hết mình."," Khi thanh xuân, người ta vui chơi, yêu đương và làm những điều rồ dại. Người ta vẫn lớn lên mỗi ngày, sai lầm, đứng dậy, đi tiếp.","Tuổi trẻ của mỗi chúng ta chẳng ai giống nhau, có thể tươi đẹp hoặc sóng gió triền miên nhưng đọng lại là những kí ức mãi mãi không thể nào xóa nhòa."
                ];
        //getPrefix
        const threadSetting = (await Threads.getData(String(event.threadID))).data || {};
        const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
    const { ADMINBOT } = global.config;
    const { userName } = global.data;
  
const { commands } = global.client;
const { events } = global.client;{
            const listAdmin = ADMINBOT || config.ADMINBOT || [];
            var msg = [];

            for (const idAdmin of listAdmin) {
                if (parseInt(idAdmin)) {
                    const name = (await Users.getData(idAdmin)).name
                    msg.push(`- ${name}\n https://facebook.com/${idAdmin}`);
                
                }
            }
	axios.get('https://api-milo.herokuapp.com/girl').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
				return api.sendMessage({body:`[=== KIỂM TRA HOẠT ĐỘNG ===]\nChào ${name} <3\n🌏Hiện tại đang là:\n ${gio}\n🧠Bot name: ${global.config.BOTNAME}\n🖥Uptime: ${hours} giờ ${minutes} phút ${seconds} giây.\n🔥Prefix gốc: ${global.config.PREFIX}\n🔥Prefix box: ${prefix}\n👥Tổng người dùng: ${global.data.allUserID.length}\n🏘️Tổng nhóm: ${global.data.allThreadID.length}\n🎃Commands: ${commands.size}\n🎃Events: ${events.size}\n▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅\n⚡Version: ${global.config.version}\n⚡Cpu đang sử dụng: ${pidusage.cpu.toFixed(1)}\n⚡Ram đang sử dụng: ${byte2mb(pidusage.memory)}\n📶Ping: ${Date.now() - timeStart}ms\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n Bạn có biết: ${lk[Math.floor(Math.random() * lk.length)]}`,
						attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})}
}
