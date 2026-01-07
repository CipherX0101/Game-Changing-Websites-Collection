const buttons = document.querySelectorAll(".filter-btn");
const items = document.querySelectorAll(".gallery-item");

function applyFilters() {
  const category = document
    .querySelector(".filter-btn.active")
    .getAttribute("data-filter");

  items.forEach(item => {
    const itemCategory = item.getAttribute("data-category");

    const matchesCategory =
      category === "all" || itemCategory === category;

    item.style.display = matchesCategory ? "block" : "none";
  });
}

// Category filter buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");
    applyFilters();
  });
});
