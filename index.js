//å®ç¾©
const { Client, Events, GatewayIntentBits } = require("discord.js");

//ð·æ¨©é
const client = new Client();

//ð§è¨­å®
const token = process.env.token;
const prefix = process.env.prefix;
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

//ðcmdãã¡ã¤ã«ãèª­ã¿è¾¼ã
const test = require("./cmd/test.js");
test(client);
const test2 = require("./cmd/test2.js");
test2(client);

//ðèµ·å
client.once(Events.ClientReady, (c) => {
//ã¹ã©ãã·ã¥ã³ãã³ããç»é²
  const data = [
//éå¸¸ã³ãã³ã
    {
      name: "test",
      description: "ã³ãã³ãã®èª¬æ",
    },
//ãªãã·ã§ã³ä»ãã³ãã³ã
    {
      name: "test2",
      description: "ã³ãã³ãã®èª¬æ",
      options: [{
      name: "option",
          description: "ãªãã·ã§ã³ã®èª¬æ",
          type: 3,
//SUB_COMMAND 1, SUB_COMMAND_GROUP 2, STRING 3, INTEGER 4, BOOLEAN 5, USER 6, CHANNEL 7, ROLE 8, MENTIONABLE 9, NUMBER 10, ATTACHMENT 11
          required: true,//false
        }],
    },
  ];
  client.application.commands.set(data, "ãµã¼ãã¼ID");
  console.log(`${c.user.tag}ãèµ·åãã¾ãã`);
});

//ð¢ã­ã°ã¤ã³
client.login(token);
