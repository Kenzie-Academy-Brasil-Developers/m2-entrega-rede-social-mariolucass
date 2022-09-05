const tokenSite = localStorage.getItem("@redeSocial:token");
export const instance = axios.create({
  baseURL: "https://m2-rede-social.herokuapp.com/api/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token ${tokenSite}`,
  },
});

export const instance2 = axios.create({
  baseURL: "https://m2-rede-social.herokuapp.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
