import visualping from "../../app/visualping.app.mjs";
import { DEFAULT_POLLING_SOURCE_TIMER_INTERVAL } from "@pipedream/platform";

export default {
  name: "New Job Created",
  version: "0.0.1",
  key: "visualping-new-job-created",
  description: "Emit new event for each new job created.",
  type: "source",
  dedupe: "unique",
  props: {
    visualping,
    db: "$.service.db",
    timer: {
      type: "$.interface.timer",
      static: {
        intervalSeconds: DEFAULT_POLLING_SOURCE_TIMER_INTERVAL,
      },
    },
    workspaceId: {
      propDefinition: [
        visualping,
        "workspaceId",
      ],
    },
  },
  methods: {
    emitEvent(data) {
      this._setLastResourceId(data.id);

      this.$emit(data, {
        id: data.id,
        summary: `New job created with ID ${data.id}`,
        ts: new Date(),
      });
    },
    _setLastResourceId(id) {
      this.db.set("lastResourceId", id);
    },
    _getLastResourceId() {
      return this.db.get("lastResourceId");
    },
  },
  async run() {
    const lastResourceId = this._getLastResourceId();

    let page = 0;

    while (page >= 0) {
      const { jobs } = await this.visualping.getJobs({
        workspaceId: this.workspaceId,
        params: {
          pageIndex: page,
          pageSize: 100,
        },
      });

      jobs.reverse().forEach(this.emitEvent);

      if (
        jobs.length < 100 ||
        jobs.filter((job) => job.id === lastResourceId)
      ) {
        return;
      }

      page++;
    }
  },
};
