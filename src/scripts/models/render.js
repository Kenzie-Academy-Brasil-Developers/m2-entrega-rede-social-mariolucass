import { ApiReq } from "./api.js";
export class Render {
  static idUser = localStorage.getItem("@redeSocial:userId");

  static async usersFollowing() {
    const user = await ApiReq.getUser(this.idUser);
    let arrayFollowing = [];
    user.following.forEach((elem) => {
      arrayFollowing.push(elem.following_users_id.uuid);
    });

    return arrayFollowing;
  }

  static async idFollowing() {
    const user = await ApiReq.getUser(this.idUser);
    let arrayFollowing = [];
    let arrayFollowingUser = [];
    user.following.forEach((elem) => {
      arrayFollowing.push(elem.uuid);
      arrayFollowingUser.push(elem.following_users_id.uuid);
    });
    const arrayTotal = [arrayFollowing, arrayFollowingUser];

    return arrayTotal;
  }

  static async idLikes(idPost) {
    const posts = await ApiReq.getPostersApi();
    const postLike = posts.filter((elemen) => elemen.uuid == idPost)[0].likes;
    return postLike.filter((elem) => elem.user.uuid == this.idUser)[0].uuid;
  }

  static async renderPosts() {
    const posts = await ApiReq.getPostersApi();
    const listaPosts = document.querySelector(".postsList");

    posts.forEach(async (elem) => {
      listaPosts.append(await Render.createCards(elem));
    });
  }

  static async renderUsers() {
    const users = await ApiReq.getUsersApi();
    const listaUsers = document.querySelector(".suggestionsList");
    const usersRandom = [
      Math.floor(Math.random() * users.results.length),
      Math.floor(Math.random() * users.results.length),
      Math.floor(Math.random() * users.results.length),
    ];
    const usersObj = [];

    usersRandom.forEach((elem) => {
      usersObj.push(users.results[elem]);
    });

    usersObj.forEach(async (elem) => {
      listaUsers.append(await Render.createUsers(elem));
    });
  }

  static async renderUser() {
    const section = document.querySelector(".sectionUser");
    const userid = localStorage.getItem("@redeSocial:userId");
    section.append(await Render.createUser(await ApiReq.getUser(userid)));
  }

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
    passInput.type = "password";

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
    inputPass.type = "password";

    buttonLogin.innerText = "Login";
    buttonRedirect.innerText = "Ir para a página de registro";

    divLoginRed.append(noLogin, buttonRedirect);
    form.append(loginTitle, inputEmail, inputPass, buttonLogin, divLoginRed);

