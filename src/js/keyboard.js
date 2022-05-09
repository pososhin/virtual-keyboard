import {Key} from "./key.js";
import KeyArrow from "./keyArrow.js";
import KeyArrowUpDown from "./keyArrowUpDown";
import {KeyShift,KeyCapsLock,KeyAlt} from "./keyShift";
const rows = [
  [
    {
      key: new Key({ name: { en: ["~", "`"], ru: ["Ё"] }, code: "Backquote" }),
      width: 1,
    },
    {
      key: new Key({
        name: { en: ["!", "1"], ru: ["!", "1"] },
        code: "Digit1",
      }),
      width: 1,
    },
    {
      key: new Key({
        name: { en: ["@", "2"], ru: ['"', "2"] },
        code: "Digit2",
      }),
      width: 1,
    },
    {
      key: new Key({
        name: { en: ["#", "3"], ru: ["№", "3"] },
        code: "Digit3",
      }),
      width: 1,
    },
    {
      key: new Key({
        name: { en: ["$", "4"], ru: [";", "4"] },
        code: "Digit4",
      }),
      width: 1,
    },
    {
      key: new Key({
        name: { en: ["%", "5"], ru: ["%", "5"] },
        code: "Digit5",
      }),
      width: 1,
    },
    {
      key: new Key({
        name: { en: ["^", "6"], ru: [":", "6"] },
        code: "Digit6",
      }),
      width: 1,
    },
    {
      key: new Key({
        name: { en: ["&", "7"], ru: ["?", "7"] },
        code: "Digit7",
      }),
      width: 1,
    },
    {
      key: new Key({
        name: { en: ["*", "8"], ru: ["*", "8"] },
        code: "Digit8",
      }),
      width: 1,
    },
    {
      key: new Key({
        name: { en: ["(", "9"], ru: ["(", "9"] },
        code: "Digit9",
      }),
      width: 1,
    },
    {
      key: new Key({
        name: { en: [")", "0"], ru: [")", "0"] },
        code: "Digit0",
      }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["_", "-"], ru: ["_", "-"] }, code: "Minus" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["+", "="], ru: ["+", "="] }, code: "Equal" }),
      width: 1,
    },
    { key: new Key({ title: "backspace", code: "Backspace" }), width: 1.6 },
  ],
  [
    { key: new Key({ title: "tab", code: "Tab" }), width: 1.6 },
    {
      key: new Key({ name: { en: ["Q"], ru: ["Й"] }, code: "KeyQ" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["W"], ru: ["Ц"] }, code: "KeyW" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["E"], ru: ["У"] }, code: "KeyE" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["R"], ru: ["К"] }, code: "KeyR" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["T"], ru: ["Е"] }, code: "KeyT" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["Y"], ru: ["Н"] }, code: "KeyY" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["U"], ru: ["Г"] }, code: "KeyU" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["I"], ru: ["Ш"] }, code: "KeyI" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["O"], ru: ["Щ"] }, code: "KeyO" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["P"], ru: ["З"] }, code: "KeyP" }),
      width: 1,
    },
    {
      key: new Key({
        name: { en: ["{", "["], ru: ["Х"] },
        code: "BracketLeft",
      }),
      width: 1,
    },
    {
      key: new Key({
        name: { en: ["}", "]"], ru: ["Ъ"] },
        code: "BracketRight",
      }),
      width: 1,
    },
    {
      key: new Key({
        name: { en: ["|", "\\"], ru: ["/", "\\"] },
        code: "Backslash",
      }),
      width: 1,
    },
  ],
  [
    { key: new KeyCapsLock({ title: "caps lock", code: "CapsLock" }), width: 1.8 },
    {
      key: new Key({ name: { en: ["A"], ru: ["Ф"] }, code: "KeyA" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["S"], ru: ["Ы"] }, code: "KeyS" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["D"], ru: ["В"] }, code: "KeyD" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["F"], ru: ["А"] }, code: "KeyF" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["G"], ru: ["П"] }, code: "KeyG" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["H"], ru: ["Р"] }, code: "KeyH" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["J"], ru: ["О"] }, code: "KeyJ" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["K"], ru: ["Л"] }, code: "KeyK" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["L"], ru: ["Д"] }, code: "KeyL" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: [":", ";"], ru: ["Ж"] }, code: "Semicolon" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ['"', "'"], ru: ["Э"] }, code: "Quote" }),
      width: 1,
    },
    { key: new Key({ title: "enter", code: "Enter" }), width: 1.8 },
  ],
  [
    { key: new KeyShift({ title: "shift", code: "ShiftLeft" }), width: 2.4 },
    {
      key: new Key({ name: { en: ["Z"], ru: ["Я"] }, code: "KeyZ" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["X"], ru: ["Ч"] }, code: "KeyX" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["С"], ru: ["С"] }, code: "KeyC" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["V"], ru: ["М"] }, code: "KeyV" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["B"], ru: ["И"] }, code: "KeyB" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["N"], ru: ["Т"] }, code: "KeyN" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["M"], ru: ["Ь"] }, code: "KeyM" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["<", ","], ru: ["Б"] }, code: "Comma" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: [">", "."], ru: ["Ю"] }, code: "Period" }),
      width: 1,
    },
    {
      key: new Key({ name: { en: ["?", "/"], ru: [",", "."] }, code: "Slash" }),
      width: 1,
    },
    { key: new KeyShift({ title: "shift", code: "ShiftRight" }), width: 2.4 },
  ],
  [
    { key: new Key({ title: "ctrl", code: "ControlLeft" }), width: 1 },
    { key: new Key({ title: "win", code: "MetaLeft" }), width: 1 },
    { key: new KeyAlt({ title: "alt", code: "AltLeft" }), width: 1.3 },
    { key: new Key({ title: "", code: "Space" }), width: 5.5 },
    { key: new Key({ title: "alt", code: "AltRight" }), width: 1.3 },
    { key: new Key({ title: "ctrl", code: "ControlRight" }), width: 1 },
    { key: new KeyArrow({ title: "◀", code: "ArrowLeft" }), width: 1 },
    { key: new KeyArrowUpDown({ title: "", code: ["ArrowUp", "ArrowDown"] }), width: 1 },
    { key: new KeyArrow({ title: "▶", code: "ArrowRight" }), width: 1 },
    { key: new Key({ title: "del", code: "Delete" }), width: 1 },
  ],
];

