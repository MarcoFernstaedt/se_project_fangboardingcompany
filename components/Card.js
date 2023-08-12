export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    // this._breed = data.breed;
    // this._dropOffData = data.dropOffData;
    // this._pickUpDate = data.pickUpDate;
    this._link = data.link;
    // this._about = data.about;
    this._cardSelector = cardSelector;
  }

  _setCardViewElements() {
    this._cardImage = this._element.querySelector(".card__image");
    this._cardTitle = this._element.querySelector(".card__title");
    // this._cardAbout = this._element.querySelector(".card__about");
    // this._dropOffData = this._element.querySelector("card__dates-dropoff");
    // this._pickUpDate = this._element.querySelector("card__dates-pickup");
  }

  _setCardView() {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    // this._cardAbout.textContent = this._cardAbout;
    // this._dropOffData.textContent = this._dropOffData;
    // this._pickUpDate.textContent = this._pickUpDate;
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.cloneNode(true)
      .querySelector(".card");
  }

  getView() {
    this._element = this._getTemplate();
    this._setCardViewElements();
    this._setCardView();
    return this._element;
  }
}
