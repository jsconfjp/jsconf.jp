import type { StaticImageData } from "next/image";
import speakerProfiles from "./speakerProfiles.json";
import sponsorTalkDetails from "./sponsorTalkDetails.json";
// @ts-expect-error see 2026/scripts/fetch-og-images.ts
import { SPONSORS_BY_NAME, type Sponsor } from "./sponsors.ts";
import talkDescriptions from "./talkDescriptions.json";
import talkSlides from "./talkSlides.json";
import emptyAvatar from "../../public/speaker/250x250.png";

type Day = "1";
type Kind = "keynote" | "session" | "LT" | "sponsor session" | "sponsor LT";
type Language = "English" | "Japanese" | "Japanese and English";

type Speaker = {
  type: "speaker";
  name: string;
  avatarUrl: string | StaticImageData;
  bio: string; // markdown
  bioEn?: string; // markdown
  bioJa: string; // markdown
};

export type Talk = {
  slug: string;
  title: string;
  titleEn?: string;
  titleJa?: string;
  scheduleLabel?: string;
  presenterNames?: string;
  presenterProfile?: { avatarUrl: string; url: string };
  description: string; // markdown
  descriptionEn?: string; // markdown
  descriptionJa?: string; // markdown
  kind: Kind;
  day: Day;
  language: Language;
  speakers: (Speaker | Sponsor)[];
  recordingUrl?: string;
  slides?: readonly Slide[];
};
export type Slide = {
  url: string;
  title: string;
  image: string; // og:image の URL、または public 配下のパス
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
  titleTranslations: Pick<Talk, "titleEn" | "titleJa"> = {},
): Talk => {
  const talkDescription = talkDescriptions[title as keyof typeof talkDescriptions];
  const description = talkDescription?.en || talkDescription?.ja || "";
  const descriptionEn = talkDescription?.en || undefined;
  const descriptionJa = talkDescription?.ja || undefined;

  return {
    slug,
    title,
    ...titleTranslations,
    scheduleLabel: speakerNames.length > 0 ? `${title} by ${speakerNames.join(" & ")}` : title,
    description,
    descriptionEn,
    descriptionJa,
    kind,
    day: "1",
    language,
    slides: talkSlides[slug as keyof typeof talkSlides],
    speakers: speakerNames.map((name) => {
      const speakerProfile = speakerProfiles[name as keyof typeof speakerProfiles];
      const avatarUrl = speakerProfile && "avatarPath" in speakerProfile ? speakerProfile.avatarPath : emptyAvatar;

      return {
        type: "speaker",
        name,
        avatarUrl,
        bio: speakerProfile?.bio ?? "",
        bioEn:
          speakerProfile && "bioEn" in speakerProfile && typeof speakerProfile.bioEn === "string"
            ? speakerProfile.bioEn
            : undefined,
        bioJa:
          speakerProfile && "bioJa" in speakerProfile && typeof speakerProfile.bioJa === "string"
            ? speakerProfile.bioJa
            : (speakerProfile?.bio ?? ""),
      };
    }),
  };
};

type SponsorKind = Extract<Kind, "sponsor session" | "sponsor LT">;
const sponsorDetails: Partial<
  Record<
    string,
    Pick<
      Talk,
      "title" | "titleJa" | "description" | "descriptionEn" | "descriptionJa" | "presenterNames" | "presenterProfile"
    > & {
      language: string;
    }
  >
> = sponsorTalkDetails;

// スポンサーセッション/LT。スピーカーとして SPONSORS の企業情報を紐付ける。
const makeSponsorTalk = (
  slug: string,
  title: string,
  kind: SponsorKind,
  language: Language,
  sponsorName: string,
  titleEn?: string,
  titleJa?: string,
): Talk => {
  const sponsor = SPONSORS_BY_NAME[sponsorName];
  if (!sponsor) {
    throw new Error(`Sponsor not found for talk "${slug}": ${sponsorName}`);
  }
  const details = sponsorDetails[slug];
  return {
    ...makeTalk(slug, title, kind, language),
    ...(details && {
      ...details,
      language: details.language as Language,
      scheduleLabel: `${details.title} by ${details.presenterNames}`,
    }),
    titleEn,
    titleJa: details?.titleJa ?? titleJa,
    speakers: [sponsor],
  };
};

