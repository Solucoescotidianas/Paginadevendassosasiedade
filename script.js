let breathing = false;
let circle = document.getElementById("circle");
let text = document.getElementById("breathText");

function startBreathing() {
  if (breathing) return;
  breathing = true;

  let expand = true;
  text.innerText = "Inspire...";

  setInterval(() => {
    if (expand) {
      circle.style.width = "260px";
      circle.style.height = "260px";
      text.innerText = "Segure...";
    } else {
      circle.style.width = "150px";
      circle.style.height = "150px";
      text.innerText = "Expire...";
    }
    expand = !expand;
  }, 4000);
}
