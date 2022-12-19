const mobileoption = document.getElementById("mobileoption");
const body = document.querySelector("body");
const content = document.querySelector(".content");
function openOption() {
  mobileoption.style.display = "block";
  body.style.overflow = "hidden";
}
// add event listener to mobile option
mobileoption.addEventListener("click", function () {
  mobileoption.style.display = "none";
  body.style.overflow = "auto";
});
