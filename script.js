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
  navlink.classList.add("activated");
  cloose.classList.add("activated");
});

cloose.addEventListener("click", (e) => {
  bars.classList.remove("deactivated");
  cloose.classList.remove("activated");
  navlink.classList.remove("activated");
});

const showImageBtn = document.getElementById("showImageBtn");
const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");

showImageBtn.addEventListener("click", () => {
  popup.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Optional: Close when clicking outside the popup
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.add("hidden");
  }
});

document.querySelectorAll(".stack-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `rotateY(${x / 20}deg) rotateX(${
      y / -20
    }deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
  });
});