class Keyboard {
  constructor() {
    this._listeners = new Map();
    this._element = document.createElement("div");
    this._element.classList.add("keyboard");
    const row = document.createElement("div");
    row.classList.add("row");
    this.rows = Array.from([0, 1, 2, 3, 4], (i) => {
      const r = row.cloneNode(true);
      r.classList.add("row-" + i);
      r.style.gridArea = "r" + i;
      let colWidth = "";
      Array.from(rows[i], (key, j) => {        
        if (typeof key.key.code !=='string') {
          this._listeners.set(key.key.code[0], key.key);
          this._listeners.set(key.key.code[1], key.key);
        }
        else if (key.key.code) this._listeners.set(key.key.code, key.key);
        colWidth += key.width + "fr ";
        r.append(key.key.element);
      });
      r.style.gridTemplateColumns = colWidth;
      this._element.append(r);
      return r;
    });    
  }
  get element() {
    return this._element;
  }
  get listeners() {
    return this._listeners;
  }
}


document.addEventListener("keydown", function (event) {
  if (keyboard.listeners.has(event.code))
  keyboard.listeners.get(event.code).down(event);
  event.preventDefault();
});

document.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (keyboard.listeners.has(event.code))
  keyboard.listeners.get(event.code).up(event);
  event.preventDefault();
});

const keyboard = new Keyboard();
export { keyboard };
