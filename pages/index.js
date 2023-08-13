import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import FormValidator from "../components/FormValidator.js";

// ----- MODAL OPEN AND CLOSE ----- //
const reservationPopup = new Popup({
  popupSelector: "#modal__reservation-form",
});
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

// import "./index.css";

// Ahmed
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
