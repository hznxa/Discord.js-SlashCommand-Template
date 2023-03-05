function support(client) {
  client.on("interactionCreate", async (Interaction) => {
    if (!Interaction.isCommand()) {
      return;
    }
    if (Interaction.commandName === "support") {
      Interaction.reply("コマンドが実行されました");
    }
  });
}

module.exports = support;
