// import {Key, Key.shiftPress, Key.altPress, Key.capsLockPress, Key.shiftUp} from "./key.js";
import {Key} from "./key.js";

class KeyShift extends Key {
  constructor(props) {
    super(props);
  }
  pressed() {
    super.pressed();
    if (Key.shiftPress != this._pressed) {
      Key.shiftPress = this._pressed;
      Key.shiftUp = Key.capsLockPress ? !Key.shiftPress : Key.shiftPress;
      if (Key.altPress && Key.shiftPress) {
        toggleLocale();
      }
    }
  }
}

class KeyAlt extends Key {
  constructor(props) {
    super(props);
  }
  pressed() {
    super.pressed();
    if (Key.altPress != this._pressed) {
      Key.altPress = this._pressed;
      if (Key.altPress && Key.shiftPress) {
        toggleLocale();
      }
    }
  }
}

class KeyCapsLock extends Key {
  constructor(props) {
    super(props);
    this.diode = document.createElement("div");
    this.diode.classList.add("diode");
    this.diodeSet();
    this._element.append(this.diode);
  }
  pressed() {
    const pressedPrev = this._pressed;
    super.pressed();
    if (!pressedPrev && this._pressed) {
      Key.capsLockPress = !Key.capsLockPress;
      Key.shiftUp = Key.capsLockPress ? !Key.shiftPress : Key.shiftPress;
      this.diodeSet()
    }
  }
  diodeSet() {
    if (Key.shiftUp) this.diode.classList.remove("off");
    else this.diode.classList.add("off");
  }
}

export { KeyShift, KeyAlt, KeyCapsLock,};
