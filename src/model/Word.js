export default class Word {
  constructor(id, firstText, secondText) {
    this._firstSoundUrl = 'http://mp3.click4skill.hu/mp3/english/sz' + id + 'hu_HU.mp3';
    this._secondSoundUrl = 'http://mp3.click4skill.hu/mp3/english/sz' + id + 'en_US.mp3';
    this._firstText = firstText;
    this._secondText = secondText;
    this._id = id;
  }

  get firstText() {
    return this._firstText;
  }

  get secondText() {
    return this._secondText;
  }


  get firstSoundUrl() {
    return this._firstSoundUrl;
  }

  get secondSoundUrl() {
    return this._secondSoundUrl;
  }


  get id() {
    return this._id;
  }
}