export type MythPointType =
    | "place"
    | "creature"
    | "event"
    | "artifact"

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
    place: {
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
}

//a855f7 morado bkn

export const mythPoints: MythPoint[] = [
    {
        id: "asgard",
        name: "Asgard",
        type: "place",
        position: [61.0, 8.0],
    },
    {
        id: "athens",
        name: "Athens",
        type: "place",
        position: [37.9838, 23.7275],
    },
    {
        id: "hydra",
        name: "Lernaean Hydra",
        type: "creature",
        position: [37.7, 22.8],
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
]








