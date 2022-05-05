import { l_ } from "./locale";
class Key {
  constructor(props) {
    this._pressed = false;
    this._pressedKey = false;
    this._pressedMouse = false;
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
  get pressed() { return this._pressed; }
  get pressedKey() { return this._pressedKey; }
  get pressedMouse() { return this._pressedMouse; }

  pressed() {
    if (this.pressedKey || this._pressedMouse) {
      this._element.classList.add("pressed");
    } else {
      this._element.classList.remove("pressed");
    }
  }

  set pressedKey(p) {  this._pressedKey = p; this.pressed(); return this._pressed; }
  set pressedMouse(p) {  this._pressedMouse = p; this.pressed(); return this._pressed; }

  down() {
    console.log('s')
    if (this.pressedKey) return;
    this.pressedKey = true;    
  }
  up() {
    if (!this.pressedKey) return;
    this.pressedKey= false;
  }

  addEventListener(key=this) {
    key._element.addEventListener("mousedown", (_) => {
      key.pressedMouse = true;
      this.pressed();
    });
    key._element.addEventListener("mouseup", (_) => {
      key.pressedMouse = false;
      this.pressed();
    });
    key._element.addEventListener("mouseenter", (e) => {
      key.pressedMouse = e.buttons%2==1;
      this.pressed();
    });
    key._element.addEventListener("mouseleave", (e) => {
      key.pressedMouse = false;
      this.pressed();
    });
  }  
}

export default Key;
