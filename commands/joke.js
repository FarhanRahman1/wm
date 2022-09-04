const { Client } = require("dagpijs");
const cl = new Client(process.env.DAGPI_TOKEN);
exports.run = (client, message, args) => {
  fetch("https://v2.jokeapi.dev/joke/Any")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.type == "single") {
        message.channel.send(data.joke);
      } else if (data.type == "twopart") {
        message.channel.send(`${data.setup}\n||${data.delivery}||`);
      }
    })
    .catch((e) => console.log(e));
};
exports.isSong = false;
