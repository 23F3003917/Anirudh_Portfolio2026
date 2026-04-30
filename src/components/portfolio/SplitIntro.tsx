import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SplitIntroProps {
  onComplete: () => void;
}

const PHASE_HOLD_MS = 1400;
const PHASE_SPLIT_MS = 1100;

type Phase = "hold" | "split" | "done";

export default function SplitIntro({ onComplete }: SplitIntroProps) {
  const [phase, setPhase] = useState<Phase>("hold");

  useEffect(() => {
    const t1 = window.setTimeout(() => setPhase("split"), PHASE_HOLD_MS);
    const t2 = window.setTimeout(() => {
      setPhase("done");
      onComplete();
    }, PHASE_HOLD_MS + PHASE_SPLIT_MS);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [onComplete]);

  const splitting = phase === "split";

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="split-intro"
          className="fixed inset-0 z-[9999] pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* TOP HALF */}
          <motion.div
            className="absolute left-0 right-0 top-0 overflow-hidden bg-black"
            style={{ height: "50vh" }}
            initial={{ y: 0 }}
            animate={{ y: splitting ? "-100%" : 0 }}
            transition={{ duration: PHASE_SPLIT_MS / 1000, ease: [0.7, 0, 0.3, 1] }}
          >
            <HalfBackground side="top" />
            {/* Full-viewport stage — clipped at the seam */}
            <div
              className="absolute left-0"
              style={{ top: 0, width: "100vw", height: "100vh" }}
            >
              <CenterText phase={phase} />
            </div>
            {/* Center seam glow */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-cyan-300/80 shadow-[0_0_30px_8px_rgba(34,211,238,0.7)]" />
          </motion.div>

          {/* BOTTOM HALF */}
          <motion.div
            className="absolute left-0 right-0 bottom-0 overflow-hidden bg-black"
            style={{ height: "50vh" }}
            initial={{ y: 0 }}
            animate={{ y: splitting ? "100%" : 0 }}
            transition={{ duration: PHASE_SPLIT_MS / 1000, ease: [0.7, 0, 0.3, 1] }}
          >
            <HalfBackground side="bottom" />
            <div
              className="absolute left-0"
              style={{ top: "-50vh", width: "100vw", height: "100vh" }}
            >
              <CenterText phase={phase} />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-cyan-300/80 shadow-[0_0_30px_8px_rgba(34,211,238,0.7)]" />
          </motion.div>

          {/* Flash at split moment */}
          <AnimatePresence>
            {splitting && (
              <motion.div
                key="flash"
                className="absolute inset-0 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.85, 0] }}
                transition={{ duration: 0.5, times: [0, 0.15, 1] }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function CenterText({ phase }: { phase: Phase }) {
  const splitting = phase === "split";

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-full px-6 text-center select-none">
        {/* Above-the-seam tag (top half shows it) */}
        <motion.div
          className="font-mono text-xs sm:text-sm tracking-[0.5em] text-cyan-300/90"
          style={{ marginBottom: "1.4rem" }}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: splitting ? 0 : 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {`> AST.SYS  //  v.1.0`}
        </motion.div>

        {/* Big brand mark sitting on the seam */}
        <motion.h1
          className="font-mono font-extrabold tracking-tight text-white"
          style={{
            fontSize: "clamp(3rem, 12vw, 9rem)",
            lineHeight: 1,
            textShadow:
              "0 0 24px rgba(34,211,238,0.6), 0 0 56px rgba(34,211,238,0.35)",
          }}
          initial={{ opacity: 0, scale: 0.94, letterSpacing: "0.4em" }}
          animate={{
            opacity: 1,
            scale: splitting ? 1.08 : 1,
            letterSpacing: "0.04em",
          }}
          transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
        >
          AST<span className="text-cyan-300">.SYS</span>
        </motion.h1>

        {/* Below-the-seam tag (bottom half shows it) */}
        <motion.div
          className="font-mono text-xs sm:text-sm tracking-[0.5em] text-fuchsia-300/90"
          style={{ marginTop: "1.4rem" }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: splitting ? 0 : 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {`> ENTER  THE  SYSTEM`}
        </motion.div>

        {/* Corner brackets framing the brand mark */}
        <Brackets />
      </div>
    </div>
  );
}

function Brackets() {
  const cls = "absolute h-6 w-6";
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2"
      style={{
        transform: "translate(-50%, -50%)",
        width: "min(640px, 88vw)",
        height: "200px",
      }}
    >
      <div className={`${cls} top-0 left-0 border-t-2 border-l-2 border-cyan-300/80`} />
      <div className={`${cls} top-0 right-0 border-t-2 border-r-2 border-cyan-300/80`} />
      <div className={`${cls} bottom-0 left-0 border-b-2 border-l-2 border-fuchsia-300/80`} />
      <div className={`${cls} bottom-0 right-0 border-b-2 border-r-2 border-fuchsia-300/80`} />
    </div>
  );
}

function HalfBackground({ side }: { side: "top" | "bottom" }) {
  return (
    <div className="absolute inset-0">
      {/* Radial glow toward the seam */}
      <div
        className="absolute inset-0"
        style={{
          background:
            side === "top"
              ? "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(34,211,238,0.25), transparent 70%), linear-gradient(180deg, #04060c 0%, #06121a 100%)"
              : "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(168,85,247,0.22), transparent 70%), linear-gradient(0deg, #04060c 0%, #0a0814 100%)",
        }}
      />
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.18) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            side === "top"
              ? "linear-gradient(180deg, transparent 0%, black 60%)"
              : "linear-gradient(0deg, transparent 0%, black 60%)",
          WebkitMaskImage:
            side === "top"
              ? "linear-gradient(180deg, transparent 0%, black 60%)"
              : "linear-gradient(0deg, transparent 0%, black 60%)",
        }}
      />
      {/* Scanlines */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 3px)",
        }}
      />
    </div>
  );
}
