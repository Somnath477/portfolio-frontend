import React from "react";
import { motion } from "framer-motion";

// Fake neural-node coordinates shaped like a brain (top view)
const nodes = [
  { x: -60, y: -40 }, { x: -30, y: -60 }, { x: 10, y: -55 },
  { x: 45, y: -40 },  { x: 60, y: -10 }, { x: 45, y: 25 },
  { x: 5, y: 45 },     { x: -30, y: 45 }, { x: -55, y: 15 },
  { x: -15, y: -15 },  { x: 20, y: -5 },  { x: -5, y: 20 },
];

// Neural connections (synapses)
const connections = [
  [0, 1], [1, 2], [2, 3], [3, 4],
  [4, 5], [5, 6], [6, 7], [7, 8],
  [8, 0], [1, 9], [9, 10], [10, 6],
  [3, 10], [9, 7]
];

export const NeuralBrain = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      style={{
        width: 280,
        height: 280,
        position: "relative",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Rotating hologram brain container */}
      <motion.div
        animate={{ rotateY: [0, 360] }}
        transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          left: 0,
          top: 0,
        }}
      >
        {/* Neural connections */}
        {connections.map(([a, b], idx) => {
          const A = nodes[a];
          const B = nodes[b];

          return (
            <motion.div
              key={idx}
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + idx * 0.1,
                repeat: Infinity,
              }}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 2,
                height: Math.hypot(B.x - A.x, B.y - A.y),
                background: "rgba(56,189,248,0.7)",
                transform: `
                  translate(-50%, -50%)
                  translate(${A.x}px, ${A.y}px)
                  rotate(${Math.atan2(B.y - A.y, B.x - A.x)}rad)
                `,
                boxShadow: "0 0 12px rgba(56,189,248,0.6)",
              }}
            />
          );
        })}

        {/* Neuron nodes */}
        {nodes.map((p, idx) => (
          <motion.div
            key={idx}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: idx * 0.15,
            }}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translate(${p.x}px, ${p.y}px)`,
              width: 12,
              height: 12,
              background: "#22d3ee",
              borderRadius: "50%",
              boxShadow: "0 0 14px #22d3ee",
            }}
          />
        ))}

        {/* Brain glow aura */}
        <motion.div
          animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{
            position: "absolute",
            inset: "-40px",
            background:
              "radial-gradient(circle, rgba(56,189,248,0.45), transparent 60%)",
            filter: "blur(40px)",
            borderRadius: "50%",
          }}
        />
      </motion.div>
    </motion.div>
  );
};
