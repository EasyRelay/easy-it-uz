import { motion } from "framer-motion";
import { useState } from "react";

export default function FragmentedCard({
  children,
  onDelete,
}: {
  children: (triggerDelete: () => void) => React.ReactNode;
  onDelete?: () => void;
}) {
  const [exploding, setExploding] = useState(false);

  const handleDelete = () => {
    setExploding(true);
    setTimeout(() => {
      onDelete?.();
    }, 1000); // animatsiya tugashidan keyin o‘chadi
  };

  const fragments = 80; // 🔥 bo‘laklar soni — qancha ko‘p, shuncha mayda

  return (
    <motion.div
      className="relative bg-white rounded-2xl overflow-hidden shadow-lg group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Asl kontent */}
      <div
        className={`transition-all duration-200 ${
          exploding ? "opacity-0" : "opacity-100"
        }`}
      >
        {children(handleDelete)}
      </div>

      {/* Maydalanish effekti */}
      {exploding && (
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-8 pointer-events-none">
          {[...Array(fragments)].map((_, i) => (
            <motion.span
              key={i}
              initial={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
                rotate: 0,
              }}
              animate={{
                opacity: 0,
                scale: 0.3,
                x: (Math.random() - 0.5) * 200,
                y: 80 + Math.random() * 120,
                rotate: Math.random() * 720,
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
              className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-500 rounded-sm"
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
