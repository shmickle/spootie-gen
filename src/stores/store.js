import { defineStore } from "pinia"

export const useStore = defineStore("store", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // all these properties will have their type inferred automatically
      count: 0,
      name: "Eric",
      isAdmin: true,
      items: [],
      hasChanged: true,
    }
  },
})
