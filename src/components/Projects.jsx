import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../data/projects";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="section" id="projects">
      <div className="section-header">
        <h2 className="section-tag">Projects</h2>
      </div>

      <p
        style={{
          maxWidth: 700,
          margin: "0 auto 3rem",
          textAlign: "center",
          fontSize: "2rem",
          color: "#b0c4ff",
          lineHeight: 1.6,
        }}
      >
        A gallery of my full-stack, frontend and AI-powered builds — 
        each displayed as a floating 3D holographic cube.
      </p>

      {/* ================= 3D CUBES ================= */}
      <div className="cube-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="cube"
            whileHover={{
              rotateX: -18,
              rotateY: 22,
              scale: 1.1,
              translateY: -10,
            }}
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              y: {
                duration: 5 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            onClick={() => setActiveProject(project)}
          >
            <div className="cube-inner">
              {/* FRONT FACE IMAGE */}
              <div className="cube-face cube-front">
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "0.9rem",
                  }}
                />
              </div>

              <div className="cube-face cube-top"></div>
              <div className="cube-face cube-side"></div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              className="modal"
              initial={{ scale: 0.75, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.75, opacity: 0, rotateX: -15 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* === PROJECT TITLE === */}
              <h3>{activeProject.title}</h3>
              <p className="modal-role">{activeProject.role}</p>
              <p className="modal-summary">{activeProject.summary}</p>

              {/* === TECH USED === */}
              <h4 style={{ marginTop: "1.5rem" }}>Tech Used</h4>
              <div className="modal-tech">
                {activeProject.tech.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>

              {/* === BUTTONS === */}
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
                {activeProject.link && (
                  <a
                    href={activeProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon"
                  >
                    🔗 Live Project
                  </a>
                )}

                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon-secondary"
                  >
                    🐙 GitHub Repo
                  </a>
                )}
              </div>

              <button
                className="btn-ghost"
                style={{ marginTop: "1rem", width: "100%" }}
                onClick={() => setActiveProject(null)}
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
