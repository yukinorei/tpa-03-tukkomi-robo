# ツッコミロボ

実行するには：

```
npm i
npm start
# visit localhost:3000
```

[ツッコミロボ動画](https://www.youtube.com/watch?v=XTnjc0cWiko&feature=youtu.be)

# 本日のキーワード：

* [HTTP](http://www.atmarkit.co.jp/ait/articles/1703/29/news045.html)
* [REQUEST RESPONSE](https://itsakura.com/network-http-get-post)
* [GET REQUEST](https://wa3.i-3-i.info/word11405.html)

# タスク：APIルーターを実装しよう (server/router.js)

クライアントが `/tukkomi?phrase=${phrase}` へ HTTP GET Request を送りますので、ちゃんとフレーズにつっこんでレスポンスを送ってあげましょう。

（クライアントはいじらなくていいので、<code>public/</code> フォルダーの中ではなく<code>server/</code>をみてみよう。）

役に立つリンク：

* [Express req.query](http://expressjs.com/ja/api.html#req.query)
* [Express res.send](http://expressjs.com/ja/api.html#res.send)
