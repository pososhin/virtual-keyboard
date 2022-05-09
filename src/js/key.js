import { l_ } from "./locale.js";
class Key {
  constructor(props) {
    this._pressed = false;
    this._pressedKey = false;
    this._pressedMouse = false;
    this.name = props.name || null;
    this.title = props.title || null;
    this._element = document.createElement("div");
    this._element.classList.add("key");
    this._code = props.code || null;
    Array.from(["en", "ru"], (l) => {
      if (props.name) {
        for (let i = 0; i <= props.name[l].length; i++) {
          this._element.classList.add("text-one");
          const text1 = document.createElement("div");
          text1.classList.add("text-" + i, "locale", l);
          text1.textContent = props.name[l][i];
          if (l !== l_()) text1.style.display = "none";
          this._element.append(text1);
        }
      } else if (props.title && l === "en") {
        this._element.classList.add("text-title");
        const text1 = document.createElement("div");
        this._element.classList.add(this.code.toLowerCase());
        text1.textContent = props.title;
        this._element.append(text1);
      }
    });
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
  get pressedKey() {
    return this._pressedKey;
  }
  get pressedMouse() {
    return this._pressedMouse;
  }

  pressed() {
    if (this._pressed != (this.pressedKey || this._pressedMouse)) {      
      this._pressed = this.pressedKey || this._pressedMouse;      
      if (this._pressed) {
        if(Key.listener) Key.listener.pressKey(this);
        this._element.classList.add("pressed");
      } else {
        this._element.classList.remove("pressed");
      }
    }
    return this._pressed;
  }

  set pressedKey(p) {
    this._pressedKey = p;
    this.pressed();
    return this._pressed;
  }
  set pressedMouse(p) {
    this._pressedMouse = p;
    this.pressed();
    return this._pressed;
  }

  down() {
    if (this.pressedKey) return;
    this.pressedKey = true;
  }
  up() {
    if (!this.pressedKey) return;
    this.pressedKey = false;
  }

  addEventListener(key = this) {
    key._element.addEventListener("mousedown", (_) => {
      key.pressedMouse = true;
      this.pressed();
    });
    key._element.addEventListener("mouseup", (_) => {
      key.pressedMouse = false;
      this.pressed();
    });
    key._element.addEventListener("mouseenter", (e) => {
      key.pressedMouse = e.buttons % 2 == 1;
      this.pressed();
    });
    key._element.addEventListener("mouseleave", (_) => {
      key.pressedMouse = false;
      this.pressed();
    });
  }
}

Key.shiftPress = false;
Key.altPress = false;
Key.capsLockPress = false;
Key.shiftUp = false;
Key.listener = undefined;


// Key.shiftUp = shiftUp;

export { Key };
// export { Key, shiftPress, altPress, capsLockPress, shiftUp };
