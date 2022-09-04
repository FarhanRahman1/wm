const yourmama = require("yourmama");
exports.run = (client, message, args) => {
  target = message.mentions.users.first();
  if (!target) return message.reply("Mention someone");
  const randomJoke = yourmama
    .getRandom()
    .then((roast) => message.channel.send(`${target} ${roast}`))
    .catch((e) => console.log(e));
};
exports.isSong = false;
