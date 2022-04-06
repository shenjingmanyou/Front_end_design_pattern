class View {
  constructor(controller) {
    this.controller = controller;
  }
  render(model) {
    const button = document.createElement("button");
    const isOpen = model.getState().isOpen;
    button.innerText = isOpen ? "关" : "开";
    button.onclick = this.controller.switch;

    const root = document.getElementById("root");
    root.innerHTML = "";
    root.appendChild(button);
    return button;
  }
}

class Model {
  state = {
    isOpen: false,
  };

  _views = [];

  getState() {
    return this.state;
  }

  register(view) {
    this._views.push(view);
  }

  switch() {
    this._update({
      isOpen: !this.state.isOpen,
    });
  }

  _update(data) {
    Object.assign(this.state, data);
    this._notify();
  }

  _notify() {
    this._views.forEach((view) => view.render(this));
  }
}

class Controller {
  constructor() {
    this._view = new View(this);
    this._model = new Model();
    this._model.register(this._view);
    this._view.render(this._model);
  }
  switch = () => {
    this._model.switch();
    console.log("switch!!!");
  };
}

const controller = new Controller();
