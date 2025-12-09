import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, 100]);

    // Text Animation Variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.3,
            },
        },
    };

    const letter = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
    };

    const titleText = "Universal Blockchain Income";

    return (
        <div className="relative min-h-[100dvh] w-full overflow-hidden bg-ubDarkBlue flex items-center justify-center perspective-1000 py-20">
            {/* 3D Depth Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0052FF] via-[#003399] to-[#000F33] z-0 overflow-hidden">
                {/* Caustic Overlay for "Water" feel */}
                <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                {/* Layer 1: Deep Background Wave (Slowest) */}
                <motion.div
                    className="absolute bottom-0 w-[200%] h-full opacity-40"
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{ y: y1 }}
                >
                    <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto text-[#002984] fill-current transform scale-150 origin-bottom">
                        <path fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,186.7C480,192,600,224,720,218.7C840,213,960,171,1080,160C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                </motion.div>

                {/* Layer 2: Mid-Layer Wave (Medium Speed) */}
                <motion.div
                    className="absolute bottom-0 w-[200%] h-full opacity-60"
                    animate={{ x: ["0%", "-50%"] }} // Opposite direction
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    style={{ y: y2 }}
                >
                    <svg viewBox="0 0 1440 320" className="absolute bottom-[-50px] w-full h-auto text-[#0047CC] fill-current transform scale-125 origin-bottom">
                        <path fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </motion.div>

                {/* Layer 3: Foreground Wave (Fastest, High Detail) */}
                <motion.div
                    className="absolute bottom-0 w-[200%] h-full opacity-90"
                    animate={{ x: ["-25%", "-75%"] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                >
                    <svg viewBox="0 0 1440 320" className="absolute bottom-[-10px] w-full h-auto text-[#0066FF] fill-current filter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        <path fillOpacity="1" d="M0,64L40,74.7C80,85,160,107,240,112C320,117,400,107,480,101.3C560,96,640,96,720,106.7C800,117,880,139,960,138.7C1040,139,1120,117,1200,106.7C1280,96,1360,96,1400,96L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
                    </svg>
                </motion.div>

                {/* "Foam" Particles / Sparkles */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white blur-sm"
                        style={{
                            width: Math.random() * 4 + 2,
                            height: Math.random() * 4 + 2,
                            top: `${Math.random() * 30 + 70}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0, 0.5, 0],
                            scale: [0, 1.5, 0]
                        }}
                        transition={{
                            duration: Math.random() * 2 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 5
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
                <motion.div
                    className="mb-8"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-lg flex flex-wrap justify-center gap-x-2 md:gap-x-4 gap-y-2">
                        {titleText.split(" ").map((word, i) => (
                            <motion.span key={i} className="inline-block whitespace-nowrap">
                                {word.split("").map((char, index) => (
                                    <motion.span key={index} variants={letter} className="inline-block">
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.span>
                        ))}
                    </h1>
                </motion.div>

                <motion.p
                    className="text-lg sm:text-xl md:text-3xl text-white mb-8 md:mb-12 font-medium max-w-4xl mx-auto leading-relaxed px-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    <span className="bg-white/10 px-3 py-1 rounded inline-block border border-white/20 backdrop-blur-sm">Sustainable USDC earnings for UBI holders.</span> <br className="hidden md:block" />
                    <span className="text-blue-50 drop-shadow-md">UBI Protocol distributes ecosystem revenues directly to UBI holders.</span> <br />
                    <span className="text-blue-100 text-lg mt-2 block font-semibold">Multiply your earnings with UBI value appreciation + USDC income!</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2, duration: 0.5 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <a href="#presale" className="px-8 py-5 bg-white text-ubBlue rounded-full font-black text-xl hover:bg-gray-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 flex items-center gap-2 animate-vibrate-glow">
                        Join Crowdfunding
                    </a>
                    <a href="#about" className="px-8 py-5 border-2 border-white text-white rounded-full font-bold text-xl hover:bg-white/10 transition-all hover:scale-105 backdrop-blur-sm">
                        Explore Vision
                    </a>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-bounce"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
            >
                <ArrowDown size={32} />
            </motion.div>
        </div>
    );
}
