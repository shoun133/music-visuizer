let count = 0;

const countText = document.getElementById("count");
const button = document.getElementById("btn");

button.addEventListener("click", () => {
  count++;
  countText.textContent = "Count: " + count;
});
