
"use client"

import dynamic from "next/dynamic"

const LeafletMap = dynamic(
    () => import("./LeafletMap"),
    { ssr: false }
)

export default function WorldMap() {
    return (
        <section className="relative h-screen w-full z-0 px-32 py-16">
            <div className="h-full w-full max-w-[1600px] mx-auto rounded-2xl overflow-hidden border border-[#2a2a45] shadow-2xl">
                <LeafletMap />
            </div>
        </section>
        
    )
}


