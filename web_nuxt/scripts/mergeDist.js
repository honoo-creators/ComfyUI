import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, "../dist");
const webDir = path.resolve(__dirname, "../../web");

// ディレクトリを再帰的にコピーする関数
function copyDirectory(src, dest) {
	// コピー先のディレクトリが存在しない場合は作成
	if (!fs.existsSync(dest)) {
		fs.mkdirSync(dest, { recursive: true });
	}

	// コピー元のディレクトリ内のファイルとディレクトリを取得
	const entries = fs.readdirSync(src, { withFileTypes: true });

	for (const entry of entries) {
		const srcPath = path.join(src, entry.name);
		const destPath = path.join(dest, entry.name);

		if (entry.isDirectory()) {
			// ディレクトリの場合は再帰的にコピー
			if (fs.existsSync(destPath)) {
				fs.rmSync(destPath, { recursive: true, force: true });
			}
			copyDirectory(srcPath, destPath);
		} else {
			// ファイルの場合はコピー
			if (fs.existsSync(destPath)) {
				fs.unlinkSync(destPath);
			}
			fs.copyFileSync(srcPath, destPath);
		}
	}
}

// dist ディレクトリを web ディレクトリにコピー
copyDirectory(distDir, webDir);

console.log("dist ディレクトリの内容を web ディレクトリにコピーしました。");
