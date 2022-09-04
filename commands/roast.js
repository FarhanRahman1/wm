exports.run = (client, message, args) => {
  target = message.mentions.users.first();
  if (!target) {
    message.reply("Mention someone to roast");
    return;
  }
  fetch("https://insult.mattbas.org/api/insult")
    .then((res) => {
      return res.text();
    })
    .then((data) => {
      message.channel.send(`${target} ${data}`);
    })
    .catch((e) => console.log(e));
};
exports.isSong = false;
