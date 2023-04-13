# clasp-template

## 概要

自分用 GAS 開発テンプレート

- clasp（GAS 開発のための CLI ツール）
- TypeScript（プログラミング言語）
- webpack（モジュールバンドラー）
- VSCode での prettier 設定

## clasp 初期セッティング

```shell
# claspをグローバル環境にインストール
npm install -g @google/clasp

# ログイン
clasp login
```

## ローカルとスクリプトファイルの紐づけ

### ドライブで自分でスクリプトファイルを作成する方法

1. Google ドライブで新規の GAS スクリプトファイルを作成
2. `.clasp.json.sample`を`.clasp.json`に rename
3. 作成したファイルのスクリプト ID を`.clasp.json`の`scriptId`に貼り付け

### コマンドからスクリプトファイルを作成する方法

1. `.clasp.json`を一旦削除する
2. `clasp create`を実行する（`Create which script?`は`standalone`を選択）
3. 作成された`.clasp.json`の`rootDir`を`./dist`にする
4. ルートの`appsscript.json`を削除（`./dist`にある`appsscript.json`はそのまま）
