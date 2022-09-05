import { Render } from "./models/render.js";
import { Login } from "./models/featLogin.js";

const token = localStorage.getItem("@redeSocial:token");
if (token) {
  window.location.replace("/src/pages/homepage.html");
} else {
  await Render.renderLogin();
  Login.login();
  Login.redirect();
}
