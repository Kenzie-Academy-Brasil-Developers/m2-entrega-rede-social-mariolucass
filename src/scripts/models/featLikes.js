import { ApiReq } from "./api.js";
export class Like {
  static likePost() {
    const userid = ApiReq.userId;
    const likeButton = document.querySelector(".postLikes img");

    likeButton.addEventListener("click", async (event) => {
      event.preventDefault();
      likeButton.src = "/src/assets/heartRed.png";
      const userId = event.id;
      ApiReq.likePosterApi(userId);
    });
  }

  static unlikePost() {
    const userid = ApiReq.userId;
    const likeButton = document.querySelector(".postLikes img");

    likeButton.addEventListener("click", async (event) => {
      event.preventDefault();
      const userId = event.id;
      likeButton.src = "/src/assets/heartRed.png";
      ApiReq.unlikePosterApi(userId);
    });
  }
}
