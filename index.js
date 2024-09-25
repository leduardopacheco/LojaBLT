// Abrir modal
var modalLinks = document.querySelectorAll(".open-modal");
var modals = document.querySelectorAll(".modal");
var closeButtons = document.querySelectorAll(".close");

modalLinks.forEach((link) => {
  link.addEventListener("click", function () {
    var modalId = this.getAttribute("data-modal");
    document.getElementById(modalId).style.display = "flex";
  });
});

// Fechar modal ao clicar no "X"
closeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    this.parentElement.parentElement.style.display = "none";
  });
});

// Fechar modal ao clicar fora dele
window.addEventListener("click", function (event) {
  modals.forEach((modal) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
});