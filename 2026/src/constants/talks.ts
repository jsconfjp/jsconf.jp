import type { StaticImageData } from "next/image";
import speakerProfiles from "./speakerProfiles.json";
// @ts-expect-error see 2026/scripts/fetch-og-images.ts
import { type Sponsor } from "./sponsors.ts";
import talkDescriptions from "./talkDescriptions.json";
import emptyAvatar from "../../public/speaker/250x250.png";

type Day = "1";
type Kind = "keynote" | "session" | "LT" | "sponsor session" | "sponsor LT";
type Language = "English" | "Japanese";

type Speaker = {
  type: "speaker";
  name: string;
  avatarUrl: string | StaticImageData;
  bio: string; // markdown
};

export type Talk = {
  slug: string;
  title: string;
  scheduleLabel?: string;
  description: string; // markdown
  descriptionJa?: string; // markdown
  kind: Kind;
  day: Day;
  language: Language;
  speakers: (Speaker | Sponsor)[];
  recordingUrl?: string;
};
export type FlattenedSpeaker = {
  talk: Talk;
  speaker: Speaker | Sponsor;
};

const makeTalk = (
  slug: string,
  title: string,
  kind: Kind,
  language: Language,
  speakerNames: readonly string[] = [],
): Talk => {
  const talkDescription =
    talkDescriptions[title as keyof typeof talkDescriptions];
  const description = talkDescription?.en || talkDescription?.ja || "";
  const descriptionJa =
    language === "English" ? talkDescription?.ja : undefined;

  return {
    slug,
    title,
    scheduleLabel:
      speakerNames.length > 0
        ? `${title} by ${speakerNames.join(" & ")}`
        : title,
    description,
    descriptionJa,
    kind,
    day: "1",
    language,
    speakers: speakerNames.map((name) => {
      const speakerProfile =
        speakerProfiles[name as keyof typeof speakerProfiles];
      const avatarUrl =
        speakerProfile && "avatarPath" in speakerProfile
          ? speakerProfile.avatarPath
          : emptyAvatar;

      return {
        type: "speaker",
        name,
        avatarUrl,
        bio: speakerProfile?.bio ?? "",
      };
    }),
  };
};

