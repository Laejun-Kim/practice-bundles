const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});
