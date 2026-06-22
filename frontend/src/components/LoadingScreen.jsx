import { AnimatePresence, motion } from "framer-motion";
import { LOGO_URL } from "@/data/brand";

export const LoadingScreen = ({ visible }) => (
  <AnimatePresence>
    {visible && (
      <motion.div
        data-testid="loading-screen"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-white"
      >
        <motion.img
          src={LOGO_URL}
          alt="Harshit MadeIt"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="h-16 md:h-20 w-auto select-none"
          draggable={false}
        />
      </motion.div>
    )}
  </AnimatePresence>
);
