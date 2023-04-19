<template>
  <div class="flex flex-col items-center">
    <div class="mb-2">
      <Avatar :size="80"> {{ name }} </Avatar>
    </div>
    <Headline> {{ name }} </Headline>
    <p>{{ email }}</p>
    <div class="flex">
      <div class="mr-3">
        <Button shape="round"> Edit Profile </Button>
      </div>
      <Logout v-slot:default="{ logout }">
        <Button shape="round" :click="logout"> Log Out </Button>
      </Logout>
    </div>
  </div>
</template>

<script>
import { Avatar } from "ant-design-vue/lib";
import Button from "./Button.vue";
import Headline from "./Headline.vue";
import Logout from "./Logout.vue";

export default {
  name: "UserCard",
  data() {
    return {
      name: this.$store.getters.name,
      email: this.$store.getters.email,
    };
  },
  components: { Avatar, Headline, Button, Logout },
};
</script>
