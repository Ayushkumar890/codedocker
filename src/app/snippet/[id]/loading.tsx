"use client";

import { motion } from "framer-motion";

const loading: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-zinc-900 text-white">
      {/* Rotating Gradient Spinner */}
      <div className="relative w-24 h-24">
        <motion.div
          className="absolute inset-0 w-full h-full border-4 border-transparent border-t-blue-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 w-full h-full border-4 border-transparent border-b-purple-500 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
      </div>

      {/* Loading Text Animation */}
      <motion.h1
        className="text-xl font-semibold mt-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        Loading, please wait...
      </motion.h1>

      {/* Progress Bar */}
      <div className="w-64 h-2 mt-4 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default loading;
