const btn = document.getElementById("ten");
const one = document.getElementById("one");
const two = document.getElementById("two");
btn.addEventListener("click", function() {
  const colors = ["red", "green", "blue", "purple", "orange"];
  one.style.color = colors[Math.floor(Math.random() * colors.length)];
const news = Math.floor(Math.random() * 10) +18;
two.style.fontSize = news + "px";
const btnColors = ["red", "green", "yellow", "blue", "navy"];
btn.style.backgroundColor = btnColors[Math.floor(Math.random() * ten.length)];
one.textContent = "Hello there!";
});