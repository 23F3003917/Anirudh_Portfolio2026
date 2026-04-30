import { motion } from "framer-motion";

const PHRASES = [
  "電脳神経網",
  "システム同期化",
  "未来都市",
  "仮想現実",
  "暗号化プロトコル",
  "夜光街道",
  "量子演算",
  "ネオン回路",
  "起動完了",
  "データ転送",
];

interface Props {
  reverse?: boolean;
  speed?: number;
}

export function MarqueeBand({ reverse = false, speed = 40 }: Props) {
  const items = [...PHRASES, ...PHRASES, ...PHRASES, ...PHRASES];

  return (
    <div
      aria-hidden
      className="relative overflow-hidden py-5 select-none"
      style={{
        background:
          "linear-gradient(90deg, rgba(59,130,246,0.06) 0%, rgba(37,99,235,0.10) 50%, rgba(59,130,246,0.06) 100%)",
        boxShadow:
          "inset 0 0 50px rgba(59,130,246,0.18), inset 0 1px 0 rgba(239,68,68,0.15), inset 0 -1px 0 rgba(239,68,68,0.15)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(59,130,246,0.18) 0%, transparent 70%)",
          filter: "blur(18px)",
        }}
      />

      <motion.div
        className="flex whitespace-nowrap gap-14 font-mono text-2xl md:text-3xl tracking-[0.5em] relative"
        style={{
          color: "rgba(248, 113, 113, 0.85)",
          textShadow:
            "0 0 8px rgba(239,68,68,0.85), 0 0 18px rgba(239,68,68,0.55), 0 0 38px rgba(59,130,246,0.55)",
          width: "max-content",
        }}
        animate={{
          x: reverse ? ["-25%", "0%"] : ["0%", "-25%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((phrase, i) => (
          <span key={i} className="inline-flex items-center gap-14">
            {phrase}
            <span className="text-blue-400/40 text-lg">◇</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
