<template>
  <div class="flex justify-end">
    <div
      v-if="availableAction.schedule"
      class="cursor-pointer mr-3"
      @click="
        () =>
          actionHandler(
            availableAction.schedule,
            {},
            {
              id: data.payload.id,
              payload: {},
            }
          )
      "
    >
      <Icon :icon="availableAction.schedule.icon" />
    </div>
    <div
      v-if="availableAction.search"
      class="cursor-pointer mr-3"
      @click="
        () =>
          actionHandler(
            availableAction.search,
            {},
            {
              id: data.payload.id,
              payload: {},
            }
          )
      "
    >
      <Icon :icon="availableAction.search.icon" />
    </div>
    <div
      v-if="availableAction.edit"
      class="cursor-pointer mr-3"
      @click="
        () =>
          actionHandler(availableAction.edit, data.fieldData, {
            id: availableAction.add ? data.payload.id : data.payload.refId,
            payload: data.payload,
          })
      "
    >
      <Icon :icon="availableAction.edit.icon" />
    </div>
    <div
      v-if="availableAction.delete"
      class="cursor-pointer mr-3"
      @click="
        () =>
          actionHandler(availableAction.delete, data.fieldData, {
            id: availableAction.add ? data.payload.id : data.payload.refId,
            payload: data.payload,
          })
      "
    >
      <Icon :icon="availableAction.delete.icon" />
    </div>
  </div>
</template>

<script>
import Icon from "./Icon.vue";

export default {
  name: "DataAction",
  props: {
    actionHandler: {
      type: Function,
      required: true,
    },
    availableAction: {
      type: Object,
      required: true,
    },
    data: {
      type: Object,
      required: true,
    },
  },
  components: { Icon },
};
</script>
