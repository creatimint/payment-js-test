

function openModal(id) {
//   const modalContent = document.getElementById("modal-content");
// const closeBtn = document.getElementById("close-modal");
const getModal = document.getElementById(id);
//open the modal
  getModal.classList.remove("hidden");
  getModal.classList.add("flex");
}

function closeModal() {
  closeBtn.addEventListener("click", function () {
    getModal.classList.remove("flex");
    getModal.classList.add("hidden");
  });
  return;
}
