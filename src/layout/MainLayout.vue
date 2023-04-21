<template>
  <div class="">
    <!-- Nav -->
    <Navigation />
    <!-- Component -->
    <div class="component p-5">
      <slot></slot>
    </div>
    <Drawer />
  </div>
</template>

<script>
import Navigation from "@/components/Navigation.vue";
import { forms } from "@/Modules/HardwareAsset/utils/form/formName";
import { computed } from "vue";
import { actions } from "@/Modules/HardwareAsset/utils/form/formAction";
import Drawer from "@/Modules/HardwareAsset/components/Drawer.vue";
export default {
  name: "HomeLayout",
  data() {
    return {
      visible: false,
      formName: forms.ADD_CREDENTIAL,
      newFileds: null,
      action: actions.add,
      payload: {},
      url: "",
      callback: () => {},
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
    changeForm(
      name,
      newFileds,
      action = this.action.add,
      payload = {},
      url = "",
      callback = () => {}
    ) {
      console.log(action);
      this.formName = name;
      this.visible = true;
      this.newFileds = newFileds;
      this.action = action;
      this.payload = payload;
      this.url = url;
      this.callback = callback;
    },
  },
  provide() {
    return {
      visible: computed(() => this.visible),
      formName: computed(() => this.formName),
      closeModel: this.close,
      changeForm: this.changeForm,
      newFileds: computed(() => this.newFileds),
      id: computed(() => this.id),
      payload: computed(() => this.payload),
      action: computed(() => this.action),
      url: computed(() => this.url),
      callback: computed(() => this.callback),
    };
  },
  components: { Navigation, Drawer },
};
</script>
