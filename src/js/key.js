import { l_ } from "./locale";
class Key {
  constructor(props) {
    this._pressed = false;
    this._element = document.createElement("div");
    this._element.classList.add("key");
    this._code = props.code || null;
    if (props.name && props.name[l_()].length == 2) {
      const text1 = document.createElement("div");
      text1.classList.add("text-1");
      text1.textContent = props.name[l_()][0];
      this._element.append(text1);
      const text2 = document.createElement("div");
      text2.classList.add("text-2");
      text2.textContent = props.name[l_()][1];
      this._element.append(text2);
      this._element.classList.add("text-double");
    } else if (props.name && props.name[l_()].length == 1) {
      this._element.classList.add("text-one");
      const text1 = document.createElement("div");
      text1.classList.add("text-1");
      text1.textContent = props.name[l_()][0];
      this._element.append(text1);
    } else if (props.title) {
      this._element.classList.add("text-title");
      const text1 = document.createElement("div");
      this._element.classList.add(this.code.toLowerCase());
      text1.textContent = props.title;
      this._element.append(text1);
    }
    this.addEventListener(this);
  }
  get element() {
    return this._element;
  }
  get code() {
    return this._code;
  }
  get pressed() {
    return this._pressed;
  }
  set pressed(p) {
    this._pressed = p;
    console.log("press", this._code, this.pressed, p);
    if (this._pressed) {
      this._element.classList.add("pressed");
    } else {
      this._element.classList.remove("pressed");
    }
    return this._pressed;
  }
  down() {
    if (this.pressed) return;
    this.pressed = true;
  }
  up() {
    if (!this.pressed) return;
    // console.log("up", this._code, this.pressed);
    this.pressed = false;
  }
  addEventListener(key=this) {
    key._element.addEventListener("mousedown", (_) => {
      key.pressed = true;
    });
    key._element.addEventListener("mouseup", (_) => {
      key.pressed = false;
    });
  }
  ss;
}

export default Key;
