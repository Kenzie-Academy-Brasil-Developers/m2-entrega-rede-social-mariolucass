import { instance, instance2 } from "./axios.js";
import { Toast } from "./toast.js";

export class ApiReq {
  static colorSucess = "#4263e5";

  static colorError = "#B33E26";

  static idUser = localStorage.getItem("@redeSocial:userId");

  static async loginApi(data) {
    const userLogin = await instance2
      .post("users/login/", data)
      .then((res) => {
        localStorage.setItem("@redeSocial:token", res.data.token);
        localStorage.setItem("@redeSocial:userId", res.data.user_uuid);
        window.location.assign("/src/pages/homepage.html");
      })
      .catch(async (err) => {
        const error = Object.keys(await err.response.data)[0];
        const errorTotal = err.response.data[error][0];
        Toast.create(errorTotal, `${ApiReq.colorError}`);
      });

    return userLogin;
  }

  static async registerApi(data) {
    const userRegister = await instance2
      .post("users/", data)
      .then((res) => {
        window.location.assign("/src/pages/homepage.html");
        Toast.create(
          "Registrado com sucesso, seja bem-vindo",
          this.colorSucess
        );
      })
      .catch(async (err) => {
        const error = Object.keys(await err.response.data)[0];
        const errorTotal = err.response.data[error][0];
        Toast.create(errorTotal, this.colorError);
      });

    return userRegister;
  }

  static async getUser(id) {
    const userLogado = await instance
      .get(`users/${id}/`)
      .then((res) => res.data)
      .catch(async (err) => {
        const error = Object.keys(await err.response.data)[0];
        const errorTotal = err.response.data[error][0];
        Toast.create(errorTotal);
      });

    return userLogado;
  }

  static async getPostersApi() {
    const getPosters = await instance
      .get("posts/?limit=10&offset=30")
      .then((res) => res.data.results)
      .catch(async (err) => {
        const error = Object.keys(await err.response.data)[0];
        const errorTotal = err.response.data[error][0];
        Toast.create(errorTotal, this.colorError);
      });

    return getPosters;
  }

  static async getUsersApi() {
    const getUsers = await instance
      .get("users/?limit=50&offset=20")
      .then((res) => res.data)
      .catch(async (err) => {
        const error = Object.keys(await err.response.data)[0];
        const errorTotal = err.response.data[error][0];
        Toast.create(errorTotal, this.colorError);
      });

    return getUsers;
  }

  static async createPosterApi(body) {
    const createPoster = await instance
      .post("posts/", body)
      .then((resp) => {
        resp;
        Toast.create("Post Criado com sucesso.", this.colorSucess);
      })
      .catch(async (err) => {
        const error = Object.keys(await err.response.data)[0];
        const errorTotal = err.response.data[error][0];
        Toast.create(errorTotal, ApiReq.colorError);
      });

    return createPoster;
  }

  static async likePosterApi(id) {
    const likeaPost = await instance
      .post("likes/", id)
      .then((res) =>
        Toast.create(
          "Parabéns! Gostaria de curtir mais algum post?",
          this.colorSucess
        )
      )
      .catch(async (err) => {
        const error = Object.keys(await err.response.data)[0];
        const errorTotal = err.response.data[error][0];
        Toast.create(errorTotal, this.colorError);
      });

    return likeaPost;
  }

  static async unlikePosterApi(id) {
    const deleteLike = await instance
      .delete(`likes/${id}`)
      .then((res) => {
        Toast.create("Post descurtido com sucesso!", this.colorSucess);
      })
      .catch(async (err) => {
        const error = Object.keys(await err.response.data)[0];
        const errorTotal = err.response.data[error][0];
        Toast.create(errorTotal, this.colorError);
      });

    return deleteLike;
  }

  static async followUserApi(id) {
    const followUser = await instance
      .post("users/follow/", id)
      .then((res) => {
        Toast.create(
          "Parabéns! Gostaria de seguir mais alguém?",
          this.colorSucess
        );
      })
      .catch(async (err) => {
        const error = Object.keys(await err.response.data)[0];
        const errorTotal = err.response.data[error][0];
        Toast.create(errorTotal, this.colorError);
      });

    return followUser;
  }

  static async unfollowUserApi(id) {
    const unfollowUser = await instance
      .delete(`users/unfollow/${id}`)
      .then((res) => {
        res.data;
        Toast.create("Você deu unfollow com sucesso.", this.colorSucess);
      })
      .catch(async (err) => {
        const error = Object.keys(await err.response.data)[0];
        const errorTotal = err.response.data[error][0];
        Toast.create(errorTotal, this.colorError);
      });

    return unfollowUser;
  }
}
