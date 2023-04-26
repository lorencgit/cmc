import common from "../common/webhook.mjs";
import { EmailWebhookEventType } from "mailersend";

export default {
  ...common,
  key: "mailersend-email-has-click-activity",
  name: "New Click Activity (Instant)",
  description: "Emit new event when the recipient clicks a link in your email. [See the documentation](https://developers.mailersend.com/api/v1/webhooks.html#webhooks-overview)",
  version: "0.0.1",
  dedupe: "unique",
  type: "source",
  methods: {
    ...common.methods,
    getEvents() {
      return [
        EmailWebhookEventType.CLICKED,
      ];
    },
  },
};
