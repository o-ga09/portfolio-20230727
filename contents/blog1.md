---
title: "【備忘録】Flutterのsqfliteを使ったアプリのテストで詰まった時"
emoji: "🥹"
type: "tech" # tech: 技術記事 / idea: アイデア
topics: [dart,flutter,errorhandling,sqflite,エラー解決法]
published: true
date: "2023/08/13"
image: "Gophersvg.svg"
---

## 対象読者

- sqfliteを使ったアプリのテストをしようとして詰まった人
- 未来の自分

## 環境

~~~bash

Dart SDK version: 3.0.3 (stable) (Wed May 31 15:35:05 2023 +0000) on "macos_arm64"
Flutter 3.10.4 • channel stable • https://github.com/flutter/flutter.git
Framework • revision 682aa387cf (6 weeks ago) • 2023-06-05 18:04:56 -0500
Engine • revision 2a3401c9bb
Tools • Dart 3.0.3 • DevTools 2.23.1

~~~

## 事象

- DBのCRUD関連のテストをしたかった。
- 修正前のコーはこんな感じ
  
~~~dart

test("DBからタスクの一覧を取得する", () async {
    final driver = TodoDriverImpl();
    // ここでDBへの接続開いたり、データの参照をしたりしている
    final actual = await driver.getAll();
    List<DriverTask> expected = [];
    
    expect(actual, expected);
});

~~~

- 以下のエラーが出て詰まった
  - ” DBが初期化されていないよ ” って言われているがそんなことわかっとるわい
  - " databaseFactory = databaseFactoryFfi; " をDB接続をする処理の前に入れてもだめ
  - もうはぁ〜〜〜〜って感じで数時間悩みました。

~~~bash

Error: Bad state: databaseFactory not initialized
databaseFactory is only initialized when using sqflite. When using `sqflite_common_ffi`
You must call `databaseFactory = databaseFactoryFfi;` before using global openDatabase API

~~~

## 解決法

- 以下の３行を入れないといけない。
  - エラーメッセージの１行の他に２つ初期化処理を入れないといけなかったという感じでした。

~~~dart

TestWidgetsFlutterBinding.ensureInitialized();
sqfliteFfiInit();
databaseFactory = databaseFactoryFfi;

~~~

## まとめ

- 解決するとこんなことだったのかと思って、忘れるのでアウトプットは大事
- Flutterにまた一つ強くなった
- 次は、StateとNotifier周りに強くなりたい