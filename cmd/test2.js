function say(client) {
  client.on("interactionCreate", async (Interaction) => {
    if (!Interaction.isCommand()) {
Interaction.memberPermissions.has('MENTION_EVERYONE')
      return;
    }
      if (Interaction.commandName === "test2") {
      const option = Interaction.options.getString("option");
        Interaction.reply(`${option}`);
      }
    }
  );
}

module.exports = say
