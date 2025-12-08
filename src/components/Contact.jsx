import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { HologramAvatar } from "./HologramAvatar";

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [typing, setTyping] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setTyping(true);
    setTimeout(() => setTyping(false), 900);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendMessage = async () => {
    if (!form.name || !form.email || !form.message) return;

    setLoading(true);
    try {
     await axios.post("https://portfolio-backend-production-4a9a.up.railway.app/api/messages", form);

      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Transmission error:", err);
    }
    setLoading(false);
  };

  return (
    <section className="section" id="contact">
      <div className="section-header">
        <div className="section-tag">
            <h2>Contact</h2>
        </div>
       
      </div>

      {/* AI Hologram Avatar */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <HologramAvatar />
      </div>

      {/* Contact panel */}
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            width: "520px",
            position: "relative",
            padding: "2.5rem",
            borderRadius: "1.6rem",
            background:
              "linear-gradient(135deg, rgba(15,23,42,0.90), rgba(15,23,42,0.75))",
            border: "1px solid rgba(148,163,184,0.25)",
            boxShadow: "0 0 40px rgba(56,189,248,0.25)",
            overflow: "hidden",
            backdropFilter: "blur(10px)",
          }}
        >
          <h3
            style={{
              marginBottom: "1.5rem",
              fontSize: "1.35rem",
              color: "#e2e8f0",
              textAlign: "center",
            }}
          >
            My systems are online.  
            <br />
            <span style={{ fontSize: "0.9rem", opacity: 0.8 }}>
              Your transmission will be encrypted.
            </span>
          </h3>

          {/* Input fields */}
          {["name", "email", "message"].map((field) => (
            <motion.div key={field} style={{ marginBottom: "1.2rem" }}>
              <label
                style={{ color: "#38bdf8", marginBottom: 4, display: "block" }}
              >
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>

              {field !== "message" ? (
                <input
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    borderRadius: "0.8rem",
                    border: "1px solid rgba(56,189,248,0.4)",
                    background: "rgba(2,6,23,0.9)",
                    color: "#e0f2fe",
                    boxShadow: "0 0 12px rgba(56,189,248,0.3)",
                  }}
                />
              ) : (
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  style={{
                    width: "100%",
                    padding: "0.8rem",
                    borderRadius: "0.8rem",
                    border: "1px solid rgba(56,189,248,0.4)",
                    background: "rgba(2,6,23,0.9)",
                    color: "#e0f2fe",
                    boxShadow: "0 0 12px rgba(56,189,248,0.3)",
                  }}
                />
              )}
            </motion.div>
          ))}

          {/* Send Transmission */}
          <motion.button
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            onClick={sendMessage}
            disabled={loading}
            style={{
              width: "100%",
              padding: "0.9rem",
              borderRadius: "0.8rem",
              marginTop: "0.5rem",
              background: loading
                ? "rgba(56,189,248,0.4)"
                : "rgba(56,189,248,0.85)",
              border: "none",
              color: "#0f172a",
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.5px",
              cursor: "pointer",
              boxShadow: "0 0 15px rgba(56,189,248,0.5)",
            }}
          >
            {loading ? "Transmitting..." : "Send Transmission"}
          </motion.button>

          {/* Success Message */}
          <AnimatePresence>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem",
                  borderRadius: "0.9rem",
                  textAlign: "center",
                  color: "#a7f3d0",
                  background: "rgba(16,185,129,0.2)",
                  border: "1px solid rgba(16,185,129,0.4)",
                  boxShadow: "0 0 15px rgba(16,185,129,0.35)",
                }}
              >
                ✔ Transmission Successfully Delivered
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
