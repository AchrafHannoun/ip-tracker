import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapKey from "../secrets/mapKey";

export default function generateMap(lat: number, lng: number): L.Map {
  const icon = L.icon({
    iconUrl: "icon-location.svg",
    iconAnchor: [25, 50],
    iconSize: [25, 25],
    popupAnchor: [0, -50],
  });
  const marker = L.marker([lat, lng], {
    icon: icon,
  });

  const map = L.map("map", {
    center: L.latLng(lat, lng),
    zoom: 12,
  });
  const MapKey = mapKey;
  L.tileLayer(
    `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${MapKey}`,
    {
      tileSize: 512,
      zoomOffset: -1,
      minZoom: 1,
      attribution:
        '\u003ca href="https://www.maptiler.com/copyright/" target="_blank"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href="https://www.openstreetmap.org/copyright" target="_blank"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e',
      crossOrigin: true,
    }
  ).addTo(map);
  marker.addTo(map);
  marker.bindPopup("The IP Address is here");
  return map;
}
