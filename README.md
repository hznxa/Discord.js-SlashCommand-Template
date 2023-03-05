# Discord.js-SlashCommand-Template
Discord.jsでスラッシュコマンドを登録する為のテンプレートです

## 注意点

* サーバーIDを指定して下さい

client.application.command.set(data)に"サーバーID"という項目があります。

こちらの設定を忘れた場合、スラッシュコマンドの情報が１時間に一度しか更新されず、開発の効率が悪くなってしまいます。
