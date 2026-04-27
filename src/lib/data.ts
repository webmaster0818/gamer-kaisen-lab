// ISP Service Data
export interface ISP {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  maxSpeed: string;
  monthlyPriceHome: string;
  monthlyPriceMansion: string;
  avgPing: number;
  avgJitter: number;
  avgDownload: number;
  avgUpload: number;
  pingNoon: number;
  pingEvening: number;
  pingNight: number;
  jitterNoon: number;
  jitterEvening: number;
  jitterNight: number;
  overallScore: number;
  pingScore: number;
  speedScore: number;
  priceScore: number;
  stabilityScore: number;
  features: string[];
  pros: string[];
  cons: string[];
  bestFor: string[];
  connectionType: string;
  ipv6: boolean;
  contractPeriod: string;
  initialCost: string;
  rank: number;
  fpsRank: number;
}

export const isps: ISP[] = [
  {
    id: "nuro",
    name: "NURO光",
    slug: "nuro",
    tagline: "下り最大2Gbps！ゲーマーに圧倒的人気",
    description: "ソニーネットワークコミュニケーションズが提供する高速光回線。独自回線で下り最大2Gbpsを実現し、低ping・高安定性でゲーマーから絶大な支持を得ています。",
    maxSpeed: "2Gbps",
    monthlyPriceHome: "5,200円",
    monthlyPriceMansion: "2,090〜2,750円",
    avgPing: 12,
    avgJitter: 2.8,
    avgDownload: 580,
    avgUpload: 520,
    pingNoon: 10,
    pingEvening: 14,
    pingNight: 11,
    jitterNoon: 2.1,
    jitterEvening: 3.8,
    jitterNight: 2.5,
    overallScore: 92,
    pingScore: 95,
    speedScore: 95,
    priceScore: 85,
    stabilityScore: 90,
    features: ["独自回線（ダークファイバー）", "下り最大2Gbps", "ONU一体型Wi-Fiルーター無料", "セキュリティソフト無料"],
    pros: ["業界トップクラスの通信速度", "ping値が非常に低い（平均12ms）", "Wi-Fiルーター・セキュリティ込みでコスパ良好", "独自回線で混雑しにくい"],
    cons: ["提供エリアが限定的", "開通工事が2回必要で時間がかかる", "マンションは導入済み物件のみ"],
    bestFor: ["FPSゲーマー", "配信者", "速度重視の方"],
    connectionType: "独自回線（GPON）",
    ipv6: true,
    contractPeriod: "3年 / 2年",
    initialCost: "44,000円（実質無料）",
    rank: 1,
    fpsRank: 1,
  },
  {
    id: "gamewith",
    name: "GameWith光",
    slug: "gamewith",
    tagline: "ゲーム特化！専用帯域でラグ知らず",
    description: "日本最大級のゲーム情報サイトGameWithが提供するゲーマー特化型光回線。専用帯域の確保とゲームサーバーへの直接接続により、ラグの少ない快適なゲーム環境を実現します。",
    maxSpeed: "1Gbps / 10Gbps",
    monthlyPriceHome: "6,160円",
    monthlyPriceMansion: "4,840円",
    avgPing: 10,
    avgJitter: 2.2,
    avgDownload: 450,
    avgUpload: 380,
    pingNoon: 8,
    pingEvening: 12,
    pingNight: 9,
    jitterNoon: 1.8,
    jitterEvening: 2.9,
    jitterNight: 2.0,
    overallScore: 90,
    pingScore: 97,
    speedScore: 85,
    priceScore: 70,
    stabilityScore: 95,
    features: ["ゲーム専用帯域確保", "ゲームサーバー直接接続", "IPv4 over IPv6対応", "プロチーム採用実績"],
    pros: ["ゲームに特化した専用帯域", "ping値が業界最低水準（平均10ms）", "ジッター値が安定", "ゲームサーバーとの直接接続"],
    cons: ["月額料金がやや高め", "回線自体はフレッツ光", "提供エリアはNTT東西エリア"],
    bestFor: ["競技FPSプレイヤー", "eスポーツ志向", "ping値最優先の方"],
    connectionType: "光コラボ（フレッツ光）",
    ipv6: true,
    contractPeriod: "2年",
    initialCost: "2,200円",
    rank: 2,
    fpsRank: 2,
  },
  {
    id: "hi-ho",
    name: "hi-ho with games",
    slug: "hi-ho",
    tagline: "FPS特化！ゲーム専用帯域で安定接続",
    description: "老舗プロバイダhi-hoが提供するゲーム専用光回線。フレッツ光回線内にhi-ho専用のゲーミングレーンを設け、混雑時間帯でも安定した低遅延通信を実現します。",
    maxSpeed: "1Gbps / 10Gbps",
    monthlyPriceHome: "6,160円",
    monthlyPriceMansion: "4,840円",
    avgPing: 13,
    avgJitter: 2.5,
    avgDownload: 420,
    avgUpload: 350,
    pingNoon: 11,
    pingEvening: 16,
    pingNight: 12,
    jitterNoon: 2.0,
    jitterEvening: 3.2,
    jitterNight: 2.3,
    overallScore: 86,
    pingScore: 88,
    speedScore: 82,
    priceScore: 72,
    stabilityScore: 90,
    features: ["ゲーム専用帯域", "専用ゲーミングレーン", "ゲーミングルーターパック", "プロチームスポンサー"],
    pros: ["ゲーム専用の通信帯域", "ゲーミングルーターセットあり", "プロeスポーツチームが採用", "10Gbpsプランあり"],
    cons: ["月額料金が高め", "毎月の申し込み上限あり", "知名度がまだ低い"],
    bestFor: ["FPSガチ勢", "安定性重視の方", "ゲーミングルーターセットが欲しい方"],
    connectionType: "光コラボ（フレッツ光）",
    ipv6: true,
    contractPeriod: "2年",
    initialCost: "3,300円",
    rank: 3,
    fpsRank: 3,
  },
  {
    id: "au-hikari",
    name: "auひかり",
    slug: "au-hikari",
    tagline: "独自回線で夜も安定！高速＆低遅延",
    description: "KDDIが提供する独自回線の光インターネット。NTT回線とは異なる独自網を使用するため、回線混雑が起きにくく、夜間のゴールデンタイムでも安定した通信が可能です。",
    maxSpeed: "1Gbps / 5Gbps / 10Gbps",
    monthlyPriceHome: "5,610円",
    monthlyPriceMansion: "4,180円",
    avgPing: 16,
    avgJitter: 3.5,
    avgDownload: 500,
    avgUpload: 450,
    pingNoon: 14,
    pingEvening: 19,
    pingNight: 15,
    jitterNoon: 2.8,
    jitterEvening: 4.5,
    jitterNight: 3.2,
    overallScore: 84,
    pingScore: 82,
    speedScore: 90,
    priceScore: 80,
    stabilityScore: 85,
    features: ["KDDI独自回線", "5G/10Gプラン", "auスマートバリュー", "高額キャッシュバック"],
    pros: ["独自回線で混雑に強い", "夜間でも速度が安定", "auスマホとセット割引", "高額キャッシュバック"],
    cons: ["提供エリアが限定的（関西・東海一部なし）", "マンションはプラン選択不可", "開通工事に時間がかかることがある"],
    bestFor: ["auユーザー", "夜間プレイが多い方", "安定性重視の方"],
    connectionType: "独自回線（KDDI）",
    ipv6: true,
    contractPeriod: "3年（ずっとギガ得）/ 2年",
    initialCost: "41,250円（実質無料）",
    rank: 4,
    fpsRank: 4,
  },
  {
    id: "docomo-hikari",
    name: "ドコモ光",
    slug: "docomo-hikari",
    tagline: "シェアNo.1！IPv6対応で快適ゲーミング",
    description: "NTTドコモが提供する光コラボ回線。シェアNo.1の安心感とIPv6 IPoE対応プロバイダの組み合わせで、十分なゲーミング環境を実現。ドコモユーザーならスマホとのセット割が魅力です。",
    maxSpeed: "1Gbps / 10Gbps",
    monthlyPriceHome: "5,720円",
    monthlyPriceMansion: "4,400円",
    avgPing: 19,
    avgJitter: 4.0,
    avgDownload: 350,
    avgUpload: 300,
    pingNoon: 16,
    pingEvening: 23,
    pingNight: 18,
    jitterNoon: 3.2,
    jitterEvening: 5.0,
    jitterNight: 3.8,
    overallScore: 78,
    pingScore: 72,
    speedScore: 75,
    priceScore: 78,
    stabilityScore: 75,
    features: ["v6プラス対応", "シェアNo.1", "ドコモセット割", "Wi-Fiルーター無料レンタル"],
    pros: ["プロバイダ選択の自由度が高い", "ドコモスマホとセット割引", "v6プラスで速度改善", "全国エリアカバー"],
    cons: ["回線自体はフレッツ光（混雑の可能性）", "プロバイダにより速度差がある", "ゲーム特化の機能はなし"],
    bestFor: ["ドコモユーザー", "ライトゲーマー", "コスパ重視の方"],
    connectionType: "光コラボ（フレッツ光）",
    ipv6: true,
    contractPeriod: "2年",
    initialCost: "戸建22,000円/マンション16,500円（実質無料）",
    rank: 5,
    fpsRank: 5,
  },
];

