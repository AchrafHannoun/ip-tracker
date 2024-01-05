import generateMap from "./generateMap";

export default function updateMap(lat: number, lng: number): void {
  const element = document.createElement("div");
  element.id = "map";
  document.body.appendChild(element);
  generateMap(lat, lng);
}
