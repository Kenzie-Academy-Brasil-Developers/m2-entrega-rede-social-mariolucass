import { ApiReq } from "./api.js";
export class Login {
  static login() {
    const token = localStorage.getItem("@redeSocial:token");
    if (token) {
      window.location.replace("/src/pages/homepage.html");
    } else {
      const buttonLogin = document.getElementById("loginButton");
      const emailInput = document.getElementById("loginInputEmail");
      const passInput = document.getElementById("loginInputPass");

      buttonLogin.addEventListener("click", (event) => {
        event.preventDefault();
        const data = {
          email: emailInput.value,
          password: passInput.value,
        };

        ApiReq.loginApi(data);
      });
    }
  }

  static redirect() {
    const buttonFormRedir = document.getElementById("redirectRegister");
    buttonFormRedir.addEventListener("click", this.redir);
    const buttonHeaderRedir = document.getElementById("header__Register");
    buttonHeaderRedir.addEventListener("click", this.redir);
  }

  static redir(event) {
    event.preventDefault();
    window.location.replace("/src/pages/register.html");
  }

  static showLoginModal() {}
}
