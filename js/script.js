const mobileoption = document.getElementById("mobileoption");
const body = document.querySelector("body");
window.addEventListener("resize", screenSize);
mobileoption.style.display = "none";
function openOption() {
  mobileoption.style.display = "block";
  body.style.overflow = "hidden";
}
// add event listener to mobile option
mobileoption.addEventListener("click", function () {
  mobileoption.style.display = "none";
  body.style.overflow = "auto";
});
// check screen size and turned off mobile option in desktop
function screenSize() {
  if (window.innerWidth >= 768) {
    mobileoption.style.display = "none";
  }
}
