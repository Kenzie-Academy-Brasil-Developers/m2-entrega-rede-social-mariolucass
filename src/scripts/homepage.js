import { Render } from "./models/render.js";
import { Create } from "./models/featCreateCards.js";
import { Modal } from "./models/modal.js";
import { Like } from "./models/featLikes.js";
import { Follow } from "./models/featFollowers.js";

const token = localStorage.getItem("@redeSocial:token");
if (!token) {
  window.location.replace("/index.html");
} else {
  Render.logout();
  await Render.renderUser();
  Create.createPost();
  await Render.renderUsers();
  await Render.renderPosts();
  Modal.modalPost();
  Like.likePost();
  Follow.followUser();
  Render.usersFollowing();
}
