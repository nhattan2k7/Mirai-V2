module.exports.config = {
  name: "banner",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Chinhle",
  description: "Tạo ảnh banner",
  commandCategory: "Phương tiện",
  usages: "image",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
   try {
        const axios = require("axios");
        const request = require("request");
        const fs = require("fs-extra");
        var ag = args.join(" ").split(' | ');
        var text1 = ag[0],
            text2 = ag[1],
            text3 = ag[2],
            text4 = ag[3];
             if (!text1) {
            return  message.reply("sử dụng banner list+stt để xem list\nExample: =>banner list1  ", event.threadID)
        }
            if (text1 == "list1") {
        if (!text2) {
            return  message.reply("DANH SÁCH CÁC TAG BANNER\n\n1.retro\n2. giangsinh\n3.neon\n4. tiki\n5. nutbac\n6. tiki\n7. lava\n8. 3dchorm\n9. neon2\n10. tiktok\n11. metalg\n12. ddlc\n13. neongr\n13. 2022\n14. horro\n15. jocker\n16. tking\n17. lion\n18.sadcat\n19. memo\n20. sinestrea \n21. florentino \n22. firefire \n23. gfx\n24. nakrot\n\nExample: =>banner <tag> | <text> ", event.threadID)
        }
    }
       if (text1 == "list2") {
        if (!text2) {
            return api.sendMessage("DANH SÁCH CÁC TAG BANNER\n ", event.threadID)
        }
    }
                  if (text1 == "retro") {
            if (!text2 || !text3|| !text4) {
                return api.sendMessage("Error\n\nExample: =>banner retro | [text] | [text]| [text] | ", event.threadID);
            } else {
                const res1 = await axios.get(`https://api.zeks.me/api/retro?text1=${text2}&text2=${text3}&text3=${text4}&apikey=apivinz`);
                var url1 = res1.data.result;
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/naruto.jpg`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/naruto.jpg`), event.messageID);
                };
                return request(encodeURI(url1))
                    .pipe(fs.createWriteStream(__dirname + `/cache/naruto.jpg`))
                    .on("close", callback)};
             }
              
             
             if (text1 == "lion") {
            if (!text2 || !text3 ) {
                return api.sendMessage("Error\n\nExample: =>banner lion | [text] | [text] | ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/lion.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/lion.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/textpro/lion?text1=${text2}&text2=${text3}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/lion.png`))
                    .on("close", callback)};
            }
             if (text1 == "horro") {
            if (!text2 || !text3 ) {
                return api.sendMessage("Error\n\nExample: =>banner horro | [text] | [text] | ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/metalg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/horro.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/textpro/horro?text1=${text2}&text2=${text3}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/horro.png`))
                    .on("close", callback)};
            }
          
             if (text1 == "metalg") {
            if (!text2 || !text3 ) {
                return api.sendMessage("Error\n\nExample: =>banner metalg | [text] | [text] | ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/metalg.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/metalg.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/textpro/metalg?text1=${text2}&text2=${text3}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/metalg.png`))
                    .on("close", callback)};
            }
             
             if (text1 == "tiktok") {
            if (!text2 || !text3 ) {
                return api.sendMessage("Error\n\nExample: =>banner tiktok | [text] | [text] | ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/tiktok.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tiktok.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/textpro/tiktok?text1=${text2}&text2=${text3}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/tiktok.png`))
                    .on("close", callback)};
            }
            if (text1 == "jocker") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner jocker | [text1]   ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/jocker.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/jocker.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/textpro/jocker?text1=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/jocker.png`))
                    .on("close", callback)};
            }
           if (text1 == "florentino") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner florentino | [text1]   ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/florentino.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/florentino.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/lq/florentino?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/florentino.png`))
                    .on("close", callback)};
            }
            if (text1 == "sinestrea") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner sinestrea | [text1]   ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/sinestrea.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sinestrea.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/lq/sinestrea?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/sinestrea.png`))
                    .on("close", callback)};
            }
            
            if (text1 == "tking") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner tking | [text1]   ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/tking.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tking.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/textpro/tking?text1=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/tking.png`))
                    .on("close", callback)};
            }
            if (text1 == "2022") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner 2022 | [text1]   ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/2022.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/2022.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/textpro/2022?text1=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/2022.png`))
                    .on("close", callback)};
            }
            if (text1 == "neongr") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner neongr | [text1]   ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/neongr.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/neongr.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/textpro/neongr?text1=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/neongr.png`))
                    .on("close", callback)};
            }
            if (text1 == "sadcat") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner sadcat | [text1]   ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/sadcat.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/sadcat.png`), event.messageID);
                };
                return request(encodeURI(`https://api.popcat.xyz/sadcat?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/sadcat.png`))
                    .on("close", callback)};
            }
            if (text1 == "ddlc") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner ddlc | [text1]   ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/ddlc.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/ddlc.png`), event.messageID);
                };
                return request(encodeURI(`https://api-ttk.herokuapp.com/other/ddlc?character=sayori&background=kitchen&text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/ddlc.png`))
                    .on("close", callback)};
            }
            if (text1 == "firefire") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner firefire | [text1]   ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/firefire.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/firefire.png`), event.messageID);
                };
                return request(encodeURI(`https://sertiojanganzapi.nasihosting.com/serti/serti2/img.php?nama=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/firefire.png`))
                    .on("close", callback)};
            }
             if (text1 == "nakrot") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner nakrot | [text1]   ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/nakrot.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nakrot.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/lq/nakrot?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/nakrot.png`))
                    .on("close", callback)};
            }
            if (text1 == "neon2") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner neon2 | [text1]   ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/neon2.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/neon2.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/textpro/neon2?text1=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/neon2.png`))
                    .on("close", callback)};
            }
            if (text1 == "3dchorm") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner 3dchorm | [text1]   ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/3dchorm.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/3dchorm.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/textpro/3dchorm?text1=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/3dchorm.png`))
                    .on("close", callback)};
            }
             if (text1 == "memo") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner memo | [text1]   ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/memo.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/memo.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/textpro/memo?text1=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/memo.png`))
                    .on("close", callback)};
            }
            if (text1 == "gfx") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner gfx | [text1]   ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/gfx.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/gfx.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/canvas/gfx?text1=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/gfx.png`))
                    .on("close", callback)};
            }
            if (text1 == "lava") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner lava | [text1]   ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/lava.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/lava.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/textpro/lava?text1=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/lava.png`))
                    .on("close", callback)};
            }
            if (text1 == "tiki") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner tiki | [text1]  ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/tiki.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/tiki.png`), event.messageID);
                };
                return request(encodeURI(`https://www.phamvandienofficial.xyz/tiki?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/tiki.png`))
                    .on("close", callback)};
            }
            if (text1 == "nutbac") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner nutbac | [text1]  ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/nutbac.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nutbac.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/bacyt?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/nutbac.png`))
                    .on("close", callback)};
            }
            if (text1 == "giangsinh") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner giangsinh | [text1]  ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/giangsinh.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/giangsinh.png`), event.messageID);
                };
                return request(encodeURI(`https://www.phamvandienofficial.xyz/giangsinh?text=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/giangsinh.png`))
                    .on("close", callback)};
            }
                if (text1 == "neon") {
            if (!text2 ) {
                return api.sendMessage("Error\n\nExample: =>banner neon | [text1]  ", event.threadID);
            } else {
                let callback = function() {
                    api.sendMessage({
                        attachment: fs.createReadStream(__dirname + `/cache/crossfire1.png`)
                    }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/crossfire1.png`), event.messageID);
                };
                return request(encodeURI(`https://apitaoa-1.chinhle4447.repl.co/textpro/devid?text1=${text2}`))
                    .pipe(fs.createWriteStream(__dirname + `/cache/crossfire1.png`))
                    .on("close", callback)};
            }
   }
              
catch (err) {
        console.log(err)
        return  message.reply("Đã xảy ra lỗi", event.threadID);
    }
}
