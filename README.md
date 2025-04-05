# Bookmark List App

Bookmark List App は、ブラウザの 1 つのタブにブックマークリストを表示し、よく使う Web サービスやサイトに素早くアクセスできる環境を提供します。
シンプルな操作で効率よくブックマークを管理できます。

## 特長

### 瞬時にアクセス & 作業効率アップ

ブックマークリストをブラウザの 1 つのタブに常に表示しておく事で、よく使うサイトをワンクリックで開けます。フォルダを辿る必要がなく、PC 作業中でもスムーズにアクセスできます。

### 直感的で使いやすい UI

~~各サイトの favicon を表示し、~~視覚的に識別しやすいデザインを採用。ブックマークの追加や削除も簡単で、直感的に操作できます。

### データの自動保存

LocalStorage を利用し、ブラウザを閉じても前回のブックマークリストが保持されます。再起動後もそのまま利用でき、毎回設定し直す必要がありません。

### URL のエクスポート & インポート

ブックマークリストをテキストファイルとしてエクスポート・インポート可能。異なる環境でも同じリストを簡単に復元できます。

## 使い方

### 初期表示

![初期表示](https://github.com/user-attachments/assets/a92c86e9-438f-4ddc-92b9-5a67abf137e9)
① URL の入力欄＆登録ボタン、エクスポート・インポートボタンを表示・非表示します。

### URL の登録

![URLの登録](https://github.com/user-attachments/assets/fbb9cb90-7e79-4e9e-a734-2c53da369514)
② URL のリストを貼り付けます（URL 毎に改行してください）。<br>
③ ブックマークとして登録します。

### ブックマークリスト表示

![ブックマークリスト表示](https://github.com/user-attachments/assets/43edc982-35eb-48fc-baae-7292a599b169)
④ 登録されたブックマークがボタンとして表示されます。クリックすると別タブで対象のページが開きます。<br>
⑤ ボタンにホバーすると、右上にブックマークの削除ボタンが表示されます。<br>
⑥ ブックマークリストの順番を昇順（アルファベット順）や逆順で並び替えます。<br>
⑦ ブックマークリストをテキストファイル（bookmarks.txt）としてエクスポートします<br>
⑧ URL 一覧が記載されたテキストファイルをインポートすると、その内容でブックマークリストが置き換わります。

#### お試し用 URL サンプル

```
https://www.yahoo.co.jp/
https://www.google.co.jp/
https://www.youtube.com/
```
