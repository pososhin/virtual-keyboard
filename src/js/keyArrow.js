import { l_ } from "./locale";
import {Key} from "./key.js";

class KeyArrow extends Key {
  constructor(props) {
    super(props);
    this._element.classList.add("arrow");
  }
}
export default KeyArrow;
