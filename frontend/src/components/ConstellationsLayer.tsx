
"use client"

import React from "react"




type Constellation = {
    points: [number, number][]
    lines: [number, number][]
}

const CONSTELLATIONS: Constellation[] = [
    // Orion-like
    {
        points: [
            [10, 10], [30, 20], [50, 10],
            [40, 40], [20, 40]
        ],
        lines: [
            [0, 1], [1, 2], [1, 3], [3, 4]
        ]
    },

    // Serpent-like
    {
        points: [
            [10, 30], [25, 20], [40, 30],
            [55, 20], [70, 30]
        ],
        lines: [
            [0, 1], [1, 2], [2, 3], [3, 4]
        ]
    },

    // Constelacion de Libra
    {
        points: [
            [20, 20], [50, 10], [80, 30], [18, 40], [10, 55], [65, 45]
        ],
        lines: [
            [0, 1], [1, 2], [2, 0], [3, 4], [3, 0], [2, 5]
        ]
    },
    // Constelacion de Capricornio
    {
        points: [
            //0        1        2          3       4         5         6         7         8         9         10        11        12
            [10, 30], [90, 10], [75, 55], [98, 3], [20, 30], [30, 25], [43, 23], [85, 30], [77, 50], [55, 49], [17, 37], [25, 42], [30, 45]
        ],
        lines: [
            [6, 1], [5, 6], [4, 5], [1, 3], [0, 4], [7, 1], [8, 7], [8, 2], [2, 9], [0, 10], [11, 12], [12, 9], [10, 11]
        ]
    }
]

















const random = (min: number, max: number) =>
  Math.random() * (max - min) + min

export default function ConstellationsLayer() {
    return (
        <div className="constellations-layer">
            {Array.from({ length: 12 }).map((_, i) => {
                const constellation =
                    CONSTELLATIONS[i % CONSTELLATIONS.length]
                
                return (
                    <svg
                        key={i}
                        className="constellation"
                        width={200}
                        height={120}
                        viewBox="0 0 100 60" //Mejorar esta caja para que algunas cajas sean diferentes a las otras, ya que unas constelaciones son a lo largo y otras a lo ancho
                        style={{
                            top: `${random(0, 80)}%`,
                            animationDuration: `${random(90, 160)}s`,
                            animationDelay: `${random(-120, 0)}s`,
                        }}
                    >
                      {/* Lines */}
                        {constellation.lines.map(([a, b], idx) => {
                            const [x1, y1] = constellation.points[a]
                            const [x2, y2] = constellation.points[b]

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

                        {/* Stars */}
                        {constellation.points.map(([x, y], idx) => (
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