export const TALKS = [
  makeTalk(
    "ajay-upreti",
    "Automating Frontend Performance Optimization with AI Agents",
    "LT",
    "English",
    ["Ajay Upreti"],
    { titleJa: "AIエージェントによるフロントエンドのパフォーマンス最適化の自動化" },
  ),
  makeTalk(
    "azukiazusa",
    "ワークフローからハーネスへ — Web フレームワークの作者たちが AI エージェントに向かう理由",
    "LT",
    "Japanese",
    ["azukiazusa"],
    { titleEn: "From Workflows to Harnesses: Why Web Framework Creators Are Turning to AI Agents" },
  ),
  makeTalk(
    "bicstone",
    "Stage 3でも仕様は変わる。アプリケーション開発者のためのTC39プロセスの読み方",
    "LT",
    "Japanese",
    ["おおいし (bicstone)"],
    { titleEn: "Specifications Change Even at Stage 3: Understanding the TC39 Process for Application Developers" },
  ),
  makeTalk("dynamis", "Welcome JXL! ー JPEG XL 復活の記録", "LT", "Japanese", ["dynamis"], {
    titleEn: "Welcome JXL! The Story of JPEG XL's Comeback",
  }),
  makeTalk(
    "nurul-sundarani",
    "The TC39 Graveyard: Proposals That Died So JavaScript Could Live",
    "LT",
    "English",
    ["Nurul Sundarani"],
    { titleJa: "TC39の墓場：JavaScriptを生かすために消えていった提案たち" },
  ),
  makeTalk("keisuke-tsuji", "フロントエンドのテストカバレッジは 100% 強制がいい", "LT", "Japanese", ["辻佳佑"], {
    titleEn: "Frontend Test Coverage Should Be Enforced at 100%",
  }),
  makeTalk(
    "yuya-inoue",
    "debug> を待ってもダメだった — Node.jsのflaky testから学ぶ非同期処理の同期点",
    "LT",
    "Japanese",
    ["Yuya Inoue"],
    {
      titleEn:
        "Waiting for `debug>` Didn't Help: Synchronization Points for Async Operations Learned from Node.js Flaky Tests",
    },
  ),
  makeTalk(
    "progfay",
    "多様化する npm サプライチェーン攻撃: 多角的な備えという向き合い方",
    "LT",
    "Japanese",
    ["progfay"],
    { titleEn: "The Diversifying npm Supply Chain Attacks: A Multifaceted Approach to Preparedness" },
  ),
  makeTalk("rikito-taniguchi", "Compiling Your Language to WasmGC & Friends", "LT", "English", ["Rikito Taniguchi"], {
    titleJa: "あなたの言語をWasmGCなどにコンパイルする",
  }),
  makeTalk("tomikawa-sotaro", "JavaScriptはシングルバイナリの夢を見るか", "LT", "Japanese", ["TOMIKAWA Sotaro"], {
    titleEn: "Does JavaScript Dream of a Single Binary?",
  }),
  makeTalk("syumai", "Math.sumPreciseから学ぶ、ECMAScript仕様の数値の種類", "LT", "Japanese", ["syumai"], {
    titleEn: "Numeric Types in the ECMAScript Specification, Learned Through Math.sumPrecise",
  }),
  makeTalk("yebis0942", "esmeta: ECMAScript仕様書を読む機械", "LT", "Japanese", ["yebis0942"], {
    titleEn: "esmeta: A Machine That Reads the ECMAScript Specification",
  }),
  makeTalk("jiko21", "Objectの比較と同一性を考える — ComparisonsからCompositesまで", "LT", "Japanese", ["jiko21"], {
    titleEn: "Object Comparison and Identity: From Comparisons to Composites",
  }),
  makeTalk(
    "kazuya-serizawa",
    "Promiseの向こう側へコンテキストを届ける ― proposal-async-context",
    "LT",
    "Japanese",
    ["Kazuya Serizawa"],
    { titleEn: "Passing Context Beyond Promises: proposal-async-context" },
  ),
  makeTalk("petamoriken", "Canvas 2D Context Next", "LT", "Japanese", ["森内建太 (@petamoriken)"], {
    titleEn: "Canvas 2D Context Next",
  }),
  makeTalk(
    "yuta-ikeoku",
    "Coding Agent のフロントエンドを、AsyncIterable と自作の pipe で宣言的に実装する",
    "LT",
    "Japanese",
    ["池奥裕太"],
    { titleEn: "Declaratively Building a Coding Agent Frontend with AsyncIterable and a Custom pipe" },
  ),
  makeTalk(
    "brendan-eich",
    "An Interview with Brendan Eich \u2014 30 Years of JavaScript: Past, Present, and Future",
    "keynote",
    "English",
    ["Brendan Eich"],
    { titleJa: "Brendan Eich インタビュー — JavaScript生誕30周年の振り返りとこれから" },
  ),
  makeSponsorTalk(
    "miidas-sponsor-lt-1",
    "ミイダス社 LT",
    "sponsor LT",
    "Japanese",
    "ミイダス株式会社",
    "Have You Checked Your AI-Generated Landing Page After the Build?",
  ),
  makeSponsorTalk(
    "anotherball-sponsor-lt-1",
    "オレ達が戦ってきたOOMの正体の話をしよう",
    "sponsor LT",
    "Japanese",
    "AnotherBall Pte Ltd",
    "The Story of the OOMs We've Been Fighting",
  ),
  makeSponsorTalk(
    "cybozu-sponsor-lt-1",
    "サイボウズ株式会社 LT",
    "sponsor LT",
    "Japanese",
    "サイボウズ株式会社",
    "Are jsperf's 'Faster' Patterns Still Faster? Let's Measure",
  ),
  makeSponsorTalk(
    "mcd3-sponsor-lt",
    "MCD3株式会社 LT",
    "sponsor LT",
    "Japanese",
    "エムシーディースリー株式会社",
    "A 5-Minute Look at MCD3's Development",
  ),
  makeTalk("nolu", "CVEから紐解くJIT Exploit", "session", "Japanese", ["nolu"], {
    titleEn: "Understanding JIT Exploits Through CVEs",
  }),
  makeTalk("neciu-dan", "How NOT to Use TanStack Query", "session", "English", ["Neciu Dan"], {
    titleJa: "TanStack Queryの間違った使い方",
  }),
  makeSponsorTalk(
    "miidas-sponsor-session",
    "ミイダス株式会社",
    "sponsor session",
    "Japanese",
    "ミイダス株式会社",
    "Lessons Learned on the Way to AI-Driven Landing Page Development",
  ),
  makeTalk(
    "neeraj-pandey",
    "npm install Should Never Compile: Killing Native Addons",
    "session",
    "English",
    ["Neeraj Pandey"],
    { titleJa: "npm installでコンパイルさせない：ネイティブアドオンをなくす" },
  ),
  makeTalk(
    "yuta-nishi",
    "V8のArray.prototype.flatを最大約20倍速くするまでと、巨大OSSへの大規模コミットの道のり",
    "session",
    "Japanese",
    ["Yuta Nishi"],
    {
      titleEn:
        "How I Made V8's Array.prototype.flat Up to 20× Faster—and the Journey to a Large-Scale OSS Contribution",
    },
  ),
  makeTalk(
    "aileen-villanueva",
    "When AI writes the code, what do JavaScript developers write?",
    "session",
    "English",
    ["Aileen Villanueva"],
    { titleJa: "AIがコードを書く時代、JavaScript開発者は何を書くのか？" },
  ),
  makeSponsorTalk(
    "anotherball-sponsor-session",
    "Slackエージェントが動き続けるVTuber配信アプリの裏側",
    "sponsor session",
    "Japanese",
    "AnotherBall Pte Ltd",
    "Behind the Scenes of a VTuber Streaming App Powered by Always-On Slack Agents",
  ),
  makeTalk("marco-ippolito", "The Missing Piece in Node.js Configuration", "session", "English", ["Marco Ippolito"], {
    titleJa: "Node.jsの設定に欠けているもの",
  }),
  makeTalk("uhyo", "AIフレンドリーなGenerative UIをJSXで", "session", "Japanese", ["うひょ"], {
    titleEn: "Building AI-Friendly Generative UI with JSX",
  }),
  makeTalk(
    "hong-minhee",
    "Oseo：SBCLスタイルのJavaScript/TypeScript AOTコンパイラ",
    "session",
    "Japanese",
    ["洪 民憙"],
    { titleEn: "Oseo: An SBCL-Style Ahead-of-Time Compiler for JavaScript and TypeScript" },
  ),
  makeSponsorTalk(
    "cybozu-sponsor-session",
    "サイボウズ株式会社",
    "sponsor session",
    "Japanese",
    "サイボウズ株式会社",
    "Learning Human Skills Like Teamwork by Watching AI",
  ),
  makeTalk(
    "wataru-morita",
    "Webメール開発を大幅に変えたJMAPというゲームチェンジャー",
    "session",
    "Japanese",
    ["Wataru Morita(@tascript)"],
    { titleEn: "JMAP: The Game Changer That Transformed Webmail Development" },
  ),
  makeTalk(
    "html-in-canvas-api",
    "Build next-generation UIs with the HTML-in-Canvas API",
    "session",
    "English",
    ["Natalia Markoborodova", "Thomas Nattestad"],
    { titleJa: "HTML-in-Canvas APIで次世代のUIを構築する" },
  ),
  makeSponsorTalk(
    "auth0-sponsor-session",
    "Auth0",
    "sponsor session",
    "Japanese",
    "Auth0",
    "AI Security Beyond Authentication: Dynamic Authorization Based on an Agent's Intent",
  ),
  makeSponsorTalk(
    "arkor-sponsor-session",
    "Arkor",
    "sponsor session",
    "Japanese",
    "Arkor",
    "Why Are Arkor Web Apps So Fast? Behind the Scenes of Preloading and Caching",
  ),
  makeTalk("ondrej-zara", "You are never going to do these 10 JS mistakes", "session", "English", ["Ondřej Žára"], {
    titleJa: "あなたがやるはずのないJavaScriptのミス10選",
  }),
  makeTalk("eiji", "ブラウザで変わるID連携 — EVPとFedCMが描く未来の認証", "session", "Japanese", ["えーじ"], {
    titleEn: "Identity Federation in a Changing Browser: The Future of Authentication with EVP and FedCM",
  }),
  makeTalk(
    "yuji-yamamoto",
    "JS･WasmにもあるRustのアレ - コンポーネント間でやりとりするオブジェクトを管理する",
    "session",
    "Japanese",
    ["山本悠滋"],
    { titleEn: "Rust's Thing in JS and Wasm Too: Managing Objects Shared Between Components" },
  ),
  makeTalk(
    "kevin-uehara",
    "WebMCP and WebAI: Exploring native AI tools in Chrome",
    "session",
    "English",
    ["Kevin Uehara"],
    { titleJa: "WebMCPとWebAI：ChromeのネイティブAIツールを探る" },
  ),
  makeSponsorTalk(
    "dwango-sponsor-session",
    "株式会社ドワンゴ",
    "sponsor session",
    "Japanese",
    "株式会社ドワンゴ",
    "What Panda CSS Makes Possible by Not Importing the Library Directly",
  ),
  makeTalk(
    "roland-richard",
    "Node.jsで覗くV8バイトコード：3つのJavaScript実験",
    "session",
    "Japanese",
    ["ローランド リチャード"],
    { titleEn: "Peeking into V8 Bytecode with Node.js: Three JavaScript Experiments" },
  ),
  makeSponsorTalk(
    "enechain-sponsor-session",
    "株式会社enechain",
    "sponsor session",
    "Japanese",
    "株式会社enechain",
    "Frontend Development While Bringing Authentication In-House",
  ),
  makeSponsorTalk(
    "supateam-sponsor-session",
    "株式会社HelloCloud",
    "sponsor session",
    "Japanese",
    "株式会社HelloCloud",
    "TypeScript Behind a Pluggable, Declarative Software Factory",
  ),
  makeTalk(
    "saman-abaasi",
    "React Fiber Unplugged: How the Internal Scheduler Shapes React",
    "session",
    "English",
    ["Saman Abbasi"],
    { titleJa: "React Fiberの内部に迫る：内部スケジューラーがReactを形作る仕組み" },
  ),
  makeTalk(
    "akfm-sato",
    "Next.js Instant Navigations - JavaScriptによるWeb Navigationチューニング",
    "session",
    "Japanese",
    ["akfm_sato"],
    { titleEn: "Next.js Instant Navigations: Tuning Web Navigation with JavaScript" },
  ),
  makeSponsorTalk(
    "ncdc-sponsor-session",
    "NCDC株式会社",
    "sponsor session",
    "Japanese",
    "NCDC株式会社",
    "A One-Person Frontend: Keeping Code Quality in the Age of Agent-Written Code",
  ),
  makeSponsorTalk(
    "lincwell-sponsor-session",
    "株式会社Linc'well",
    "sponsor session",
    "Japanese",
    "株式会社Linc'well",
    "Gradually Breaking Up a Monolithic Frontend by Establishing Boundaries",
  ),
  makeTalk("itai-satati", "You've Been Hacked. It Just Hasn't Happened Yet.", "session", "English", ["Itai Satati"], {
    titleJa: "あなたはすでにハッキングされている。まだ気づいていないだけだ。",
  }),
  makeTalk("kinocoboy", "開発における リズムと一貫性", "session", "Japanese", ["kinocoboy"], {
    titleEn: "Rhythm and Consistency in Development",
  }),
  makeSponsorTalk(
    "cougar-sponsor-session",
    "クーガー株式会社",
    "sponsor session",
    "Japanese",
    "クーガー株式会社",
    "Couger, Inc.",
  ),
  makeSponsorTalk(
    "money-forward-sponsor-session",
    "株式会社マネーフォワード",
    "sponsor session",
    "Japanese",
    "株式会社マネーフォワード",
    "4LT Mix: Natural-Language E2E Testing / Domain-Specific UI in the AI Era / 93-Field Dynamic Forms / Rails to Next.js Without a Big Bang",
  ),
  makeTalk(
    "ypresto",
    "The Cost of the DOM ― jsdom / happy-dom とVitest Browser Modeの実行時間を分解する",
    "session",
    "Japanese",
    ["ypresto"],
    { titleEn: "The Cost of the DOM: Breaking Down Execution Time in jsdom / happy-dom and Vitest Browser Mode" },
  ),
  makeTalk("jessie", "Your Node.js App Is Lying to You: What axios Taught Us", "session", "English", ["Jessie"], {
    titleJa: "あなたのNode.jsアプリは嘘をついている：axiosから学んだこと",
  }),
  makeSponsorTalk(
    "vercel-sponsor-session",
    "Vercel",
    "sponsor session",
    "English",
    "Vercel",
    "Behind the Scenes of Vercel Functions",
  ),
  makeSponsorTalk(
    "gmo-flatt-security-sponsor-session",
    "GMO Flatt Security株式会社",
    "sponsor session",
    "Japanese",
    "GMO Flatt Security株式会社",
    "What npm Package Analysis Reveals About Supply Chain Attacks—and How Developers and Maintainers Can Defend Themselves",
  ),
  makeSponsorTalk(
    "layerx-sponsor-session",
    "株式会社LayerX",
    "sponsor session",
    "Japanese",
    "株式会社LayerX",
    "Building a Robust, Extensible Spreadsheet-Like Component with useReducer",
  ),
  makeSponsorTalk(
    "arkor-sponsor-lt",
    "Arkor LT",
    "sponsor LT",
    "Japanese",
    "Arkor",
    "Content Security Policies for Protecting Websites Correctly",
  ),
  makeSponsorTalk(
    "dwango-sponsor-lt",
    "株式会社ドワンゴ LT",
    "sponsor LT",
    "Japanese",
    "株式会社ドワンゴ",
    "The State of the Japanese Vertical Web in 2026",
  ),
  makeSponsorTalk(
    "supateam-sponsor-lt",
    "株式会社HelloCloud LT",
    "sponsor LT",
    "Japanese",
    "株式会社HelloCloud",
    "HelloCloud LT",
  ),
  makeSponsorTalk(
    "lincwell-sponsor-lt",
    "株式会社Linc'well LT",
    "sponsor LT",
    "Japanese",
    "株式会社Linc'well",
    "Frontend Development Doesn't End at Release: Making It Observable",
  ),
  makeSponsorTalk(
    "money-forward-sponsor-lt",
    "株式会社マネーフォワード LT",
    "sponsor LT",
    "Japanese",
    "株式会社マネーフォワード",
    "Money Forward, Inc. LT",
  ),
  makeSponsorTalk(
    "layerx-sponsor-lt",
    "株式会社LayerX LT",
    "sponsor LT",
    "Japanese",
    "株式会社LayerX",
    "Delivering Baseline Quality to AI Chat with ariaNotify()",
  ),
  makeSponsorTalk(
    "enechain-sponsor-lt",
    "株式会社enechain LT",
    "sponsor LT",
    "Japanese",
    "株式会社enechain",
    "A Case for a Real-Time-Updating Table Platform, Inspired by Generative UI",
  ),
  makeSponsorTalk(
    "ncdc-sponsor-lt",
    "NCDC株式会社 LT",
    "sponsor LT",
    "Japanese",
    "NCDC株式会社",
    "Full TypeScript × AI-Driven Development: Scaling Output Several Times by Deciding, Not Just Writing",
  ),
  makeSponsorTalk(
    "cougar-sponsor-lt",
    "クーガー株式会社 LT",
    "sponsor LT",
    "Japanese",
    "クーガー株式会社",
    "Meet Rachel, Our Colleague: Building AI Products for 7,000 Stores",
  ),
  makeSponsorTalk("vercel-sponsor-lt", "Vercel LT", "sponsor LT", "English", "Vercel", undefined, "VercelのLT"),
  makeSponsorTalk(
    "gmo-flatt-security-sponsor-lt",
    "GMO Flatt Security株式会社 LT",
    "sponsor LT",
    "Japanese",
    "GMO Flatt Security株式会社",
    "Modern Product Security: Tackling Vulnerabilities and Malicious Software Together",
  ),
  makeSponsorTalk(
    "everlane-sponsor-lt",
    "CodeCast LT",
    "sponsor LT",
    "Japanese",
    "株式会社EVERLANE",
    "What to Know Before Having AI Write Your Skills Profile",
  ),
  makeTalk(
    "josh-junon",
    "Keynote 2: Yep, I've Been Pwned: What I Learned from Being Hacked",
    "keynote",
    "English",
    ["Josh Junon"],
    { titleJa: "基調講演2：そう、私はハッキングされた——被害から学んだこと" },
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
