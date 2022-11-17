const priceRange = document.querySelector("#price-range__input");
const priceRangeProgress = document.querySelector(".price-range__progress");
priceRange.value = 50;
priceRange.addEventListener("mouseup", () => {
  priceRange.blur();
});

function calculateProgressWidth() {
  var root = document.querySelector(":root");
  let priceRangeStyle = window.getComputedStyle(priceRange);
  let width = priceRangeStyle.getPropertyValue("width");
  width = width.split("");
  width.pop();
  width.pop();
  width = width.join("");
  width -= 35;
  let x = (priceRange.value / 100) * width;
  console.log(priceRange.value)

  root.style.setProperty("--progressValue", `${x}px`);
}

priceRange.addEventListener("input", calculateProgressWidth);

const observer = new ResizeObserver(() => {
  calculateProgressWidth();
});

observer.observe(document.body);

let togglePeriod = document.querySelector(".toggle");
let togglePeriodBtn = document.querySelector(".toggleBtn");

togglePeriod.addEventListener("click", function (event) {
  togglePeriodBtn.classList.toggle("annual");
  togglePeriod.classList.toggle("annual");

});
