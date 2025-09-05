const btn = document.getElementById("clickBtn");
const title = document.getElementById("title");

btn.addEventListener("click", function() {
  // Text change
  title.textContent = "You Clicked Me! 🎉";

  // Random color for title
  const colors = ["red", "green", "blue", "purple", "orange"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  title.style.color = randomColor;

  // Random button color
  const btnColors = ["#e74c3c", "#2ecc71", "#9b59b6", "#f1c40f", "#1abc9c"];
  const randomBtnColor = btnColors[Math.floor(Math.random() * btnColors.length)];
  btn.style.backgroundColor = randomBtnColor;
});
