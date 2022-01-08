const toggleElement = document.getElementsByClassName("toggle")[0];
//[0] because its return a first eleemtt of array that is toggle and in second navlinks
const activeToggle = document.getElementsByClassName("navlinks")[0];

toggleElement.addEventListener("click", (e) => {
  e.preventDefault();
  activeToggle.classList.toggle("active");
});
