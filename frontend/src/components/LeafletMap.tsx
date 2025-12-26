"use client"

import { MapContainer, TileLayer, Marker, Popup, CircleMarker, LayerGroup } from "react-leaflet"
import L from "leaflet"
import { mythPoints, layerStyles, MythPoint, MythPointType } from "@/lib/mapLayers"

delete (L.Icon.Default.prototype as any)._getIconUrl


L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl:
        "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})


interface LeafletMapProps{
    visibleLayers: Record<MythPointType, boolean>
}



const worldBounds: [[number, number], [number, number]] = [
    [-85, -180],
    [85, 180],
]



//Puntos de prueba inicial, no necesarios, Agu del futuro --> se pueden borrar en cualquier momento
//const points = [
//    { name: "Athens", lat: 37.9838, lon: 23.7275 },
//    { name: "Asgard", lat: 60.0, lon: 10.0 }
//]



const pointsByType = mythPoints.reduce((acc, point) => {
    acc[point.type] = acc[point.type] || []
    acc[point.type].push(point)
    return acc
}, {} as Record<MythPointType, MythPoint[]>)



export default function LeafletMap({ visibleLayers }: LeafletMapProps) {

    return (
        <MapContainer
            center={[20, 0]}
            zoom={2}
            minZoom={2.3}
            maxZoom={5.5}
            maxBounds={worldBounds}
            maxBoundsViscosity={1.0}
            worldCopyJump={false}
            className="h-full w-full bg-[#0f172a]"
        >
            <TileLayer
                // Dark basemap with wrapping disabled to prevent infinite world repetition
                attribution="&copy; OpenStreetMap & CartoDB"
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                ////noWrap={true} //Esto trunca el mapa a maximo un mapamundi sin repeticiones a los lados, pero se ve feo, asi que mejor dejarlo como esta ahora
            />
            
            {Object.entries(pointsByType).map(([type, points]) => {

                if(!visibleLayers[type as MythPointType]) return null
                const style = layerStyles[type as MythPointType]

                return (
                    <LayerGroup key={type}>
                        {points.map(point => (
                            <CircleMarker
                                key={point.id}
                                center={point.position}
                                radius={8}
                                pathOptions={{
                                    color: style.color,
                                    fillColor: style.fillColor,
                                    fillOpacity: 0.85,
                                }}
                            >
                                <Popup>
                                    <strong>{point.name}</strong><br />
                                    <span className="capitalize">{type}</span>
                                </Popup>
                            </CircleMarker>
                        ))}
                    </LayerGroup>
                )
            })}
        </MapContainer>
    )
}





//            {points.map((p) => (
//                <Marker key={p.name} position={[p.lat, p.lon]}>
//                    <Popup>{p.name}</Popup>
//                </Marker>
//            ))}