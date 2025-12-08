import React from "react";

export const Footer = () => {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(148,163,184,0.3)",
        marginTop: "2rem"
      }}
    >
      <div
        className="section"
        style={{
          paddingTop: "1.5rem",
          paddingBottom: "1.7rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          fontSize: "0.8rem",
          color: "#94a3b8"
        }}
      >
        <span>© {new Date().getFullYear()} Somnath Chakraborty</span>
        <div style={{ display: "flex", gap: "0.75rem" }}>
          <a
            href="https://www.linkedin.com/in/somnathchakraborty245497176/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:chakrabortysumon1997@gmail.com">Email</a>
          <a>
            Ph No.: +91 8250425989
          </a>
        </div>
      </div>
    </footer>
  );
};
