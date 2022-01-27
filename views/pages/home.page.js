import CardComponent from "../components/card.component.js";
import checkboxComponent from "../components/checkbox.component.js";
import NavbarComponent from "../components/navbar.component.js";
import SpinnerComponent from "../components/spinner.component.js";

const HomePage = (data) => {

    const cards = (data.length > 0) ? data.map(item => CardComponent(item)).join("") : "";

  return `
    <header class="p-3 mt-5">
        ${NavbarComponent()}
    </header>
    <main class="container-md ">
        <h1 class="text-center">Rick And Morty Characters</h1>
        <div class="row">
            <div class="col-lg-12 mb-3" style="display:flex; justify-content:center">

                ${checkboxComponent("Alive","cbAlive", page.cbAlive)}
                ${checkboxComponent("Dead","cbDead", page.cbDead)}
                ${checkboxComponent("UnKnown","cbUnKnown", page.cbUnKnown)}
            </div>
           ${page.isLoading ? SpinnerComponent() :""}
            ${cards}
        </div>
    </main>`;
};

export default HomePage;
