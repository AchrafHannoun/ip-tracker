import "./style.css";
import generateMap from "./functions/generateMap";
import getUserIp from "./functions/getUserIp";
import updatePElements from "./functions/updatePElements";

generateMap(31.244808138710322, -9.342556037097614);
const input = document.getElementById("input") as HTMLInputElement;
const button = document.getElementById("button") as HTMLButtonElement;

button.addEventListener("click", async () => {
  const ip = input.value;
  updatePElements(ip);
});

const userIp = (await getUserIp()) as string;
updatePElements(userIp);
