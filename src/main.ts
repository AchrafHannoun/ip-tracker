import "./style.css";
import generateMap from "./functions/generateMap";
import getLtdLng from "./functions/getLtdLng";
import getUserIp from "./functions/getUserIp";
import updatePElements from "./functions/updatePElements";
import getCountryInfo from "./functions/getCountryInfo";
import apiKeyIPFY from "./secrets/apiKeyIPFY";
import { Result } from "./types/Result";
import updateMap from "./functions/updateMap";
import { moveMagnet, moveMagnetOut } from "./functions/moveMagnet";

const input = document.getElementById("input") as HTMLInputElement;
const button = document.getElementById("button") as HTMLButtonElement;
const userIp = (await getUserIp()) as string;
const info = (await getCountryInfo(userIp, apiKeyIPFY)) as Result;
const hidden = document.querySelectorAll(".hidden") as NodeListOf<HTMLElement>;
const show = document.getElementById("show") as HTMLButtonElement;

updatePElements(info);
show.addEventListener("click", () => {
  hidden.forEach((element) => {
    element.classList.remove("hidden");
    element.style.zIndex = "999";
  });
  magneticElement.classList.add("hidden");
});

const latlng = (await getLtdLng(info.location)) as string[];
const lat = +latlng[0];
const lng = +latlng[1];
generateMap(lat, lng);

button.addEventListener("click", async () => {
  const ip = input.value;
  const info = (await getCountryInfo(ip, apiKeyIPFY)) as Result;

  updatePElements(info);
  const location = info.location;
  getLtdLng(location).then((latlng) => {
    const lat = +latlng[0];
    const lng = +latlng[1];
    (document.getElementById("map") as HTMLDivElement).remove();
    updateMap(lat, lng);
  });
});

//special mention to this amazing pen https://codepen.io/tdesero/pen/RmoxQg
//tweenMax isn't working, need to use gsap

const magneticElement = document.querySelector(".magnetic") as HTMLElement;
magneticElement.addEventListener("mousemove", (event) => {
  moveMagnet(event);
});

magneticElement.addEventListener("mouseout", () => {
  moveMagnetOut();
});
