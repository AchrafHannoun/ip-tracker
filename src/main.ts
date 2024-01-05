import "./style.css";
import generateMap from "./functions/generateMap";
import getLtdLng from "./functions/getLtdLng";
import getUserIp from "./functions/getUserIp";
import updatePElements from "./functions/updatePElements";
import getCountryInfo from "./functions/getCountryInfo";
import apiKeyIPFY from "./secrets/apiKeyIPFY";
import { Result } from "./types/Result";

const input = document.getElementById("input") as HTMLInputElement;
const button = document.getElementById("button") as HTMLButtonElement;

button.addEventListener("click", async () => {
  const ip = input.value;
  const info = (await getCountryInfo(ip, apiKeyIPFY)) as Result;

  updatePElements(info);
  const location = info.location;
});

const userIp = (await getUserIp()) as string;
const info = (await getCountryInfo(userIp, apiKeyIPFY)) as Result;
updatePElements(info);
const latlng = (await getLtdLng("quebec, ca")) as string[];
const lat = +latlng[0];
const lng = +latlng[1];
generateMap(lat, lng);