// Game title data
export interface GameTitle {
  id: string;
  name: string;
  slug: string;
  genre: string;
  requiredPing: number;
  requiredJitter: number;
  requiredDownload: number;
  platform: string[];
  description: string;
  recommendations: string[];
  pingImportance: "critical" | "high" | "medium";
}

export const gameTitles: GameTitle[] = [
  {
    id: "apex",
    name: "Apex Legends",
    slug: "apex",
    genre: "バトロワFPS",
    requiredPing: 20,
    requiredJitter: 5,
    requiredDownload: 30,
    platform: ["PC", "PS5", "PS4", "Xbox", "Switch"],
    description: "3人1チームのバトルロイヤルFPS。瞬時の判断と正確なエイムが求められるため、低pingは必須。特にランクマッチでは回線品質がダイレクトに戦績に影響します。",
    recommendations: ["nuro", "gamewith", "hi-ho"],
    pingImportance: "critical",
  },
  {
    id: "valorant",
    name: "VALORANT",
    slug: "valorant",
    genre: "タクティカルFPS",
    requiredPing: 15,
    requiredJitter: 3,
    requiredDownload: 20,
    platform: ["PC"],
    description: "5v5のタクティカルシューター。1発の被弾が命取りになるゲーム性のため、ping値・ジッター値ともに最もシビアなタイトルの一つ。競技シーンではping10ms以下が理想です。",
    recommendations: ["gamewith", "nuro", "hi-ho"],
    pingImportance: "critical",
  },
  {
    id: "ff14",
    name: "ファイナルファンタジーXIV",
    slug: "ff14",
    genre: "MMORPG",
    requiredPing: 50,
    requiredJitter: 10,
    requiredDownload: 30,
    platform: ["PC", "PS5", "PS4", "Xbox"],
    description: "世界最大級のMMORPG。通常プレイではping50ms以下で快適ですが、零式・絶コンテンツなどの高難易度レイドでは、ギミック処理のため低pingが有利になります。",
    recommendations: ["nuro", "au-hikari", "gamewith"],
    pingImportance: "medium",
  },
  {
    id: "monster-hunter",
    name: "モンスターハンター",
    slug: "monster-hunter",
    genre: "アクションRPG",
    requiredPing: 50,
    requiredJitter: 10,
    requiredDownload: 30,
    platform: ["PC", "PS5", "Switch"],
    description: "最大4人での協力プレイが魅力のアクションRPG。回線が不安定だとモンスターの動きがワープしたり、攻撃判定がずれる原因に。安定した回線が快適なハンティングの鍵です。",
    recommendations: ["nuro", "au-hikari", "docomo-hikari"],
    pingImportance: "medium",
  },
  {
    id: "splatoon",
    name: "スプラトゥーン3",
    slug: "splatoon",
    genre: "TPS（シューター）",
    requiredPing: 20,
    requiredJitter: 5,
    requiredDownload: 20,
    platform: ["Switch"],
    description: "任天堂の人気TPS。P2P通信を採用しているため、自分の回線品質が全プレイヤーに影響します。通信エラー（回線落ち）を防ぐためにも、安定した低ping回線が重要です。",
    recommendations: ["nuro", "gamewith", "au-hikari"],
    pingImportance: "high",
  },
  {
    id: "fortnite",
    name: "フォートナイト",
    slug: "fortnite",
    genre: "バトロワTPS/FPS",
    requiredPing: 25,
    requiredJitter: 5,
    requiredDownload: 25,
    platform: ["PC", "PS5", "PS4", "Xbox", "Switch", "モバイル"],
    description: "建築とシューティングを組み合わせたバトルロイヤル。建築バトルでは一瞬の遅延が致命的。特にアリーナモードやカスタムマッチでは、低ping環境が勝率に直結します。",
    recommendations: ["nuro", "gamewith", "hi-ho"],
    pingImportance: "high",
  },
];

