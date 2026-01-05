
"use client"

import React from "react"
import { CONSTELLATIONS } from "@/lib/constellations"
import type { Constellation } from "@/lib/constellations"


const random = (min: number, max: number) =>
  Math.random() * (max - min) + min





function ConstellationSet({ offsetX = 0 }) {
    return (
        <div
            className="absolute inset-0"
            style={{ transform: `translateX(${offsetX}vw)` }}
        >
            {CONSTELLATIONS.map((c, i) => (
                <svg key={i} 
                    className="constellation"
                    width={random(140, 240)}
                    height={random(100, 200)}
                    viewBox={c.viewBox}
                    style={{
                        top: `${random(0, 90)}%`,
                        left: `${random(0, 100)}%`,
                    }}
                >
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
            ))}
        </div>
    )
}







export default function ConstellationsLayer() {
    return (
        <div className="constellations-wrapper">
            <div className="constellations-track">
                <ConstellationSet offsetX={0} />
                <ConstellationSet offsetX={100} />
            </div>
        </div>
    )
}







