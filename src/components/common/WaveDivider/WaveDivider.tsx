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
 */
const WaveDivider = ({
  fillColor = '#ffffff',
  bgColor = 'transparent',
  flip = false,
  height = 60,
}: WaveDividerProps) => {
  return (
    <div
      className={styles.waveDivider}
      style={{ backgroundColor: bgColor, height: `${height}px` }}
      aria-hidden="true"
    >
      <svg
        className={flip ? styles.svgFlipped : styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
