<template>
  <div class="">
    <h1 class="text-1xl">{{ title }}</h1>
    <div class="flex items-center">
      <div class="flex" v-if="!edit">
        <p class="mr-2">{{ disVal }}</p>
        <div class="cursor-pointer" @click="toggleEdit">
          <Icon :icon="editIcon" />
        </div>
      </div>
      <a-form v-else @submit="submitHandler">
        <a-form-item>
          <div class="flex items-center">
            <a-input v-model="newValue" />
            <div class="ml-2">
              <div class="cursor-pointer" @click="toggleEdit">
                <Icon :icon="closeIcon" />
              </div>
              <div class="cursor-pointer" @click="submitHandler">
                <Icon :icon="checkIcon" />
              </div>
            </div>
          </div>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
import Icons from "@/utils/iconPath";
import { patchClient } from "@/utils/http/client";
import { message } from "ant-design-vue/lib";
import Icon from "@/components/Icon.vue";
export default {
  name: "EditAsset",
  data() {
    return {
      disVal: this.value,
      newValue: this.value,
      edit: false,
      editIcon: Icons.edit,
      closeIcon: Icons.close,
      checkIcon: Icons.check,
    };
  },
  inject: ["id"],
  methods: {
    toggleEdit() {
      this.edit = !this.edit;
    },
    async submitHandler() {
      try {
        const res = await patchClient(`asset/${this.id}`, {
          [this.assetKey]: this.newValue,
        });
        console.log(res);
        this.disVal = this.newValue;
        this.toggleEdit();
        this.$store.dispatch("fetchAssetDetail", {
          id: this.id,
        });
      } catch (error) {
        message.error(error.message);
      }
    },
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    assetKey: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  components: { Icon },
};
</script>
