export default class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._breed = data.breed;
    this._dropOffDate = data.dropOffDate;
    console.log(data.pickUpDate);
    console.log(data.dropOffDate);
    this._pickUpDate = data.pickUpDate;
    this._link = data.link;
    this._about = data.about;
    this._cardSelector = cardSelector;
  }

  _setCardViewElements() {
    this._cardImage = this._element.querySelector(".card__image");
    this._cardTitle = this._element.querySelector(".card__title");
    this._cardAbout = this._element.querySelector(".card__about");
    this._dropOffDateHolder = this._element.querySelector(
      ".card__dates-dropoff"
    );
    this._pickUpDateHolder = this._element.querySelector(".card__dates-pickup");
    console.log(this._dropOffDateHolder);
    console.log(this._pickUpDateHolder);
  }

  _setCardView() {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
    this._cardAbout.textContent = this._about;
    this._dropOffDateHolder.textContent = this._dropOffDate;
    this._pickUpDateHolder.textContent = this._pickUpDate;
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
