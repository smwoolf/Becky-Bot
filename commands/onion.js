const { prankRoleId } = require("../config.json");
module.exports = {
  name: "🧅",
  description: "Teehee",
  usage: "",
  cooldown: 5,
  args: true,
  serverOnly: true,
  adminOnly: false,
  roleLocked: true,
  aliases: ["onion"],

  execute(message, args) {
    const user = message.mentions.users.first()
      ? message.mentions.users.first()
      : message.author;
    const role = message.guild.roles.resolve(prankRoleId);
    if (message.member.roles.cache.has(prankRoleId)) {
      message.guild.member(user).roles.remove(role);
      message.channel.send("🚫🧅");
    } else {
      message.guild.member(user).roles.add(role);
      message.channel.send("✔️🧅");
    }
  },
};
