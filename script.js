document.addEventListener("DOMContentLoaded", function () {
  const dropdownBtn = document.querySelector(".dropdown-btn");
  const dropdownMenu = document.querySelector(".dropdown-menu");
  const items = document.querySelectorAll(".menu-item");

  dropdownBtn.addEventListener("click", () => {
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  });

  dropdownMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const category = e.target.dataset.value;
      dropdownBtn.textContent = e.target.textContent;
      dropdownMenu.style.display = "none";

      items.forEach(item => {
        if (category === "all" || item.dataset.category === category) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".custom-dropdown")) {
      dropdownMenu.style.display = "none";
    }
  });
});