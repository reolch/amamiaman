/**
 * ヘッダーナビゲーションの定義
 *
 * ページを追加・削除・リネームするときはここだけ編集してください。
 * - href        : リンク先パス
 * - label       : 表示テキスト
 * - dropdown    : サブメニュー（省略可）
 *   - href      : サブリンク先パス
 *   - label     : サブ表示テキスト
 */
const NAV_ITEMS = [
  { href: '/', label: 'HOME' },
  { href: '/passion', label: 'あまんのこだわり' },
  {
    href: '/snorkelling',
    label: 'マリンアクティビティ',
    dropdown: [
      { href: '/snorkelling', label: 'シュノーケリング' },
      { href: '/seaKayak',    label: 'シーカヤック' },
      { href: '/glassboat',   label: 'グラスボート' },
    ],
  },
  {
    href: '/lodging',
    label: '施設紹介',
    dropdown: [
      { href: '/lodging', label: '宿泊施設' },
      { href: '/other',   label: 'その他の施設' },
    ],
  },
  { href: '/access',  label: 'アクセス' },
  { href: '/contact', label: 'お問い合わせ' },
];

export default NAV_ITEMS;
