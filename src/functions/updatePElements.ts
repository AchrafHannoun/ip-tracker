import { Result } from "../types/Result";

const pElements = document.querySelectorAll("div > p");

export default async function updatePElements(result: Result) {
  for (let i = 0; i < pElements.length; i++) {
    const p = pElements[i];
    const value = Object.values(result)[i];
    p.textContent = value;
  }
}
