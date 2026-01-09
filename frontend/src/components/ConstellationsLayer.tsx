
"use client"

import React from "react"
import { CONSTELLATIONS } from "@/lib/constellations"


const random = (min: number, max: number) =>
    Math.random() * (max - min) + min


const GRID_COLS = 8
const GRID_ROWS = 5

type Slot = {
    x: number
    y: number
}


function shuffle<T>(array: T[]) {
    const arr = [...array]
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}

function generateSlots(): Slot[] {
    const slots: Slot[] = []
    const paddingX = 4
    const paddingY = 6

    for (let row = 0; row < GRID_ROWS; row++) {
        for (let col = 0; col < GRID_COLS; col++) {
            slots.push({
                x: (col / GRID_COLS) * 100 + paddingX,
                y: (row / GRID_ROWS) * 100 + paddingY,
            })
        }
    }

    return slots
}


function ConstellationSet({ offsetX = 0 }: { offsetX?: number }) {
    const slots = generateSlots()

    // mezclamos constelaciones una sola vez
    const shuffled = shuffle(CONSTELLATIONS)

    return (
        <div
            className="absolute inset-0"
            style={{ transform: `translateX(${offsetX}vw)` }}
        >
            {slots.map((slot, i) => {
                const c = shuffled[i % shuffled.length]
                
                // valores estables por índice
                const width = 160 + (i % 5) * 20
                const height = 120 + (i % 4) * 20
                const opacity = 0.45 + (i % 3) * 0.1
                
                return (
                    <svg key={i} className="constellation" width={width} height={height} viewBox="0 0 100 100" style={{ left: `${slot.x}%`, top: `${slot.y}%`, opacity, }} >
                        {/* lines */}
                        {c.lines.map(([a, b], idx) => {
                            const [x1, y1] = c.points[a]
                            const [x2, y2] = c.points[b]
                            return (
                                <line key={idx} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,215,150,0.35)" strokeWidth="0.6"/>
                            )
                        })}

                        {/* stars */}
                        {c.points.map(([x, y], idx) => (
                            <circle key={idx} cx={x} cy={y} r={1.2} fill="rgba(255,255,255,0.9)" />
                        ))}
                    </svg>
                )
            })}
        </div>
    )
}



export default function ConstellationsLayer() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="relative w-screen h-full animate-constellations">
                <ConstellationSet offsetX={0} />
                <ConstellationSet offsetX={100} />
            </div>
        </div>
    )
}








