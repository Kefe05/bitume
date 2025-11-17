"use client"
import { motion, Variants } from 'framer-motion';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';


export default function NotFoundCard() {
  const router = useRouter()
  const containerVariants = {
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
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      {/* Animated stripe background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-full bg-gradient-to-b from-transparent via-sky-500/5 to-transparent"
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
            className="absolute h-1 bg-gradient-to-r from-transparent via-sky-500/10 to-transparent"
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
        <div className="bg-white  rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-gray-200 relative overflow-hidden shadow-2xl">
          {/* Card internal stripes */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(15)].map((_, i) => (
              <div
                key={`card-stripe-${i}`}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
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
            {/* 404 Icon */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-6 sm:mb-8"
            >
              <motion.div
                className="relative"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 bg-black rounded-2xl blur-xl opacity-20" />
                <div className="relative bg-black p-5 sm:p-6 rounded-2xl border-2 border-gray-900">
                  <AlertCircle className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                </div>
              </motion.div>
            </motion.div>

            {/* 404 Number */}
            <motion.div
              variants={itemVariants}
              className="text-center mb-4 sm:mb-6"
            >
              <h1 className="text-7xl sm:text-9xl lg:text-[12rem] font-bold text-black opacity-10 leading-none">
                404
              </h1>
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 w-32 sm:w-48 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent"
                style={{ marginTop: '-3rem' }}
              />
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 sm:mb-6 text-black tracking-tight"
            >
              Page Not Found
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-center text-base sm:text-lg lg:text-xl mb-10 sm:mb-12 px-4 max-w-xl mx-auto leading-relaxed"
            >
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto"
            >
              <motion.button
                className="w-full sm:w-auto bg-black text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-sky-500 transition-all text-sm sm:text-base shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.back()}
              >
                <Home className="w-5 h-5" />
                Back to Home
              </motion.button>

              
            </motion.div>

            {/* Go Back Link */}
            <motion.div
              variants={itemVariants}
              className="text-center mt-8 sm:mt-10"
            >
              <motion.button
                className="text-gray-500 hover:text-sky-500 transition-colors text-sm sm:text-base flex items-center gap-2 mx-auto group"
                whileHover={{ x: -5 }}
              >
                <ArrowLeft className="w-4 h-4 group-hover:text-sky-500 transition-colors" />
                Go back to previous page
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}