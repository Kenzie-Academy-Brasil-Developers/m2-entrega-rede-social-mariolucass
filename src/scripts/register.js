import { Render } from "./models/render.js";
import { Register } from "./models/featRegister.js";

const token = localStorage.getItem("@redeSocial:token");
if (token) {
  window.location.replace("/src/pages/homepage.html");
} else {
  await Render.renderSignUp();
  Register.register();
  Register.redirect();
}
