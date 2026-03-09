import styles from './ReservationInfoTable.module.css';

/**
 * 予約テーブル 共通コンポーネント
 *
 * Props:
 *   supplies  {string|null} - 「用意する物」の内容（省略可）
 *   items     {string[]}   - 予約時にお伝えいただく内容のリスト
 *   notes     {string}     - 備考欄の内容
 */
const ReservationInfoTable = ({ supplies = null, items = [], notes }) => {
  return (
    <section className={styles.detailsTable}>
      <table className={styles.table}>
        <tbody>
          {/* 用意する物（アクティビティによって存在する場合のみ） */}
          {supplies && (
            <tr>
              <th className={styles.label} scope="row">
                用意する物
              </th>
              <td className={styles.value}>{supplies}</td>
            </tr>
          )}

          {/* 予約時にお伝えいただく内容 */}
          {items.map((item, index) => (
            <tr key={item}>
              {index === 0 && (
                <th
                  className={styles.label}
                  scope="row"
                  rowSpan={items.length}
                >
                  予約時にお伝えいただく内容
                </th>
              )}
              <td className={styles.value}>{item}</td>
            </tr>
          ))}

          {/* 備考 */}
          <tr>
            <th className={styles.label} scope="row">
              備考
            </th>
            <td className={styles.value}>
              {notes.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  {i < notes.split('\n').length - 1 && <br />}
                </span>
              ))}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ReservationInfoTable;
