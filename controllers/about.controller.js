import AboutPage from "../views/pages/about.page";
import Controller from "./controller";

class AboutController extends Controller {
    constructor(){
        super();
        this.render(AboutPage)
    }
}

export default AboutController;