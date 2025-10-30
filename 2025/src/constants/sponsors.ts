import type { StaticImageData } from "next/image";
import cloudinaryLogo from "../../public/sponsor/cloudinary.svg";
import coderabbitLogo from "../../public/sponsor/coderabbit.svg";
import cybozuLogo from "../../public/sponsor/cybozu.png";
import denkiyagiLogo from "../../public/sponsor/denkiyagi.svg";
import dmmCorpLogo from "../../public/sponsor/dmm-corp.png";
import dwangoLogo from "../../public/sponsor/dwango.png";
import earthbrainLogo from "../../public/sponsor/earthbrain.svg";
import findyLogo from "../../public/sponsor/findy.svg";
import forciaLogo from "../../public/sponsor/forcia.png";
import fullerLogo from "../../public/sponsor/fuller.png";
import geekneerLogo from "../../public/sponsor/geekneer.png";
import hameeLogo from "../../public/sponsor/hamee.png";
import hatenaLogo from "../../public/sponsor/hatena.png";
import kakehashiLogo from "../../public/sponsor/kakehashi.png";
import kickflowLogo from "../../public/sponsor/kickflow_logo.svg";
import layerXLogo from "../../public/sponsor/layerx.svg";
import lycorpLogo from "../../public/sponsor/lycorp.png";
import medleyLogo from "../../public/sponsor/medley.png";
import miidasLogo from "../../public/sponsor/miidas.png";
import moneyForwardLogo from "../../public/sponsor/money-forward.svg";
import plaidLogo from "../../public/sponsor/plaid.png";
import reiwatravelLogo from "../../public/sponsor/reiwatravel.png";
import resilireLogo from "../../public/sponsor/resilire.png";
import taianIncLogo from "../../public/sponsor/taian-inc.png";
import techtouchLogo from "../../public/sponsor/techtouch.png";
import TimeTreeLogo from "../../public/sponsor/TimeTree.svg";
import tverLogo from "../../public/sponsor/tver.jpg";

type Plan = "premium" | "sponsor";

export type Sponsor = {
  type: "sponsor";
  plan: Plan;
  name: string;
  url: string;
  prText: string;
  logoUrl: string | StaticImageData;
};

