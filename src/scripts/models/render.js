import { ApiReq } from "./api.js";

export class Render {
  static async renderPosts() {
    const posts = await ApiReq.getPostersApi();
    const listaPosts = document.querySelector(".postsList");

    posts.forEach((elem) => {
      listaPosts.append(Render.createCards(elem));
    });
  }

  static async renderUsers() {
    const users = await ApiReq.getUsersApi();
    const listaUsers = document.querySelector(".suggestionsList");

    users.forEach((elem) => {
      listaUsers.append(Render.createUsers(elem));
    });
  }

  static async createCards(item) {
    const li = document.createElement("li");
    const divPostUser = document.createElement("div");
    const divImg = document.createElement("div");
    const image = document.createElement("img");
    const divUserNames = document.createElement("div");
    const userName = document.createElement("h2");
    const userWork = document.createElement("span");
    const divTxt = document.createElement("div");
    const postTitle = document.createElement("h1");
    const postTxt = document.createElement("p");
    const divInteraction = document.createElement("div");
    const buttonOpen = document.createElement("button");
    const divLikes = document.createElement("div");
    const imgLike = document.createElement("img");
    const likeCounter = document.createElement("span");

    divLikes.classList.add("postLikes");
    divInteraction.classList.add("postInteraction");
    divTxt.classList.add("postText");
    divPostUser.classList.add("postUser");
    divUserNames.classList.add("espefUser");

    userName.innerText = item.author.username;
    userWork.innerText = item.author.work_at;
    postTitle.innerText = item.postTitle;
    postTxt.innerText = item.description;
    likeCounter.innerText = +item.likes.length;
    buttonOpen.innerText = "Abrir";

    image.src = item.author.image;
    imgLike.src = "/src/assets/heartBlack.png";

    divPostUser.append(divImg, divUserNames);
    divImg.append(image);
    divUserNames.append(userName, userWork);
    divTxt.append(postTitle, postTxt);
    divInteraction.append(buttonOpen, divLikes);
    divLikes.append(imgLike, likeCounter);

    li.append(divPostUser, divTxt, divInteraction);

    return li;
  }

  static async createUsers(user) {}

  static async renderSignUp() {
    const main = document.querySelector("main");
    const form = document.createElement("form");
    const divTitleRegister = document.createElement("div");
    const registerTitle = document.createElement("h1");
    const buttonRedirect1 = document.createElement("button");
    const nameInput = document.createElement("input");
    const emailInput = document.createElement("input");
    const passInput = document.createElement("input");
    const workInput = document.createElement("input");
    const imgInput = document.createElement("input");
    const buttonRegister = document.createElement("button");
    const divRegisterRed = document.createElement("div");
    const haveLogin = document.createElement("span");
    const buttonRedirect = document.createElement("button");

    divRegisterRed.classList.add("div1");
    buttonRegister.classList.add("buttonRequest");
    divTitleRegister.classList.add("registerDiv");

    nameInput.id = "registerInputName";
    emailInput.id = "registerInputEmail";
    passInput.id = "registerInputPass";
    workInput.id = "registerInputWork";
    imgInput.id = "registerInputImg";
    buttonRegister.id = "registerButton";
    registerTitle.innerText = "Cadastro";
    haveLogin.innerText = "Já possui login";
    buttonRedirect.id = "redirectLogin";
    buttonRedirect1.innerText = "Voltar";

    nameInput.placeholder = "Seu nome";
    emailInput.placeholder = "Seu e-mail";
    passInput.placeholder = "Sua senha";
    workInput.placeholder = "Qual o seu trabalho?";
    imgInput.placeholder = "URL da imagem do perfil";

    buttonRegister.innerText = "Registrar";
    buttonRedirect.innerText = "Ir para a página de login";

    divRegisterRed.append(haveLogin, buttonRedirect);
    divTitleRegister.append(registerTitle, buttonRedirect1);
    form.append(
      divTitleRegister,
      nameInput,
      emailInput,
      passInput,
      workInput,
      imgInput,
      buttonRegister,
      divRegisterRed
    );

    main.append(form);
  }

  static async renderLogin() {
    const main = document.querySelector("main");
    const form = document.createElement("form");
    const loginTitle = document.createElement("h1");
    const inputEmail = document.createElement("input");
    const inputPass = document.createElement("input");
    const buttonLogin = document.createElement("button");
    const divLoginRed = document.createElement("div");
    const noLogin = document.createElement("span");
    const buttonRedirect = document.createElement("button");

    divLoginRed.classList.add("div1");
    buttonLogin.classList.add("buttonRequest");

    inputEmail.id = "loginInputEmail";
    inputPass.id = "loginInputPass";
    buttonLogin.id = "loginButton";
    loginTitle.innerText = "Login";
    noLogin.innerText = "Ainda não possui cadastro?";
    buttonRedirect.id = "redirectRegister";

    inputEmail.placeholder = "Seu e-mail";
    inputPass.placeholder = "Sua senha";

    buttonLogin.innerText = "Login";
    buttonRedirect.innerText = "Ir para a página de registro";

    divLoginRed.append(noLogin, buttonRedirect);
    form.append(loginTitle, inputEmail, inputPass, buttonLogin, divLoginRed);

    main.append(form);
  }
}
