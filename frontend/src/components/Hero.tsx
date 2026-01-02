

"use client"

import { motion } from "framer-motion"
//import MythElements from "./MythElements"
import dynamic from "next/dynamic"


// No importarlo directo, mejor de esta forma dinamica
const MythElements = dynamic(
    () => import("./MythElements"),
    { ssr: false }
)


export default function Hero() {
    return (
        <section className="relative h-screen hero-bg flex items-center justify-center text-center px-6 overflow-hidden">
            
            {/* Stars layer */}
            <div className="absolute inset-0 stars-layer pointer-events-none" />

            {/* Myth elements */}
            <MythElements />

            {/* Content */}
            <div className="relative z-10 max-w-3xl">

                <motion.h1
                    initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 1.4, ease: "easeOut" }}
                    className="text-6xl md:text-7xl font-extrabold text-[#ffd700] mb-6"
                >
                    Mythology Atlas
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="text-lg text-[#e5c96f]/80 mb-10"
                >
                    The largest and ever-growing interactive mythology catalog,
                    connecting gods, creatures, heroes and legends to the world map.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                        px-8 py-4 rounded-full
                        border border-[#ffd700]
                        text-[#ffd700]
                        bg-transparent
                        shadow-[0_0_20px_rgba(255,215,0,0.25)]
                        hover:shadow-[0_0_30px_rgba(255,215,0,0.5)]
                        transition
                    "
                >
                    Explore the World
                </motion.button>

            </div>
        </section>
    )
}





