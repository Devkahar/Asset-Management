<template>
  <div class="flex flex-col items-center">
    <div class="mb-2">
      <Avatar :size="80"> Dev </Avatar>
    </div>
    <Headline> Dev Kahar </Headline>
    <p>dev.kahar@motadata.com</p>
    <div class="flex">
      <div class="mr-3">
        <Button shape="round"> Edit Profile </Button>
      </div>
      <Button shape="round"> Sign Out </Button>
    </div>
  </div>
</template>

<script>
import { Avatar } from "ant-design-vue/lib";
import Button from "./Button.vue";
import Headline from "./Headline.vue";

export default {
  name: "UserCard",
  components: { Avatar, Headline, Button },
};
</script>
