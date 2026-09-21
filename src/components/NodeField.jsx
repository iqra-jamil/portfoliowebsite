import { useMemo } from "react";
import { motion } from "framer-motion";


const NodeField = () => {
  const nodes = useMemo(() => {
    const seeded = [
      [8, 22], [18, 62], [28, 15], [34, 78], [44, 40],
      [52, 12], [58, 68], [66, 30], [74, 82], [82, 48],
      [90, 20], [95, 70], [12, 88], [40, 92], [70, 10],
    ];
    return seeded.map(([x, y], i) => ({ id: i, x, y }));
  }, []);

  const links = useMemo(() => {
    const pairs = [
      [0, 2], [0, 1], [2, 4], [1, 4], [4, 5], [4, 7],
      [5, 7], [7, 9], [9, 10], [9, 11], [7, 8], [1, 3],
      [3, 13], [13, 8], [10, 14], [6, 4], [6, 9], [2, 14],
    ];
    return pairs;
  }, []);

  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-40 md:opacity-60"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {links.map(([a, b], i) => {
        const n1 = nodes[a];
        const n2 = nodes[b];
        if (!n1 || !n2) return null;
        return (
          <motion.line
            key={`${a}-${b}`}
            x1={n1.x}
            y1={n1.y}
            x2={n2.x}
            y2={n2.y}
            stroke="url(#nodeGradient)"
            strokeWidth="0.15"
            initial={{ opacity: 0.05 }}
            animate={{ opacity: [0.05, 0.3, 0.05] }}
            transition={{
              duration: 6 + (i % 5),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        );
      })}

      {nodes.map((n, i) => (
        <motion.circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={i % 3 === 0 ? 0.55 : 0.35}
          fill={i % 4 === 0 ? "#f2a65a" : "#8b7fe8"}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{
            duration: 4 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.25,
          }}
        />
      ))}

      <defs>
        <linearGradient id="nodeGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b7fe8" />
          <stop offset="100%" stopColor="#f2a65a" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NodeField;
