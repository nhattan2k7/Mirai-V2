/**
 * @author MạnhG
 * @warn Do not edit code or edit credits
 */
module.exports.config = {
    name: "song",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "MạnhG",
    description: "Phát nhạc thông qua link YouTube hoặc từ khoá tìm kiếm",
    commandCategory: "tiện ích",
    usages: "[search]",
    cooldowns: 10,
    envConfig: {
        "API_KEY": "mzk_7DHDGE2AHTNTVRBVUEZ"
    }
};
var rdPath = Math.floor(Math.random() * 99999999999999);
var timeSearch = 7; // Tìm kiếm theo thời gian, ví dụ: 4, 5, 6,...,<= 9

module.exports.run=async function({event:e,api:t,args:a,body:s}){const n=require("axios"),{createReadStream:r,statSync:i,writeFileSync:o,createWriteStream:d,unlinkSync:u}=require("fs-extra"),{threadID:c,senderID:l,messageID:g}=e,{API_KEY:h}=global.configModule[this.config.name];try{if(0==a.length||!a)return t.sendMessage("[YTB_mp3] Nhập ký tự cần tìm kiếm!",c,g);if(0==a.join(" ").indexOf("https://")){const e=a.join(" ").trim();try{let{data:a}=await n.get(`https://manhict.tech/video?link=http://youtu.be/${e}&apikey=${h}`);if(a.error)return t.sendMessage(a.error,c);if(t.sendMessage("Đang tải, vui lòng đợi",c,((e,a)=>setTimeout((()=>{t.unsendMessage(a.messageID)}),3e4))),"ok"!=a.status)return t.sendMessage("Can't download this video!",c,g);let s=a.title,d=a.link.medium;var m=__dirname+`/cache/${rdPath}.mp4`;const l=(await n.get(d.trim(),{responseType:"arraybuffer"})).data;if(o(m,Buffer.from(l,"utf-8")),i(m).size>1164e6)return t.sendMessage("File cannot be sent because it is larger than 500MB.",c,(()=>u(m)),g);return await t.sendMessage({body:s,attachment:r(m)},c,(()=>u(m)),g)}catch(e){return console.log(e),t.sendMessage("Có lỗi xảy ra:"+e,c,g)}}else try{var y,f,p=[],M="",b=0;const r=encodeURIComponent(a.join(" "));var{data:v}=await n.get(`https://manhict.tech/youtube?q=${r}&apikey=${h}`);if(v.error)return t.sendMessage(v.error,c);y=v.results;for(let e in y)if(null!=y[e].video&&(f=y[e].video).duration.length<=timeSearch&&"Live"!=f.duration){b=b+=1,p.push(f.id),M+=`${b}.《${f.duration}》 ${f.title}\n\n`}s=`»🔎 There are ${p.length} results matching your search keyword:\n\n${M}» Please reply (feedback) choose one of the above searches.`;return void t.sendMessage({body:s},c,((t,a)=>{client.handleReply.push({name:this.config.name,messageID:a.messageID,author:e.senderID,idYT:p})}),g)}catch(e){return t.sendMessage("The request could not be processed due to an error: "+e.message,c,g)}}catch(e){return void console.log(e)}},module.exports.handleReply=async function({event:e,api:t,handleReply:a}){const s=require("axios"),{createReadStream:n,statSync:r,writeFileSync:i,readdirSync:o,unlinkSync:d}=require("fs-extra"),{threadID:u,senderID:c,messageID:l,body:g}=e,{API_KEY:h}=global.configModule[this.config.name];if(m=g,isNaN(m)||(m<1||m>20))return t.sendMessage("Choose from 1 -> 20, baby. love uwu ❤️",u,l);var m;t.unsendMessage(a.messageID),t.sendMessage("Đang tải, vui lòng đợi...",u,((e,a)=>setTimeout((()=>{t.unsendMessage(a.messageID)}),3e4)));try{let{data:o}=await s.get(`https://manhict.tech/singv2/id?id=${a.idYT[e.body-1]}&apikey=${h}`);if(o.error)return t.sendMessage(o.error,u);let c=o.title,g=o.link;var y=__dirname+`/cache/${rdPath}.m4a`;const m=(await s.get(g,{responseType:"arraybuffer"})).data;if(i(y,Buffer.from(m,"utf-8")),r(y).size>1164e6)return t.sendMessage("File cannot be sent because it is larger than 500MB.",u,(()=>d(y)),l);return await t.sendMessage({body:c,attachment:n(y)},u,(()=>d(y)),l)}catch(e){return console.log(e),t.sendMessage("Có lỗi xảy ra:"+e,u,l)}};