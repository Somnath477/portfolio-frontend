import React, { useMemo } from "react";
import { motion } from "framer-motion";

const BACKEND_URL = "https://portfolio-backend-production-4a9a.up.railway.app";

export const Hero = ({ onHireMeClick }) => {
  // Generate particle styles once
  const particles = useMemo(
    () =>
      Array.from({ length: 70 }).map((_, idx) => {
        const top = Math.random() * 120 - 10; // -10% to 110%
        const left = Math.random() * 120 - 10;
        const duration = 18 + Math.random() * 18;
        const delay = Math.random() * 18;
        const colorClass =
          idx % 3 === 0 ? "blue" : idx % 3 === 1 ? "purple" : "gold";
        const radius = 40 + Math.random() * 160;

        return {
          id: idx,
          top: `${top}%`,
          left: `${left}%`,
          duration,
          delay,
          radius,
          colorClass
        };
      }),
    []
  );

  const handleDownloadResume = (format = "pdf") => {
    const filename =
      format === "pdf" ? "Somnath_Resume.pdf" : "Somnath_Resume.docx";

    const link = document.createElement("a");
    link.href = `${BACKEND_URL}/resume/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();

    if (onHireMeClick) onHireMeClick();
  };

  return (
    <>
      {/* Neon dust + glow background */}
      <div className="hero-bg">
        <div className="hero-gradient-ring" />
        <div className="hero-dust-layer">
          {particles.map((p) => (
            <div
              key={p.id}
              className={
                "hero-dust-particle " +
                (p.colorClass === "purple"
                  ? "purple"
                  : p.colorClass === "purple"
                  ? "purple"
                  : "")
              }
              style={{
                top: p.top,
                left: p.left,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                transformOrigin: `${p.radius}px ${p.radius}px`
              }}
            />
          ))}
        </div>
      </div>

      <section
        className="section"
        id="top"
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          paddingTop: "6rem",
          paddingBottom: "4rem",
          position: "relative"
        }}
      >
        <div className="grid-2" style={{ alignItems: "center", gap: "2.4rem" }}>
          {/* LEFT: Text column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ position: "relative", zIndex: 2 }}
          >
            <div
              className="badge-pill"
              style={{ marginBottom: "0.95rem", display: "inline-flex", gap: 8 }}
            >
              <span>Available for frontend & MERN roles</span>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "999px",
                  background: "#22c55e",
                  boxShadow: "0 0 14px rgba(34,197,94,0.8)"
                }}
              />
            </div>

            <h1
              style={{
                fontSize: "3rem",
                lineHeight: 1.03,
                marginBottom: "1rem",
                letterSpacing: "-0.04em"
              }}
            >
              I design & build{" "}
              <span
                style={{
                  background:
                    "linear-gradient(120deg,#f97316,#facc15,#22d3ee,#a855f7)",
                  WebkitBackgroundClip: "text",
                  color: "transparent"
                }}
              >
                high-performance interfaces
              </span>{" "}
              that feel alive.
            </h1>

            <p
              style={{
                fontSize: "0.98rem",
                color: "#cbd5f5",
                maxWidth: "36rem",
                marginBottom: "1.4rem"
              }}
            >
              I&apos;m Somnath, a React-focused Frontend Developer with 4+ years
              of experience. I turn Figma designs into production-ready, fast
              UIs — using React, TypeScript, Tailwind, and modern tooling —
              while connecting them to Express + MongoDB APIs and testing flows
              in Postman.
            </p>

            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <button
                className="btn-primary"
                onClick={() => handleDownloadResume("pdf")}
              >
                Hire me · Download PDF
              </button>
              <button
                className="btn-ghost"
                onClick={() => handleDownloadResume("docx")}
              >
                Download .DOCX
              </button>
            </div>

            <div
              style={{
                marginTop: "1.4rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
                fontSize: "0.78rem",
                color: "#94a3b8"
              }}
            >
              <span className="chip">4+ years · React & TypeScript</span>
              <span className="chip">UI performance & accessibility</span>
              <span className="chip">MongoDB · Node · Express basics</span>
              <span className="chip">API testing with Postman</span>
            </div>
          </motion.div>

          {/* RIGHT: 3D profile / project cluster */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1 }}
            style={{
              position: "relative",
              perspective: 1400,
              display: "flex",
              justifyContent: "center"
            }}
          >
            <motion.div
              whileHover={{
                rotateX: -8,
                rotateY: 14,
                translateY: -8
              }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              style={{
                width: "100%",
                maxWidth: 420,
                transformStyle: "preserve-3d"
              }}
            >
              <div
                className="card"
                style={{
                  padding: "1.7rem",
                  transform: "rotateX(6deg) rotateY(-10deg)",
                  transformStyle: "preserve-3d",
                  background:
                    "linear-gradient(145deg, rgba(15,23,42,0.98), rgba(15,23,42,0.92))"
                }}
              >
                {/* Profile row */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.1rem",
                    transform: "translateZ(40px)"
                  }}
                >
                  {/* Avatar / Picture placeholder */}
                  <div
                    style={{
                      width: 62,
                      height: 62,
                      borderRadius: "1.2rem",
                      overflow: "hidden",
                      border: "1px solid rgba(148,163,184,0.5)",
                      boxShadow:
                        "0 16px 40px rgba(15,23,42,0.98), 0 0 0 1px rgba(15,23,42,1)",
                      background:
                        "radial-gradient(circle at 30% 0%, #f97316, transparent 60%), radial-gradient(circle at 70% 80%, #22d3ee, transparent 60%)"
                    }}
                  >
                    {/* You can replace this with your real photo */}
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        color: "#0b1120"
                      }}
                    >
                      S
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        marginBottom: "0.15rem"
                      }}
                    >
                      Somnath Chakraborty
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#94a3b8",
                        marginBottom: "0.1rem"
                      }}
                    >
                      Frontend Developer · React / MERN
                    </div>
                    <div style={{ display: "flex", gap: "0.35rem" }}>
                      <span className="tag-pill">Remote · India</span>
                    </div>
                  </div>
                </div>

                {/* Highlight stats */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: "0.7rem",
                    marginBottom: "1.2rem",
                    transform: "translateZ(30px)"
                  }}
                >
                  {[
                    { label: "Experience", value: "4+ yrs" },
                    { label: "Projects", value: "5+" },
                    { label: "Stack", value: "React · MERN" }
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      style={{
                        padding: "0.65rem 0.6rem",
                        borderRadius: "1rem",
                        border: "1px solid rgba(148,163,184,0.45)",
                        background:
                          "radial-gradient(circle at top, rgba(148,163,184,0.16), transparent 65%)"
                      }}
                    >
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "#94a3b8",
                          marginBottom: "0.1rem"
                        }}
                      >
                        {stat.label}
                      </div>
                      <div style={{ fontSize: "0.95rem", fontWeight: 600 }}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Mini "screenshots" row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr 1fr",
                    gap: "0.7rem",
                    transform: "translateZ(25px)"
                  }}
                >
                  <div
                    style={{
                      borderRadius: "1.1rem",
                      overflow: "hidden",
                      border: "1px solid rgba(30,64,175,0.8)",
                      background:
                        "radial-gradient(circle at 0 0,#f97316 0,#0f172a 55%)",
                      position: "relative",
                      height: 120
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(135deg,rgba(15,23,42,0.05),rgba(15,23,42,0.65))"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: 10,
                        top: 10,
                        right: 10,
                        bottom: 10,
                        borderRadius: "0.9rem",
                        border: "1px solid rgba(15,23,42,0.7)",
                        background:
                          "radial-gradient(circle at top,#facc15 0,transparent 55%)"
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        left: 14,
                        bottom: 10,
                        fontSize: "0.78rem"
                      }}
                    >
                      React · Tailwind · API
                    </div>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gap: "0.6rem"
                    }}
                  >
                    <div
                      style={{
                        borderRadius: "0.9rem",
                        border: "1px solid rgba(148,163,184,0.45)",
                        padding: "0.45rem 0.6rem",
                        fontSize: "0.78rem"
                      }}
                    >
                      Weather & Doctor apps
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: "#94a3b8"
                        }}
                      >
                        API-driven UIs
                      </div>
                    </div>
                    <div
                      style={{
                        borderRadius: "0.9rem",
                        border: "1px solid rgba(148,163,184,0.45)",
                        padding: "0.45rem 0.6rem",
                        fontSize: "0.78rem"
                      }}
                    >
                      MongoDB form flows
                      <div
                        style={{
                          fontSize: "0.72rem",
                          color: "#94a3b8"
                        }}
                      >
                        Node · Express · Postman
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI tag */}
                <div
                  style={{
                    marginTop: "1rem",
                    fontSize: "0.78rem",
                    color: "#94a3b8",
                    transform: "translateZ(20px)"
                  }}
                >
                  <span className="tag-pill">
                    Uses AI to prototype ideas & generate full-stack scaffolds
                    faster.
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
