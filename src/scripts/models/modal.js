export class Modal {
  static template(form) {
    const main = document.querySelector("main");
    main.innerHTML = "";
    const buttonHeaderLogin = document.getElementById("header__Login");
    const buttonHeaderRegister = document.getElementById("header__Register");

    buttonHeaderLogin.className = "header__Active";
    buttonHeaderRegister.className = "header__Inactive";

    main.append(form);
  }

  static modalpost(post) {
    let tagUser = document.createElement("h3");
    let tagPostTitle = document.createElement("h2");
    let tagWork = document.createElement("span");
    let tagImage = document.createElement("img");
    let tagPostText = document.createElement("p");

    post.username;
    post.work_at;
    post.image;
    post.followers.length;
  }
}
