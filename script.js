const light = document.getElementById("light");
const dark = document.getElementById("dark");
const bod = document.getElementById("bod");
const cloose = document.getElementById("close");
const bars = document.getElementById("bars");
const navlink = document.getElementById("nav-link");

light.addEventListener("click", (e) => {
  bod.classList.add("body-light");
  light.classList.add("deactivate");
  dark.classList.add("black");
});

dark.addEventListener("click", (e) => {
  bod.classList.remove("body-light");
  light.classList.remove("deactivate");
  dark.classList.remove("black");
});

bars.addEventListener("click", (e) => {
  navlink.classList.remove("deactivated");
  cloose.classList.add("activated");
});

cloose.addEventListener("click", (e) => {
  bars.classList.remove("deactivated");
  cloose.classList.remove("activated");
  navlink.classList.add("deactivated");
});
