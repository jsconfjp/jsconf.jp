import type { StaticImageData } from "next/image";

type Plan = "premium" | "sponsor";

export type Sponsor = {
  type: "sponsor";
  plan: Plan;
  name: string;
  url: string;
  prText: string;
  logoUrl: string | StaticImageData;
};

// 2026年スポンサー。スポンサーセッションを持つ企業をプレミアムとして表示する。
export const SPONSORS: Sponsor[] = [
  {
    type: "sponsor",
    plan: "premium",
    name: "ミイダス株式会社",
    url: "https://miidas.co.jp/",
    logoUrl: "/2026/sponsor/miidas-2026.png",
    prText: `
ミイダスは、世界初※1の採用・転職におけるミスマッチを減らしながら、入社後の活躍までを支援する採用・転職サービスです。人口減少による人材不足が深刻化する中、主に中小企業を対象に「採用力」の向上を支援。AIや独自のビッグデータを活用し、採用課題の可視化から応募獲得、定着・活躍支援までを一気通貫で提供し、企業価値向上に貢献しています。

※「バイアス診断ゲーム」（認知バイアスを測定するテスト）と「ミイダス コンピテンシー診断(特性診断)」を使って人材の採用と配置・育成を可能にする無料のスマホアプリ診断サービスとして（2023年5月 未来トレンド研究機構）
`.trim(),
  },
  {
    type: "sponsor",
    plan: "premium",
    name: "AnotherBall Pte Ltd",
    url: "https://anotherball.com/",
    logoUrl: "/2026/sponsor/anotherball-2026.ico",
    prText:
      `AnotherBallは「境界を越え、通じあえるユカイな体験を創る。」をミッションに掲げるスタートアップです。1分でVTuberになれるアプリ「Avvy」や、ゲーム・映像制作を行うスタジオメイフラワーを運営しています。「日本に根ざす“妄想力“を加速させる事業を同時多発的に創る」という信念のもと、クリエイターの自由な世界観の源を支え、エンタメ×グローバルの交差点で事業を展開していきます。`.trim(),
  },
  {
    type: "sponsor",
    plan: "premium",
    name: "サイボウズ株式会社",
    url: "https://cybozu.co.jp/",
    logoUrl: "/2026/sponsor/cybozu-2026.svg",
    prText:
      `サイボウズはクラウドベースのグループウェアや業務改善サービスを軸に、社会のチームワーク向上を支援しています。 サイボウズではプロダクトを最高にするメンバーを募集しています！`.trim(),
  },
  {
    type: "sponsor",
    plan: "premium",
    name: "Arkor",
    url: "https://arkor.ai",
    logoUrl: "/2026/sponsor/arkor-2026.webp",
    prText:
      `TypeScript でLLMのファインチューニングを可能にするフレームワーク「Arkor」を開発。サンフランシスコと札幌を拠点に活動するスタートアップ企業です。`.trim(),
  },
  {
    type: "sponsor",
    plan: "premium",
    name: "株式会社ドワンゴ",
    url: "https://dwango.co.jp/",
    logoUrl: "/2026/sponsor/dwango.png",
    prText:
      `ドワンゴは "ネットの向こうの、リアルを動かす。人間らしさと、つながるデジタルを。" をコーポレートメッセージとして、ネットに特化した通信制高校「N高等学校・S高等学校・R高等学校」、ネットとリアルを融合したオンライン大学「ZEN大学」、オンライン学習アプリ「ZEN Study」、ネットの双方向性を最大限に動画や生放送に取り込んだ「ニコニコ」、ネットとリアルの融合をテーマにした巨大イベント「ニコニコ超会議」など、新しい価値を創り出し、それを事業として成立させていくことに挑戦しつづける企業です。`.trim(),
  },
  {
    type: "sponsor",
    plan: "premium",
    name: "supateam株式会社",
    url: "https://supateam.com",
    logoUrl: "/2026/sponsor/supateam-2026.svg",
    prText:
      `
AIの力を100%引き出しリスクもコントロールする、ハーネスエンジニアリングゲートウェイ。
「supateam」は、GitHub Claude・Cursor・Jiraなどを連携するだけでAI開発の活用度・ROI・リスクを自動レポーティング。感覚値だったAI活用を経営に説明できる数字へ変えます。コーディングルール整備やツール活用の偏り検知など、データに基づく改善提案を提供します。
`.trim(),
  },
  {
    type: "sponsor",
    plan: "premium",
    name: "株式会社Linc’well",
    url: "https://linc-well.com/",
    logoUrl: "/2026/sponsor/lincwell-2026.svg",
    prText: `
Linc'wellは「テクノロジーを通じて、医療を一歩前へ」をミッションに掲げ、医療を効率化し患者の利便性と医療の質の向上を目指した事業展開を行っています。

オンライン・オフラインで医療従事者・患者をつなぐヘルスケアプラットフォーム事業を主力としており、「オンライン診療システム提供サービス」「クリニックDX支援サービス」「ヘルスケアECサービス」の3つのサービスを提供しています。

多種多様なWebアプリケーションが存在し、サービスの成長に伴いUXの向上や設計の見直しやリファクタリングといった保守性を考慮した改善の重要度が上がってきています。
`.trim(),
  },
  {
    type: "sponsor",
    plan: "premium",
    name: "NCDC株式会社",
    url: "https://ncdc.co.jp/",
    logoUrl: "/2026/sponsor/ncdc-2026.svg",
    prText:
      `NCDCは、フロントエンドからバックエンドまでTypeScriptを中心とした技術スタックでプロダクト開発を行っています。新規サービスの立ち上げからグロースまで伴走し、生成AIやクラウド技術を活用した開発に取り組んでいます。`.trim(),
  },
  {
    type: "sponsor",
    plan: "premium",
    name: "株式会社マネーフォワード",
    url: "https://corp.moneyforward.com/",
    logoUrl: "/2026/sponsor/money-forward-2026.png",
    prText:
      `
「お金を前へ。人生をもっと前へ。」をMissionに、すべての人のお金の課題解決を目指し、お金の見える化サービス『マネーフォワード ME』やバックオフィスSaaS『マネーフォワード クラウド』などを提供しています。
`.trim(),
  },
  {
    type: "sponsor",
    plan: "premium",
    name: "株式会社LayerX",
    url: "https://layerx.co.jp/",
    logoUrl: "/2026/sponsor/layerx-2026.svg",
    prText:
      `LayerXは、「すべての経済活動を、デジタル化する。」をミッションに掲げるAIカンパニーです。バックオフィス向けAIエージェントサービス「バクラク」事業、資産運用サービス「ALTERNA（オルタナ）」を提供するFintech事業、エンタープライズ向けAIプラットフォーム「Ai Workforce」事業などの複合的な事業を通して日本の社会課題を解決し、AIの力で人々の創造力がより発揮される未来をつくります。`.trim(),
  },
  {
    type: "sponsor",
    plan: "premium",
    name: "Vercel",
    url: "https://vercel.com/",
    logoUrl: "/2026/sponsor/vercel-2026.png",
    prText:
      `Vercelは、次世代のAI向けエージェンティック・インフラを開発しています。Next.js、AI SDK、v0の開発元であるVercelは、人間とAIエージェントが共にソフトウェアを開発、リリース、拡張できるプラットフォームを提供しています。Meta、Ramp、Supremeをはじめとする、世界中の数多くの開発者がVercelを使って日々プロダクトをリリースしています。`.trim(),
  },
  {
    type: "sponsor",
    plan: "sponsor",
    name: "株式会社ビーワークス",
    url: "https://beeworks.co.jp",
    logoUrl: "/2026/sponsor/beeworks-2026.svg",
    prText:
      `
2001年創業、200名規模の総合デザイン会社です。Web制作・出版サービス・自社ゲーム開発など、幅広い事業を展開しています。クライアントワークにおいては、課題の本質を見極め、ブランディング・UX/UI設計からアウトプットの制作まで、工程・媒体を問わないデザインを通して課題解決をサポートしています。また、自社ゲームブランド BEEWORKS GAMESの代表作『なめこ栽培キット』シリーズは、全世界累計6,000万ダウンロードを突破し、10年以上にわたり多くのファンに親しまれています。
`.trim(),
  },
  {
    type: "sponsor",
    plan: "premium",
    name: "株式会社enechain",
    url: "https://enechain.co.jp/",
    logoUrl: "/2026/sponsor/enechain-2026.webp",
    prText: `enechainは電力・燃料・環境価値を扱うエネルギーのマーケットプレイスを運営するスタートアップです。そして最近のニュースではエネルギーの話題が尽きません。2016年の電力完全自由化・脱炭素の加速を背景に、エネルギー取引のリスク管理ニーズは急拡大しています。レガシーな領域且つ高い技術要求が求められる国家インフラ級のプラットフォームを、モダンな技術で自社エンジニアチームが開発することにこだわっています。JSカンファレンスに集まるエンジニアの皆さんと一緒に、場を精一杯に盛り上げていきます！ぜひよろしくお願いします！`.trim(),
  },
  {
    type: "sponsor",
    plan: "premium",
    name: "株式会社EVERLANE",
    url: "https://codecast.jp/",
    logoUrl: "/2026/sponsor/codecast-2026.png",
    prText:
      `CodeCastはIT特化の人材エージェントです。転職支援からフリーランスや副業まで多様な働き方を支援します。定期面談やES作成・面接対策などキャリア並走型のサポート。YouTube「Inside the Code」やイベントを通じ、選択肢を広げる環境作りも行なっています。
つながる、広がる、次のキャリア。AI時代も自分らしく働くために、CodeCastは"次"につながるキャリアをサポートします。`.trim(),
  },
  {
    type: "sponsor",
    plan: "sponsor",
    name: "CodeRabbit, Inc.",
    url: "https://www.coderabbit.ai/ja",
    logoUrl: "/2026/sponsor/coderabbit.svg",
    prText:
      `CodeRabbitは、コードレビューの時間とバグを半分に減らすAIコードレビューサービスです。GitHubやGitLab、BitBucketなどと連携し、PRを自動的にコードレビューします。OSSプロジェクト、VS Code機能拡張、CLIは無料で利用可能です。`.trim(),
  },
  {
    type: "sponsor",
    plan: "premium",
    name: "クーガー株式会社",
    url: "https://couger.co.jp/",
    logoUrl: "/2026/sponsor/couger-2026.ico",
    prText:
      `クーガーは、人型AIプラットフォーム「LUDENS」を開発・展開しています。そこから生まれたAIキャラクター「レイチェル」は、現実世界をゲームのようにつなげるナビゲーター。現在、全国約7,000店舗のファミリーマートに導入され、店長の業務を支援しています。私たちは、あらゆる業界・職種で働く人々に寄り添い、一人ひとりの成長を加速させるAIを提供していきます。`.trim(),
  },
  {
    type: "sponsor",
    plan: "premium",
    name: "GMO Flatt Security株式会社",
    url: "https://flatt.tech/",
    logoUrl: "/2026/sponsor/gmo-flatt-security-2026.png",
    prText:
      `
GMO Flatt Securityは、開発組織のセキュリティおよびソフトウェアサプライチェーンの保護に注力する、サイバーセキュリティ企業です。Web/モバイル/クラウド/LLM/IoT領域における世界トップクラスのペネトレーションテストと、セキュリティAIエージェントTakumiを組み合わせたサービスを提供しています。

Takumiは、安全な攻撃シミュレーションを伴うハイブリッドなSAST/DAST解析により、誤検知を限りなくゼロに抑えます。さらに、悪性パッケージのブロックやCI/CDワークフローの保護を通じて、お客様のソフトウェアサプライチェーンを強力に守り抜きます。
`.trim(),
  },
  {
    type: "sponsor",
    plan: "sponsor",
    name: "株式会社ギークニア",
    url: "https://geekneer.com/",
    logoUrl: "/2026/sponsor/geekneer.png",
    prText:
      `全てのカウンセラーが元エンジニアのギークニア。JavaScriptをつかって開発を行うエンジニアのみなさんの転職のシーンにおいて、IT企業での実務の経験者たちならではの近い目線からお力添えをさせていただきます。JSConfJPを応援して2年目、今年も盛会となることを祈っております！`.trim(),
  },
];

type SponsorSlug = (typeof SPONSORS)[number]["name"];

/**
 * スポンサー名から Sponsor を引くマップ。スポンサーセッションのスピーカーなどから
 * 参照する想定の公開 API。
 * @public
 */
export const SPONSORS_BY_NAME: Record<SponsorSlug, Sponsor> = SPONSORS.reduce(
  (acc, sponsor) => {
    acc[sponsor.name] = sponsor;
    return acc;
  },
  {} as Record<SponsorSlug, Sponsor>,
);