export const SPONSORS = (
  [
    {
      type: "sponsor",
      plan: "premium",
      name: "デンキヤギ株式会社",
      url: "https://denkiyagi.jp/",
      logoUrl: denkiyagiLogo,
      prText:
        `JavaScriptで動作する帳票エンジン yagisan-reports を開発、販売しています。`.trim(),
    },
    {
      type: "sponsor",
      plan: "premium",
      name: "株式会社LayerX",
      url: "https://layerx.co.jp/",
      logoUrl: layerXLogo,
      prText:
        `LayerXは、「すべての経済活動を、デジタル化する。」をミッションに掲げ、SaaS+FinTechを軸にAIを中心としたソフトウェア体験を社会実装するスタートアップです。 法人支出管理サービス「バクラク」を中心に、デジタルネイティブなアセットマネジメント会社を目指す合弁会社「三井物産デジタル・アセットマネジメント」、大規模言語モデル（LLM）関連技術を活用し企業や行政における業務効率化・データ活用を支援する「AI・LLM事業」などを開発・運営しています。`.trim(),
    },
    {
      type: "sponsor",
      plan: "premium",
      name: "ミイダス株式会社",
      url: "https://careers.miidas.co.jp/tech/",
      logoUrl: miidasLogo,
      prText: `
ミイダスは独自の「可能性診断」によって、活躍できる可能性の高い会社からスカウトが届く世界初※の転職アプリです。
「可能性診断」では認知バイアスやパーソナリティ、行動特性などさまざまな項目を細かく分析。自分にフィットしたスカウトを受け取ることができます。

※「バイアス診断ゲーム」（認知バイアスを測定するテスト）と「ミイダス コンピテンシー診断(特性診断)」を使って人材の採用と配置・育成を可能にする無料のスマホアプリ診断サービスとして（2023年5月 未来トレンド研究機構）
`.trim(),
    },
    {
      type: "sponsor",
      plan: "premium",
      name: "LINEヤフー株式会社",
      url: "https://www.lycorp.co.jp/ja/",
      logoUrl: lycorpLogo,
      prText:
        `LINEヤフー株式会社は、2023年10月に、LINE株式会社やヤフー株式会社などのグループ会社による再編を経て誕生した日本最大級のテックカンパニーです。 『「WOW」なライフプラットフォームを創り、日常に「！」を届ける。』をミッションに掲げ、検索・ポータル、eコマース、メッセンジャー、広告など、多様な領域において事業を展開しています。`.trim(),
    },
    {
      type: "sponsor",
      plan: "premium",
      name: "株式会社令和トラベル",
      url: "https://www.reiwatravel.co.jp/",
      logoUrl: reiwatravelLogo,
      prText: `
令和トラベルは、「あたらしい旅行を、デザインする。」 をミッションに、" 旅行" におけるあたらしい体験や、あたらしい社会価値の提供を目指すデジタルトラベルエージェンシーです。
2022年4月より、旅行アプリ『NEWT（ニュート）』をローンチし、海外旅行事業をスタート。2024年9月にはシリーズAとして約48億円の資金調達を実施。さらに、2025年1月には「日本国内の宿・ホテルの予約サービス」をスタートし、国内旅行事業、フライト予約機能、グローバル展開と事業ポートフォリオの拡大を予定しています。
生成AIをはじめとしたテクノロジーに大きく投資し、旅行業界における予約や管理業務のDXを最大化、最適なカスタマー体験、これまでになかったパッケージツアー等を提供し、" 旅行 " というエクスペリエンスを通じた社会価値の創造に挑戦します。
`.trim(),
    },
    {
      type: "sponsor",
      plan: "premium",
      name: "株式会社カケハシ",
      url: "https://hrmos.co/pages/kakehashi",
      logoUrl: kakehashiLogo,
      prText: `
株式会社カケハシは日本の医療システムの再構築を目指すヘルステックスタートアップ企業です。テクノロジーを駆使し、患者さんにとってより良い医療を医療現場にとって持続可能な形で実現します。
薬局体験アシスタント「Musubi」のほか、複数プロダクトを開発・提供し、国内の薬局の1万店舗超をカバー。服薬期間中の患者フォローによる治療効果最大化や医薬品の市中在庫可視化・安定供給などをサポートします。薬局や医療機関をはじめとしたステークホルダーとともに、より良い医療を実現するプラットフォームを構築していきます。
`.trim(),
    },
    {
      type: "sponsor",
      plan: "premium",
      name: "サイボウズ株式会社",
      url: "https://cybozu.co.jp",
      logoUrl: cybozuLogo,
      prText: `
サイボウズはクラウドベースのグループウェアや業務改善サービスを軸に、社会のチームワーク向上を支援しています。
サイボウズではフロントエンドを最高にするメンバーを募集しています！ https://cybozu.co.jp/recruit/entry/
`.trim(),
    },
    {
      type: "sponsor",
      plan: "premium",
      name: "株式会社ドワンゴ",
      url: "https://dwango.co.jp/",
      logoUrl: dwangoLogo,
      prText:
        `ドワンゴは "ネットの向こうの、リアルを動かす。人間らしさと、つながるデジタルを。" をコーポレートメッセージとして、ネットに特化した通信制高校「N高等学校・S高等学校・R高等学校」、ネットとリアルを融合したオンライン大学「ZEN大学」、オンライン学習アプリ「ZEN Study」、ネットの双方向性を最大限に動画や生放送に取り込んだ「ニコニコ」、ネットとリアルの融合をテーマにした巨大イベント「ニコニコ超会議」など、新しい価値を創り出し、それを事業として成立させていくことに挑戦しつづける企業です。`.trim(),
    },
    {
      type: "sponsor",
      plan: "sponsor",
      name: "テックタッチ株式会社",
      url: "https://techtouch.jp/company/",
      logoUrl: techtouchLogo,
      prText:
        `テックタッチ株式会社は、「すべてのユーザーがシステムを使いこなせる世界に」をミッションに掲げ、AI型デジタルアダプションプラットフォーム（DAP）「テックタッチ」を提供。600万人超に利用され、大手企業や官公庁などに多数導入し、国内シェアNo.1を誇ります。また、定性データを高精度で分析する「AI Central Voice」も提供開始。ユーザーのシステムやAI活用支援により、テクノロジーを通じて企業のポテンシャルを最大限に引き出せるよう、あらゆる業界を支援します。`.trim(),
    },
    {
      type: "sponsor",
      plan: "sponsor",
      name: "株式会社Resilire",
      url: "https://corp.resilire.jp/",
      logoUrl: resilireLogo,
      prText: `
株式会社Resilire（レジリア）は、「人類に希望ある未来を。」を掲げ、サプライチェーンの持続可能危機に挑むスタートアップです。
世界各地で問題になっている気候変動・災害・紛争といった不確実性がモノづくりの現場に深刻な影響を与える中、Resilireは世界中のサプライチェーン情報をつなぐSaaSプラットフォームを提供することで、エンタープライズ企業を中心に製造業界から高い注目と期待を集めています。

当社が挑むのは、800兆円にのぼる製造産業の“持続可能性”という未踏領域。複雑かつグローバルなサプライチェーンに対し、唯一無二のデータ基盤でリスクを可視化・予防し、社会全体にレジリエンスをもたらすことを目指しています。
そんな当社のプロダクトチームはフルサイクルエンジニアリングを重視し、フロントエンドからAPI、インフラまで一気通貫で開発を推進。少数精鋭で日々プロダクトの本質に向き合っています。
`.trim(),
    },
    {
      type: "sponsor",
      plan: "premium",
      name: "株式会社マネーフォワード",
      url: "https://corp.moneyforward.com/",
      logoUrl: moneyForwardLogo,
      prText:
        `2012年5月に設立。「お金を前へ。人生をもっと前へ。」というミッションを掲げ、すべてのお金の課題解決を目指すSaaS/Fintech企業。個人向けお金の見える化サービス『マネーフォワード ME』や事業者向けバックオフィスSaaS『マネーフォワード クラウド』など、50を超える多様なサービスを提供。2015年のマネーフォワード Fintech 研究所設立を機に、産業の振興や政策提言への働きかけにも貢献。2017年東京証券取引所マザーズ市場に上場、2021年第一部へ市場変更。2022年4月に市場区分の見直しに伴い、プライム市場へ移行。`.trim(),
    },
    {
      type: "sponsor",
      plan: "sponsor",
      name: "株式会社EARTHBRAIN",
      url: "https://www.earthbrain.com/",
      logoUrl: earthbrainLogo,
      prText:
        `EARTHBRAINは、建設現場のデジタル革命で新たな世界を創ることをビジョンに掲げ、2021年に創業したジョイントベンチャーです。建設現場の見える化、施工の最適化のためのプロダクトを複数開発しており、既に世界20カ国以上で利用されています。`.trim(),
    },
    {
      type: "sponsor",
      plan: "premium",
      name: "ファインディ株式会社",
      url: "https://findy.co.jp/",
      logoUrl: findyLogo,
      prText:
        `「挑戦するエンジニアのプラットフォームをつくる。」をビジョンに掲げたスタートアップです。エンジニアスキルや生産性の可視化する独自技術をもとに、IT/Webエンジニアの転職サービス「Findy」「Findy Freelance」及び、エンジニア組織支援SaaS「Findy Team+」を展開しています。`.trim(),
    },
    {
      type: "sponsor",
      plan: "premium",
      name: "株式会社TVer",
      url: "https://tver.co.jp/",
      logoUrl: tverLogo,
      prText: `
株式会社TVerは、民放各局が制作した安心・安全なテレビコンテンツを、いつでもどこでも完全無料でお楽しみいただける民放公式テレビ配信サービス｢TVer（ティーバー）｣を主に運営しています。
「TVer」は、2015年のサービス開始以来、累計アプリダウンロード数は8,500万、月間ユニークブラウザ数は4,120万を超え、2024年には月間動画再生数も4.9億回を突破しました。
今後も「テレビを開放して、もっとワクワクする未来を」をミッションに、どこでも自由なスタイルでテレビの楽しみ方がもっと広がるサービスを目指し、新たなスタートを切っています。
`.trim(),
    },
    {
      type: "sponsor",
      plan: "sponsor",
      name: "CodeRabbit",
      url: "https://www.coderabbit.ai/",
      logoUrl: coderabbitLogo,
      prText:
        `CodeRabbitは、コードレビューの時間とバグを半分に減らすAIコードレビューサービスです`.trim(),
    },
    {
      type: "sponsor",
      plan: "sponsor",
      name: "合同会社DMM.com",
      url: "https://dmm-corp.com/",
      logoUrl: dmmCorpLogo,
      prText:
        `会員数4,507万人（※）を誇る総合サービスサイト「DMM.com」を運営。1998年の創業以来、多岐にわたる事業を展開し、現在は60以上のサービスを運営。※2024年2月時点`.trim(),
    },
    {
      type: "sponsor",
      plan: "premium",
      name: "Cloudinary",
      url: "https://cloudinary.com",
      logoUrl: cloudinaryLogo,
      prText: ``.trim(),
    },
    {
      type: "sponsor",
      plan: "sponsor",
      name: "フラー株式会社",
      url: "https://www.fuller-inc.com/",
      logoUrl: fullerLogo,
      prText: `
当社は、デジタル領域全般においてパートナーのビジネス課題を解決するソリューション企業です。
特にスマホアプリに軸足を置き、事業開発、デザイン、システム開発・運用、データ分析といった上流から下流まで幅広いソリューションを提供しています。
`.trim(),
    },
    {
      type: "sponsor",
      plan: "sponsor",
      name: "Hamee株式会社",
      url: "https://hamee.co.jp/recruit/love-odawara",
      logoUrl: hameeLogo,
      prText: `
私たちHameeのPurposeは「クリエイティブ魂に火をつける」です。
子どもの頃、時間も忘れて何かに夢中になったあのワクワク感を私たちは「クリエイティブ魂」と呼んでいます。
自分らしさを最大限に発揮し、挑戦し、成し遂げるまさにその時、クリエイティブ魂は燃え盛ります。
この炎が広がれば、世界はもっと楽しくなる。
世界中の人たちのクリエイティブ魂に火をつけること、これが私たちのPurposeです。
`.trim(),
    },
    {
      type: "sponsor",
      plan: "sponsor",
      name: "株式会社メドレー",
      url: "https://www.medley.jp",
      logoUrl: medleyLogo,
      prText: `
メドレーは、「医療ヘルスケアの未来をつくる」ミッションのもと、テクノロジーを活用した事業やプロジェクトを通じて、医療ヘルスケア分野の課題を解決していきます。それにより、病院や行政による「持続可能な医療」の実現と、患者さんやそのご家族にとって「納得できる医療」の実現を目指しています。
医療ヘルスケア領域の成果報酬型人材採用システム「ジョブメドレー」、オンライン動画研修サービス「ジョブメドレーアカデミー」、オンライン診療・服薬指導アプリ「CLINICS」などを運営しています。
`.trim(),
    },
    {
      type: "sponsor",
      plan: "sponsor",
      name: "フォルシア株式会社",
      url: "https://www.forcia.com/",
      logoUrl: forciaLogo,
      prText: `
フォルシアは、社員の半数近くをフルスタックエンジニアが占める技術者集団です。
膨大・複雑なデータを高速かつ正確に処理できる技術を強みとし、独自の技術基盤を用いたプロダクト開発や、旅行・観光業界のオンライン販売を支援するSaaS型サービスの提供などを行っています。
「検索」・「高速化」・「トラベルテック」・「JavaScript」、気になる単語がありましたらフォルシアHPをぜひご覧ください！柔軟な発想と技術力を活かして改題解決から社会を変える仲間を募集中です。（ https://www.forcia.com/jobs/ ）
`.trim(),
    },
    {
      type: "sponsor",
      plan: "sponsor",
      name: "株式会社プレイド",
      url: "https://plaid.co.jp/",
      logoUrl: plaidLogo,
      prText: `
プレイドは「データによって人の価値を最大化する」をミッションに掲げ、オンライン上のユーザー行動をリアルタイムに解析し、最適なアクションを届けるCX（顧客体験）プラットフォーム「KARTE」をはじめ、複数のプロダクトや事業を展開しています。
我々の技術組織では、リアルタイムデータ解析基盤や大規模分散システムの構築・運用、それらのコア技術を活かしたプロダクト開発、AI活用、開発者体験やパフォーマンスの向上など、多様な技術課題に取り組んでいます。
`.trim(),
    },
    {
      type: "sponsor",
      plan: "sponsor",
      name: "株式会社はてな",
      url: "https://hatena.co.jp",
      logoUrl: hatenaLogo,
      prText:
        `はてなは「はてなブログ」や「はてなブックマーク」などの個人ユーザー向けサービスに加え、企業向けサービスとしてオブザーバビリティプラットフォーム「Mackerel」、生成AIを活用した発話分析ソリューション「toitta」などを提供するWebサービス企業です。 17社以上の出版社様に導入いただいているマンガサービス向けビューワ「GigaViewer」（Web版/アプリ版）の提供や、Webサービスおよびアプリの共同開発も多く手掛けています。`.trim(),
    },
    {
      type: "sponsor",
      plan: "sponsor",
      name: "Geekneer, Inc.／株式会社ギークニア",
      url: "https://geekneer.com/",
      logoUrl: geekneerLogo,
      prText:
        `ギークニアの転職相談は「全員、元エンジニア」です。エンジニアのみなさんのキャリアサクセスを応援しています！`.trim(),
    },
    {
      type: "sponsor",
      plan: "sponsor",
      name: "株式会社kickflow",
      url: "https://kickflow.com/about",
      logoUrl: kickflowLogo,
      prText: `
私たちは、企業向けのクラウドワークフローであるkickflowを開発・提供しています。
kickflowは企業の生産性向上で高く評価されており、大手企業や成長中の企業に導入されています。
`.trim(),
    },
    {
      type: "sponsor",
      plan: "sponsor",
      name: "株式会社TAIAN",
      url: "https://taian-inc.com",
      logoUrl: taianIncLogo,
      prText: `TAIANは「アツさとあたたかさで溢れる社会を実現する」をビジョンに、お祝い×テクノロジーで複数事業を展開する新領域スタートアップです。現在は、ブライダル・バンケット業界向けバーティカルSaaS「Oiwaii」、Web招待状・席次表サービス「Concept Marry」、AIイベントプランナー「Canjii」を展開。業界V字回復を目指し、新規事業開発にも力を入れています。今後は、既存事業で蓄積した顧客データを活用し、独自のお祝い経済圏を構築することで、ビジョン実現を目指します。`.trim(),
    },
    {
      type: "sponsor",
      plan: "sponsor",
      name: "株式会社TimeTree",
      url: "https://timetreeapp.com/intl/ja",
      logoUrl: TimeTreeLogo,
      prText: `株式会社TimeTreeは「世の中の時間をつなげて、 世界中の人々がよりよい 明日を選択できるようにする」をミッションにかかげ、世の中の人々のよりスムーズな予定管理を可能にするためにカレンダーシェアアプリ「TimeTree」を開発運営しています。「TimeTree」は共有とコミュニケーションを前提にしたカレンダーサービスです。家族、パートナー、サークル、職場など複数人数の予定共有が簡単にできます。`.trim(),
    },
  ] as const satisfies Sponsor[]
).filter((s) => !!s.name && !!s.logoUrl && !!s.url);

type SponsorSlug = (typeof SPONSORS)[number]["name"];

export const SPONSORS_BY_NAME: Record<SponsorSlug, Sponsor> = SPONSORS.reduce(
  (acc, sponsor) => {
    acc[sponsor.name] = sponsor;
    return acc;
  },
  {} as Record<SponsorSlug, Sponsor>,
);
