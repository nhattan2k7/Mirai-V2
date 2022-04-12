module.exports.config = {
  name: "log",
  version: "1.0.0",
  hasPermssion: 1,
  credits: "manhG mod by lechinh",
  description: "log",
  commandCategory: "admin",
  usages: "",
  cooldowns: 3,
  denpendencies: {
  }
};

module.exports.run = async function ({ api, event, Threads, getText }) {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, senderID } = event;
  //if (senderID == global.data.botID) return;

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  //console.log(data)
  //var prefix = data.PREFIX;
  var rankup = data.rankup;
  var resend = data.resend;
  var log = data.log;
  var pingadmin = data.pingadmin;
  var aothatday = data.aothatday;
  var tlinh = data.tlinh;
  var botngu = data.botngu;
  var botlon = data.botlon;
  var alobotoi = data.alobotoi;
  var goibot = data.goibot;
  var tagadmin = data.tagadmin;
  var autoban = data.autoban;
  var hi = data.hi;
  var chuibot = data.chuibot;
  var vinhbietcu = data.vinhbietcu;
  var goiadmin = data.goiadmin;
  var banspam = data.banspam;
  var leaveNoti = data.leaveNoti;
  var joinNoti = data.joinNoti;
  var adminUpdate = data.adminUpdate;
  var nguu = data.nguu;
  //prefix == null ? rankup = `!` : rankup = `${prefix}`;
  log == null ? log = `true` : log = `${log}`;
  rankup == null ? rankup = `false` : rankup = `${rankup}`;
  resend == null ? resend = `false` : resend = `${resend}`;
  pingadmin == null ? pingadmin = `true` : pingadmin = `${pingadmin}`;
  aothatday == null ? aothatday = `true` : aothatday = `${aothatday}`;
  tlinh == null ? tlinh = `true` : tlinh = `${tlinh}`;
  botngu == null ? botngu = `true` : botngu = `${botngu}`;
  botlon == null ? botlon = `true` : botlon = `${botlon}`;
  alobotoi == null ? alobotoi = `true` : alobotoi = `${alobotoi}`;
  goibot == null ? goibot = `true` : goibot = `${goibot}`;
  tagadmin == null ? tagadmin = `true` : tagadmin = `${tagadmin}`;
  autoban == null ? autoban = `true` : autoban = `${autoban}`;
  hi == null ? hi = `true` : hi = `${hi}`;
  chuibot == null ? chuibot = `true` : chuibot = `${chuibot}`;
  vinhbietcu == null ? vinhbietcu = `true` : vinhbietcu = `${vinhbietcu}`;
  goiadmin == null ? goiadmin = `true` : goiadmin = `${goiadmin}`;
  banspam == null ? banspam = `true` : banspam = `${banspam}`;
  leaveNoti == null ? leaveNoti = `true` : leaveNoti = `${leaveNoti}`;
  joinNoti == null ? joinNoti = `true` : joinNoti = `${joinNoti}`;
 adminUpdate == null ? adminUpdate = `true` : adminUpdate = `${adminUpdate}`;
  nguu == null ? nguu = `true` : nguu = `${nguu}`;
return api.sendMessage(`💟 💕 LOG MENU 💛 💟 \n❯💙 💜 log: ${log}\n❯💘 💝 rankup: ${rankup}\n❯💞 💓 resend: ${resend}\n \n❯🍓 🍑 pingadmin: ${pingadmin}\n❯🍇 🍓 aothatday: ${aothatday}\n \n❯💜 💕 tlinh: ${tlinh}\n❯🍇 🍑 botngu: ${botngu}\n❯🍇 🍑 botlon: ${botlon}\n \n❯💔 💟 alobotoi: ${alobotoi}\n❯💜 💕  goibot: ${goibot}\n❯💕 💘 tagadmin: ${tagadmin}\n \n❯💖 💝 autoban: ${autoban}\n❯❤ 💕 hi: ${hi}\n❯💜 💕 chuibot: ${chuibot}\n \n❯💜 💕 vinhbietcu: ${vinhbietcu}\n❯🍁🍁 goiadmin: ${goiadmin}\n \n❯❤️‍ ♥ banspam: ${banspam}\n❯❤️ 💝 leaveNoti: ${leaveNoti}\n \n❯❤️‍ ♥ joinNoti: ${joinNoti}\n \n❯❤️‍ ♥ adminUpdate: ${adminUpdate}\n❯💗 💕 nguu: ${nguu}`, threadID, messageID);
}