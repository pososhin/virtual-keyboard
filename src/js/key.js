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
  addEventListener(key){
    key._element.addEventListener("mousedown", (_) => {
      key.pressed = true;
    });
    key._element.addEventListener("mouseup", (_) => {
      key.pressed = false;
    });
  }ss
}

class KeyArrow extends Key {
  constructor(props) {
    super(props);
    this._element.classList.add("arrow");    
    if(props.code==='ArrowLeft' || props.code==='ArrowRight'){
      const div = document.createElement('div');
      div.classList.add('img-arrow');
      div.classList.add(props.code.toLowerCase());
      this._element.append(div);
    } 
  }
}

class KeyArrowUpDown extends KeyArrow {
  constructor(props){
    super(props);
    this.keyUp = new KeyArrow({ title: "", code: props.code[0] });
    this.keyUp.element.classList.add(props.code[0].toLowerCase())
    this.keyDown = new KeyArrow({ title: "", code: props.code[1] });
    this.keyDown.element.classList.add(props.code[1].toLowerCase())

    if(typeof props.code!='string') {
      this._element.classList.add('double-arrow')
      this._element.append(this.keyUp.element);
      this._element.append(this.keyDown.element);
      // const divUp = document.createElement('div');
      // const div = document.createElement('div');
      // div.classList.add('img-arrow');
      // div.classList.add('img-arrow-'+props.code[0].toLowerCase());
      // divUp.append(div)
      // divUp.classList.add(props.code[0].toLowerCase())
      // this._element.append(divUp);
      
      // const divDown = document.createElement('div');
      // const div2 = document.createElement('div');
      // div2.classList.add('img-arrow');
      // div2.classList.add('img-arrow-'+props.code[0].toLowerCase());
      // divDown.append(div2)
      // divDown.classList.add(props.code[1].toLowerCase());
      // this._element.append(divDown);
    }
  }
  addEventListener(key){

  }
}

export {Key,KeyArrow,KeyArrowUpDown};
