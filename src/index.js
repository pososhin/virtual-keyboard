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
container.append(terminal.element);
container.append(keyboard.element);


