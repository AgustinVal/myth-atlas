export type MythPointType =
    | "god"
    | "creature"
    | "event"
    | "artifact"
    | "hero"

export interface MythPoint {
    id: string
    name: string
    type: MythPointType
    position: [number, number]
}

export const layerStyles: Record<MythPointType, {
    color: string
    fillColor: string
}> = {
    god: {
        color: "#ffd700",
        fillColor: "#ffd700",
    },
    creature: {
        color: "#ff4d4d",
        fillColor: "#ff4d4d",
    },
    event: {
        color: "#4da6ff",
        fillColor: "#4da6ff",
    },
    artifact: {
        color: "#54ff3c",
        fillColor: "#54ff3c",
    },
    hero: {
        color: "#a855f7",
        fillColor: "#a855f7"
    }
}


export const mythPoints: MythPoint[] = [
    {
        id: "thor",
        name: "Thor",
        type: "god",
        position: [61.0, 8.0],
    },
    {
        id: "athenea",
        name: "Athenea",
        type: "god",
        position: [37.9838, 23.7275],
    },
    {
        id: "poseidon",
        name: "Poseidon",
        type: "god",
        position: [37.773, 24.430],
    },
    {
        id: "quetzalcoatl",
        name: "Quetzalcoatl",
        type: "god",
        position: [19.285, -99.164],
    },
    {
        id: "ra",
        name: "Ra",
        type: "god",
        position: [29.979, 31.134],
    },
    {
        id: "hydra",
        name: "Lernaean Hydra",
        type: "creature",
        position: [37.7, 22.8],
    },
    {
        id: "alicanto",
        name: "Alicanto",
        type: "creature",
        position: [-21.213, -69.625],
    },
    {
        id: "akhlut",
        name: "Akhlut",
        type: "creature",
        position: [69.473, -49.591],
    },
    {
        id: "trojan-war",
        name: "Trojan War",
        type: "event",
        position: [39.957, 26.238],
    },
    {
        id: "excalibur",
        name: "Excalibur",
        type: "artifact",
        position: [50.668, -4.789],
    },
    {
        id: "heracles",
        name: "Heracles",
        type: "hero",
        position: [36.7, 21.8],
    },
]








