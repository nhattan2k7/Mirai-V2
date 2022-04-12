/**
 * @author
 * @warn Do not edit code or edit credits
 * @apikey Reg key tại: https://meewmeew.info/site
 */
module.exports.config = {
    name: "ninov2",
    version: "4.3.6",
    hasPermssion: 0,
    credits: "ProcodeMew",
    description: "Nino nino nino",
    commandCategory: "tiện ích",
    usages: "[args]",
    cooldowns: 5,
    dependencies: {
        axios: ""
    }
}


async function nino(a, b, c) {
    const d = global.nodemodule.axios, g = (a) => encodeURIComponent(a);
    try {
        var { data: j } = await d({ url: `https://www.api-adreno.tk/nino/get/${g(a)}`, method: "GET" });
        return { error: !1, data: j }
    } catch (p) {
        return { error: !0, data: {} }
    }
}
module.exports.onLoad = async function () {
    "undefined" == typeof global && (global = {}), "undefined" == typeof global.nino && (global.nino = new Map);
};
module.exports.handleEvent = async function ({ api: b, event: a }) {
    const { threadID: c, messageID: d, senderID: e, body: f } = a, g = (e) => b.sendMessage(e, c, d);
    if (global.nino.has(c)) {
        if (e == b.getCurrentUserID() || "" == f || d == global.nino.get(c)) return;
        var { data: h, error: i } = await nino(f, b, a);
        return !0 == i ? void 0 : !1 == h.reply ? g(h.error) : g(h.reply)
    }
}
module.exports.run = async function ({ api: b, event: a, args: c }) {
    const { threadID: d, messageID: e } = a, f = (c) => b.sendMessage(c, d, e);
    if (0 == c.length) return f("Vui lòng nhập tin nhắn để nino trả lời");
    switch (c[0]) {
        case "on":
            return global.nino.has(d) ? f("Bạn chưa tắt nino") : (global.nino.set(d, e), f("Bật nino thành công"));
        case "off":
            return global.nino.has(d) ? (global.nino.delete(d), f("Tắt nino thành công")) : f("Bạn chưa bật nino");
        default:
            var { data: g, error: h } = await nino(c.join(" "), b, a);
            return !0 == h ? void 0 : !1 == g.reply ? f(g.error) : f(g.reply);
    }
};