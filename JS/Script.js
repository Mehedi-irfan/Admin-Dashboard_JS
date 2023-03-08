const sideBar = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeLogger = document.querySelector(".theme-logoler");

//show button
menuBtn.addEventListener("click", () => {
  sideBar.style.display = "block";
});
//close button
closeBtn.addEventListener("click", () => {
  sideBar.style.display = "none";
});

//change theme
themeLogger.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme-variable");

  themeLogger.querySelector("span:nth-child(1)").classList.toggle("active");
  themeLogger.querySelector("span:nth-child(2)").classList.toggle("active");
});
