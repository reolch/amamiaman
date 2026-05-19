import styles from './WaveDivider.module.css';

interface WaveDividerProps {
  /** 波の塗りつぶし色（次のセクションの背景色に合わせる） */
  fillColor?: string;
  /** ディバイダー自体の背景色（前のセクションの背景色に合わせる） */
  bgColor?: string;
  /** 波の向きを反転させるか */
  flip?: boolean;
  /** 波の高さ（px） */
  height?: number;
}

/**
 * セクション間の SVG 波形ディバイダー。
 * 前のセクションに完全に被さるため、隙間ゼロで繋がる。
 */
const WaveDivider = ({
  fillColor = '#ffffff',
  bgColor = 'transparent',
  flip = false,
  height = 70,
}: WaveDividerProps) => {
  return (
    <div
      className={styles.waveDivider}
      style={{
        backgroundColor: bgColor,
        height: `${height}px`,
        marginTop: `-${height}px`,
      }}
      aria-hidden="true"
    >
      <svg
        className={flip ? styles.svgFlipped : styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        focusable="false"
      >
        <path
          d="M0,60 C180,100 360,20 540,60 C720,100 900,20 1080,60 C1260,100 1440,40 1440,60 L1440,120 L0,120 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
