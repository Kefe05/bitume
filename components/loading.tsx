"use client";

import { motion, Variants } from 'framer-motion';
import { Loader2, Newspaper } from 'lucide-react';

export default function LoadingCard() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Animated stripe background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-full bg-linear-to-b from-transparent via-sky-500/5 to-transparent"
            style={{
              width: '2px',
              left: `${(i + 1) * 5}%`,
            }}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              y: ['100%', '-100%']
            }}
            transition={{
              opacity: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              },
              y: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.2
              }
            }}
          />
        ))}
      </div>

      {/* Floating diagonal stripes */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`diag-${i}`}
            className="absolute h-1 bg-linear-to-r from-transparent via-sky-500/10 to-transparent"
            style={{
              width: '200%',
              top: `${20 + i * 15}%`,
              left: '-50%',
              transform: 'rotate(-45deg)',
            }}
            animate={{
              x: ['0%', '100%'],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          />
        ))}
      </motion.div>

      {/* Main card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md sm:max-w-xl lg:max-w-3xl z-10"
      >
        <div className="bg-white dark:bg-gray-900 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-gray-200 dark:border-gray-800 relative overflow-hidden shadow-2xl">
          {/* Card internal stripes */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(15)].map((_, i) => (
              <div
                key={`card-stripe-${i}`}
                className="absolute w-full h-px bg-linear-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"
                style={{
                  top: `${i * 7}%`,
                }}
              />
            ))}
          </div>

          {/* Animated corner accent */}
          <motion.div
            className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-sky-500 opacity-5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            {/* Loading Icon */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-8 sm:mb-10"
            >
              <motion.div
                className="relative"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className="absolute inset-0 bg-sky-500 rounded-2xl blur-xl opacity-30" />
                <div className="relative bg-sky-500 dark:bg-amber-500 p-5 sm:p-6 rounded-2xl border-2 border-sky-600 dark:border-amber-600">
                  <Loader2 className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-black dark:text-white tracking-tight"
            >
              Loading
            </motion.h2>

            {/* Animated dots */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-2 mb-8 sm:mb-10"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-3 h-3 bg-sky-500 dark:bg-amber-500 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>

            {/* Subtitle with stripe accent */}
            <motion.div
              variants={itemVariants}
              className="relative mb-10 sm:mb-12"
            >
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 sm:w-32 h-1 bg-linear-to-r from-transparent via-sky-500 dark:via-amber-500 to-transparent" />
              <p className="text-gray-600 dark:text-gray-400 text-center text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 px-4 max-w-xl mx-auto leading-relaxed">
                Fetching the latest news for you. This won't take long...
              </p>
            </motion.div>

            {/* Loading progress bar */}
            <motion.div
              variants={itemVariants}
              className="max-w-md mx-auto"
            >
              <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-linear-to-r from-sky-500 to-sky-600 dark:from-amber-500 dark:to-amber-600"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
            </motion.div>

            {/* Footer */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center gap-2 mt-8 sm:mt-10 text-gray-400 dark:text-gray-500 text-xs sm:text-sm"
            >
              <Newspaper className="w-4 h-4" />
              <p>Powered by News API</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
