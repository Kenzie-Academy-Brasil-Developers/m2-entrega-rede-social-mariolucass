import { ApiReq } from "./api.js";
import { Render } from "./render.js";
export class Follow {
  static async followUser() {
    const followButton = document.querySelectorAll(".buttonFollow");
    const followingUsers = await Render.usersFollowing();
    console.log(followingUsers);

    followButton.forEach((elem) => {
      elem.addEventListener("click", async (event) => {
        event.preventDefault();
        const userId = elem.id;
        elem.textContent = "Seguindo";
        const data = {
          following_users_uuid: userId,
        };

        ApiReq.followUserApi(data);
        elem.classList.remove("buttonFollow");
        elem.classList.add("buttonUnfollow");
      });
    });
  }

  static unfollowUser() {
    const unfollowButton = document.querySelectorAll(".buttonUnfollow");

    unfollowButton.forEach((elem) => {
      elem.addEventListener("click", async (event) => {
        event.preventDefault();
        const userId = elem.id;
        ApiReq.unfollowUserApi(userId);
        elem.classList.add("buttonFollow");
        elem.classList.remove("buttonUnfollow");
      });
    });
  }
}
