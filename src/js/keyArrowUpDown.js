import KeyArrow from "./keyArrow.js";

class KeyArrowUpDown extends KeyArrow {
  constructor(props) {
    super(props);
    this.keyUp = new KeyArrow({ title: "▲", code: props.code[0] });
    this.keyUp.element.classList.add(props.code[0].toLowerCase());

    this.keyDown = new KeyArrow({ title: "▼", code: props.code[1] });
    this.keyDown.element.classList.add(props.code[1].toLowerCase());
    this._element.classList.add("double-arrow");
    this._element.append(this.keyUp.element);
    this._element.append(this.keyDown.element);
  }
  down(e) {
    if (e.code == this.keyUp.code) this.keyUp.down(e);
    if (e.code == this.keyDown.code) this.keyDown.down(e);
  }
  up(e) {
    if (e.code == this.keyUp.code) this.keyUp.up(e);
    if (e.code == this.keyDown.code) this.keyDown.up(e);
  }
  addEventListener(key) {
    // addEventListener(key)
  }
}

export default KeyArrowUpDown;
