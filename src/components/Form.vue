<template>
  <a-form :form="form" @submit="handleSubmit">
    <div class="mb-5" v-for="field in validate" v-bind:key="field.id">
      <a-form-item>
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
    <Button :click="handleSubmit" :loading="loading"> {{ buttonName }} </Button>
  </a-form>
</template>

<script>
import Button from "./Button.vue";
import Icon from "./Icon.vue";

export default {
  name: "FormComponent",
  components: { Button, Icon },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "register" });
  },
  created() {
    this.init(this.form);
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
      type: Array,
      required: true,
    },
    buttonName: {
      type: String,
      default: "Submit",
    },
    init: {
      type: Function,
      default: () => {},
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
