class View {
  constructor(presenter) {
    this.presenter = presenter;
  }
  // view不需要关注model的数据结构，只关注自己需要的数据
  // 这样也不会存在view使用了model的其他数据的情况
  render({isOpen}) {
    const button = document.createElement("button");
    button.innerText = isOpen ? "关" : "开";
    button.onclick = this.presenter.switch;

    const root = document.getElementById("root");
    root.innerHTML = "";
    root.appendChild(button);
    return button;
  }
}

// model不需要在数据更新时候触发视图更新，只负责数据存储
class Model {
  state = {
    isOpen: false,
  };

  getState() {
    return this.state;
  }

  switch() {
    this.state.isOpen = !this.state.isOpen;
  }
}

// Presenter需要知道m和v的结构，并且要在数据改变时候更新视图，还要处理所有的交互逻辑
class Presenter {
  constructor() {
    this._view = new View(this);
    this._model = new Model();

    const {isOpen} = this._model.getState();
    this._view.render({isOpen});
  }
  switch = () => {
    this._model.switch();

    const {isOpen} = this._model.getState();
    this._view.render({isOpen});

    console.log("switch!!!");
  };
}

const presenter = new Presenter();
