import { ApiReq } from "./api.js";
import { Render } from "./render.js";
export class Modal {
  static modalPost() {
    const modal = document.querySelector(".modal");
    const openModal = document.querySelectorAll(".buttonOpen");
    openModal.forEach((elem) => {
      elem.addEventListener("click", async (event) => {
        event.preventDefault();
        const idPost = event.target.id;
        const posts = await ApiReq.getPostersApi();
        const postRender = posts.filter((elemen) => elemen.uuid == idPost)[0];
        const PostModal = await Render.createModalPost(postRender);
        modal.classList.toggle("hidden");
        modal.append(PostModal);
      });
    });
  }
}
