import { ApiReq } from "./api.js";
export class Create {
  static createPost() {
    const inputTitle = document.getElementById("postTitle");
    const inputTxt = document.getElementById("postText");
    const buttonRequisiton = document.getElementById("buttonCreatePost");

    buttonRequisiton.addEventListener("click", async (event) => {
      event.preventDefault();
      const data = {
        title: inputTitle.value,
        description: inputTxt.value,
      };

      ApiReq.createPosterApi(data);
    });
  }
}
