import { ApiReq } from "./api.js";
import { Render } from "./render.js";
export class Like {
  static likePost() {
    const likeButtons = document.querySelectorAll(".buttonLike");
    likeButtons.forEach((elem) => {
      elem.addEventListener("click", async (event) => {
        event.preventDefault();
        if (elem.children[0].className == "Unliked") {
          elem.children[0].src = "/src/assets/heartRed.png";
          elem.children[0].className = "Liked";
          elem.nextSibling.textContent = +elem.nextSibling.textContent + 1;
          elem.classList.remove("buttonLike");
          elem.classList.add("buttonUnlike");
          const data = {
            post_uuid: elem.id,
          };
          await ApiReq.likePosterApi(data);
        } else {
          elem.children[0].className = "Unliked";
          elem.children[0].src = "/src/assets/heartBlack.png";
          elem.nextSibling.textContent = +elem.nextSibling.textContent - 1;
          elem.classList.add("buttonLike");
          elem.classList.remove("buttonUnlike");
          await ApiReq.unlikePosterApi(await Render.idLikes(elem.id));
        }
      });
    });
  }
}
