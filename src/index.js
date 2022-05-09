import "./scss/style.scss";
import { keyboard } from "./js/keyboard.js";
import { terminal } from "./js/terminal.js";
const root = document.querySelector("body");

//TODO
const debug = document.createElement("div");
debug.classList.add("debug");

root.append(debug);

const container = document.createElement("div");
container.classList.add("container");
root.append(container);
const h1 = document.createElement("h1");
h1.textContent = 'RSS Virtual Keyboard'

const note1 = document.createElement("p");
note1.textContent = 'Keyboard made for Windows 10'
const note2 = document.createElement("p");
note2.textContent = 'Language switching Shift - Alt'



container.append(h1);
container.append(terminal.element);
container.append(keyboard.element);
container.append(note1);
container.append(note2);