export const TALKS = [
  makeTalk(
    "ajay-upreti",
    "Automating Frontend Performance Optimization with AI Agents",
    "LT",
    "English",
    ["Ajay Upreti"],
  ),
  makeTalk(
    "azukiazusa",
    "ワークフローからハーネスへ — Web フレームワークの作者たちが AI エージェントに向かう理由",
    "LT",
    "Japanese",
    ["azukiazusa"],
  ),
  makeTalk(
    "bicstone",
    "Stage 3でも仕様は変わる。アプリケーション開発者のためのTC39プロセスの読み方",
    "LT",
    "Japanese",
    ["おおいし (bicstone)"],
  ),
  makeTalk(
    "dynamis",
    "Welcome JXL! ー JPEG XL 復活の記録",
    "LT",
    "Japanese",
    ["dynamis"],
  ),
  makeTalk(
    "nurul-sundarani",
    "The TC39 Graveyard: Proposals That Died So JavaScript Could Live",
    "LT",
    "English",
    ["Nurul Sundarani"],
  ),
  makeTalk(
    "keisuke-tsuji",
    "フロントエンドのテストカバレッジは 100% 強制がいい",
    "LT",
    "Japanese",
    ["辻佳佑"],
  ),
  makeTalk(
    "yuya-inoue",
    "debug> を待ってもダメだった — Node.jsのflaky testから学ぶ非同期処理の同期点",
    "LT",
    "Japanese",
    ["Yuya Inoue"],
  ),
  makeTalk(
    "progfay",
    "多様化する npm サプライチェーン攻撃: 多角的な備えという向き合い方",
    "LT",
    "Japanese",
    ["progfay"],
  ),
  makeTalk(
    "rikito-taniguchi",
    "Compiling Your Language to WasmGC & Friends",
    "LT",
    "English",
    ["Rikito Taniguchi"],
  ),
  makeTalk(
    "tomikawa-sotaro",
    "JavaScriptはシングルバイナリの夢を見るか",
    "LT",
    "Japanese",
    ["TOMIKAWA Sotaro"],
  ),
  makeTalk(
    "syumai",
    "Math.sumPreciseから学ぶ、ECMAScript仕様の数値の種類",
    "LT",
    "Japanese",
    ["syumai"],
  ),
  makeTalk(
    "yebis0942",
    "esmeta: ECMAScript仕様書を読む機械",
    "LT",
    "Japanese",
    ["yebis0942"],
  ),
  makeTalk(
    "daigo-fujiwara-smith",
    "Scroll-Driven 3D: Storytelling with React Three Fiber",
    "LT",
    "English",
    ["Daigo Fujiwara-Smith"],
  ),
  makeTalk(
    "kazuya-serizawa",
    "Promiseの向こう側へコンテキストを届ける ― proposal-async-context",
    "LT",
    "Japanese",
    ["Kazuya Serizawa"],
  ),
  makeTalk(
    "petamoriken",
    "Canvas 2D Context Next",
    "LT",
    "Japanese",
    ["森内建太 (@petamoriken)"],
  ),
  makeTalk(
    "yuta-ikeoku",
    "Coding Agent のフロントエンドを、AsyncIterable と自作の pipe で宣言的に実装する",
    "LT",
    "Japanese",
    ["池奥裕太"],
  ),
  makeTalk("keynote-1-tbd", "基調講演1: TBD", "keynote", "Japanese"),
  makeTalk("miidas-sponsor-lt-1", "ミイダス社 LT", "sponsor LT", "Japanese"),
  makeTalk(
    "anotherball-sponsor-lt-1",
    "AnotherBall Pte Ltd LT",
    "sponsor LT",
    "English",
  ),
  makeTalk(
    "cybozu-sponsor-lt-1",
    "サイボウズ株式会社 LT",
    "sponsor LT",
    "Japanese",
  ),
  makeTalk("mcd3-sponsor-lt", "MCD3株式会社 LT", "sponsor LT", "Japanese"),
  makeTalk(
    "devlin-duldulao",
    "Secure by Default Is a Lie — Unless You Make It the Default",
    "session",
    "English",
    ["Devlin Duldulao"],
  ),
  makeTalk("nolu", "CVEから紐解くJIT Exploit", "session", "Japanese", ["nolu"]),
  makeTalk(
    "neciu-dan",
    "How NOT to Use TanStack Query",
    "session",
    "English",
    ["Neciu Dan"],
  ),
  makeTalk(
    "miidas-sponsor-session",
    "ミイダス株式会社",
    "sponsor session",
    "Japanese",
  ),
  makeTalk(
    "neeraj-pandey",
    "npm install Should Never Compile: Killing Native Addons",
    "session",
    "English",
    ["Neeraj Pandey"],
  ),
  makeTalk(
    "yuta-nishi",
    "V8のArray.prototype.flatを最大約5倍速くするまでと、巨大OSSへの大規模コミットの道のり",
    "session",
    "Japanese",
    ["Yuta Nishi"],
  ),
  makeTalk(
    "aileen-villanueva",
    "When AI writes the code, what do JavaScript developers write?",
    "session",
    "English",
    ["Aileen Villanueva"],
  ),
  makeTalk(
    "anotherball-sponsor-session",
    "AnotherBall Pte Ltd",
    "sponsor session",
    "English",
  ),
  makeTalk(
    "marco-ippolito",
    "The Missing Piece in Node.js Configuration",
    "session",
    "English",
    ["Marco Ippolito"],
  ),
  makeTalk("uhyo", "AIフレンドリーなGenerative UIをJSXで", "session", "Japanese", ["うひょ"]),
  makeTalk(
    "maya-shavin",
    "Frontend Beyond the Screen: Where AI Agent Is A User",
    "session",
    "English",
    ["Maya Shavin"],
  ),
  makeTalk(
    "cybozu-sponsor-session",
    "サイボウズ株式会社",
    "sponsor session",
    "Japanese",
  ),
  makeTalk(
    "wataru-morita",
    "Webメール開発を大幅に変えたJMAPというゲームチェンジャー",
    "session",
    "Japanese",
    ["Wataru Morita(@tascript)"],
  ),
  makeTalk(
    "html-in-canvas-api",
    "Build next-generation UIs with the HTML-in-Canvas API",
    "session",
    "English",
    ["Natalia Markoborodova", "Thomas Nattestad"],
  ),
  makeTalk(
    "arkor-sponsor-session",
    "Arkor",
    "sponsor session",
    "English",
  ),
  makeTalk(
    "ondrej-zara",
    "You are never going to do these 10 JS mistakes",
    "session",
    "English",
    ["Ondřej Žára"],
  ),
  makeTalk(
    "eiji",
    "ブラウザで変わるID連携 — EVPとFedCMが描く未来の認証",
    "session",
    "Japanese",
    ["えーじ"],
  ),
  makeTalk(
    "kevin-uehara",
    "WebMCP and WebAI: Exploring native AI tools in Chrome",
    "session",
    "English",
    ["Kevin Uehara"],
  ),
  makeTalk(
    "dwango-sponsor-session",
    "株式会社ドワンゴ",
    "sponsor session",
    "Japanese",
  ),
  makeTalk(
    "brandon-dail",
    "Design Systems Engineering at Discord",
    "session",
    "English",
    ["Brandon Dail"],
  ),
  makeTalk(
    "roland-richard",
    "Node.jsで覗くV8バイトコード：3つのJavaScript実験",
    "session",
    "Japanese",
    ["ローランド リチャード"],
  ),
  makeTalk(
    "enechain-sponsor-session",
    "株式会社enechain",
    "sponsor session",
    "Japanese",
  ),
  makeTalk(
    "supateam-sponsor-session",
    "supateam株式会社",
    "sponsor session",
    "Japanese",
  ),
  makeTalk(
    "saman-abaasi",
    "React Fiber Unplugged: How the Internal Scheduler Shapes React",
    "session",
    "English",
    ["Saman Abaasi"],
  ),
  makeTalk(
    "akfm-sato",
    "Next.js Instant Navigations - JavaScriptによるWeb Navigationチューニング",
    "session",
    "Japanese",
    ["akfm_sato"],
  ),
  makeTalk(
    "ncdc-sponsor-session",
    "NCDC株式会社",
    "sponsor session",
    "Japanese",
  ),
  makeTalk(
    "lincwell-sponsor-session",
    "株式会社Linc'well",
    "sponsor session",
    "Japanese",
  ),
  makeTalk(
    "itai-satati",
    "You've Been Hacked. It Just Hasn't Happened Yet.",
    "session",
    "English",
    ["Itai Satati"],
  ),
  makeTalk(
    "kinocoboy",
    "開発における リズムと一貫性",
    "session",
    "Japanese",
    ["kinocoboy"],
  ),
  makeTalk(
    "cougar-sponsor-session",
    "クーガー株式会社",
    "sponsor session",
    "Japanese",
  ),
  makeTalk(
    "money-forward-sponsor-session",
    "株式会社マネーフォワード",
    "sponsor session",
    "Japanese",
  ),
  makeTalk(
    "leo-kettmeir",
    "Creating desktop apps with Deno",
    "session",
    "English",
    ["Leo Kettmeir"],
  ),
  makeTalk(
    "jessie",
    "Your Node.js App Is Lying to You: What axios Taught Us",
    "session",
    "English",
    ["Jessie"],
  ),
  makeTalk("vercel-sponsor-session", "Vercel", "sponsor session", "English"),
  makeTalk(
    "gmo-flatt-security-sponsor-session",
    "GMO Flatt Security株式会社",
    "sponsor session",
    "Japanese",
  ),
  makeTalk(
    "layerx-sponsor-session",
    "株式会社LayerX",
    "sponsor session",
    "Japanese",
  ),
  makeTalk("arkor-sponsor-lt", "Arkor LT", "sponsor LT", "English"),
  makeTalk("dwango-sponsor-lt", "株式会社ドワンゴ LT", "sponsor LT", "Japanese"),
  makeTalk("supateam-sponsor-lt", "supateam株式会社 LT", "sponsor LT", "Japanese"),
  makeTalk("lincwell-sponsor-lt", "株式会社Linc'well LT", "sponsor LT", "Japanese"),
  makeTalk(
    "money-forward-sponsor-lt",
    "株式会社マネーフォワード LT",
    "sponsor LT",
    "Japanese",
  ),
  makeTalk("layerx-sponsor-lt", "株式会社LayerX LT", "sponsor LT", "Japanese"),
  makeTalk("enechain-sponsor-lt", "株式会社enechain LT", "sponsor LT", "Japanese"),
  makeTalk("ncdc-sponsor-lt", "NCDC株式会社 LT", "sponsor LT", "Japanese"),
  makeTalk("cougar-sponsor-lt", "クーガー株式会社 LT", "sponsor LT", "Japanese"),
  makeTalk("vercel-sponsor-lt", "Vercel LT", "sponsor LT", "English"),
  makeTalk(
    "gmo-flatt-security-sponsor-lt",
    "GMO Flatt Security株式会社 LT",
    "sponsor LT",
    "Japanese",
  ),
  makeTalk("everlane-sponsor-lt", "株式会社EVERLANE LT", "sponsor LT", "Japanese"),
  makeTalk(
    "josh-junon",
    "基調講演2: Yep, I've Been Pwned: What I Learned from Being Hacked",
    "keynote",
    "English",
    ["Josh Junon"],
  ),
] satisfies readonly Talk[];

export type TalkSlug = (typeof TALKS)[number]["slug"];

export const TALKS_BY_SLUG: Record<TalkSlug, Talk> = TALKS.reduce(
  (acc, talk) => {
    acc[talk.slug as TalkSlug] = talk;
    return acc;
  },
  {} as Record<TalkSlug, Talk>,
);
