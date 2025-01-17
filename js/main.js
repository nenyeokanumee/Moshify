// Set up collapsibles
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

 // Get the current year
 const currentYear = new Date().getFullYear();

 // Set the current year to the span element
 document.getElementById('current-year').textContent = currentYear;