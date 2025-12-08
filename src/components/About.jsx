import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="section" id="about">
      <div className="section-header">
        <span className="section-tag">
            <h2>About Me</h2>
        </span>
        
      </div>

      <div
        style={{
          display: "flex",
          gap: "3rem",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "3rem",
          position: "relative",
        }}
      >
        {/* === 3D HOLOGRAM PROFILE === */}
        <motion.div
          whileHover={{ scale: 1.08, rotateX: 8, rotateY: -8 }}
          transition={{ type: "spring", duration: 0.8 }}
          style={{
            width: 240,
            height: 300,
            borderRadius: "1.6rem",
            position: "relative",
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(15,23,42,0.8))",
            border: "1px solid rgba(255,255,255,0.15)",
            boxShadow: "0 0 45px rgba(255,255,255,0.15)",
            overflow: "hidden",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Rotating glowing frame */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
            style={{
              position: "absolute",
              inset: -10,
              borderRadius: "1.8rem",
              border: "2px solid rgba(56,189,248,0.45)",
              boxShadow: "0 0 18px rgba(56,189,248,0.45)",
            }}
          ></motion.div>

          {/* Scanning Laser */}
          <motion.div
            animate={{ y: [0, 300, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              height: 2,
              background: "rgba(56,189,248,0.8)",
              boxShadow: "0 0 12px rgba(56,189,248,1)",
            }}
          />

          {/* Placeholder profile image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "url(/images/me.png) center/cover",
              filter: "brightness(0.85) contrast(1.1)",
            }}
          ></div>

          {/* Hologram static noise */}
          <motion.div
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: "absolute",
              inset: 0,
              background:
                "url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif)",
              opacity: 0.15,
              mixBlendMode: "screen",
              pointerEvents: "none",
            }}
          />
        </motion.div>

        {/* === ABOUT CONTENT SIDE === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            maxWidth: "480px",
            position: "relative",
          }}
        >
          {/* Floating hologram ring behind text */}
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.3, 0.15],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            style={{
              position: "absolute",
              top: "-60px",
              right: "-40px",
              width: 180,
              height: 180,
              borderRadius: "50%",
              border: "2px solid rgba(250,204,21,0.4)",
              boxShadow: "0 0 40px rgba(250,204,21,0.2)",
              filter: "blur(3px)",
            }}
          />

          {/* Title */}
          <h3
            style={{
              marginBottom: "1rem",
              fontSize: "1.8rem",
              fontWeight: 700,
              letterSpacing: "0.5px",
            }}
          >
            Who Am I?
          </h3>

          {/* Paragraph */}
          <p
            style={{
              color: "#cbd5f5",
              fontSize: "1.3rem",
              lineHeight: 1.6,
              marginBottom: "1.8rem",
            }}
          >
            I am an UI/Frontend Engineer specializing in building
            immersive digital experiences with React, JavaScript, Tailwind,
            Node.js, and MongoDB.  
            <br />
            My goal is to combine **visual storytelling** and **engineering** to
            build interfaces that feel alive — interactive, reactive, and deeply
            intuitive.
          </p>

          {/* INFO PANELS (AI STAT CARDS) */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
            }}
          >
            {[
              {
                label: "Experience",
                value: "4+ Years",
                color: "#60a5fa",
              },
              {
                label: "Primary Stack",
                value: "React + Node + MongoDB",
                color: "#22d3ee",
              },
              {
                label: "AI/Tools",
                value: "ChatGPT, Gemini, Copilot",
                color: "#f97316",
              },
            ].map((panel, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1, rotateY: 12 }}
                transition={{ type: "spring" }}
                style={{
                  padding: "1rem",
                  background:
                    "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(15,23,42,0.7))",
                  borderRadius: "1.3rem",
                  border: `1px solid ${panel.color}44`,
                  boxShadow: `0 0 18px ${panel.color}33`,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: panel.color,
                    marginBottom: 4,
                  }}
                >
                  {panel.label}
                </div>
                <div
                  style={{
                    fontSize: "1rem",
                    fontWeight: 600,
                  }}
                >
                  {panel.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
