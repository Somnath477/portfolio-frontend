import React, { useEffect } from "react";
import { motion } from "framer-motion";

export const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* =============================
          NEO-HOLOGRAM FRAME BORDERS
      ============================== */}
      <div className="neo-frame neo-top"></div>
      <div className="neo-frame neo-bottom"></div>
      <div className="neo-frame neo-left"></div>
      <div className="neo-frame neo-right"></div>

      {/* =============================
          HOLOGRAM GRID + FOG
      ============================== */}
      <div className="holo-grid"></div>
      <div className="holo-fog"></div>

      {/* =============================
          FLOATING PARTICLES BG
      ============================== */}
      <div className="layout-particles">
        {Array.from({ length: 85 }).map((_, i) => (
          <div
            key={i}
            className="layout-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${9 + Math.random() * 12}s`,
            }}
          />
        ))}
      </div>

      {/* =============================
              NAVIGATION BAR
      ============================== */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(20px)",
          background: "rgba(5, 5, 15, 0.45)",
          borderBottom: "1px solid rgba(200,0,255,0.2)",
          boxShadow: "0 0 30px rgba(200,0,255,0.15)",
        }}
      >
        <div
          className="section"
          style={{
            paddingTop: "0.9rem",
            paddingBottom: "0.9rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.5rem",
          }}
        >
          {/* BRAND LEFT */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Glowing logo orb */}
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: "999px",
                background:
                  "conic-gradient(from 130deg, #d946ef, #9333ea, #7e22ce, #c026d3, #d946ef)",
                padding: "2px",
                boxShadow:
                  "0 0 35px rgba(192,38,211,0.45), 0 0 60px rgba(147,51,234,0.3)",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "999px",
                  background: "#020617",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  color: "#e879f9",
                  textShadow: "0 0 6px rgba(220,38,255,0.8)",
                }}
              >
                SC
              </div>
            </div>

            {/* Text Identity */}
            <div>
              <div style={{ fontSize: "1rem", fontWeight: 600 }}>
                Somnath Chakraborty
              </div>
              <div style={{ fontSize: "0.78rem", color: "#b798ff" }}>
                Frontend Engineer · React · MERN
              </div>
            </div>
          </div>

          {/* NAV MENU */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              fontSize: "0.8rem",
            }}
          >
            {[
              { name: "Work", href: "#projects" },
              { name: "AI Workflow", href: "#ailab" },
              { name: "Experience", href: "#experience" },
              { name: "Contact", href: "#contact" },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.13 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="nav-pill"
              >
                {item.name}
                <span className="nav-underline"></span>
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* =============================
              MAIN CONTENT
      ============================== */}
      <main>{children}</main>
    </>
  );
};
