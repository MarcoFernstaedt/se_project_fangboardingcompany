// ----- MODAL OPEN AND CLOSE ----- //
const openModalButton = document.querySelector(".header__button");
const reservationModal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__close");

function openReservationModal() {
  reservationModal.classList.add("modal_opened");
  reservationModal.addEventListener("click", handleRemoteClose);
  document.addEventListener("keydown", handleEscClose);
}

function closeReservationForm() {
  reservationModal.classList.remove("modal_opened");
  reservationModal.removeEventListener("click", handleRemoteClose);
  document.removeEventListener("keydown", handleEscClose);
}

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    closeReservationForm();
  }
}

function handleRemoteClose(evt) {
  if (evt.target.classList.contains("modal")) {
    closeReservationForm();
  }
}
openModalButton.addEventListener("click", openReservationModal);
closeButton.addEventListener("click", closeReservationForm);
