"use client";

import { motion, Variants } from 'framer-motion';
import { Newspaper, Zap, TrendingUp, Globe, Home } from 'lucide-react';

import { useRouter } from 'next/navigation';



export default function ComingSoonCard() {
    const router = useRouter();



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
            transition: {
                duration: 0.5,
                ease: [0.4, 0, 0.2, 1] // cubic-bezier easing
            }
        }
    };

    const features = [
        { icon: Zap, text: "Breaking News Alerts" },
        { icon: TrendingUp, text: "Expert Analysis" },
        { icon: Globe, text: "Global Coverage" }
    ];

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
                className="relative w-full max-w-md sm:max-w-xl lg:max-w-4xl z-10"
            >
                <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-gray-200 relative overflow-hidden shadow-2xl">
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
                        {/* Logo/Icon */}
                        <motion.div
                            variants={itemVariants}
                            className="flex justify-center mb-8 sm:mb-10"
                        >
                            <motion.div
                                className="relative"
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute inset-0 bg-black rounded-2xl blur-xl opacity-20" />
                                <div className="relative bg-black p-5 sm:p-6 rounded-2xl border-2 border-gray-900">
                                    <Newspaper className="w-8 h-8 sm:w-12 sm:h-12 text-white" />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-center mb-4 sm:mb-6 text-black tracking-tight"
                        >
                            Coming Soon
                        </motion.h1>

                        {/* Subtitle with stripe accent */}
                        <motion.div
                            variants={itemVariants}
                            className="relative mb-10 sm:mb-14"
                        >
                            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                            <p className="text-gray-600 text-center text-base sm:text-lg lg:text-xl mt-6 sm:mt-8 px-4 max-w-2xl mx-auto leading-relaxed">
                                We're building the future of news. Stay informed with real-time updates, in-depth analysis, and stories that matter.
                            </p>
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14"
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="relative group"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="bg-gray-50 rounded-xl p-5 sm:p-6 border-2 border-gray-200 group-hover:border-sky-500 transition-all duration-300 relative overflow-hidden">
                                        {/* Hover stripe effect */}
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/5 to-transparent"
                                            initial={{ x: '-100%' }}
                                            whileHover={{ x: '100%' }}
                                            transition={{ duration: 0.6 }}
                                        />
                                        <div className="relative z-10 flex flex-col items-center text-center gap-3">
                                            <div className="bg-black p-3 rounded-lg group-hover:bg-sky-500 transition-colors duration-300">
                                                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                            </div>
                                            <p className="text-black font-semibold text-sm sm:text-base">
                                                {feature.text}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Email input */}
                        <motion.button
                            className="w-full mx-auto sm:w-auto bg-black text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-sky-500 transition-all text-sm sm:text-base shadow-lg"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => router.back()}
                        >
                            <Home className="w-5 h-5" />
                            Back to Home
                        </motion.button>

                        {/* Footer */}
                        <motion.p
                            variants={itemVariants}
                            className="text-gray-400 text-center text-xs sm:text-sm mt-8 sm:mt-10 px-4"
                        >
                            Join thousands waiting for the launch
                        </motion.p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}