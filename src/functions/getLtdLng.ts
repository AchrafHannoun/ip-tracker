import apiKeyGeoCode from "../secrets/apiKeyGeoCode";
import getCountryInfo from "./getCountryInfo";

export default async function getLtdLng(address: string): Promise<string[]> {
  const apiKey = apiKeyGeoCode;
  const url = `https://geocode.maps.co/search?q=${address}&api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const lat = data[0].lat;
  const lng = data[0].lon;
  return [lat, lng];
}
