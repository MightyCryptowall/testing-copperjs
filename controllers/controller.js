class Controller {

    
  constructor() {
    this.root = document.querySelector(".app");
    window.page = this;
  }

  render(view, data) {
    this.root.innerHTML = view(data);
  }
}

export default Controller;
