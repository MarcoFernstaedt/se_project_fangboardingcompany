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
