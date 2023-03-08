//定義
const { Client, Events, GatewayIntentBits } = require("discord.js");

//🔷権限
const client = new Client();

//🔧設定
const token = process.env.token;
const prefix = process.env.prefix;
const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

//📁cmdファイルを読み込む
const help = require("./cmd/help.js");
help(client);
const embed = require("./cmd/embed.js");
embed(client);

//🔋起動
client.once(Events.ClientReady, (c) => {
//スラッシュコマンドを登録
  const data = [
//通常コマンド
    {
      name: "コマンド名",
      description: "説明",
    },
//オプション付きコマンド
    {
      name: "コマンド名",
      description: "説明",
      options: [{
      name: "オプション名",
          description: "オプションの説明",
          type: 3,
//SUB_COMMAND 1, SUB_COMMAND_GROUP 2, STRING 3, INTEGER 4, BOOLEAN 5, USER 6, CHANNEL 7, ROLE 8, MENTIONABLE 9, NUMBER 10, ATTACHMENT 11
          required: true,//false
        }],
    },
  ];
  client.application.commands.set(data, "サーバーID");
  console.log(`${c.user.tag}が起動しました`);
});

//🟢ログイン
client.login(token);
