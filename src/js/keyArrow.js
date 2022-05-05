import { l_ } from "./locale";
import Key from "./key.js";

class KeyArrow extends Key {
  constructor(props) {
    super(props);
    this._element.classList.add("arrow");
    if (props.code === "ArrowLeft" || props.code === "ArrowRight") {
      const div = document.createElement("div");
      div.classList.add("img-arrow");
      div.classList.add(props.code.toLowerCase());
      this._element.append(div);
    }
  }
}
export default KeyArrow;
