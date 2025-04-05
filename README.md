# Research Metrics Workshop (rmws)

本リポジトリは、統計数理研究所によって主宰されてきた「リサーチメトリクス・ワークショップ（Research Metrics Workshop）」のウェブサイトリニューアル用プロジェクトです。

React + TypeScript + Tailwind CSS を用いて、過去の開催情報や今後のイベント情報を動的に管理・公開することを目的としています。

## 🔧 技術構成
- **フロントエンド**: React (Vite + TypeScript)
- **スタイリング**: Tailwind CSS
- **データ管理**: `public/events.json` にてイベント情報を静的に管理
- **ビルドツール**: Vite
- **バージョン管理**: Volta により Node/NPM バージョンを固定

## 📁 ディレクトリ構成（一部）
```
rmws/
├─ public/
│  └─ events.json         # イベント情報（日付・プログラム構成など）
├─ src/
│  ├─ pages/              # イベントページなど
│  ├─ components/         # UIコンポーネント（予定）
│  └─ App.tsx             # エントリーポイント
├─ index.html
└─ ...
```

## 📦 セットアップ方法
```bash
# 環境に Volta が導入されていることを前提とします
volta install node@20.11.0
volta install npm@10.2.3

npm install
npm run dev
```

## 🌐 公開先（予定）
- GitHub Pages または Netlify による公開を検討中

## 🧩 今後の予定
- 過去のイベントプログラムの階層的表示（日程・セッション・トーク）
- 検索・フィルタ機能の追加
- 成果物や関連資料のリンク掲載

## 📜 ライセンス
このプロジェクトは MIT ライセンスのもとで公開されています。詳細は `LICENSE` をご覧ください。

---

> 本プロジェクトは、AIエージェント支援を受けながら自然言語による開発指示をもとに構築されています。
> 主な技術補助として ChatGPT を活用し、設計・実装・保守までを効率化しています。
