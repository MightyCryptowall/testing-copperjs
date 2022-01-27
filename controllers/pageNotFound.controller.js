import PageNotFoundPage from "../views/pages/pageNotFound.page.js";
import Controller from "./controller";

class PageNotFoundController extends Controller{

    constructor() {
        super();

        this.render(PageNotFoundPage);
    }



}

export default PageNotFoundController;