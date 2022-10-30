const board = document.querySelector("#board");
const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "magenta",
  "purple",
  "violet",
  "white",
  "yellowgreen",
  "pink",
];
const BLOCKS = 500;

for (let i = 0; i < BLOCKS; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(e) {
  const color = getRandomColor();
  e.style.backgroundColor = color;
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(e) {
  e.style.backgroundColor = "#1d1d1d";
  e.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
