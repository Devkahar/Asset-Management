<template>
  <a-form :form="form" @submit="handleSubmit">
    <div class="grid grid-cols-2 gap-4">
      <div v-for="field in formInputs" v-bind:key="field.id">
        <a-form-item :label="field.placeholder">
          <a-input-password
            v-if="field.type === 'password'"
            :placeholder="field.placeholder"
            v-decorator="field.decorator"
          />
          <a-select
            v-else-if="field.type === 'option'"
            :placeholder="field.placeholder"
            v-decorator="field.decorator"
            :default-value="field.initialValue"
          >
            <a-select-option
              v-for="option in field.options"
              v-bind:key="option.id"
              :value="option.value"
            >
              {{ option.value }}
            </a-select-option>
          </a-select>
          <a-date-picker
            v-else-if="field.type === 'date'"
            :placeholder="field.placeholder"
            v-decorator="field.decorator"
          />
          <a-input
            v-else
            :placeholder="field.placeholder"
            :type="field.type"
            v-decorator="field.decorator"
          />
        </a-form-item>
      </div>
    </div>
    <slot name="footer" :default="{ handleSubmit }"> </slot>
  </a-form>
</template>

<script>
export default {
  name: "DrawerForm",
  data() {
    return {
      formLayout: "vertical",
      formInputs: [],
    };
  },
  inject: ["newFileds"],
  beforeCreate() {
    const form = this.$form.createForm(this, { name: "register" });
    this.form = form;
  },
  watch: {
    newFileds() {
      this.formInputs = this.validate.apply(this.form, [this.newFileds]);
    },
  },
  created() {
    this.formInputs = this.validate.apply(this.form, [this.newFileds]);
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
  props: {
    validate: {
      type: Function,
      required: true,
    },
    init: {
      type: Function,
      default: () => {},
    },
    successHandler: {
      type: Function,
      required: true,
    },
  },
};
</script>
