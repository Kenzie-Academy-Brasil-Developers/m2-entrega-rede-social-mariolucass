import { ApiReq } from "./api.js";
export class Register {
  static register() {
    const token = localStorage.getItem("@redeSocial:token");

    if (token) {
      window.location.replace("/src/pages/homepage.html");
    } else {
      const buttonRegister = document.getElementById("registerButton");
      const nameInput = document.getElementById("registerInputName");
      const emailInput = document.getElementById("registerInputEmail");
      const passInput = document.getElementById("registerInputPass");
      const workInput = document.getElementById("registerInputWork");
      const imgInput = document.getElementById("registerInputImg");

      buttonRegister.addEventListener("click", async (event) => {
        event.preventDefault();

        const data = {
          username: nameInput.value,
          email: emailInput.value,
          password: passInput.value,
          work_at: workInput.value,
          image: imgInput.value,
        };

        ApiReq.registerApi(data);
      });
    }
  }

  static redirect() {
    const buttonFormRedir = document.getElementById("redirectLogin");
    buttonFormRedir.addEventListener("click", this.redir);
    const buttonDivRedit = document.querySelector(".registerDiv button");
    buttonDivRedit.addEventListener("click", this.redir);
    const buttonHeaderRedir = document.getElementById("header__Login");
    buttonHeaderRedir.addEventListener("click", this.redir);
  }

  static redir(event) {
    event.preventDefault();
    window.location.replace("/index.html");
  }
}