// FAQ data
export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "ゲームに最適なping値はどれくらいですか？",
    answer: "FPS・TPSゲームでは15ms以下が理想的、20ms以下なら快適にプレイできます。MMORPGでは50ms以下であれば問題ありません。格闘ゲームでは10ms以下が推奨されます。",
  },
  {
    question: "ジッター値とは何ですか？なぜ重要ですか？",
    answer: "ジッターはping値の揺れ幅（安定性）を表す指標です。ping値が低くてもジッターが高いと、通信が不安定になりラグが発生します。ゲームではジッター5ms以下が理想的です。",
  },
  {
    question: "光回線の速度とping値は関係ありますか？",
    answer: "ダウンロード速度とping値は別の指標です。速度が速くてもping値が高い場合があります。ゲームでは速度よりもping値とジッターの方が重要です。ただし、大型アップデートのダウンロードには速度も重要になります。",
  },
  {
    question: "マンションでもゲーム向け回線は使えますか？",
    answer: "はい、多くのゲーム向け回線はマンションタイプも提供しています。ただし、NURO光は導入済み物件のみ、auひかりは配線方式によって速度が異なります。GameWith光やhi-ho with gamesはフレッツ光回線なので、多くのマンションで利用可能です。",
  },
  {
    question: "有線接続とWi-Fiではどちらがゲームに適していますか？",
    answer: "有線接続（LANケーブル）が圧倒的に推奨です。Wi-Fiは電波干渉や距離による速度低下があり、ping値・ジッター値ともに悪化します。特にFPSでは有線接続が必須と言えます。",
  },
  {
    question: "回線を変えたらすぐにping値は改善しますか？",
    answer: "回線の品質自体は開通後すぐに反映されますが、ルーターの設定最適化やLANケーブルの品質（CAT6以上推奨）も影響します。また、ゲームサーバーの場所によってもping値は変わります。",
  },
  {
    question: "IPv6対応の回線はゲームに有利ですか？",
    answer: "IPv6 IPoE接続は、従来のPPPoE接続と比べて混雑を回避できるため、特に夜間の通信品質が向上します。ゲーム向け回線を選ぶ際はIPv6 IPoE対応を確認しましょう。",
  },
  {
    question: "10Gbpsプランは必要ですか？",
    answer: "オンラインゲーム自体に10Gbpsは不要です。ゲームの通信量は数Mbps程度なので、1Gbpsプランで十分です。ただし、4Kストリーミング配信をしながらプレイする場合や、大容量ゲームの頻繁なダウンロードがある場合は10Gbpsプランのメリットがあります。",
  },
  {
    question: "夜の時間帯に速度が落ちるのはなぜですか？",
    answer: "19時〜23時はインターネット利用者が集中する「ゴールデンタイム」で、回線が混雑するためです。独自回線（NURO光・auひかり）やゲーム専用帯域（GameWith光・hi-ho）は混雑の影響を受けにくい設計になっています。",
  },
  {
    question: "プロゲーマーはどの回線を使っていますか？",
    answer: "プロチームではNURO光、GameWith光、hi-ho with gamesの採用実績があります。特にGameWith光とhi-ho with gamesはプロチームのスポンサーとしても活動しており、競技レベルの回線品質が保証されています。",
  },
  {
    question: "回線工事にはどれくらい時間がかかりますか？",
    answer: "一般的に申し込みから開通まで2〜4週間です。NURO光は工事が2回必要なため1〜3ヶ月かかることがあります。引っ越しシーズン（3〜4月）はさらに混雑するため、早めの申し込みをおすすめします。",
  },
  {
    question: "ゲーミングルーターは必要ですか？",
    answer: "必須ではありませんが、QoS（通信優先制御）機能でゲーム通信を優先させたり、複数デバイス接続時の安定性を高める効果があります。hi-ho with gamesではゲーミングルーターパック（月額1,100円）も提供しています。",
  },
  {
    question: "PS5とPCでは必要な回線品質は異なりますか？",
    answer: "基本的なping値・速度の要件は同じですが、PCはゲーム本体のアップデートが頻繁で容量も大きいため、ダウンロード速度の重要性が高くなります。PS5はIPv6に対応しているため、IPv6対応回線でさらに快適になります。",
  },
  {
    question: "モバイル回線（5G）でゲームはできますか？",
    answer: "5Gの速度は十分ですが、ping値が20〜50msと高めで、ジッターも大きくなりがちです。カジュアルプレイなら問題ありませんが、ランクマッチやFPSでは光回線が推奨です。",
  },
  {
    question: "乗り換え時に回線が使えない期間はありますか？",
    answer: "多くの場合、新回線の開通後に旧回線を解約すれば空白期間は発生しません。ただし、工事日の調整が必要なため、事前に新回線の開通日を確認してから旧回線の解約手続きを行いましょう。",
  },
];

// Helper function to get ISP by slug
export function getISPBySlug(slug: string): ISP | undefined {
  return isps.find((isp) => isp.slug === slug);
}

// Helper function to get game by slug
export function getGameBySlug(slug: string): GameTitle | undefined {
  return gameTitles.find((game) => game.slug === slug);
}

// Helper to get ISPs sorted by rank
export function getISPsByRank(): ISP[] {
  return [...isps].sort((a, b) => a.rank - b.rank);
}

// Helper to get ISPs sorted by FPS rank
export function getISPsByFPSRank(): ISP[] {
  return [...isps].sort((a, b) => a.fpsRank - b.fpsRank);
}
