import "./style.css";
import generateMap from "./functions/generateMap";
import getCountryInfo from "./functions/getCountryInfo";
import apiKey from "./secrets/apiKey";
import { Result } from "./types/Result";

generateMap();
const input = document.getElementById("input") as HTMLInputElement;
const button = document.getElementById("button") as HTMLButtonElement;
const pElements = document.querySelectorAll("div > p");

button.addEventListener("click", async () => {
  const ip = input.value;
  const result = (await getCountryInfo(ip, apiKey)) as Result;
  for (let i = 0; i < pElements.length; i++) {
    const p = pElements[i];
    const value = Object.values(result)[i];
    p.textContent = value;
  }
  const resultElement = document.querySelector(".hidden");
  resultElement?.classList.remove("hidden");
});
