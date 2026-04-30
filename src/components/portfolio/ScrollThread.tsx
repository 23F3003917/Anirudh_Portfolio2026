import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef } from "react";

const PATH_D =
  "M 720 0 C 880 480, 540 980, 780 1480 S 460 2480, 760 3000 S 880 4000, 580 4520 S 760 5520, 860 6020 S 460 7020, 700 7520 S 820 8520, 580 9020 L 720 10000";

const japaneseFloaters = [
  { text: "接続中", top: "6%", side: "left", offset: "5%", size: "text-sm" },
  { text: "システム起動", top: "13%", side: "right", offset: "4%", size: "text-xs" },
  { text: "神経網", top: "22%", side: "left", offset: "6%", size: "text-base" },
  { text: "データ転送", top: "30%", side: "right", offset: "7%", size: "text-sm" },
  { text: "暗号化プロトコル", top: "39%", side: "left", offset: "4%", size: "text-xs" },
  { text: "量子演算", top: "47%", side: "right", offset: "5%", size: "text-base" },
  { text: "同期化", top: "56%", side: "left", offset: "7%", size: "text-sm" },
  { text: "仮想現実", top: "64%", side: "right", offset: "4%", size: "text-xs" },
  { text: "ファイアウォール", top: "73%", side: "left", offset: "5%", size: "text-sm" },
  { text: "ネオン回路", top: "81%", side: "right", offset: "6%", size: "text-base" },
  { text: "起動完了", top: "90%", side: "left", offset: "4%", size: "text-xs" },
];

const verticalGlyphs = [
  { text: "未来都市", top: "18%", side: "right" as const },
  { text: "電脳空間", top: "52%", side: "left" as const },
  { text: "夜光街道", top: "85%", side: "right" as const },
];

const SPRING_CONFIG = {
  stiffness: 140,
  damping: 28,
  mass: 0.45,
  restDelta: 0.0005,
};

export function ScrollThread() {
  const { scrollYProgress } = useScroll();

  // Smooth scroll progress drives the path drawing
  const smoothProgress = useSpring(scrollYProgress, SPRING_CONFIG);
  const pathLength = useTransform(smoothProgress, [0, 1], [0, 1], { clamp: true });

  // Ball position — motion values so updates never trigger React re-renders
  const ballLeft = useMotionValue("50%");
  const ballTop = useMotionValue("0%");
  const ballOpacity = useMotionValue(0);

  const pathRef = useRef<SVGPathElement | null>(null);
  const totalLengthRef = useRef<number>(0);

  useEffect(() => {
    if (pathRef.current) {
      totalLengthRef.current = pathRef.current.getTotalLength();
    }
  }, []);

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const path = pathRef.current;
    if (!path) return;
    const total = totalLengthRef.current || path.getTotalLength();
    const clamped = Math.max(0, Math.min(1, latest));
    const pt = path.getPointAtLength(total * clamped);

    ballLeft.set(`${(pt.x / 1000) * 100}%`);
    ballTop.set(`${(pt.y / 10000) * 100}%`);
    ballOpacity.set(clamped > 0.001 ? 1 : 0);
  });

  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      <svg
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1000 10000"
        style={{ willChange: "contents" }}
      >
        <defs>
          <filter id="thread-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" in="SourceGraphic" result="b-mid" />
            <feMerge>
              <feMergeNode in="b-mid" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="thread-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c084fc" />
            <stop offset="35%" stopColor="#d946ef" />
            <stop offset="70%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#7c3aed" />
          </linearGradient>
        </defs>

        {/* Faint backdrop trace — measurement reference */}
        <path
          ref={pathRef}
          d={PATH_D}
          fill="none"
          stroke="rgba(192,132,252,0.16)"
          strokeWidth="1.25"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          strokeDasharray="3 8"
        />

        {/* Soft halo */}
        <motion.path
          d={PATH_D}
          fill="none"
          stroke="url(#thread-grad)"
          strokeWidth="5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          filter="url(#thread-glow)"
          style={{ pathLength, opacity: 0.38 }}
        />

        {/* Mid neon body */}
        <motion.path
          d={PATH_D}
          fill="none"
          stroke="url(#thread-grad)"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength, opacity: 0.85 }}
        />

        {/* Crisp neon core */}
        <motion.path
          d={PATH_D}
          fill="none"
          stroke="#fae8ff"
          strokeWidth="0.75"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ pathLength }}
        />
      </svg>

      {/* Glowing ball — motion values + transforms (no React re-renders, GPU accelerated) */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: ballLeft,
          top: ballTop,
          opacity: ballOpacity,
          width: 18,
          height: 18,
          marginLeft: -9,
          marginTop: -9,
          background:
            "radial-gradient(circle, #ffffff 0%, #fae8ff 30%, #d946ef 65%, #a855f7 100%)",
          boxShadow:
            "0 0 12px 2px rgba(217,70,239,0.7), 0 0 28px 8px rgba(168,85,247,0.45), 0 0 60px 22px rgba(168,85,247,0.18)",
          willChange: "left, top",
        }}
      />

      {/* Soft trailing aura — slightly delayed second ball for a "comet" feel */}
      <motion.div
        className="absolute rounded-full"
        style={{
          left: ballLeft,
          top: ballTop,
          opacity: ballOpacity,
          width: 42,
          height: 42,
          marginLeft: -21,
          marginTop: -21,
          background:
            "radial-gradient(circle, rgba(217,70,239,0.45) 0%, rgba(168,85,247,0.18) 50%, transparent 75%)",
          filter: "blur(6px)",
          willChange: "left, top",
        }}
      />

      {/* Horizontal floating Japanese tags */}
      {japaneseFloaters.map((jt, i) => (
        <motion.div
          key={`h-${i}`}
          className={`absolute font-mono ${jt.size} text-accent tracking-[0.3em] select-none`}
          style={{
            top: jt.top,
            ...(jt.side === "left" ? { left: jt.offset } : { right: jt.offset }),
            color: "rgba(217, 70, 239, 0.32)",
            textShadow: "0 0 10px rgba(217,70,239,0.4)",
          }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.22, 0.5, 0.22],
          }}
          transition={{
            duration: 5 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        >
          {jt.text}
        </motion.div>
      ))}

      {/* Vertical kanji columns — anime UI vibe */}
      {verticalGlyphs.map((vg, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute font-mono text-2xl tracking-widest select-none"
          style={{
            top: vg.top,
            ...(vg.side === "left" ? { left: "1.5%" } : { right: "1.5%" }),
            writingMode: "vertical-rl",
            color: "rgba(192, 132, 252, 0.2)",
            textShadow: "0 0 14px rgba(192,132,252,0.4)",
            letterSpacing: "0.4em",
          }}
          animate={{
            opacity: [0.14, 0.42, 0.14],
          }}
          transition={{
            duration: 6 + i * 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.8,
          }}
        >
          {vg.text}
        </motion.div>
      ))}
    </div>
  );
}
