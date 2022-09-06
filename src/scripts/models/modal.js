import { Render } from "./render.js";
export class Modal {
  static modalPost(post) {
    const modal = document.querySelector(".modal");
    const openModal = document.querySelectorAll(".buttonOpen");
    const closeModal = document.getElementById("closeModal");

    closeModal.addEventListener("click", (event) => {
      event.preventDefault();
      modal.classList.add("hidden");
    });

    openModal.forEach((elem) => {
      elem.addEventListener("click", async (event) => {
        event.preventDefault();
        const idPost = elem.id;
        const Posts = document.querySelectorAll(".postsList li");
        Posts.filter((elem) => elem.id == idPost);
        const PostforModal = Posts.filter((elem) => elem.uuid == idPost)[0];
        Render.renderModal(PostforModal);
      });
    });
  }

  static modalLogin() {}

  static modalRegister() {}
}
