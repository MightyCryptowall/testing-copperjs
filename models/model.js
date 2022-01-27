import axios from "axios";

class Model {
  constructor() {
    this.backendURL = "https://rickandmortyapi.com/api";
    this.baseURL = axios.create({ baseURL: this.backendURL });
  }

  
}

export default Model;
