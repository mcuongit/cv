document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("menu");
  const menuList = document.getElementById("menu-list");
  const menuContent = document.getElementById("menu-content");
  menu.addEventListener("click", () => {
    menuList.classList.toggle("h-0");
    menuList.classList.toggle("h-64");
    menuContent.classList.toggle("hidden");
    menuContent.classList.toggle("flex");
  });
});
