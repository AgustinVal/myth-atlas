"use client"

import React from "react"

const STAR_COLORS = [
  "rgba(255,255,255,1)",   // blanca
  "rgba(255,220,160,1)",   // amarilla
  "rgba(255,180,180,1)",   // roja
  "rgba(180,200,255,1)",   // azul
]

const random = (min: number, max: number) =>
  Math.random() * (max - min) + min

type StarsLayerProps = {
    count?: number
    minSize?: number
    maxSize?: number
    minOpacity?: number
    maxOpacity?: number
}

export default function StarsLayer({
    count = 250,
    minSize = 0.6,
    maxSize = 2.2,
    minOpacity = 0.25,
    maxOpacity = 0.85,
}: StarsLayerProps) {
    return (
        <div className="absolute inset-0 pointer-events-none stars-drift">
            {Array.from({ length: count }).map((_, i) => {
                const size = random(minSize, maxSize)
                const color =
                  STAR_COLORS[Math.floor(Math.random() * STAR_COLORS.length)]
                
                return (
                    <span
                        key={i}
                        className="absolute rounded-full"
                        style={{ 
                            width: size,
                            height: size,
                            backgroundColor: color,
                            opacity: random(minOpacity, maxOpacity),
                            top: `${random(0, 100)}%`,
                            left: `${random(0, 100)}%`,
                            boxShadow: `0 0 ${size * 4}px ${color}`,
                        }}
                    />
                )
            })}
        </div>
    )
}
