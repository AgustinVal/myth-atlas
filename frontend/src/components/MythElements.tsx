
"use client"

import { useEffect, useState } from "react"

const ELEMENTS = [
    // Elementos clásicos
    "🔥", "💧", "⚡", "❄️", "🌪", "🌋",
    // Animales simbólicos
    "🐍", "🐺", "🦅", "🦁", "🐂", "🐎", "🦌",
    // Astral / místico
    "🌙", "☀️", "⭐", "🌑",
    // Objetos simbólicos
    "🗡", "🏺", "🛡", "🏹"
]

const random = (min: number, max: number) =>
    Math.random() * (max - min) + min


export default function MythElements() {

    const [items, setItems] = useState<any[]>([])

    useEffect(() => {
        setItems(
            Array.from({ length: 28 }).map((_, i) => ({
                id:i,
                symbol: ELEMENTS[i % ELEMENTS.length],
                // Posición inicial FUERA del viewport para evitar que se vean los elementos mientras se cargan correctamente
                left: random(-20, 120),
                top: random(-20, 120),
                // Dirección aleatoria
                dx: random(-80, 80),
                dy: random(-80, 80),
                // Tamaño variable
                size: random(8, 70),
                // Velocidad variable
                duration: random(25, 50),
            }))
        )
    }, [])

    return (
        <div className="myth-elements">
            {items &&
                items.map(item => (
                <span
                    key={item.id}
                    className="myth-element"
                    style={{
                        left: `${item.left}%`,
                        top: `${item.top}%`,
                        fontSize: `${item.size}px`,
                        animationDuration: `${item.duration}s`,
                        ["--dx" as any]: `${item.dx}vw`,
                        ["--dy" as any]: `${item.dy}vh`,
                    }}
                >
                    {item.symbol}
                </span>
            ))}
        </div>
    )
}


