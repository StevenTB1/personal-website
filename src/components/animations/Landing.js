import { motion } from 'framer-motion';

export const BackgroundAnimation = () => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        pathLength: 1,
        opacity: 0.5,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  const shape = {
    strokeWidth: 6,
    strokeLinecap: 'round',
    fill: 'transparent',
  };

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      initial="hidden"
      animate="visible"
      style={{
        position: 'absolute',
        zIndex: 0,
        opacity: 0.2,
        maxWidth: '100%',
        maxHeight: '100%',
        top: 0,
        left: 0,
        pointerEvents: 'none',
      }}
    >
      {/* Left-most column (new) */}
      <motion.circle
        cx="20"
        cy="100"
        r="80"
        stroke="#4ff0b7"
        variants={draw}
        custom={1.2}
        style={shape}
      />
      <motion.rect
        width="150"
        height="150"
        x="-50"
        y="230"
        rx="20"
        stroke="#ff0088"
        variants={draw}
        custom={2.2}
        style={shape}
      />
      <motion.circle
        cx="20"
        cy="500"
        r="80"
        stroke="#0d63f8"
        variants={draw}
        custom={1.5}
        style={shape}
      />

      {/* Original left column */}
      <motion.circle
        cx="220"
        cy="100"
        r="80"
        stroke="#ff0088"
        variants={draw}
        custom={1}
        style={shape}
      />
      <motion.circle
        cx="220"
        cy="300"
        r="80"
        stroke="#0d63f8"
        variants={draw}
        custom={2}
        style={shape}
      />
      <motion.circle
        cx="220"
        cy="500"
        r="80"
        stroke="#4ff0b7"
        variants={draw}
        custom={1.7}
        style={shape}
      />

      {/* Middle X patterns */}
      <motion.line
        x1="340"
        y1="30"
        x2="480"
        y2="170"
        stroke="#4ff0b7"
        variants={draw}
        custom={2}
        style={shape}
      />
      <motion.line
        x1="340"
        y1="170"
        x2="480"
        y2="30"
        stroke="#4ff0b7"
        variants={draw}
        custom={2.5}
        style={shape}
      />
      <motion.line
        x1="340"
        y1="230"
        x2="480"
        y2="370"
        stroke="#ff0088"
        custom={2.1}
        variants={draw}
        style={shape}
      />
      <motion.line
        x1="340"
        y1="370"
        x2="480"
        y2="230"
        stroke="#ff0088"
        custom={2.2}
        variants={draw}
        style={shape}
      />
      <motion.line
        x1="340"
        y1="430"
        x2="480"
        y2="570"
        stroke="#0d63f8"
        variants={draw}
        custom={2.3}
        style={shape}
      />
      <motion.line
        x1="340"
        y1="570"
        x2="480"
        y2="430"
        stroke="#0d63f8"
        variants={draw}
        custom={2.4}
        style={shape}
      />

      {/* Original right column */}
      <motion.rect
        width="140"
        height="140"
        x="530"
        y="30"
        rx="20"
        stroke="#0d63f8"
        variants={draw}
        custom={2.5}
        style={shape}
      />
      <motion.rect
        width="140"
        height="140"
        x="530"
        y="230"
        rx="20"
        stroke="#4ff0b7"
        custom={2.6}
        variants={draw}
        style={shape}
      />
      <motion.rect
        width="140"
        height="140"
        x="530"
        y="430"
        rx="20"
        stroke="#ff0088"
        variants={draw}
        custom={2.7}
        style={shape}
      />

      {/* Right-most column (new) */}
      <motion.circle
        cx="800"
        cy="100"
        r="80"
        stroke="#ff0088"
        variants={draw}
        custom={2.7}
        style={shape}
      />
      <motion.rect
        width="140"
        height="140"
        x="730"
        y="230"
        rx="20"
        stroke="#4ff0b7"
        variants={draw}
        custom={1.7}
        style={shape}
      />
      <motion.circle
        cx="800"
        cy="500"
        r="80"
        stroke="#0d63f8"
        variants={draw}
        custom={2.3}
        style={shape}
      />
    </motion.svg>
  );
};
