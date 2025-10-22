import type { StaticImageData } from "next/image";
// @ts-expect-error see 2025/scripts/fetch-og-images.ts
import { type Sponsor, SPONSORS_BY_NAME } from "./sponsors.ts";
import emptyAvatar from "../../public/speaker/250x250.png";
import akfmSatoAvatar from "../../public/speaker/akfm-sato.png";
import allenWirfsBrockAvatar from "../../public/speaker/allen-wirfs-brock.jpg";
import anamAhmedAvatar from "../../public/speaker/anam-ahmed.jpg";
import andreuBotellaAvatar from "../../public/speaker/andreu-botella.jpg";
import baseballyamaAvatar from "../../public/speaker/baseballyama.jpg";
import berlysiaAvatar from "../../public/speaker/berlysia.jpg";
import blagojJovanovAvatar from "../../public/speaker/blagoj-jovanov.jpg";
import canalunAvatar from "../../public/speaker/canalun.png";
import deanSrebnikAvatar from "../../public/speaker/dean-srebnik.jpg";
import islandryuAvatar from "../../public/speaker/islandryu.jpg";
import itaiSatatiAvatar from "../../public/speaker/itai-satati.jpg";
import jarredSumnerAvatar from "../../public/speaker/jarred-sumner.jpg";
import jemimaAbuAvatar from "../../public/speaker/jemima-abu.jpg";
import jiko21Avatar from "../../public/speaker/jiko21.jpg";
import joyeeCheungAvatar from "../../public/speaker/joyee-cheung.jpg";
import jxckAvatar from "../../public/speaker/jxck.svg";
import kazukiImamuraAvatar from "../../public/speaker/kazuki-imamura.jpg";
import kojiKojiAvatar from "../../public/speaker/koji-koji.jpg";
import leoKettmeirAvatar from "../../public/speaker/leo-kettmeir.jpg";
import lucaMugnainiAvatar from "../../public/speaker/luca-mugnaini.jpg";
import manishKumarAvatar from "../../public/speaker/manish-kumar.jpg";
import mapleAvatar from "../../public/speaker/maple.jpg";
import marcoIppolitoAvatar from "../../public/speaker/marco-ippolito.jpg";
import olivierFluckigerAvatar from "../../public/speaker/olivier-fluckiger.jpg";
import otaMeshiAvatar from "../../public/speaker/ota-meshi.jpg";
import petamorikenAvatar from "../../public/speaker/petamoriken.jpg";
import progfayAvatar from "../../public/speaker/progfay.png";
import sachaGreifAvatar from "../../public/speaker/sacha-greif.jpg";
import shaneCarrAvatar from "../../public/speaker/shane-carr.jpg";
import sosukeSuzukiAvatar from "../../public/speaker/sosuke-suzuki.jpg";
import taigaKiyokawaAvatar from "../../public/speaker/taiga-kiyokawa.jpg";
import takaoHayashiAvatar from "../../public/speaker/takao-hayashi.jpg";
import thomasSteinerAvatar from "../../public/speaker/thomas-steiner.jpg";
import tomikawaSotaroAvatar from "../../public/speaker/tomikawa-sotaro.png";
import toshiakiNagayamaAvatar from "../../public/speaker/toshiaki-nagayama.jpg";
import trungVoAvatar from "../../public/speaker/trung-vo.jpg";
import ursulaCervantesAvatar from "../../public/speaker/ursula-cervantes.jpg";
import yutaIkeokuAvatar from "../../public/speaker/yuta-ikeoku.jpg";

type Day = "1";
type Kind = "keynote" | "session" | "LT" | "sponsor session" | "sponsor LT";
type Language = "English" | "Japanese";

export type Speaker = {
  type: "speaker";
  name: string;
  avatarUrl: string | StaticImageData;
  bio: string; // markdown
};

export type Talk = {
  slug: string;
  title: string;
  description: string; // markdown
  kind: Kind;
  day: Day;
  language: Language;
  speakers: (Speaker | Sponsor)[];
};
export type FlattenedSpeaker = {
  talk: Talk;
  speaker: Speaker | Sponsor;
};

