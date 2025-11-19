import clickSound from "../assets/assets/keyboard-click-327728.mp3.mp3";

export function useClickSound() {
  function tocarClique() {
    const audio = new Audio(clickSound);
    audio.volume = 0.5; // opcional
    audio.play();
  }

  return tocarClique;
}
