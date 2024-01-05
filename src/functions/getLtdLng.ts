import apiKeyGeoCode from "../secrets/apiKeyGeoCode";

const getLtdLng = async (address: string): Promise<string[]> => {
  const apiKey = apiKeyGeoCode;
  const url = `https://geocode.maps.co/search?q=${address}&api_key=${apiKey}`;

  const rawData = await fetch(url).then((response) => response.json());

  const lat = rawData[0].lat;
  const lng = rawData[0].lon;
  return [lat, lng];
};

export default getLtdLng;
