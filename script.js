document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("themeToggle");
  var savedTheme = localStorage.getItem("lesotho-theme");

  if (savedTheme === "dark") document.body.classList.add("dark");

  function updateButton() {
    if (!button) return;
    var isDark = document.body.classList.contains("dark");
    button.textContent = isDark ? "☀️ Light mode" : "🌙 Dark mode";
    button.setAttribute("aria-pressed", String(isDark));
  }

  updateButton();
  if (button) {
    button.addEventListener("click", function () {
      document.body.classList.toggle("dark");
      var isDark = document.body.classList.contains("dark");
      localStorage.setItem("lesotho-theme", isDark ? "dark" : "light");
      updateButton();
    });
  }
});
function non() {
  var name=document.getElementById("fullName");
  alert("Thank you for your enquiry " + name.value + ". We will get back to you as soon as possible.");
}
function video(){
  var vid = document.getElementById("video");
  if (!vid) return;
  if (vid.paused) {
    vid.play();
  } else {
    vid.pause();
  }
}
