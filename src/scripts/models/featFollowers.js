import { ApiReq } from "./api.js";
import { Render } from "./render.js";
export class Follow {
  static async followUser() {
    const followButton = document.querySelectorAll(
      ".suggestionsList li button"
    );
    followButton.forEach((elem) => {
      if (elem.classList.contains("buttonFollow")) {
        elem.addEventListener("click", async (event) => {
          event.preventDefault();
          elem.textContent = "Seguindo";
          const userId = elem.id;
          const data = {
            following_users_uuid: userId,
          };
          ApiReq.followUserApi(data);
          elem.classList.name = "buttonUnfollow";
        });
      } else if (elem.classList.contains("buttonUnfollow")) {
        elem.addEventListener("click", async (event) => {
          event.preventDefault();
          const userId = elem.id;
          const followId = (await Render.idFollowing())[0];
          const usersId = (await Render.idFollowing())[1];
          const index = usersId.findIndex((eleme) => eleme == userId);
          const userToUnfollow = followId[index];
          await ApiReq.unfollowUserApi(userToUnfollow);
          elem.textContent = "Seguir";
          elem.classList.name = "buttonFollow";
        });
      }
    });
  }
}
