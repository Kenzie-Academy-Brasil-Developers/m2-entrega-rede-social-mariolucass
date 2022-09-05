import { ApiReq } from "./api.js";
export class Follow {
  static followUser() {
    const followButton = document.querySelectorAll(".buttonfollow");

    followButton.forEach((elem) => {
      elem.addEventListener("click", async (event) => {
        event.preventDefault();
        const userId = elem.id;
        const data = {
          following_users_uuid: userId,
        };

        ApiReq.followUserApi(data);
      });
    });
  }

  static unfollowUser() {
    const unfollowButton = document.querySelectorAll(".buttonUnfollow");

    unfollowButton.forEach((elem) => {
      elem.addEventListener("click", async (event) => {
        event.preventDefault();
        const userId = event.target.id;
        ApiReq.unfollowUserApi(userId);
      });
    });
  }
}
