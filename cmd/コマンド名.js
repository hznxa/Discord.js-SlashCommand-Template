function test(client) {
  client.on("interactionCreate", async (Interaction) => {
    if (!Interaction.isCommand()) {
      return;
    }
    if (Interaction.commandName === "test") {
      Interaction.reply("コマンドが実行されました");
    }
  });
}

module.exports = test;
