
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


type MythItem = {
    id: number
    symbol: string
    left: number
    top: number
    dx: number
    dy: number
    size: number
    duration: number
}


export default function MythElements() {

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const [items, setItems] = useState<MythItem[]>([])

    useEffect(() => {
        if (!mounted) return

        const generated = Array.from({ length: 28 }).map((_, i) => ({
            id: i,
            symbol: ELEMENTS[i % ELEMENTS.length],
            // Posición inicial FUERA del viewport para evitar que se vean los elementos mientras se cargan correctamente
            left: random(-20, 120),
            top: random(-20, 120), 
            // Dirección aleatoria
            dx: random(-80, 80),
            dy: random(-80, 80),
            // Tamaño variable
            size: random(18, 50),
            // Velocidad variable
            duration: random(25, 50),
        }))

        setItems(generated)
    }, [mounted])

    // 
    if (!mounted) return null

    return (
        <div className="myth-elements">
            {items.map(item => (
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