export const TALKS = [
  {
    slug: "passwordless-in-production",
    title:
      "Passwordless in Production: Implementing FIDO Passkeys for Frontend",
    description:
      "In this session, I'll share our end-to-end journey implementing FIDO passkeys in our frontend, replacing traditional password authentication with a more secure, frictionless solution. I'll dive into our technical architecture, frontend integration challenges, cross-platform considerations, and critical UX decisions that balanced security with user experience. You'll discover how we tackled browser compatibility issues, optimized performance, and overcame unexpected hurdles during our production rollout. Drawing from our real-world implementation serving millions of users, this talk provides actionable insights for developers considering or currently implementing passwordless authentication, complete with code examples, lessons learned, and tangible results that demonstrate the impact of our transition to passkeys.",
    kind: "LT",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Manish Kumar",
        avatarUrl: manishKumarAvatar,
        bio: "Manish is a Web Platform Engineer at Mercari Inc., where he works on the Mercari login page and also on Platform toolings for Web Developers. He has previously contributed to the Nodejs.org website development.",
      },
    ],
  },
  {
    slug: "understanding-directives-and-build-systems",
    title: "自作して理解する、ディレクティブとビルドシステムの役割",
    description: `最近、"use server" や "use server" など、ディレクティブが活用されるシーンが増えています。

これらの中には、フレームワークのビルドシステムが解釈し、ビルド結果に影響を与えるものがあります。

例えばReact Server Componentsにおける "use server" を使うと、実装上での単なる関数呼び出しが、「関数本体の処理をバックエンドに委譲する仕組み」に変化します。

言い換えるとディレクティブは、単一コードベースを、関数単位で異なるランタイムで実行することを可能にするシステムと言えます。

このLTでは、"use lambda"という自作のディレクティブを定義し、これを処理するRolldownのプラグインを作成してみます。（バックエンドで利用する前提で、サーバー処理の一部分を、AWS Lambda のような非同期実行に切り出すイメージです。）

このプラグインを例として、ディレクティブがどのようにビルドシステムと連携するのかを説明します。

関連: https://www.m3tech.blog/entry/2025/07/22/170104
`,
    kind: "LT",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "池奥裕太",
        avatarUrl: yutaIkeokuAvatar,
        bio: `
エムスリー株式会社 / ソフトウェアエンジニア

2024年4月にエムスリー株式会社に新卒入社。2024年度 未踏クリエイター。プロトタイピングとハッカソン、ノーコード（作る方も）とデザインが好きです。`,
      },
    ],
  },
  {
    slug: "visual-regression-testing-chromatic",
    title:
      "横断組織が向き合うVisual Regression Testing —Chromaticは使い続けるべきなのか—",
    description: `概要：マネーフォワードのtoB領域では現在、20以上のプロダクトがChromaticというSaaSを使ったVisual Regression Testing（VRT）を導入しております。Chromaticはスナップショットごとの従量課金制で、我々は無為な使用を続けた結果、コストが想定以上に大幅に嵩み、予算の管理体制が整っていない状況に直面しています。私はこの課題の解決や、VRT自体の目的や戦略を標準化する取り組みの責任者です。この発表では、私が取り組んでいる内容や多様な現場でのテスト戦略立案の困難さ、Chromaticの利用コストを最適化するための工夫ポイントなどをお話しします。（現時点で絶賛取り組み中の活動のため、答えは出ていないタイプの発表です。）

目的：この発表は、上記の内容を事例として紹介し、これからVRTに取り組むエンジニアや、既に似たような課題に直面している同規模の横断活動を行うEMに、気づきを与えたり、コミュニティ全体のVRTに対する意識向上や議論の活性化に繋げることを目的としています。

発表構成案：
- 自己紹介
- VRTとは
- Chromaticとは
- VRTはTesting Trophyにおける何か？ → 解釈は様々で、どこにも当てはまらない。カテゴライズすること自体がナンセンスの可能性。
- VRTはいつ行うべきなのか（どの粒度？どの頻度？）
- Chromaticコスト節約術
  - TurboSnapを有効化しよう
  - スナップショットはデフォルトでdisableにして、明示的にenableしよう
  - 対象のStoryをなるべくまとめよう
  - ワークフローはラベル付けによって手動で実行しよう
- Chromaticは使い続けるべきなのか → 正直分からない。答えがない。代替手段はたくさんあるが、それぞれにメリット・デメリットがある。
- まとめ`,
    kind: "LT",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "Taiga Kiyokawa",
        avatarUrl: taigaKiyokawaAvatar,
        bio: `フロントエンドエンジニア。2020年にマネーフォワード入社。現在は、toB向けプロダクトの横断組織におけるフロントエンド領域の責任者として、デザインシステムMFUIの開発やアクセシビリティ向上、開発標準化などに注力しています。`,
      },
    ],
  },
  {
    slug: "vertical-text-web-javascript",
    title: "縦書きWebの実用を支えるJavaScript",
    description: `Webでの縦書きのサポートは年々充実していっています。2024年にはフォームの縦書き対応が主要ブラウザに揃いました。
しかし、縦書きをWebサイトのコンテンツに実用しようとすると、様々な形で考慮が必要になります。

方向や座標を伴う記述は、CSSだけでなくJavaScriptでの実装時にどうなるでしょうか？
仕様は存在するがブラウザの実装に不都合がある場合のワークアラウンド、よく出会う「こんな風に書かれていると困る」実装パターンなど、
縦書きのコンテンツを持つWebサイト実装を支えるJavaScriptの活躍について、実際に遭遇する例をまじえて紹介します。`,
    kind: "LT",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "berlysia",
        avatarUrl: berlysiaAvatar,
        bio: `フロントエンドを得意領域とするWebエンジニアです。株式会社ドワンゴの教育事業でWebフロントエンドを担当しています。仕事でも趣味でも縦書きを扱っています。`,
      },
    ],
  },

  {
    slug: "whats-new-in-ecma-402",
    title: "What's New in ECMA-402",
    description:
      "Many TC39 delegates are working to make JavaScript the premier language for building apps that work seamlessly across languages and cultures. Learn about some of the latest advancements, including message formatting, measurement units, durations, word segmentation, and more.",
    kind: "LT",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Shane Carr",
        avatarUrl: shaneCarrAvatar,
        bio: "Shane F. Carr is convener of TC39-TG2 (the internationalization working group within ECMA), chair of the ICU4X TC in Unicode, and a Staff Software Engineer at Google. Shane routinely gives talks at conferences, virtual events, and community meetup groups on topics including Unicode, JavaScript, and internationalization.",
      },
    ],
  },
  {
    slug: "proposal-composites-object-comparison",
    title: "Proposal-CompositesによるObject比較の未来",
    description: `JavaScriptにおけるObject比較は、同じ形をしていても等しくならないなど、開発者の直感とズレた挙動を示すことがあります。
2025年にTC39で提案された proposal-composites では、「Composites」という新しい概念が導入され、これによって オブジェクト比較にまったく新しいカタチがもたらされます。

このLTでは、

- 従来のオブジェクト比較が抱える課題

- Compositesによる新しい比較の考え方

- Compositesの応用先

を10分でわかりやすく紹介します。`,
    kind: "LT",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "jiko21",
        avatarUrl: jiko21Avatar,
        bio: "フロントエンドエンジニア。",
      },
    ],
  },
  {
    slug: "understanding-atomics-api",
    title: "Atomics APIを知る",
    description: `Atomics APIを知っていますか？
ほとんどの人は使ったことがないのではないでしょうか。

Atomics APIの背景にはSharedArrayBufferの存在があります。

SharedArrayBufferを知っていますか？
ほとんどの人は使ったことがないのではないでしょうか。

SharedArrayBufferの存在・歴史を確認しつつAtomics APIで何ができるのかを確認します。`,
    kind: "LT",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "TOMIKAWA Sotaro",
        avatarUrl: tomikawaSotaroAvatar,
        bio: "株式会社ZOZOでフロントエンドエンジニア（テックリード）をしています。",
      },
    ],
  },
  {
    slug: "beyond-console-log",
    title:
      "Beyond console.log: Developing and Debugging with Observable Side Effects",
    description: `This talk explores the power of observable side effects. We'll discover how making them explicit and transparent can dramatically improve code clarity, decrease debugging time, and boost application reliability.

We'll look into practical strategies for building applications where you can effortlessly track and understand these effects. The talk culminates in a live demonstration of a web application built with these principles, showcasing how gaining true insight into your code's behavior can transform your development and debugging workflow.`,
    kind: "LT",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Luca Mugnaini",
        avatarUrl: lucaMugnainiAvatar,
        bio: `Luca is a software engineer at Rakuten. He is a passionate Functional Programming advocate. Originally from Italy, he has been living in Tokyo for several years.`,
      },
    ],
  },

  {
    slug: "in-doubt-what-to-pick-choose-qwik",
    title: "In doubt what to pick? Choose Qwik!",
    description: `At first you may think: Yet another FE framework. We already have Angular, React, Vue, Svelte, how this one can be different?
Well, the big difference is that Qwik tries to solve speed of javascript applications in a revolutionary way:
delayed execution and resumability. The goal of this talk would be to explain the key concepts of Qwik and how it achieves extremely fast
startup times. After the theoretical part, we will have an overview of the fundamental building blocks needed to create
lightning-fast web applications (project structure, routes, loading data from the server, forms and validation etc.)`,
    kind: "LT",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Blagoj Jovanov",
        avatarUrl: blagojJovanovAvatar,
        bio: `Blagoj is working as Principal Software Engineer at G+D Netcetera. 
Most of his development work was done for applications in the 3-D Secure Payment area
as a fullstack developer (Spring Boot + Angular). Currently he is Lead Dev of a SAFe team
working in challenging environment. In his spare time he likes to keep up with latest tech 
updates in his area of expertise.`,
      },
    ],
  },
  {
    slug: "javascript-pattern-matching",
    title: "混沌としたJavaScriptにパターンマッチングが！",
    description: `ECMAScriptのStage 1仕様案として、パターンマッチングが検討されています。
動的言語ゆえに従来のJSでは書きづらかった「オブジェクトの厳密な定義」を宣言的にスマートに書ける、非常に強力で野心的ともいえる仕様です。
そのためか、かなりの難産になっていますが、採用されれば従来オブジェクト定義を担ってきたTypeScriptを含め、JavaScriptのエコシステムの変革が促進されることでしょう。
何度かLT会で話題にさせていただいている内容ですが、この大きな場でパターンマッチングに注目を集めて、Stageが進むことを期待しています。
スライドは日英両方乗せることを検討しています。`,
    kind: "LT",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "永山俊明",
        avatarUrl: toshiakiNagayamaAvatar,
        bio: `株式会社サザビーリーグHR 横浜業務サポートセンター所属
業務ではC#がメインですが、サブ言語としてJSの動向も追っています。`,
      },
    ],
  },
  {
    slug: "modern-js-framework-build-process",
    title:
      "モダンJSフレームワークのビルドプロセス 〜なぜReactは503行、Svelteは12行なのか〜",
    description: `JavaScriptフレームワークは、開発者が書いたコードを大幅に変換します。同一の9行のボタンコンポーネントが、Reactでは503行、Svelteではわずか12行のJavaScriptに変換されるのはなぜでしょうか？

本発表では、両フレームワークのビルドプロセスを分解し、各ステップで何が起きているかを可視化します。

Reactが実現するランタイムでの柔軟性（Virtual DOM、Fiber Architecture、Concurrent Rendering）には、Scheduler等 多層の抽象化が必要です。一方Svelteは、コンパイル時の静的解析により、これらの抽象化層を完全に除去し、純粋なDOM操作コードのみを生成します。

実測データを基に、この設計思想の違いがバンドルサイズ等にどう影響するかを明らかにし、プロジェクト特性に応じたフレームワーク選択の指針を提示できればと思っています。`,
    kind: "LT",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "Maple",
        avatarUrl: mapleAvatar,
        bio: `株式会社SODAのフロントエンドテックリードです。
Svelteへのコントリビューターとしても活動しています。`,
      },
    ],
  },
  {
    slug: "sustainable-oss-policy",
    title: `"善意"だけでは続かない──持続可能性の問題に取り組む世界のOSS政策の話`,
    description: `OSS は個人の善意だけで成り立つ時代を終えつつあります。日本ではいまだに「趣味」や「ボランティア」として OSS へ貢献する文化が根強く残っていますが、プロジェクトの持続可能性が限界を迎えているのは世界共通の課題です。本トークでは、OSS コミュニティの継続を“個人頼み”から“組織と制度”に移行させる必要性を提起します。加えて、各国政府のOSS 支援事例を紹介し、国によるオープンソース戦略について考察します。`,
    kind: "LT",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "今村かずき",
        avatarUrl: kazukiImamuraAvatar,
        bio: `IPA デジタル基盤センター デジタルエンジニアリング部 ソフトウェアエンジニアリンググループ（オープンソース推進担当）
1974年生まれ。九州芸術工科大学音響設計学科卒。Webエンジニア歴13年。2018年よりシビックテック活動を始める。2024年3月より現職。コミュニティ活動名は「GitHub女将」。`,
      },
    ],
  },

  {
    slug: "talks-arent-most-important",
    title: "Talks Aren’t the Most Important Thing at JSConf",
    description: `There are countless developer conferences in the world — but almost no guide on how to actually use them.
Most developers go for the talks — but what if I told you that's not the most important part?

In this talk, I’ll share how to truly experience a tech conference like JSConf — not just attend it.
Based on my time at JSConf 2024, this session is part survival guide, part mindset shift, and 100% relatable.

You'll learn what belongs in your real JSConf survival kit (spoiler: it's not just your laptop), how to navigate the different “conference tribes” you’ll encounter, and why asking a question is more than just being brave — it's the real code review of the day.

We’ll even reframe the whole process: the talk is the compile step, the audience reaction is the log output, and your question? That’s the code review.

If you’ve ever left a conference feeling like you just attended, not experienced, this talk is for you.`,
    kind: "LT",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Ricky Kim",
        avatarUrl: emptyAvatar,
        bio: `I like figuring out how to make JavaScript bundles smaller and how to improve products using real feedback from users.
For me, performance and user insight go hand in hand.`,
      },
    ],
  },
  {
    slug: "javascript-typespec-safety-karuta",
    title:
      "JavaScript/TypeSpec安全開発カルタ (カルタで安全な開発をするテクニックを学ぼう!)",
    description: `JavaScript開発において「やりがち」「見かけがち」なコードや習慣を、カルタ形式で紹介します。
以下の内容を話す予定です。
- テストなし・手動チェック地獄
- コーディング規約・フォーマッタ不在あるある
- 型との向き合い方
- AI開発との付き合い方`,
    kind: "LT",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "林 恭央",
        avatarUrl: takaoHayashiAvatar,
        bio: "ヒールか、ヒーローか。悪夢か、奇跡か。Frontend Engineer@Tokyo",
      },
    ],
  },
  {
    slug: "error-prototype-stack",
    title: "`Error.prototype.stack` の今と未来",
    description: `私たちが普段の開発で何気なく見ている \`Error\` の stack trace は実は標準化されていません。
このトークでは \`Error.prototype.stack\` について、各 JavaScript Runtime の実装と、これを標準化しようとする動きを紹介します。
`,
    kind: "LT",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "progfay",
        avatarUrl: progfayAvatar,
        bio: "Web フロントエンドエンジニア。趣味でブラウザの動向を追っかけたりしてます。",
      },
    ],
  },
  {
    slug: "mcp-ui-intent-driven-frontend",
    title: "MCP UI で作るインテント駆動フロントエンド",
    description: `従来のフロントエンド開発では、API が JSON を返し、フロントエンドがそれを解釈して UI を構築するのが一般的でした。しかし Model Context Protocol (MCP) では、エージェントが返すのはテキストやデータだけでなく、フォームやチャートといった UI コンポーネントそのものになる可能性があります。

この LT では、その仕組みを規定する MCP UI 仕様を紹介します。MCP UI は「返答＝UI」を実現するための公開仕様であり、エージェントとフロントエンドが共通の言語で UI をやり取りできるように設計されています。

短いライブデモでは、「お問い合わせフォームを作って」と入力すると、MCP UI 仕様に従って生成されたフォームが表示される様子をお見せします。これにより、インテント（ユーザーの意図）から UI が構築されるプロセスを紹介します。`,
    kind: "LT",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "奥村雄太",
        avatarUrl: emptyAvatar,
        bio: `奥村雄太（株式会社Resilire エンジニア）。前職では LINE／出前館にてフロントエンドリプレイスやチームマネジメントを担当。現在は Resilire で IC として、デザインシステム導入、サーバサイドのリアーキテクチャ、Agentic Coding の導入などに取り組んでいる。直近は「インテント駆動フロントエンド」と MCP UI に注目している。趣味は将棋で、アマチュア代表としてプロとの対局経験あり。`,
      },
    ],
  },

  {
    slug: "andromeda-future-of-typescript",
    title: "Andromeda - The Future Of TypeScript",
    description:
      "In this talk, we’ll explore Andromeda, a new experimental JS/TS runtime that rethinks what a lightweight execution engine can be. You’ll get a behind-the-scenes look at how Andromeda works, why it exists, and what makes it fundamentally different from Node.js or Deno. We’ll talk about its architecture, how it handles TypeScript natively, and the motivations behind building a runtime focused on simplicity and transparency. Whether you're a runtime nerd, a systems programming enthusiast, or just curious about where the JavaScript ecosystem could go next, this session will spark new ideas about what’s possible when you strip a runtime down to its essentials — and rebuild it with Rust.",
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Dean Srebnik",
        avatarUrl: deanSrebnikAvatar,
        bio: `Dean Srebnik is a prolific open-source developer and systems engineer based in New Jersey, renowned for his contributions to the Deno and Rust ecosystems. As a co-founder of the Deno Windowing project and a core member of the Denosaurs and TryNova teams, Dean has been instrumental in advancing cross-platform runtime development and modern JavaScript tooling.

Dean's work spans a diverse array of projects, including the Nova ECMAScript engine written in Rust, the Andromeda JS/TS runtime, and the Netsaur machine learning library. He is also the co-creator of Whistle, a programming language designed to push the boundaries of JavaScript capabilities.

An invited expert for the WinterCG (Winter Community Group), Dean is deeply involved in shaping the future of web standards and server-side JavaScript.`,
      },
    ],
  },
  {
    slug: "nextjs-caching-re-architecture",
    title: "Next.js Caching - Legacy, Improvement, Re-Architecture",
    description: `"use cache"は、Next.jsのキャッシュを再設計するために導入されたディレクティブで、RSCの世界観との親和性を高く保ちつつキャッシュをシンプルに実現する、とても優れた機能です。個人的には、「Next.jsを超えるフレームワークに求めたいもの」を「Next.js自身が提供してきた」ようにも感じており、Next.jsに対する評価を大きく改めるきっかけになりました。
本発表ではNext.jsのキャッシュの変遷と、"use cache"がいかに優れた設計か筆者なりの考察を語ります。

- Next.jsにおけるキャッシュの変遷
- "use cache"とRSCの親和性
- "use cache"のcomposable
- "use cache"により確立されるNext.jsの立ち位置`,
    kind: "session",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "akfm_sato",
        avatarUrl: akfmSatoAvatar,
        bio: `仕事では横断組織でフロントエンドエキスパート的なことをしてます。「Next.jsの考え方」など、Next.jsやテストの話をよくZennで執筆してます。`,
      },
    ],
  },
  {
    slug: "cross-platform-tv-development",
    title:
      "Cross-Platform Television Application Development: JavaScript Frameworks for Smart TV Ecosystems",
    description: `Join me for an in-depth exploration of developing television applications using JavaScript frameworks and React Native for TV across the fragmented smart TV landscape. In this session, I'll dive into practical solutions for building apps that work seamlessly across Tizen, webOS, Android TV and Fire TV platforms.
I'll demonstrate which modern JavaScript frameworks to use for television environments, with a special focus on React Native for TV and its powerful cross-platform capabilities. You'll learn to tackle TV-specific challenges including remote control navigation, focus management, spatial navigation with D-pad controls, and designing effective 10-foot user interfaces.
Through live coding examples and real-world case studies, I'll explore performance optimization techniques that maintain smooth 30+ FPS experiences across diverse TV hardware, memory management strategies for resource-constrained environments, and video streaming integration patterns that work reliably across platforms.

Whether you're a web developer looking to expand into TV development or seeking to optimize your existing smart TV applications, this talk will equip you with the knowledge and tools to succeed in the connected television ecosystem.`,
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Giovanni Laquidara",
        avatarUrl: emptyAvatar,
        bio: `Developer Advocate @ Amazon focused on devices, mobile apps and 👨‍💻👩‍💻 developer communities 🌎🌍🌏. Previously I worked as developer advocate, software engineer, VR and mobile developer and real-time software architect/developer. I like working with the cutting-edge technologies and people. Tinkering and sharing the experience.`,
      },
    ],
  },
  {
    slug: "denkiyagi-sponsor-session",
    title: "なぜブラウザで帳票を生成したいのか、どのようにブラウザで帳票を生成するのか",
    description: `デンキヤギでは、yagisan-reportsという「ブラウザ単体で動作する帳票エンジン」を開発・販売しています。
帳票エンジンとは、ざっくり言えば「請求書のようなPDFを出力するテンプレートエンジン」です。

帳票は歴史が長い分野なので、商用製品やOSSなど、帳票出力する方法はいくらでもあります。
そんな中で、わざわざ新規でブラウザで動く帳票エンジンを開発するモチベーションと、JavaScriptで帳票エンジンを実装するための技術背景についてお話します。`,
    kind: "sponsor session",
    day: "1",
    language: "Japanese",
    speakers: [SPONSORS_BY_NAME["デンキヤギ株式会社"]],
  },

  {
    slug: "evolving-nodejs-module-loader",
    title: "Evolving the Node.js module loader",
    description:
      "In this talk, we will dive into the story of some of the new features in the Node.js module loader - require(esm), the compile cache, and the module loader customization hooks. We will take a brief look into the history of them, the detours that were taken, the stagnation during their development, and how we are trying to move them forward.",
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Joyee Cheung",
        avatarUrl: joyeeCheungAvatar,
        bio: "Joyee is a software engineer at Igalia. As a member of the Node.js Technical Steering Committee and a V8 committer, she loves tinkering with JS runtime/engine to improve their developer experience, stability and performance.",
      },
    ],
  },
  {
    slug: "ast-reporter-test-catalog",
    title: `AST×Reporterでテストから"観点カタログ"を自動生成し、LLMと人間の共通Specにする`,
    description: `## 概要

AST×Reporterでテストから“観点カタログ”を自動生成し、LLMと人間の共通Specにする LLMで実装が速くなる一方、仕様漏れ・デグレ・レビュー負荷が増えがちです。このセッションは、Jest/Vitest/PlaywrightのReporterとAST解析でテストから“観点カタログ”を自動生成し、人間とLLMが共有できるSpecとして運用する方法を紹介します。LLMはこのSpecを参照して文脈を把握し、人間はSpec差分をレビューするだけで仕様漏れやデグレを素早く察知することが可能になります。 再現デモと実測値で、レビュー時間短縮と不足観点の可視化の効果を示します。

## 参加者が持ち帰れるもの

- 人間とLLMが開発に活かすことができるテスト観点カタログの構築方法
  - 抽出パイプラインの構築方法
  - CI 連携のテンプレート

## 想定セッション構成

1. 導入: なぜ「観点」が重要か（5m）
2. 実装内容説明: 
    -  抽出パイプライン: Reporter/AST → cases.md（7m）
    -  CI連携（3m）
3. 実演デモ（9m）
4. 実践結果（数値）と落とし穴（3m）
5. まとめ（3m）
`,
    kind: "session",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "小山 功二(koji-koji)",
        avatarUrl: kojiKojiAvatar,
        bio: `プロダクトエンジニアの小山功二です。
現在はクラスメソッド株式会社のデータ事業本部に所属し、新規プロダクト開発を進めています。

要件モヤモヤ期から設計→実装→検証までまとめて回すのが好きです。`,
      },
    ],
  },
  {
    slug: "great-migration-webassembly",
    title:
      "The Great Migration: Identifying and Offloading Your App's Bottlenecks to WebAssembly",
    description: `Even well written JavaScript application can struggle with computation intensive tasks. In the world of browser context, user experience of highly computation intensive tasks vary a lot depending on client's resources and their availability. This session discusses ideas about identifying computer intensive tasks, and strategies to migrate them to WebAssembly so a developer can accomplish more with less.`,
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Anam Ahmed",
        avatarUrl: anamAhmedAvatar,
        bio: "VP of engineering at Zelf AI. Anam is a software engineer who grew up writing code. Now leads the JavaScript community in Bangladesh.",
      },
    ],
  },
  {
    slug: "layerx-sponsor-session",
    title: "スポンサーキーノート",
    description: "TBD",
    kind: "sponsor session",
    day: "1",
    language: "Japanese",
    speakers: [SPONSORS_BY_NAME["株式会社LayerX"]],
  },

  {
    slug: "handling-time-in-javascript-with-temporal",
    title: "Now and Next – Handling Time in JavaScript with Temporal",
    description: `This year marks the 30th anniversary of JavaScript, and we are still stuck with the same old Date object from the 90s. It uses zero-based months, only works with local time or UTC, and its parsing is inconsistent across environments. On top of that, it is mutable, which can lead to hard-to-track bugs—especially when dealing with daylight saving or historical calendar changes.

Many real-world applications today need to work across time zones—whether it is for scheduling meetings, showing user-friendly dates, or handling reservations that span multiple time zones. This is where the Temporal API comes in. It is a modern replacement for Date: immutable by default, accurate with time zones, and designed to be much more reliable and predictable.

In this talk, I will go through common problems with Date, and show how Temporal solves them in a much simpler and safer way. We will look at concepts like Instant, ZonedDateTime, PlainDateTime, and Duration, and see how they map to real-world use cases. 

Even though browser support is still experimental, there are reliable polyfills that let you start using Temporal today for learning and prototyping. The API may still evolve, but it is already in a solid state to explore—and understanding it now will prepare you for the next generation of web applications where time handling is no longer a headache. If you have ever struggled with time in JavaScript, this is the upgrade you have been waiting for!`,
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Trung Vo",
        avatarUrl: trungVoAvatar,
        bio: `Trung Vo is a seasoned web developer, tech community builder, and recognised Google Developer Expert in Angular. As the founder of Angular Singapore, he leads initiatives to build and nurture the software developer community in Singapore. Trung frequently speaks at international tech conferences, sharing insights on modern development practices to make the web fast and delightful for end users.

At Ascenda, he innovates towards loyalty programs for financial services worldwide, making rewards more accessible and driving a deeper understanding of customer behaviour.`,
      },
    ],
  },
  {
    slug: "evolution-nodejs-inspector",
    title: "Evolution of the Node.js Inspector",
    description: `Node.js provides an Inspector API that allows developers to visualize and control the internal state of a running application. In this session, we will explore the fundamentals of this API, how it integrates with debugger tools, and practical use cases.
Presentation will be given in Japanese with English slides.`,
    kind: "session",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "嶋龍平",
        avatarUrl: islandryuAvatar,
        bio: `Nodejs Collaborator (inspector team)
https://github.com/islandryu`,
      },
    ],
  },
  {
    slug: "running-typescript-natively-nodejs",
    title: "Running TypeScript Natively in Node.js",
    description: `Imagine the convenience of executing TypeScript files directly with Node.js using \`node file.ts\`. Just a few years ago, this concept seemed like a distant dream. Today, it stands as an exciting experimental feature. This narrative dives into the journey of transforming this dream into a reality.`,
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Marco Ippolito",
        avatarUrl: marcoIppolitoAvatar,
        bio: `Marco is a Senior Security Engineer at HeroDevs.
Active contributor, releaser, and member of the Node.js Technical Steering Committee, he is a renowned international speaker and a Microsoft MVP. Marco is actively involved in many projects within the Node.js ecosystem and also serves as a delegate in TC39.`,
      },
    ],
  },
  {
    slug: "miidas-sponsor-session",
    title: "E2Eから始める自動テスト",
    description: `自動テストを導入するときに何から始めるか迷子になったことはないですか?
ミイダスではE2Eテストから始めました。なぜE2Eテストから始めたのかその理由をお話します。
さらに、数ある機能の中から何を優先的にテストすべきなのか、何をどこまでテストすべきなのかなど、どのようにテストケースを作ったのかそのプロセスについてもお話します。`,
    kind: "sponsor session",
    day: "1",
    language: "Japanese",
    speakers: [SPONSORS_BY_NAME["ミイダス株式会社"]],
  },

  {
    slug: "state-of-the-web",
    title: "The State of the Web",
    description: `I will go over key datapoints from this year's "State Of…" surveys (State of AI, State of Devs, State of CSS, State of HTML)`,
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Sacha Greif",
        avatarUrl: sachaGreifAvatar,
        bio: "Lead Data Mixologist, Devographics",
      },
    ],
  },
  {
    slug: "ai-browser-builtin-apis",
    title: "AI right in the browser with built-in AI APIs",
    description: `Learn how to use the new built-in AI APIs landing in Chrome, to enable your web app to translate, summarize, write, and rewrite content for your users. We’ll discuss how to transition seamlessly between cloud and on-device workloads, and the future of multimodal tasks in the browser.`,
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Thomas Steiner",
        avatarUrl: thomasSteinerAvatar,
        bio: `Thomas Steiner is a Developer Relations Engineer at Google, focused on Web AI, WebAssembly, and Project Fugu. He's an alum of University of Lyon (Postdoc), Polytechnic University of Barcelona (Ph. D.), and University of Karlsruhe (MA).`,
      },
    ],
  },
  {
    slug: "wintertc-server-side-standards",
    title: "WinterTC: Standards for server-side runtimes",
    description: `Server-side and edge JavaScript runtimes (such as Node.js, Deno, Bun, Cloudflare Workers…) have been adopting more and more web APIs over time. However, the web specifications that define these APIs are typically written with browsers in mind, without much regard for server-side runtimes, which has led to differences among those implementations.

In 2022 we started working towards solving this problem in WinterCG, which has now evolved into WinterTC, an Ecma Technical Committee aiming to publish standards for server-side runtimes. In this talk, we explore why this move was necessary, what we're working on, and how this will affect developers.`,
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Andreu Botella",
        avatarUrl: andreuBotellaAvatar,
        bio: `I'm a browser and standards engineer at Igalia, working on a number of things from implementing CSS features in browsers to working on standards proposals for both CSS and JavaScript. I am also one of the co-chairs of WinterTC, where we work on standards for server-side JavaScript runtimes.`,
      },
    ],
  },
  {
    slug: "line-yahoo-sponsor-session",
    title: "Yahoo!知恵袋における継続的な開発効率と品質向上の実践",
    description: `Yahoo!知恵袋の現場における取り組みについて、以下をキーワードにお話します。

- 開発現場で行っていること
  - TypeScript化
  - コーディング規約
  - フェールセーフな設計
  - リアーキテクト
- 特徴的な取り組み
  - カナリアリリース
  - feature flag
  - codemod
  - 生成AI`,
    kind: "sponsor session",
    day: "1",
    language: "Japanese",
    speakers: [SPONSORS_BY_NAME["LINEヤフー株式会社"]],
  },

  {
    slug: "music-visualization-javascript",
    title: "Bringing Songs to Life: Music Visualization with JavaScript",
    description: `Music and math are deeply intertwined, and visualization makes that connection visible. By translating sound into code, we can create interactive, real-time visuals that reveal the structure and emotion behind a song.

You'll learn the fundamental math behind music visualization, how audio frequencies and amplitude can be interpreted in code, and how JavaScript libraries can be used to create immersive, real-time experiences. Along the way, we'll look at creative examples, walk through live demos, and discuss how this intersection of art and code can inspire new ways of thinking about both.

Whether you're a developer curious about generative art or a musician with a love for code, this talk will leave you with tools and ideas to help bring your favorite songs to life.`,
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Ursula Cervantes",
        avatarUrl: ursulaCervantesAvatar,
        bio: `Ursula Cervantes is a senior web developer from Peru, currently based in Germany. She specializes in building creative, user-driven interfaces and has a passion for experimental side projects that blend technology with art. 

Outside of work, she’s often found making pottery, playing drums, or hiking through the woods—always in search of rhythm, texture, and pattern in the world around her.`,
      },
    ],
  },
  {
    slug: "javascript-parser-using-support",
    title:
      "JavaScript パーサーに using 対応をする過程で与えたエコシステムへの影響",
    description: `JavaScript には acorn という JavaScript パーサーがあります。
Next.js / Svelte / Webpack / Prettier / ESLint / Rollup (スター数順) など、多くの有名なライブラリが acorn に依存しています。

ECMAScript には、Explicit Resource Management という、通称 using 宣言 と呼ばれたりする仕様があります。
我々は、先日、acorn に using 対応するための PR を作成しました。
(baseballyama が実装して ota-meshi と marijnh がレビューをしました)
https://github.com/acornjs/acorn/commit/b4ae0d29384f2bf3fafac7d42f1c3e2ee9a48204

最初は単に using 対応をしたかっただけだったのですが、結果として、Node.js サポートに対する問題を発見し、acorn に直接依存しない他のツールチェーンにも影響を与える結果となりました。
この発表では、 Explicit Resource Management とはなんなのか、どうやって acorn に機能実装したのか、
そしてどのようにエコシステムに影響を与えることになったのかを発表します。

※ この発表は Svelteコアチームメンバーである baseballyama と ESLint / Vue / Svelte などのチームメンバーである ota-meshi による共同発表です。`,
    kind: "session",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "ota-meshi",
        avatarUrl: otaMeshiAvatar,
        bio: "ESLint / Vue / Svelte などのチームメンバー",
      },
      {
        type: "speaker",
        name: "baseballyama",
        avatarUrl: baseballyamaAvatar,
        bio: "Svelteコアチームメンバー",
      },
    ],
  },
  {
    slug: "state-of-deno",
    title: "The State of Deno",
    description: `Deno is a popular modern alternative to NodeJS, with a focus on security & modern tooling, while being compatible with Node.
The Deno team has worked on many different projects, be it in the open source ecosystem with Deno itself and JSR amongst other, and in a commercial setting with Deno Deploy and Deno Subhosting.

Find out what the team has been working on, including newer exciting projects.`,
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Leo Kettmeir",
        avatarUrl: leoKettmeirAvatar,
        bio: `I am a software engineer at Deno, where I've implemented key Web APIs—including WebSocket, WebGPU, and Web Storage—and contributed to core runtime features.

I focus on improving developer experience through tooling and documentation.
Additionally, I am a maintainer to jsr.io, a modern alternative to npm, where I lead work on documentation tooling and registry infrastructure.`,
      },
    ],
  },
  {
    slug: "reiwa-travel-sponsor-session",
    title: "スポンサーキーノート",
    description: "TBD",
    kind: "sponsor session",
    day: "1",
    language: "Japanese",
    speakers: [SPONSORS_BY_NAME["株式会社令和トラベル"]],
  },

  {
    slug: "bun-video-talk",
    title:
      "Bunで実現する高速レンダリング（原題：Rendering at the speed of Bun） (video talk)",
    description: `モダンなアプリケーション開発では、静的サイト生成、サーバーサイドレンダリング、ルーティング、ホットリロードといった複数のツールを組み合わせる必要があり、その多くは速度低下や複雑性の増大を招いてきた。
Bunの新しいRendering APIは、これらの要素をひとつに統合し、Bunならではの高いパフォーマンスと優れた開発体験を提供する。
本講演では、Rendering APIの仕組み、速度に最適化された理由、そしてそれが開発者にモダンなフルスタックアプリケーションをBunで構築する力をどのように与えるのかをジャレッドが解説する。`,
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Jarred Sumner",
        avatarUrl: jarredSumnerAvatar,
        bio: "Building Bun",
      },
    ],
  },
  {
    slug: "async-await-stack-trace",
    title:
      "JavaScriptにおけるasync/await呼び出しのスタックトレースの困難と実装",
    description: `お手元のChromeで以下のコードを実行してみてください！（もちろんしなくてもいいですよ）

    async function foo(x) { await bar(x); }
    async function bar(x) { await baz(x); }
    async function baz(x) {
        await x;
        throw new Error("error from baz");
    }
    foo(3).catch(e => { console.log(e.stack); });

こんなスタックトレースが表示されたでしょう！

    Error: error from baz
        at baz (<anonymous>:9:11)
        at async bar (<anonymous>:5:5)
        at async foo (<anonymous>:2:5)

うんうん、当たり前ですね。...本当に当たり前ですか！？

実は、JSエンジンの側から見ると、このようなasync/awaitが連なった関数呼び出しの中でエラーが発生した時にちゃんとスタックトレースを作るのって難しいんです。
このセッションでは、実際にJSCでのこの機能の開発に関わっている経験から、なぜこのようなスタックトレースを生成するのが難しいのか、そしてJSエンジンはどのように対応しているのかについて解説します。`,
    kind: "session",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "Sosuke Suzuki",
        avatarUrl: sosukeSuzukiAvatar,
        bio: "Systems Engineer at Bun, WebKit reviewer",
      },
    ],
  },
  {
    slug: "profiling-typescript-at-scale",
    title:
      "Profiling TypeScript at Scale: Finding and Fixing Compiler Bottlenecks",
    description: `As TypeScript projects grow, so does the pain of waiting for the compiler. What once felt instant on a small codebase can turn into a frustrating bottleneck and lost productivity across large teams and codebases.

In this talk, I’ll walk through how I used the TypeScript profiler to uncover hidden bottlenecks in a real-world monolith and applied a single fix that shaved minutes off every build. We didn’t need exotic tools or risky rewrites, just a better understanding of what the compiler was actually doing.`,
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Itai Satati",
        avatarUrl: itaiSatatiAvatar,
        bio: `Itai is a software developer with nearly a decade of experience and a love for large-scale web systems, the nuts and bolts of payment systems, performance optimizations, and all things TypeScript. Outside of coding, he’s a licensed pilot and marathon runner.`,
      },
    ],
  },
  {
    slug: "kakehashi-sponsor-session",
    title: "スポンサーキーノート",
    description: "TBD",
    kind: "sponsor session",
    day: "1",
    language: "Japanese",
    speakers: [SPONSORS_BY_NAME["株式会社カケハシ"]],
  },

  {
    slug: "v8-from-script-to-call-rcx",
    title: "V8: from <script> to `call $rcx`",
    description: `As a JavaScript developer you might rarely think about what happens inside the browser with your code. We throw megabytes of code at it and within milliseconds run a snappy webpage. How is that even possible?

In this talk we'll peel back the covers and follow your code on its journey from the point where the first network package arrives to when your application is running. We'll revisit the classic techniques like hidden-classes, JIT compilation, and delve into the current state of the compiler pipeline. You will gain an appreciation of how many techniques like lazy compilation or background mode come together to deliver the web experience we all have gotten used to. You'll learn what the engine can do for your code, and — more importantly — what it can't.`,
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Olivier Flückiger",
        avatarUrl: olivierFluckigerAvatar,
        bio: "I am an engineer on the Google V8 team, where I work on making JavaScript faster. Our focus is on pushing the boundaries of JavaScript performance with novel engine improvements and optimizations. Before V8 I developed a research VM for the R language called Ř. I love explaining and demystifying JITs for a wider audience.",
      },
    ],
  },
  {
    slug: "javascript-prototype-override",
    title:
      "Tragedy or Hope in the Commons: The Race for JavaScript Prototype Override",
    description: `JavaScript is a language of freedom. A defining feature of this freedom is the ability to override built-in prototypes.
JavaScript also becomes a commons especially in the browser. It's a shared space where your application code, its dependencies, and even parts of browser extensions all co-exist within the same context. And, yes, malicious attackers also live there.
In this commons, a constant struggle is happening between these stakeholders to override prototypes.

This session explores the forefront of this high-stakes game from three perspectives: the ecosystem, the attack/defense techniques, and the web standards.
Can we ever achieve a state of harmony in this commons? The answer isn't clear yet. But that's why we should discuss it at JSConf :)

Outline
 * Ecosystem: Competing Motivations for Overriding Prototypes
 * A Contested Ground: Techniques for Attack and Defense
   * Techniques for overwriting prototypes.
   * Methods of defending against it.
   * How to bypass those defenses.
   * More stealth modification tactics.
 * No Silver Bullet: A Look at Specifications Tackling This Issue
   * Object.freeze is too strong
   * ShadowRealm is not enough
   * SES is ongoing
 * Case Study 1: Information Theft From An Extension via Prototype Pollution
 * Case Study 2: How MetaMask Uses Endo
 * The Future: How should we go along with this freedom?
   * Can We or Should We Get Access to Native Prototypes?: Lessons from debate for "use initial" directive
   * What about outside of JS?: Proposal for CSP, debugging feature, etc.
`,
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "canalun",
        avatarUrl: canalunAvatar,
        bio: `Security Researcher at Flatt Security. Also developer of Firefox at Birchill.
Browser Enthusiast. Bug Hunter.`,
      },
    ],
  },
  {
    slug: "tver-sponsor-session",
    title: "スポンサーキーノート",
    description: "TBD",
    kind: "sponsor session",
    day: "1",
    language: "Japanese",
    speakers: [SPONSORS_BY_NAME["株式会社TVer"]],
  },
  {
    slug: "cybozu-sponsor-session",
    title: "大規模プロダクトで実践するAI活用の仕組みづくり",
    description: `概要：GitHub Copilot、Claude Code、Codexなど、様々なAIコーディングツールの登場によって、個々のエンジニアの生産性は向上しています。一方で、「なんかAIをうまく使っている人がいるらしい」という認識にとどまり、チーム全体でのAI活用の仕組みが整っていない現場も多いのではないでしょうか。

本セッションでは、サイボウズの大規模プロダクト「kintone」の開発チームで構築・実践したAI活用の仕組みについて、具体的な設計と活用方法、成果を紹介します。

具体的には次のトピックについてお話しします

- AIツールに依存しないドメイン知識の管理
- 陳腐化を防ぐ継続的なドキュメントの更新
- auto-compactによる記憶喪失対策
- より良いAIエージェントへの柔軟な乗り換えを可能にする開発フロー
- MCPの活用と、AIでの複雑UI構築の現在地
- チームを跨ぐAI活用の知見共有
- AI導入による具体的な成果

個人レベルのAI活用からチームレベルの活用へ移行したい方に向けて、実践的な知見を提供できるセッションにしたいと思っています。`,
    kind: "sponsor session",
    day: "1",
    language: "Japanese",
    speakers: [SPONSORS_BY_NAME["サイボウズ株式会社"]],
  },

  {
    slug: "technical-discussion-tc39",
    title: "Technical Discussion with TC39",
    description: "TBD",
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "TBD",
        avatarUrl: emptyAvatar,
        bio: "TBD",
      },
    ],
  },
  {
    slug: "module-harmony",
    title: "Module Harmony",
    description: `ES2025で新しく入ったImport AttributesやJSON Importsを含めてES Modulesがどのような仕様になっているのかを振り返り、モジュールの解決、フェッチ、リンクといった各インポートフェーズを軸に現在の提案仕様を俯瞰的に解説します。`,
    kind: "session",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "森内建太 (@petamoriken)",
        avatarUrl: petamorikenAvatar,
        bio: "Web標準を追うのが好きで、趣味でTC39会議をまとめたりZennに記事を書いたりしています。7年くらいFloat16ArrayをECMAScriptに入れてもらう活動をしていました。Denoコントリビューター。",
      },
    ],
  },
  {
    slug: "cloudinary-sponsor-session",
    title: "When AI Stops Talking and Starts Doing",
    description: `Generative AI is great at producing text — but what happens when it can actually do things? This talk explores the shift from AI as a conversational partner to AI as an active participant in real-world workflows.
We’ll look at how to connect AI systems to external tools and APIs using the Model Context Protocol (MCP). Instead of stopping at answers, AI can now execute file operations, manage digital assets, analyse images, and automate tasks that normally require human intervention. The result is a move from “chatting with AI” to “working with AI.”
Through practical examples, you’ll see how to:
Extend AI beyond text into action-oriented workflows.
Safely connect AI models to existing developer tools and services.
Combine structured function calls with unstructured conversation.
Build AI-powered assistants that handle files, images, and APIs as part of a single seamless interaction.
This session isn’t about abstract futures — it’s about what you can build today. Whether you’re a developer, architect, or product builder, you’ll leave with a clear understanding of how to bridge the gap between natural language input and real-world execution.
AI that acts changes the role it plays: from passive responder to proactive teammate. Come see what happens when AI stops talking — and starts doing.`,
    kind: "sponsor session",
    day: "1",
    language: "English",
    speakers: [SPONSORS_BY_NAME["Cloudinary"]],
  },
  {
    slug: "dwango-sponsor-session",
    title: "スポンサーキーノート",
    description: "TBD",
    kind: "sponsor session",
    day: "1",
    language: "Japanese",
    speakers: [SPONSORS_BY_NAME["株式会社ドワンゴ"]],
  },

  {
    slug: "i-cant-believe-its-not-javascript",
    title: "I Can't Believe It's Not JavaScript!",
    description: `When building interactive features on a webpage, JavaScript is usually the way to go. However, with great JavaScript dependencies comes great website instability. Even a minor undefined element can cause your entire webpage to crash.

That’s where going back to the basics comes in. Thanks to modern Web APIs, it’s now possible to reduce JavaScript dependency on a website by swapping out JS components for their native HTML element or CSS feature counterparts.

In this talk, we’ll take a look at how to use HTML and CSS to build simpler alternatives to popular JavaScript components such as accordions, modals, scroll transitions, carousels etc We’ll also take a look at the performance and accessibility benefits and real-life applications and use-cases of these components.`,
    kind: "session",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Jemima Abu",
        avatarUrl: jemimaAbuAvatar,
        bio: `Jemima Abu is an award-winning, self-taught Front End Developer who has been building accessible websites since 2017. She is a recognized Google Developer Expert, Microsoft MVP, and Certified Professional in Accessibility Core Competencies. She is passionate about improving diversity in tech and accessibility in web development.`,
      },
    ],
  },
  {
    slug: "money-forward-sponsor-session",
    title: "Micro Frontendsで築いた共通基盤の成長と、運用で積み重ねた試行の軌跡",
    description: `マネーフォワード クラウドでは、複数サービスに共通する承認・ワークフロー機能を共通基盤として切り出し、Web ComponentsをベースにMicro Frontendsを運用しています。
2023年7月のリリースから現在まで2年以上、実装検証の段階を含めると約3年にわたり、Micro Frontendsを使った設計・統合方式における試行錯誤を積み重ねてきました。

ランタイム統合によって柔軟なリリースを実現する一方で、運用を通じて見えてきた現実的な課題も少なくありません。
本セッションでは、その過程での意思決定の背景や、そこから得られた学びを中心にご紹介します。

以下のようなテーマを通して、Micro Frontendsの運用で見えてきたリアルに迫ります。

- UIをどこまで共通化すべきか ― 拡張性と組み込みコストのバランス
- Micro Frontends間やコンテナアプリケーションとの疎結合設計とその限界
- 認証・認可のアーキテクチャ変更の背景
- デザインの一貫性の課題
- 複数プロダクトを横断するログ・監視基盤の課題
- パフォーマンス最適化やi18nに向けた取り組み`,
    kind: "sponsor session",
    day: "1",
    language: "Japanese",
    speakers: [SPONSORS_BY_NAME["株式会社マネーフォワード"]],
  },
  {
    slug: "findy-sponsor-session",
    title: "スポンサーキーノート",
    description: "TBD",
    kind: "sponsor session",
    day: "1",
    language: "Japanese",
    speakers: [SPONSORS_BY_NAME["ファインディ株式会社"]],
  },

  {
    slug: "sponsor-lt-session",
    title: "Sponsor LT x 12",
    description: "Lightning talks by conference sponsors.",
    kind: "sponsor LT",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "sponsor",
        name: "Various Sponsors",
        url: "https://jsconf.jp",
        prText: "Lightning talks by conference sponsors.",
        logoUrl: emptyAvatar,
        plan: "sponsor",
      },
    ],
  },

  {
    slug: "technical-welfare-and-new-capitalistic-web-development",
    title: "TBD",
    description: `TBD`,
    kind: "keynote",
    day: "1",
    language: "Japanese",
    speakers: [
      {
        type: "speaker",
        name: "Jxck",
        avatarUrl: jxckAvatar,
        bio: "https://jxck.io",
      },
    ],
  },
  {
    slug: "tbd-by-allen",
    title:
      "From Chaos to Harmony: A History of JavaScript（混沌から調和へ ― JavaScriptの歴史）",
    description: [
      `A History of JavaScript In 2025, the World Wide Web is ubiquitous with over a billion websites accessible from billions of web-connected devices. Each of these devices runs a web browser or similar programs that are able to display or otherwise process the pages and apps those websites make available. The majority of web pages include source code written in JavaScript. Arguably the world’s most broadly deployed programming language, JavaScript is not only used for web pages but also for complex server, desktop, and embedded applications.

It all started in 1995 when the Web was new, tiny, chaotic, and in the early days of changing the world. Brendan Eich, a developer, working on the Netscape web browser, was tasked with creating a Java-sidekick web-scripting language. JavaScript, created in an epic ten-day hack, shipped first as a de facto Web standard.

One of the reasons for the success of the web is that it is based upon non-proprietary open technologies. Anybody should be able to create a web page that can be hosted by a variety of web servers from different vendors and accessed by a variety of browsers. But interoperability among independent implementations requires common specifications that all implementations must support. From its earliest days it was understood that JavaScript would need some form of standard specification. In 1996, the standardization process for JavaScript was begun.

We are here today because of the importance of modern JavaScript and we care about how it might evolve in the future. But history has lessons for us. We will be best prepared to build the future of JavaScript if we understand earlier phases of its development and evolution. This talk sets the stage for the future by taking a deep dive into the design decisions and techno-social processes that shaped modern standard JavaScript.`,
      "---",
      "",
      `2025年現在、ウェブは世界中に浸透し、数十億のデバイスから数十億のウェブサイトへアクセスできるようになっている。ほとんどのデバイスはブラウザや類似のソフトウェアを搭載し、ウェブページやアプリを処理している。そして、その大多数にはJavaScriptのコードが使われている。JavaScriptは世界で最も広く利用されるプログラミング言語のひとつであり、ウェブだけでなくサーバーやデスクトップ、組み込みアプリケーションにも活用されている。

その始まりは1995年。当時のウェブは小規模で混沌としていたが、世界を変えつつあった。Netscapeで働いていたブレンダン・アイクが、Javaと組み合わせるウェブ向けスクリプト言語の開発を任され、わずか10日間の開発でJavaScriptを完成させた。JavaScriptは事実上のウェブ標準として登場したのである。

ウェブが発展した背景には、オープンで非プロプライエタリな技術に基づいていたことがある。誰でも自由にウェブページを作成し、異なるベンダーのサーバーやブラウザで利用できるようにするには、共通の仕様が不可欠だった。1996年にJavaScriptの標準化が始まったのもそのためである。

現代においてJavaScriptがこれほど重要な存在である以上、その未来を考えるには過去を学ぶ必要がある。本講演では、現在の標準的なJavaScriptを形作った設計上の決断や社会技術的プロセスを振り返り、未来を築くための視座を提供する。`,
    ].join("\n\n"),
    kind: "keynote",
    day: "1",
    language: "English",
    speakers: [
      {
        type: "speaker",
        name: "Allen Wirfs Brock",
        avatarUrl: allenWirfsBrockAvatar,
        bio: "TBD",
      },
    ],
  },
] as const satisfies Talk[];

export type TalkSlug = (typeof TALKS)[number]["slug"];

export const TALKS_BY_SLUG: Record<TalkSlug, Talk> = TALKS.reduce(
  (acc, talk) => {
    acc[talk.slug as TalkSlug] = talk;
    return acc;
  },
  {} as Record<TalkSlug, Talk>,
);
