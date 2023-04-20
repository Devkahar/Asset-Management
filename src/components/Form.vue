<template>
  <a-form :form="form" @submit="handleSubmit">
    <div class="mb-5" v-for="field in formInputs" v-bind:key="field.id">
      <a-form-item v-if="field.type === 'password'">
        <a-input-password
          :placeholder="field.placeholder"
          :type="field.type"
          v-decorator="field.decorator"
        >
          <template #prefix>
            <Icon :icon="field.icon" />
          </template>
        </a-input-password>
      </a-form-item>
      <a-form-item v-else>
        <a-input
          :placeholder="field.placeholder"
          :type="field.type"
          v-decorator="field.decorator"
        >
          <template #prefix>
            <Icon :icon="field.icon" />
          </template>
        </a-input>
      </a-form-item>
    </div>
    <Button
      :click="handleSubmit"
      :loading="loading"
      :block="true"
      :htmlType="'submit'"
    >
      {{ buttonName }}
    </Button>
  </a-form>
</template>

<script>
import Button from "./Button.vue";
import Icon from "./Icon.vue";

export default {
  name: "FormComponent",
  data() {
    return {
      formInputs: [],
    };
  },
  components: { Button, Icon },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  created() {
    this.formInputs = this.validate.call(this.form);
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          this.successHandler(values);
        }
      });
    },
  },
  mounted() {
    console.log(this.validate);
  },
  props: {
    validate: {
      type: Function,
      required: true,
    },
    buttonName: {
      type: String,
      default: "Submit",
    },
    successHandler: {
      type: Function,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
};
</script>
