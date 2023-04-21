<template>
  <a-form :form="form" @submit="formSubmitHandler">
    <div class="flex items-center">
      <a-form-item>
        <a-input v-decorator="['ipAddress', { rules: ipRules }]" />
      </a-form-item>
      <div class="ml-2">
        <div class="cursor-pointer" @click="formSubmitHandler">
          <Icon :icon="checkIcon" />
        </div>
      </div>
    </div>
  </a-form>
</template>
<script>
import { ipAddressRules, requiredRule } from "@/utils/form/rules";
import Icons from "@/utils/iconPath";
import Icon from "./Icon.vue";

export default {
  name: "IpForm",
  data() {
    return {
      ipRules: [...requiredRule, ...ipAddressRules],
      checkIcon: Icons.check,
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "ipForm" });
  },
  methods: {
    formSubmitHandler(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Ip Form Values ", values);
          this.handleSubmit(values);
        }
      });
    },
  },
  props: {
    handleSubmit: {
      type: Function,
      required: true,
    },
  },
  components: { Icon },
};
</script>
