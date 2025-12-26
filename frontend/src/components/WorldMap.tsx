
"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import type { MythPointType } from "@/lib/mapLayers"
import { layerStyles } from "@/lib/mapLayers"

const LeafletMap = dynamic(
    () => import("./LeafletMap"),
    { ssr: false }
)

export default function WorldMap() {

    {/*Este es el default del sidebar */}
    const [visibleLayers, setVisibleLayers] = useState<Record<MythPointType, boolean>> ({
        god: true,
        creature: true,
        event: true,
        artifact: true,
        hero: true,
    })

    return (
        <section className="relative h-screen w-full z-0 px-32 py-16">
            
            {/* Sidebar */}
            <aside
                className="absolute right-36 top-24 z-20 bg-[#1b1b2f]/90 backdrop-blur text-[#ffd700] rounded-xl p-4 w-40 border border-[#2a2a45] shadow-xl pointer-events-auto "
            >
                <h3 className="text-sm font-semibold mb-3">
                    Map Layers
                </h3>

                {Object.entries(visibleLayers).map(([type, isVisible]) => (
                    <label
                        key={type}
                        className="flex items-center gap-2 text-sm mb-2 cursor-pointer"
                    >
                        <input
                            type="checkbox"
                            checked={isVisible}
                            onChange={() =>
                                setVisibleLayers(prev => ({
                                    ...prev,
                                    [type]: !prev[type as MythPointType],
                                }))
                            }
                        />
                        <span className="capitalize">{type}</span>
                    </label>
                ))}
            </aside>
            
            {/* Map container */}
            <div className="relative h-full w-full max-w-1600px mx-auto rounded-2xl overflow-hidden border border-[#2a2a45] shadow-2xl z-0">
                <LeafletMap visibleLayers={visibleLayers} />
            </div>
        </section>
        
    )
}











