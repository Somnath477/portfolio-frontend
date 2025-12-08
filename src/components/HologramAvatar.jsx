import React from "react";
import { motion } from "framer-motion";


export const HologramAvatar = ({ speaking }) => {
  return (
    <div
      style={{
        width: 220,
        height: 260,
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "2rem",
      }}
    >
      {/* Glowing platform */}
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: "absolute",
          bottom: -10,
          width: 180,
          height: 18,
          background: "rgba(56,189,248,0.35)",
          borderRadius: "50%",
          filter: "blur(15px)",
        }}
      />

      {/* Rotating hologram rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 9, ease: "linear" }}
        style={{
          position: "absolute",
          width: 240,
          height: 240,
          borderRadius: "50%",
          border: "2px solid rgba(56,189,248,0.3)",
          boxShadow: "0 0 25px rgba(56,189,248,0.3)",
        }}
      />

      {/* Second rotating ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
        style={{
          position: "absolute",
          width: 190,
          height: 190,
          borderRadius: "50%",
          border: "1px dashed rgba(56,189,248,0.4)",
          boxShadow: "0 0 18px rgba(56,189,248,0.2)",
          filter: "blur(1px)",
        }}
      />

      {/* Holographic Avatar Body */}
      <motion.img
        src="/images/contact-hologram.png"
        alt="Contact Hologram"
        animate={{
          opacity: [0.4, 1, 0.4],
          y: [0, -10, 0],
          filter: [
            "brightness(1) saturate(1.2)",
            "brightness(1.2) saturate(1.4)",
            "brightness(1) saturate(1.2)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        style={{
          width: 150,
          height: "auto",
          zIndex: 10,
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />

      {/* Speaking pulse (when user is typing) */}
      {speaking && (
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ duration: 0.6, repeat: Infinity }}
          style={{
            position: "absolute",
            bottom: 50,
            width: 70,
            height: 70,
            borderRadius: "50%",
            background: "rgba(56,189,248,0.4)",
            filter: "blur(18px)",
          }}
        />
      )}

      {/* Static hologram noise */}
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          position: "absolute",
          inset: 0,
          background:
            "url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif)",
          opacity: 0.08,
          mixBlendMode: "screen",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
