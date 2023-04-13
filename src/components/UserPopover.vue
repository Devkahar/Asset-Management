<template>
  <a-popover v-model="visible" trigger="click" placement="bottomRight">
    <slot></slot>
    <template #content>
      <UserCard />
    </template>
  </a-popover>
</template>

<script>
import UserCard from "./UserCard.vue";

export default {
  name: "UserPopover",
  data: function () {
    return {
      visible: false,
    };
  },
  components: { UserCard },
};
</script>
