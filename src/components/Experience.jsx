import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "../data/experience";

export const Experience = () => {
  const [active, setActive] = useState(null);

  const open = (exp) => setActive(exp);
  const close = () => setActive(null);

  return (
    <section className="section" id="experience">
      <div className="section-header">
        <span className="section-tag">
            <h2>Experience</h2>
        </span>
        
      </div>

      {/* === GLASS ORB EXPERIENCE BUTTONS === */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          marginTop: "2rem",
          flexWrap: "wrap",
        }}
      >
        {experience.map((exp, idx) => (
          <motion.div
            key={idx}
            onClick={() => open(exp)}
            whileHover={{
              scale: 1.15,
              rotateY: 12,
              rotateX: -8,
            }}
            animate={{
              y: [0, -10, 0],
              transition: {
                duration: 4 + idx,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            style={{
              width: 160,
              height: 160,
              borderRadius: "50%",
              cursor: "pointer",
              background:
                "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35), rgba(255,255,255,0.05))",
              boxShadow: `
                inset 0 0 25px rgba(255,255,255,0.4),
                0 0 35px ${exp.color}55,
                0 0 70px ${exp.color}33
              `,
              backdropFilter: "blur(12px)",
              border: `2px solid ${exp.color}55`,
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transformStyle: "preserve-3d",
            }}
          >
            {/* ORB INNER GLOW */}
            <motion.div
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.12, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                position: "absolute",
                width: 140,
                height: 140,
                borderRadius: "50%",
                background: `${exp.color}25`,
                filter: "blur(18px)",
              }}
            />

            {/* GLASS REFRACTION EFFECT */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0))",
                mixBlendMode: "overlay",
              }}
            />

            {/* JOB TITLE INSIDE ORB */}
            <div
              style={{
                color: exp.color,
                fontSize: "1rem",
                fontWeight: 600,
                textAlign: "center",
                zIndex: 5,
                textShadow: `0 0 12px ${exp.color}`,
              }}
            >
              {exp.role}
            </div>
          </motion.div>
        ))}
      </div>

      {/* === HOLOGRAM PROJECTOR POPUP === */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.65)",
              backdropFilter: "blur(12px)",
              zIndex: 9999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* HOLOGRAM PANEL */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0, rotateX: -40 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.3, opacity: 0, rotateX: -40 }}
              transition={{ duration: 0.6 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: "520px",
                padding: "2.5rem",
                position: "relative",
                borderRadius: "1.6rem",
                background:
                  "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.85))",
                border: `1px solid ${active.color}55`,
                boxShadow: `0 0 40px ${active.color}55`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* BEAM PROJECTOR BASE */}
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "-40px",
                  transform: "translateX(-50%)",
                  width: 120,
                  height: 20,
                  background: `${active.color}30`,
                  borderRadius: "50%",
                  filter: "blur(12px)",
                }}
              />

              {/* UPWARD HOLOGRAM BEAM */}
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: -200,
                  transform: "translateX(-50%)",
                  width: 6,
                  height: 200,
                  background: active.color,
                  boxShadow: `0 0 25px ${active.color}`,
                }}
              />

              {/* ROTATING HOLOGRAM HEXAGON */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                style={{
                  width: 140,
                  height: 140,
                  position: "absolute",
                  top: -180,
                  left: "50%",
                  transform: "translateX(-50%)",
                  clipPath: "polygon(25% 5%, 75% 5%, 95% 50%, 75% 95%, 25% 95%, 5% 50%)",
                  background: `${active.color}33`,
                  border: `2px solid ${active.color}`,
                  boxShadow: `0 0 18px ${active.color}`,
                }}
              />

              {/* CONTENT */}
              <h2>{active.role}</h2>
              <h3 style={{ color: active.color }}>{active.company}</h3>
              <div style={{ marginBottom: "1rem", color: "#94a3b8" }}>
                {active.period} • {active.years} years
              </div>

              <h4>Technologies</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {active.tech.map((t) => (
                  <span
                    key={t}
                    className="chip"
                    style={{ borderColor: active.color }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h4 style={{ marginTop: "1.5rem" }}>Highlights</h4>
              <ul style={{ paddingLeft: "1rem" }}>
                {active.highlights.map((h, i) => (
                  <li key={i} style={{ color: "#e2e8f0" }}>
                    {h}
                  </li>
                ))}
              </ul>

              <button
                className="btn-ghost"
                onClick={close}
                style={{
                  marginTop: "1.4rem",
                  width: "100%",
                  borderColor: active.color,
                }}
              >
                Close Hologram
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
