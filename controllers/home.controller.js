import Controller from "./controller.js";
import HomePage from "../views/pages/home.page.js"
import CharacterModel from "../models/character.model.js";

class HomeController extends Controller {
    constructor() {
        
        super();
        
        this.character = new CharacterModel();
        
        this.cbAlive = true;
        this.cbDead = true;
        this.cbUnKnown = true;

      
        this.onLoad(); 


       
    }

    
    async handleCheckboxChange(e) {
        const target = e.target;
        if(target.name) this[target.name] = target.checked;
        
        const data = await this.filterData();

        this.render(HomePage, data);
    }


    async onLoad() {
        this.isLoading = true;
        this.render(HomePage, []);
        const {data} = await this.character.fetch();
        this.isLoading = false;
        this.render(HomePage, data);
        this.data = data;
    }

    

    async filterData() {
        if(!this.data) this.data = await this.character.fetch();

        return this.data.filter(item => {
            if(this.cbAlive && item.status === "Alive") return true;
            if(this.cbDead && item.status === "Dead") return true;
            if(this.cbUnKnown && item.status === "unknown") return true;
        })
    }


    

   

}


export default HomeController;