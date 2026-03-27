const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const html = fs.readFileSync(
  path.join(__dirname, "..", "index.html"),
  "utf8",
);

test("主页标题和核心宣言存在", () => {
  assert.match(html, /<title>吴方恩 \| Hana<\/title>/);
  assert.match(html, /<h1[^>]*>吴方恩<\/h1>/);
  assert.match(html, /在技术与表达之间，长期创作。/);
});

test("主页包含四个核心区块", () => {
  assert.match(html, /<section[^>]*id="hero"/);
  assert.match(html, /<section[^>]*id="works"/);
  assert.match(html, /<section[^>]*id="writing"/);
  assert.match(html, /<section[^>]*id="about"/);
});

test("作品区包含四条创作主线", () => {
  assert.match(html, /DailyWallpaperHub/);
  assert.match(html, /Manim/);
  assert.match(html, /AI/);
  assert.match(html, /Agent\s*\/\s*Skills/);
});

test("旧的爱情页文案和结构被移除", () => {
  assert.doesNotMatch(html, /Our Love Story/);
  assert.doesNotMatch(html, /Love u forever and ever/);
  assert.doesNotMatch(html, /id="loveHeart"/);
});
