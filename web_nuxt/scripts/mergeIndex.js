import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { JSDOM } from "jsdom";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distIndexPath = path.resolve(__dirname, "../.output/public/index.html");
let distIndexContent = "";
if (fs.existsSync(distIndexPath)) {
	distIndexContent = fs.readFileSync(distIndexPath, "utf-8");
}

// ../web/index.html の内容を読み込む
const webIndexPath = path.resolve(__dirname, "../../web/index.html");
const webIndexContent = fs.readFileSync(webIndexPath, "utf-8");

// JSDOM を使って DOM を解析
const distDom = new JSDOM(distIndexContent);
const webDom = new JSDOM(webIndexContent);

// マーカーの定義
const headMarkerStart = "<!-- ComfyUI <head /> Start -->";
const headMarkerEnd = "<!-- ComfyUI <head /> End -->";
const bodyMarkerStart = "<!-- ComfyUI <body /> Start -->";
const bodyMarkerEnd = "<!-- ComfyUI <body /> End -->";

// web の <head> の内容を取得
let webHeadContent = webDom.window.document.head.innerHTML;
let webBodyContent = webDom.window.document.body.innerHTML;

// マーカーがある場合は、その部分を抽出
if (
	webHeadContent.includes(headMarkerStart) &&
	webHeadContent.includes(headMarkerEnd)
) {
	webHeadContent = webHeadContent
		.split(headMarkerStart)[1]
		.split(headMarkerEnd)[0];
}

if (
	webBodyContent.includes(bodyMarkerStart) &&
	webBodyContent.includes(bodyMarkerEnd)
) {
	webBodyContent = webBodyContent
		.split(bodyMarkerStart)[1]
		.split(bodyMarkerEnd)[0];
}

// dist の <head> に web の <head> の内容を追加
distDom.window.document.head.innerHTML =
	`
${headMarkerStart}${webHeadContent}${headMarkerEnd}
` + distDom.window.document.head.innerHTML;

// dist の <body> の先頭に web の <body> の内容を追加
distDom.window.document.body.innerHTML =
	`
${bodyMarkerStart}${webBodyContent}${bodyMarkerEnd}
` + distDom.window.document.body.innerHTML;

// 結果を保存
const mergedContent = distDom.serialize();
fs.writeFileSync(distIndexPath, mergedContent, "utf-8");
