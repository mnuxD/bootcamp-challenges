const audio = new Audio("audio.mp3");
let a = 0;

const playCancion = document.getElementById("button");
playCancion.addEventListener("click", function () {
  if (a === 0) {
    audio.play();
    playCancion.innerText = "❚❚";
    a = 1;
  } else if (a === 1) {
    audio.pause();
    playCancion.innerText = "▶";
    a = 0;
  }
});
