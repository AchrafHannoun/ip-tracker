import apiKey from "../secrets/apiKey";
import { Result } from "../types/Result";
import getCountryInfo from "./getCountryInfo";

const pElements = document.querySelectorAll("div > p");

export default async function updatePElements(ip: string) {
  const result = (await getCountryInfo(ip, apiKey)) as Result;
  for (let i = 0; i < pElements.length; i++) {
    const p = pElements[i];
    const value = Object.values(result)[i];
    p.textContent = value;
  }
}
