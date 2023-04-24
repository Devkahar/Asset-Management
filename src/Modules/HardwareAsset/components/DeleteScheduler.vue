<template>
  <Button shape="round" :click="deleteScheduler" htmlType="button"
    >Delete Schedule</Button
  >
</template>

<script>
import Button from "@/components/Button.vue";
import { deleteClient } from "@/utils/http/client";
import { message } from "ant-design-vue/lib";

export default {
  name: "DeleteScheduler",
  data() {
    return {
      loading: false,
    };
  },
  inject: {
    url: {
      from: "url",
    },
  },
  methods: {
    async deleteScheduler() {
      try {
        const res = await deleteClient(this.url);
        if (res.data) {
          message.success("Deleted Successfully");
          this.closeDrawer();
        } else {
          throw Error("Cannot Delete Item");
        }
      } catch (error) {
        this.modalLoading = false;
        this.closeDrawer();
        message.error(error.message);
      }
    },
  },
  props: {
    closeDrawer: {
      type: Function,
      required: true,
    },
  },
  components: { Button },
};
</script>
