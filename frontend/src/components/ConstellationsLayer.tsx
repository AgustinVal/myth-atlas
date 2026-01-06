
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

function generateSlots(): Slot[] {
    const slots: Slot[] = []

    for (let row = 0; row < GRID_ROWS; row++) {
        for (let col = 0; col < GRID_COLS; col++) {
            slots.push({
              x: (col / GRID_COLS) * 100,
              y: (row / GRID_ROWS) * 100,
            })
        }
    }

    return slots
}




function ConstellationSet({ offsetX = 0 }: { offsetX?: number }) {
    const slots = generateSlots()

    // Se duplican constelaciones para mayor densidad
    const visibleConstellations = [
        ...CONSTELLATIONS,
        ...CONSTELLATIONS,
        ...CONSTELLATIONS,
        ...CONSTELLATIONS,
    ]

    return (
        <div
            className="absolute inset-0"
            style={{ transform: `translateX(${offsetX}vw)` }}
        >
            {visibleConstellations.slice(0, slots.length).map((c, i) => {
                const slot = slots[i]
                
                return (
                    <svg
                        key={i}
                        className="constellation"
                        width={random(140, 260)}
                        height={random(100, 220)}
                        viewBox={c.viewBox}
                        style={{
                            left: `${slot.x + random(1, 6)}%`,
                            top: `${slot.y + random(1, 6)}%`,
                            opacity: random(0.5, 0.8),
                        }}
                    >
                      {/* lines */}
                        {c.lines.map(([a, b], idx) => {
                            const [x1, y1] = c.points[a]
                            const [x2, y2] = c.points[b]
                            
                            return (
                                <line
                                    key={idx}
                                    x1={x1}
                                    y1={y1}
                                    x2={x2}
                                    y2={y2}
                                    stroke="rgba(255,215,150,0.35)"
                                    strokeWidth="0.6"
                                />
                            )
                        })}

                        {/* stars */}
                        {c.points.map(([x, y], idx) => (
                            <circle
                                key={idx}
                                cx={x}
                                cy={y}
                                r={random(0.8, 1.8)}
                                fill="rgba(255,255,255,0.9)"
                            />
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
            <div className="relative w-[200vw] h-full animate-constellations">
                <ConstellationSet offsetX={0} />
                <ConstellationSet offsetX={100} />
            </div>
        </div>
    )
}








