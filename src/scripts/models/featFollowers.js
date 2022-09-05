import { ApiReq } from "./api.js";
export class Follow {
  static followUser() {
    const userid = ApiReq.userId;
    const followButton = document.getElementById("");

    followButton.addEventListener("click", async (event) => {
      event.preventDefault();
      const userId = event.id;
      ApiReq.followUserApi(userId);
    });
  }

  static unfollowUser() {
    const userid = ApiReq.userId;
    const followButton = document.querySelectorAll(
      ".suggestionsList .divUser button"
    );

    followButton.addEventListener("click", async (event) => {
      event.preventDefault();
      const userId = event.id;
      ApiReq.unfollowUserApi(userId);
    });
  }
}
