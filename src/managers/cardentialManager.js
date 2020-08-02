import store from "localforage";

export default {
  getUser() {
    return store.getItem("user");
  },

  saveUser(user) {
    return store.setItem("user", user);
  },

  clearUser() {
    return store.removeItem("user");
  },
};
