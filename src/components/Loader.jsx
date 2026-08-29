import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ show }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="font-display text-2xl md:text-3xl tracking-wide text-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Iqra<span className="text-violet">.</span>
          </motion.div>
          <div className="mt-6 h-[2px] w-32 overflow-hidden rounded-full bg-surface-2">
            <motion.div
              className="h-full w-full bg-gradient-to-r from-violet to-amber"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
