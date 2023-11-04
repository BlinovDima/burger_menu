function run(selector) {
  const navIcon = document.querySelector(selector);
  navIcon.addEventListener("click", () => {
    navIcon.classList.toggle("open");
  });
}

for (let i = 1; i <= 7; i++) {
  run(`#nav-icon${i}`);
}
