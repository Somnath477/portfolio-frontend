import React from "react";
import { motion } from "framer-motion";
import { NeuralBrain } from "./NeuralBrain";

export const AILab = () => {
  return (
    <section className="section" id="ailab">
      <div className="section-header">
        <span className="section-tag">
            <h2>AI Workflow</h2>
            </span>
        
      </div>

      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* ===================================
            🧠 NEURAL BRAIN HOLOGRAM
        ==================================== */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <NeuralBrain />
        </div>

        {/* ===================================
            🔬 AI EXPERIMENT GRID
        ==================================== */}
        <div
          style={{
            width: "100%",
            maxWidth: "900px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              name: "Chatbot Assistant",
              desc: "Custom AI assistant created using LLM prompt engineering + full-stack integration.",
              color: "#fb923c",
            },
            {
              name: "AI Business Engine",
              desc: "AI-driven system that turns user ideas into business plans, roadmaps, and websites.",
              color: "#22d3ee",
            },
            {
              name: "Content AI Tools",
              desc: "Generators for ads, scripts, UI layouts, documents, web copy, and more.",
              color: "#a855f7",
            },
          ].map((exp, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.08, rotateY: 12 }}
              transition={{ type: "spring", stiffness: 120 }}
              style={{
                padding: "1.4rem",
                borderRadius: "1.3rem",
                background:
                  "linear-gradient(135deg, rgba(15,23,42,0.9), rgba(15,23,42,0.7))",
                border: `1px solid ${exp.color}44`,
                boxShadow: `0 0 25px ${exp.color}33`,
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Floating microchip hologram */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  width: 80,
                  height: 80,
                  background: `${exp.color}33`,
                  borderRadius: "20%",
                  border: `1px solid ${exp.color}66`,
                  filter: "blur(1px)",
                  clipPath:
                    "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                }}
              />

              <h3 style={{ color: exp.color, marginBottom: 8 }}>{exp.name}</h3>
              <p style={{ fontSize: "0.92rem", color: "#cbd5f5" }}>
                {exp.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ===================================
            ⚡ AI SUMMARY PANEL
        ==================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="card"
          style={{
            width: "100%",
            maxWidth: "850px",
            padding: "2rem",
            marginTop: "2rem",
            borderRadius: "1.5rem",
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.88), rgba(15,23,42,0.75))",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "1rem" }}>AI Research Summary</h3>

          <p style={{ color: "#cbd5f5", lineHeight: "1.6" }}>
            I specialize in using AI to accelerate engineering workflows,
            automate creativity, and generate full applications from compact
            instructions.
            <br />
            <br />
            From creating chatbots and business engines to AI-driven UI
            generation and automation tools, my work merges **software
            engineering** with **modern neural models** such as GPT-5, Gemini
            2.0, and multimodal AI systems.
          </p>

          <div
            style={{
              marginTop: "1.3rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <span className="chip">AI Automation</span>
            <span className="chip">Prompt Engineering</span>
            <span className="chip">Full-Stack AI</span>
            <span className="chip">Neural UI Design</span>
            <span className="chip">Rapid Prototyping</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
