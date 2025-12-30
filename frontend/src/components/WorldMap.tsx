
"use client"

import { useState } from "react"
import { useEffect } from "react"
import dynamic from "next/dynamic"
import type { MythPointType } from "@/lib/mapLayers"
import { layerStyles } from "@/lib/mapLayers"

const LeafletMap = dynamic(
    () => import("./LeafletMap"),
    { ssr: false }
)


const ALL_LAYERS: MythPointType[] = [
    "god",
    "creature",
    "event",
    "artifact",
    "hero",
]


function getRandomLayerState(): Record<MythPointType, boolean> {
    const result: Record<MythPointType, boolean> = {
        god: false,
        creature: false,
        event: false,
        artifact: false,
        hero: false,
    }

    // número aleatorio de capas activas (1 → todas)
    const activeCount = Math.floor(Math.random() * ALL_LAYERS.length) + 1

    // barajar capas
    const shuffled = [...ALL_LAYERS].sort(() => Math.random() - 0.5)

    shuffled.slice(0, activeCount).forEach(layer => {
        result[layer] = true
    })

    return result
}

export default function WorldMap() {

    // Estados (UI /control)

    //Este es el default del sidebar 
    const [visibleLayers, setVisibleLayers] = useState<Record<MythPointType, boolean>> ({
        god: true,
        creature: true,
        event: true,
        artifact: true,
        hero: true,
    })

    const [autoMode, setAutoMode] = useState(true)

    // Efectos
    useEffect(() => {
        if (!autoMode) return

        const interval = setInterval(() => {
            setVisibleLayers(getRandomLayerState())
        }, 6000) // Cada 6 segundos

        return () => clearInterval(interval)
    }, [autoMode])

    // Datos dummy por ahora, cuando conecte la base de datos ojala mantener estos numeros para esta seccion y no muchos mas, cosa de la base de datos completa que sea premium
    const layerCounts: Record<MythPointType, number> = {
        god: 101,         // GOD_POINTS.length,
        creature: 151,    // CREATURE_POINTS.length,
        event: 14,        // EVENT_POINTS.length,
        artifact: 21,     // ARTIFACT_POINTS.length,
        hero: 30,         // HERO_POINTS.length,
    }



    // Render
    return (
        <section className="relative h-screen w-full z-0 px-32 py-16">
            
            {/* Sidebar */}
            <aside
                className="absolute right-36 top-24 z-20 bg-[#1b1b2f]/90 backdrop-blur text-[#ffd700] rounded-xl p-4 w-40 border border-[#2a2a45] shadow-xl pointer-events-auto "
            >
                <h3 className="text-sm font-semibold mb-3">
                    Map Layers
                </h3>
                {/* Checkboxes */}
                {Object.entries(visibleLayers).map(([type, isVisible]) => (
                    <label
                        key={type}
                        className="flex items-center gap-2 text-sm mb-2 cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            checked={isVisible}
                            onChange={() => {
                                setAutoMode(false)
                                setVisibleLayers(prev => ({
                                    ...prev,
                                    [type]: !prev[type as MythPointType],
                                }))
                            }}
                        />
                        <span className="capitalize">{type}</span>
                    </label>
                ))}

                {/** Divider */}
                <div className="my-3 border-t border-[#2a2a45]" />

                {/** Counters */}
                <div className="space-y-1 text-xs text-[#cbd5f5]">
                    {Object.entries(visibleLayers).map(([type, isVisible]) => {
                        if (!isVisible) return null

                        return (
                            <div
                                key={type}
                                className="flex justify-between animate-fade-in"
                            >
                                <span className="capitalize">{type}</span>
                                <span className="font-mono">
                                    {layerCounts[type as MythPointType]}
                                </span>
                            </div>
                        )
                    })}
                </div>            
                
            </aside>
            
            {/* Map container */}
            <div className="relative h-full w-full max-w-1600px mx-auto rounded-2xl overflow-hidden border border-[#2a2a45] shadow-2xl z-0">
                <LeafletMap visibleLayers={visibleLayers} />
            </div>
        </section>
        
    )
}











