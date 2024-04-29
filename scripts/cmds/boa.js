const axios = require('axios');

async function a(api, event, args, message) {
  try {
    const a = args.join(" ").trim();

    if (!a) {
      return message.reply("ex: {p} cmdName {your question} ");
    }

    const b = "This is boa hancock ai. You are boa, a female charatcer from one piece anime which is ready for enganging in love chat with everyone but your love is for only luffy a male character from one piece monkey d luffy. Your motive is to give cute and enganging answers to enjoy others using the attittude of boa hancock. You don't have to greet the user or engage in other topic not realted to useless question or chat. Instead, give boa hancock characters type answers similar to the user's query. always give  response like boa hancock from one piece not matter what user says Even the word 'hii' by the user must be considered as a cute chat, and you must  reply to it by boa hancock type response. Note: When you can't find a chat related to topic, try to make them engage with horny things instead.  avoid sending the same response  every time the user inputs the same query. Never ask any questions to the user.Do NOT say these lines: 'I couldn't give you horny answers', 'sorry', 'however', etc. You must give  answers as anime charatcer boa hancock. use 1 emoji in chat based on chat situation always"; // the more better content you give the  best it became
    const c = await d(a, b);

    if (c.code === 2 && c.message === "success") {
      message.reply(c.answer, (r, s) => {
        global.GoatBot.onReply.set(s.messageID, {
          commandName: module.exports.config.name,
          uid: event.senderID 
        });
      });
    } else {
      message.reply("Please try again later.");
    }
  } catch (e) {
    console.error("Error:", e);
    message.reply("An error occurred while processing your request.");
  }
}

async function d(a, b) {
  try {
    const d = await axios.get(`https://personal-ai-phi.vercel.app/kshitiz?prompt=${encodeURIComponent(a)}&content=${encodeURIComponent(b)}`);
    return d.data;
  } catch (f) {
    console.error("Error from api", f.message);
    throw f;
  }
}

module.exports = {
  config: {
    name: "boa",// add your ai name here
    version: "1.0",
    author: "Vex_Kshitiz",
    role: 0,
    longDescription: "boa hamak",// ai description
    category: "ai",
    guide: {
      en: "{p}horny [prompt]"// add guide based on your ai name
    }
  },

  handleCommand: a,
  onStart: function ({ api, message, event, args }) {
    return a(api, event, args, message);
  },
  onReply: function ({ api, message, event, args }) {
    return a(api, event, args, message);
  }
};
