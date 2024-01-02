import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapKey from "../secrets/mapKey";

export default function generateMap() {
  const map = L.map("map", {
    center: L.latLng(31.244808138710322, -9.342556037097614),
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
}
