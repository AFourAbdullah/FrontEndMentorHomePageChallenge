const oi = document.getElementById("openIcon");
const ci = document.getElementById("closeIcon");
const ul = document.querySelector("ul");

oi.addEventListener("click", () => {
  ul.style.display = "block";
  oi.style.display = "none";
});
ci.addEventListener("click", () => {
  ul.style.display = "none";
  oi.style.display = "block";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 400) {
    ul.style.display = "flex";
    oi.style.display = "none";
  } else {
    ul.style.display = "none";
    oi.style.display = "block";
  }
});
