const sidebar = document.getElementById("sidebar");

const menuIcon = document.getElementById("menuIcon");
menuIcon.addEventListener("click", () => {
  // Remove class from sidebar
  sidebar.classList.remove("-translate-x-full");
});

const closeIcon = document.getElementById("closeIcon");
closeIcon.addEventListener("click", () => {
  // Add class in sidebar
  sidebar.classList.add("-translate-x-full");
});

const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-theme", newTheme);
  doughnutChart.update();
});
