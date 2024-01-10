import gsap from "gsap";

const magnetStrength = 300;
const magnetic = document.querySelector(".magnetic") as HTMLElement;

export function moveMagnet(event: MouseEvent) {
  const magneticRect = magnetic.getBoundingClientRect();

  return gsap.to(magnetic, {
    duration: 1,
    x:
      ((event.clientX - magneticRect.left) / magnetic.offsetWidth - 0.5) *
      magnetStrength,
    y:
      ((event.clientY - magneticRect.top) / magnetic.offsetHeight - 0.5) *
      magnetStrength,
  });
}

export function moveMagnetOut() {
  return gsap.to(magnetic, { duration: 1, x: 0, y: 0 });
}
