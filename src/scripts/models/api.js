import { instance } from "./axios.js";

export class ApiReq {
  static async loginApi(data) {
    const userLogin = await instance
      .post("users/login/", data)
      .then((res) => {
        localStorage.setItem("@redeSocial:token", res.data.token);
        localStorage.setItem("@redeSocial:userId", res.data.user_uuid);
      })
      .catch((err) => console.log(err));

    return userLogin;
  }

  static async registerApi(data) {
    const userRegister = await instance.post("users/", data).then((res) => {
      const pass = data.password;
      const emailres = res.data.email;
      const data2 = {
        email: emailres,
        password: pass,
      };

      ApiReq.loginApi(data2);
      document.location.reload(true);
    });

    return userRegister;
  }

  static async getUser(id) {
    const userLogado = await instance
      .get(`users/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    return userLogado;
  }

  static async getPostersApi() {
    const getPosters = await instance
      .get("posts/")
      .then((res) => res.data)
      .catch((err) => console.log(err));

    return getPosters;
  }

  static async getUsersApi() {
    const getUsers = await instance
      .get("users/")
      .then((res) => res.data)
      .catch((err) => console.log(err));

    return getUsers;
  }

  static async createPosterApi(body) {
    const createPoster = await instance
      .post("posts/", body)
      .then((resp) => {
        resp;
      })
      .catch((err) => console.log(err));

    return createPoster;
  }

  static async likePosterApi(id) {
    const likeaPost = await instance
      .post("likes/", id)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    return likeaPost;
  }

  static async deleteLikeApi(id) {
    const deleteLike = await instance.delete("likes/", id).then((res) => {
      res.data;
    });
  }

  static async followUserApi(id) {
    const followUser = await instance
      .post("users/follow/", id)
      .then((res) => {
        res.data;
      })
      .catch((err) => console.log(err));

    return followUser;
  }

  static async unfollowUserApi(id) {
    const unfollowUser = await instance
      .delete(`users/unfollow/${id}`)
      .then((res) => {
        res.data;
      })
      .catch((err) => console.log(err));

    return unfollowUser;
  }
}