    main.append(form);
  }

  static async renderModal(post) {
    const modal = document.querySelector(".modal");
    modal.append(this.createModalPost(post));
  }

  static async createUser(user) {
    const divUser = document.createElement("div");
    const divImg = document.createElement("div");
    const divTxt = document.createElement("div");
    const img = document.createElement("img");
    const userName = document.createElement("h2");
    const followers = document.createElement("span");
    const work = document.createElement("span");

    divUser.classList.add("divUser");
    divImg.append(img);
    divImg.classList.add("divImagem");
    divTxt.append(userName, followers, work);
    divTxt.classList.add("espefUser");
    divUser.append(divImg, divTxt);

    img.src = user.image;
    userName.innerText = user.username;
    followers.innerText = `${user.followers.length} Seguidores`;
    work.innerText = user.work_at;

    return divUser;
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
    const buttonLike = document.createElement("button");
    const imgLike = document.createElement("img");
    const likeCounter = document.createElement("span");

    divLikes.classList.add("postLikes");
    divInteraction.classList.add("postInteraction");
    divTxt.classList.add("postText");
    divPostUser.classList.add("divUser");
    divUserNames.classList.add("espefUser");
    divImg.classList.add("divImagem");
    buttonOpen.classList.add("buttonOpen");
    buttonLike.classList.add("buttonLike");

    userName.innerText = item.author.username;
    userWork.innerText = item.author.work_at;
    postTitle.innerText = item.title;
    postTxt.innerText = item.description;
    likeCounter.innerText = +item.likes.length;
    buttonOpen.innerText = "Abrir";

    image.src = item.author.image;
    buttonLike.id = item.uuid;
    buttonLike.classList.add("buttonLike");
    buttonOpen.id = item.uuid;
    li.id = item.uuid;

    if (
      item.likes.filter((elem) => {
        return elem.user.uuid == Render.idUser;
      }).length
    ) {
      imgLike.src = "/src/assets/heartRed.png";
      imgLike.className = "Liked";
    } else {
      imgLike.src = "/src/assets/heartBlack.png";
      imgLike.className = "Unliked";
    }

    divPostUser.append(divImg, divUserNames);
    divImg.append(image);
    divUserNames.append(userName, userWork);
    divTxt.append(postTitle, postTxt);
    divInteraction.append(buttonOpen, divLikes);
    buttonLike.append(imgLike);
    divLikes.append(buttonLike, likeCounter);

    li.append(divPostUser, divTxt, divInteraction);

    return li;
  }

  static async createModalPost(item) {
    const secao = document.querySelector(".modal");
    secao.innerHTML = "";
    const spanFecharModal = document.createElement("span");
    const divTotal = document.createElement("div");
    const divPostUser = document.createElement("div");
    const divImg = document.createElement("div");
    const image = document.createElement("img");
    const divUserNames = document.createElement("div");
    const userName = document.createElement("h2");
    const userWork = document.createElement("span");
    const divTxt = document.createElement("div");
    const postTitle = document.createElement("h1");
    const postTxt = document.createElement("p");

    divTxt.classList.add("postText");
    divPostUser.classList.add("divUser");
    divUserNames.classList.add("espefUser");
    divImg.classList.add("divImagem");
    divTotal.classList.add("divModal");

    spanFecharModal.addEventListener("click", (event) => {
      event.preventDefault();
      secao.classList.add("hidden");
    });

    userName.innerText = item.author.username;
    userWork.innerText = item.author.work_at;
    postTitle.innerText = item.title;
    postTxt.innerText = item.description;
    image.src = item.author.image;
    spanFecharModal.id = "closeModal";
    spanFecharModal.innerText = "X";

    divPostUser.append(divImg, divUserNames);
    divImg.append(image);
    divUserNames.append(userName, userWork);
    divTxt.append(postTitle, postTxt);

    divTotal.append(spanFecharModal, divPostUser, divTxt);

    return divTotal;
  }

  static async createUsers(user) {
    const li = document.createElement("li");
    const divImg = document.createElement("div");
    const img = document.createElement("img");
    const divUserTxt = document.createElement("div");
    const userName = document.createElement("h2");
    const work = document.createElement("span");
    const buttonFollow = document.createElement("button");
    const buttonUnfollow = document.createElement("button");
    const divUsuario = document.createElement("div");

    buttonFollow.id = user.uuid;
    buttonUnfollow.id = user.uuid;
    buttonFollow.classList.add("buttonFollow");
    buttonUnfollow.classList.add("buttonUnfollow");

    img.src = user.image;
    userName.innerText = user.username;
    work.innerText = user.work_at;
    divImg.classList.add("divImagem");
    divUserTxt.classList.add("espefUser");
    divUsuario.classList.add("divUser");

    divImg.append(img);
    divUserTxt.append(userName, work);
    divUsuario.append(divImg, divUserTxt);
    li.append(divUsuario);
    if ((await this.usersFollowing()).includes(user.uuid)) {
      buttonUnfollow.innerText = "Seguindo";
      li.append(buttonUnfollow);
    } else {
      buttonFollow.innerText = "Seguir";
      li.append(buttonFollow);
    }

    return li;
  }

  static async logout() {
    const logoutButon = document.getElementById("header__Logout");

    logoutButon.addEventListener("click", () => {
      localStorage.clear();
      window.location.replace("/index.html");
    });
  }
}
