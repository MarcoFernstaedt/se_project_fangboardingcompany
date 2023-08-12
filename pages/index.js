<<<<<<< HEAD
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
=======
// import "./index.css";

// Ahmed
import Card from "../components/Card.js";
const initialCards = [
  {
    name: "one",
    link: "./images/pic1.avif",
  },
  {
    name: "two",
    link: "./images/pic2.jpg",
  },
  {
    name: "three",
    link: "./images/pic3.jpeg",
  },
];

// wraper
const cardsWrap = document.querySelector(".cards__list");

// templete
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

initialCards.forEach((data) => {
  const card = new Card(data, "#card-template");
  cardsWrap.append(card.getView());
});
>>>>>>> feature-cards-about
