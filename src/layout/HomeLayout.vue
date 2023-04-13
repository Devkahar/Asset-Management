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
import Drawer from "@/components/Drawer.vue";
import Navigation from "@/components/Navigation.vue";
import { forms } from "@/utils/form/formName";
import { computed } from "vue";
import { actions } from "@/utils/form/formAction";
export default {
  name: "HomeLayout",
  components: { Navigation, Drawer },
  data() {
    return {
      visible: false,
      formName: forms.ADD_CREDENTIAL,
      newFileds: null,
      action: actions.add,
      payload: {},
      url: "",
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
      url = ""
    ) {
      console.log(action);
      this.formName = name;
      this.visible = true;
      this.newFileds = newFileds;
      this.action = action;
      this.payload = payload;
      this.url = url;
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
    };
  },
};
</script>
