import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  frontendSkills,
  backendSkills,
  architectureSkills,
} from "../data/skills";

export const Skills = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const tabs = {
    frontend: frontendSkills,
    backend: backendSkills,
    architecture: architectureSkills,
  };

  const tabLabels = {
    frontend: "Frontend",
    backend: "Backend",
    architecture: "Architecture & Performance",
  };

  const colorMap = {
    orange: "#fb923c",
    yellow: "#facc15",
    blue: "#60a5fa",
    cyan: "#22d3ee",
    purple: "#a855f7",
    green: "#4ade80",
  };

  return (
    <section className="section" id="skills">
      <div className="section-header">
        <span className="section-tag">
            <h2>Skills</h2>
        </span>
        
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "0.9rem",
          marginBottom: "2.2rem",
          flexWrap: "wrap",
        }}
      >
        {Object.keys(tabs).map((key) => (
          <button
            key={key}
            className="tag-pill"
            onClick={() => setActiveTab(key)}
            style={{
              padding: "0.7rem 1.2rem",
              cursor: "pointer",
              background:
                activeTab === key
                  ? "rgba(250,204,21,0.2)"
                  : "rgba(15,23,42,0.8)",
              borderColor:
                activeTab === key
                  ? "rgba(250,204,21,0.9)"
                  : "rgba(148,163,184,0.3)",
              color: activeTab === key ? "#fef08a" : "#e2e8f0",
              transition: "0.25s",
            }}
          >
            {tabLabels[key]}
          </button>
        ))}
      </div>

      {/* Neon Orb Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "2rem",
          position: "relative",
        }}
      >
        {tabs[activeTab].map((skill, idx) => (
          <motion.div
            key={skill.name}
            whileHover={{
              scale: 1.12,
              rotateX: -6,
              rotateY: 6,
            }}
            transition={{ type: "spring", stiffness: 150, damping: 14 }}
            style={{
              height: 160,
              borderRadius: "1.4rem",
              background:
                "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.85))",
              border: "1px solid rgba(148,163,184,0.25)",
              boxShadow: "0 18px 45px rgba(0,0,0,0.85)",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Orb */}
            <motion.div
              animate={{
                y: [0, -6, 0],
                filter: [
                  "blur(0px)",
                  "blur(1px)",
                  "blur(0px)"
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 4 + idx * 0.2,
                ease: "easeInOut",
              }}
              style={{
                width: 70,
                height: 70,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${colorMap[
                  skill.color
                ]} 0%, rgba(15,23,42,1) 70%)`,
                boxShadow: `0 0 22px ${colorMap[skill.color]}55`,
                position: "relative",
              }}
            >
              {/* Floating particles */}
              {[1, 2, 3].map((p) => (
                <motion.div
                  key={p}
                  animate={{
                    x: [0, p === 2 ? 10 : -10, 0],
                    y: [0, p === 3 ? -10 : 10, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4 + p,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: colorMap[skill.color],
                    position: "absolute",
                    top: p === 1 ? -6 : p === 2 ? 8 : 28,
                    left: p === 1 ? 45 : p === 2 ? -4 : 50,
                    boxShadow: `0 0 6px ${colorMap[skill.color]}`,
                  }}
                />
              ))}
            </motion.div>

            {/* Proficiency Arc */}
            <svg
              width="110"
              height="110"
              style={{
                position: "absolute",
                top: 25,
                left: 25,
                transform: "rotate(-90deg)",
              }}
            >
              <circle
                cx="55"
                cy="55"
                r="42"
                stroke={`rgba(148,163,184,0.25)`}
                strokeWidth="8"
                fill="none"
              />
              <motion.circle
                cx="55"
                cy="55"
                r="42"
                stroke={colorMap[skill.color]}
                strokeWidth="8"
                fill="none"
                strokeDasharray="264"
                strokeDashoffset={264 - (264 * skill.level) / 100}
                initial={{ strokeDashoffset: 264 }}
                whileInView={{
                  strokeDashoffset:
                    264 - (264 * skill.level) / 100,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
              />
            </svg>

            {/* Skill Text */}
            <div
              style={{
                position: "absolute",
                bottom: 14,
                width: "100%",
                textAlign: "center",
                fontSize: "0.95rem",
                fontWeight: 600,
              }}
            >
              {skill.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
