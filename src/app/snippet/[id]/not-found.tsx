"use client";

import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";

const SnippetNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen  text-white">
            {/* 404 Text with Glitch Effect */}
            <motion.h1
                className="text-6xl font-bold text-gray-100 relative"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                4<span className="text-red-500">0</span>4
            </motion.h1>

            {/* Not Found Message */}
            <motion.p
                className="text-lg text-gray-400 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                {/* Oops! The page you're looking for doesn't exist. */}
            </motion.p>

            {/* Go Back Button */}
            <Link href="/">
                <motion.button
                    className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Go Home
                </motion.button>
            </Link>
        </div>
    );
};

export default SnippetNotFound
