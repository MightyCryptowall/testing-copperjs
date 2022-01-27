import Model from "./model";
class CharacterModel extends Model {
  constructor() {
    super();
  }

  async fetch() {
    try {
      const response = await this.baseURL.get("/character");

      return { data: response.data.results, error: "" };
    } catch (error) {
      console.log(error);

      return { data: [], error: "Something Went Wrong" };
    }
  }
}

export default CharacterModel;
