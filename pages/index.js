import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";

// initial cards
// import "./index.css";

// Ahmed
const initialCards = [
  {
    name: "one",
    link: "./images/pic1.avif",
    breed: "german Sheperd",
    about: "good boy",
    pickUpDate: "8-9-2023",
    dropOffDate: "8-18-2023",
  },
  {
    name: "two",
    link: "./images/pic2.jpg",
    breed: "german Sheperd",
    about: "good boy",
    pickUpDate: "8-9-2023",
    dropOffDate: "8-18-2023",
  },
  {
    name: "three",
    link: "./images/pic3.jpeg",
    breed: "german Sheperd",
    about: "good boy",
    pickUpDate: "8-9-2023",
    dropOffDate: "8-18-2023",
  },
];

// wraper
const cardsWrap = document.querySelector(".cards__list");

// templete
const cardTemplate = document
  .querySelector("#card-template")
  .content.querySelector(".card");

const createCard = (data) => {
  const card = new Card(data, "#card-template");
  cardsWrap.append(card.getView());
};

initialCards.forEach((data) => {
  createCard(data);
});

// ----- MODAL OPEN AND CLOSE ----- //
const reservationPopup = new PopupWithForm(
  "#modal__reservation-form",
  ({ name, breed, link, about, pickUpDate, dropOffDate }) => {
    createCard({ name, breed, link, about, pickUpDate, dropOffDate });
  }
);
reservationPopup.setEventListeners();
const openModalButton = document.querySelector(".header__button");
openModalButton.addEventListener("click", () => {
  reservationPopup.open();
});

// ----- FORM VALIDATION ----- //
const reservationForm = document.forms["reservation__form"];
const options = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_disabled",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__error_visible",
};
const reservationFormValidator = new FormValidator(options, reservationForm);
reservationFormValidator.enableValidation();
