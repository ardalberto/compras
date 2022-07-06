import { defineStore } from "pinia";
import { ExampleType } from "@/types";

export const useExampleStore = defineStore("ExampleStore", {
  state: () => ({
    items: [{ id: 1, name: "item1" }] as ExampleType[],
  }),
  getters: {},
  actions: {},
});
