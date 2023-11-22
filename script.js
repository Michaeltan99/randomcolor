const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btt = document.getElementById("pick");
const warna = document.querySelector(".color");
const title = document.getElementById('title')

btt.addEventListener("click", function () {
  let hexcolor = "#";
  for(let i = 0; i < 6; i++) {
    hexcolor += colors[randomNumber()];
  }

  warna.textContent = hexcolor;
  document.body.style.backgroundColor = hexcolor;
});

function randomNumber(){
    return Math.floor(Math.random() * colors.length)
}
