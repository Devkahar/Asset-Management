<template>
  <Back>
    <template v-slot:default="{ goBack }">
      <div class="mr-2">
        <div @click="goBack" class="cursor-pointer">
          <Icon :icon="backIcon" />
        </div>
      </div>
    </template>
  </Back>
</template>

<script>
import Icon from "@/components/Icon.vue";
import Back from "@/components/Back.vue";
import Icons from "@/utils/iconPath";
export default {
  name: "PageBack",
  data() {
    return {
      backIcon: Icons.back,
    };
  },
  components: {
    Icon,
    Back,
  },
};
</script>
