import slack from "../../slack.app.mjs";

export default {
  key: "slack-find-message",
  name: "Find Message",
  description: "Find a Slack message. [See docs here](https://api.slack.com/methods/search.messages)",
  version: "0.0.11",
  type: "action",
  props: {
    slack,
    query: {
      propDefinition: [
        slack,
        "query",
      ],
    },
    count: {
      propDefinition: [
        slack,
        "count",
      ],
      optional: true,
    },
    teamId: {
      propDefinition: [
        slack,
        "team",
      ],
      optional: true,
    },
  },
  async run() {
    return this.slack.searchMessages({
      query: this.query,
      count: this.count,
      team_id: this.teamId,
    });
  },
};
