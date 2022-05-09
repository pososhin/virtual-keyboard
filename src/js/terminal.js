import { Key } from "./key.js";
import { l_ } from "./locale.js";

class Terminal {
  constructor(props) {
    this._element = document.createElement("div");
    this._element.classList.add("terminal");
    this._textarea = document.createElement("textarea");
    this._textarea.classList.add("textarea");
    this._textarea.textContent = "";
    this._element.append(this._textarea);
    console.log(Key.shiftUp);
    Key.listener = this;
  }
  get element() {
    return this._element;
  }
  pressKey(key) {    
    if (key.name) {
      const arr = key.name[l_()];
      const i = arr.length > 1 && !Key.shiftUp ? 1 : 0;
      const ch = !Key.shiftUp ? arr[i].toLowerCase() : arr[i].toUpperCase();
      this._textarea.value = this._textarea.value + ch;
      console.log("Terminal", ch);
    } else if (key.code === "Backspace") {
      let value = this._textarea.value;
      if (value.length > 0)
        this._textarea.value = value.substring(0, value.length - 1);
    } else if (key.code === "Tab") {
      this._textarea.value += "\t";
    } else if (key.code === "Enter") {
      this._textarea.value += "\n";
    } else if (
      key.code === "ArrowLeft" ||
      key.code === "ArrowRight" ||
      key.code === "ArrowUp" ||
      key.code === "ArrowDown"
    ) {
      this._textarea.value += key.title;
    } else if (key.code === "Tab") {
    } else {
      console.log(key.code);
    }
  }
}

function getCaretPosition(ctrl) {
  if (document.selection) {
      ctrl.focus();
      var range = document.selection.createRange();
      var rangelen = range.text.length;
      range.moveStart('character', -ctrl.value.length);
      var start = range.text.length - rangelen;
      return {
          'start': start,
          'end': start + rangelen
      };
  } else if (ctrl.selectionStart || ctrl.selectionStart == '0') {
      return {
          'start': ctrl.selectionStart,
          'end': ctrl.selectionEnd
      };
  } else {
      return {
          'start': 0,
          'end': 0
      };
  }
}


function setCaretPosition(ctrl, start, end) {
  if (ctrl.setSelectionRange) {
      ctrl.focus();
      ctrl.setSelectionRange(start, end);
  } else if (ctrl.createTextRange) {
      var range = ctrl.createTextRange();
      range.collapse(true);
      range.moveEnd('character', end);
      range.moveStart('character', start);
      range.select();
  }
};    



const terminal = new Terminal();
export { terminal };
