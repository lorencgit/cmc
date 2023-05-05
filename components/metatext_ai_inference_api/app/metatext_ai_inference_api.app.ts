import { defineApp } from "@pipedream/types";

export default defineApp({
  type: "app",
  app: "metatext_ai_inference_api",
  propDefinitions: {},
  methods: {
    // this.$auth contains connected account data
    authKeys() {
      console.log(Object.keys(this.$auth));
    },
  },
});