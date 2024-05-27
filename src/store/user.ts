import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      userInfo: {
        userId: "",
        userName: "",
      },
    };
  },
  actions: {
    setUser(user: any) {
      this.userInfo = {
        userId: "1",
        userName: "admin",
      };
    },
  },
});
