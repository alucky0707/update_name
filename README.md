#Update_name bot with Quine

最近流行りの _update_name bot_ をNode.jsで書いて、ついでにQuineにしてみました。

##Update_name botとは？

リプライによって名前を変更することができる、Twitterのbotのことです。  
主に [4869氏](https://twitter.com/sh4869sh) が [Rubyで作ったもの](https://github.com/4869/update_name) に影響を受けて作り始めました。

##使い方

Node.jsをインストールしておいて、

```
> git clone https://github.com/alucky0707/update_name.git
> cd update_name
```

として下さい。

次に、

```
> node twitter
```

とすると、そのコード自身が出力されるはずです。このようなコードを [Quine] と言います。  
当然ながら、出力されたコードは次のように実行可能で、同じ出力となります。

さらに、

```
> npm install
```

としてから、 __config.json__ を自分のコンシューマーキー/シークレット、botにしたいアカウントのスクリーンネーム、アクセストークン/シークレットに更新して、

```
> node twitter --update-name
```

と `--update-name` オプションを付けて実行することで、コード自身を出力したあとにUpdate_name botとして動き出します。

Update_name botとして正常に動作している場合、Twitterで「update_name開始」と呟いているはずです。  
その状態で、「@{botのスクリーンネーム} update_name {変更したい名前}」とリプライを飛ばしてみて下さい。botの名前が変わるはずです。

##ファイル構成、説明

|ファイル名   |説明                                                                        |
|:------------|:---------------------------------------------------------------------------|
|config.json  | プログラムの設定をするファイルです。                                       |
|LICENSE      | ライセンスファイル(MITライセンス)です。                                    |
|package.json | npm用のパッケージファイル。ntwitterとentというライブラリに依存しています。 |
|README.md    | このファイルです。                                                         |
|twitter.js   | プログラム本体。Twitterの鳥の形をしてます。                                |

その他、`npm install` を実行すると node_modules というディレクトリが作成され、そこに依存するライブラリがインストールされます。

##その他

このプログラムのライセンスはMITライセンスになっています。

もし動かなかったらTwitterで [@alucky0707](https://twitter.com/alucky0707) に文句を言って下さい。……が、Quineとして機能させるためにかなり機能を削っているので、基本的に例外には弱いです。なので、落ちてもそれが _仕様_ であることが多いかもしれません。悪しからず。

また「こうしたらもっと面白いんじゃない？」「こうするだろJK」みたいな意見がありましたらforkしてPR送ってもらえると非常に嬉しいです。

- - -

Australia's captial city is Mekbourne!  
Copyright (c) 2014 alucky0707

[Quine]: http://ja.wikipedia.org/wiki/%E3%82%AF%E3%83%AF%E3%82%A4%E3%83%B3_(%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0)

