<template functional>
  <div class="max-w-max px-3 border-2">
    <h6 class="font-extrabold">{{ props.title }}</h6>
    <span>{{ props.body }}</span>
  </div>
</template>

<script>
export default {
  name: "AssetItem",
  porps: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
};
</script>
