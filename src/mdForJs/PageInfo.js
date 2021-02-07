import ReactMarkdown from "react-markdown";
function App() {
	return <ReactMarkdown>{txmd}</ReactMarkdown>;
}
export default App;
const txmd = `
# ページ紹介  
  
## 作成の目的  
  
+ 転職時の自己紹介用  
+ Reactの勉強用  
+ 自分の作成物の紹介のため  
  
## どんな感じで作ったか  
  
もともと、適当にサイトのテンプレートをとってきて使用するつもりだった。  
[NEOS](https://demos.freehtml5.co/neos/)  
ただ、SPAポイ感じにはなっていたが  
  
+ ヘッダーがページごとにコピペだったり  
+ 少しくらい自分でカスタマイズしたい  
+ React使ってみたい  
+ そもそも記事はmarkdownでかきたい  
  
という理由で、色々と改造をはじめた。  
そのせいでポートフォリオの作成が遅れそうだ。  
  
[このサイトのソース]()  
  
## 結局どんな実装をしたか  
  
+ Reactを使用したheaderのコンポーネント化  
+ markdownパッケージを使用したマークダウンの導入  
  + マークダウンファイルからの自動取り込み。  
  
主に実装した機能は以上の2つになる。マークダウンの導入については  
すこし工夫をした。  
そのままだと文字列としてマークダウンを読み込む必要があり、  
多くの記事をまとめるにはやりづらい部分があったので、  
  
1. 記事自体はmdファイルで作成できるようにした。  
2. そのために以下の記述を自動生成するように変更した。  
   + 対応するjsファイルの生成  
   + importと配列の自動生成  
  
これによって、独立したマークダウンを作成した後pythonでjsを自動生成すればサイトに反映されるようにした。  
ただ、まだ画像の貼り付けなどには対応していなかったため、やばい。  

`;