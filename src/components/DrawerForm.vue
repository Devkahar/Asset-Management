<template>
  <a-form :form="form" @submit="handleSubmit">
    <div class="grid grid-cols-2 gap-4">
      <div v-for="field in formInputs" :key="field.id">
        <a-form-item :label="field.placeholder">
          <a-input-password
            v-if="field.type === 'password'"
            :placeholder="field.placeholder"
            v-decorator="field.decorator"
          />
          <a-radio-group
            v-else-if="field.type === 'radio'"
            v-decorator="field.decorator"
            :disabled="field.edit === false"
            @change="onFieldChange"
          >
            <a-radio
              v-for="option in field.options"
              :key="option.id"
              :value="option.id"
            >
              {{ option.value }}
            </a-radio>
          </a-radio-group>

          <a-select
            v-else-if="field.type === 'option'"
            :placeholder="field.placeholder"
            v-decorator="field.decorator"
            @change="onSelectChange"
          >
            <a-select-option
              v-for="option in field.options"
              :key="option.id"
              :value="option.id"
            >
              {{ option.value }}
            </a-select-option>
          </a-select>
          <a-date-picker
            v-else-if="field.type === 'date'"
            :placeholder="field.placeholder"
            v-decorator="field.decorator"
            valueFormat="x"
            format="DD/MM/YYYY"
          />
          <a-time-picker
            v-else-if="field.type === 'time'"
            :placeholder="field.placeholder"
            v-decorator="field.decorator"
            format="HH"
            valueFormat="HH"
          />
          <a-select
            :placeholder="field.placeholder"
            v-decorator="getSelectedValue"
            :loading="loadingOptions"
            mode="multiple"
            v-else-if="field.type === 'fetchList'"
          >
            <a-select-option
              v-for="option in credentialsOptions"
              :key="option.id"
              :value="option.id"
            >
              {{ option.value }}
            </a-select-option>
          </a-select>

          <a-input
            v-else-if="field.type !== 'fetchList'"
            :placeholder="field.placeholder"
            :type="field.type"
            step="0.01"
            v-decorator="field.decorator"
          >
            <template #suffix>
              <div v-if="field.suffix">{{ field.suffix }}</div>
            </template>
          </a-input>
        </a-form-item>
      </div>
    </div>
    <slot name="footer" :default="{ handleSubmit, resetForm }"> </slot>
  </a-form>
</template>

<script>
import { getClient } from "@/utils/client";
import { generateKey } from "@/utils/generalFields";
import { message } from "ant-design-vue/lib";
import { networkDiscoveryFieldNames } from "@/utils/form/networkScan";
import { cloneDeep } from "lodash";
import { actions } from "@/utils/form/formAction";
import {
  getFrequencyString,
  convertToBytes,
  convertToHz,
  getByteString,
  removeFieldNames,
} from "@/utils/helper";
let fields;
export default {
  name: "DrawerForm",
  data() {
    return {
      formLayout: "vertical",
      formInputs: [],
      generateKey,
      credentialsOptions: [],
      loadingOptions: false,
      defaultCredOptions: ["refIds", { initialValue: [], rules: [] }],
      hideCredential: false,
      actions: actions,
      removeFields: [],
      initDeleteField: ["ipRangeType", "scanType"],
    };
  },
  computed: {
    getSelectedValue() {
      if (
        this.defaultCredOptions[1] &&
        Array.isArray(this.defaultCredOptions[1]?.initialValue)
      ) {
        this.defaultCredOptions[1]?.initialValue?.map((id, i) => {
          let find = this.credentialsOptions.find(
            (el) => el.id.toString() === id.toString()
          );
          if (find && find.id) {
            this.defaultCredOptions[1].initialValue[i] = find.id;
          }
        });
      }
      console.log(
        "getSelectedValue ",
        this.defaultCredOptions,
        this.credentialsOptions
      );
      return this.defaultCredOptions;
    },
  },
  inject: ["newFileds", "action"],
  beforeCreate() {
    const form = this.$form.createForm(this, { name: "register" });
    this.form = form;
  },
  watch: {
    newFileds() {
      this.formInputs = this.generateFields();
      this.setDefaultCredentialFileds();
    },
  },
  created() {
    this.formInputs = this.generateFields();
    this.init(this.form);
    if (this.newFileds["refIds"]) {
      this.fetchCredentials();
    }
    this.initDeleteField.map((key) => {
      console.log("Initial Value", this.newFileds, key);
      if (this.newFileds[key]?.initialValue) {
        this.removeFields = removeFieldNames[this.newFileds[key].initialValue];
        this.formInputs = this.generateFields();
      }
    });
  },
  methods: {
    setDefaultCredentialFileds() {
      if (Array.isArray(this.formInputs)) {
        this.formInputs.map((el) => {
          if (el.type === "fetchList") {
            console.log("Form Input list", el);
            this.defaultCredOptions = el.decorator;
            console.log(this.defaultCredOptions);
          }
        });
      }
    },
    async fetchCredentials() {
      try {
        this.loadingOptions = true;
        const { data } = await getClient("credentials");
        this.credentialsOptions = data.map((el) => ({
          id: el.id,
          value: el.username,
        }));
        console.log("Crede Options", this.credentialsOptions);
        this.loadingOptions = false;
        this.setDefaultCredentialFileds();
      } catch (error) {
        message.error(error.message);
      }
    },
    generateFields() {
      fields = cloneDeep(this.newFileds);
      if (this.action.actionType !== actions.add.actionType) {
        if (fields["password"]) {
          fields["password"].initialValue = "";
        }
      }
      this.removeFields.map((el) => {
        delete fields[el];
      });
      console.log(fields);
      Object.entries(fields).map((el) => {
        let key = el[0];
        console.log(key);

        if (fields[key].suffix === "Bytes") {
          let res = getByteString(fields[key].initialValue).split(" ");
          let value = Number.parseFloat(res[0]);
          fields[key].initialValue = value;
          fields[key].suffix = res[1];
          fields[key].type = "number";
        }
        if (fields[key].suffix === "Frequency") {
          let res = getFrequencyString(fields[key].initialValue).split(" ");
          let value = Number.parseFloat(res[0]);
          fields[key].initialValue = value;
          fields[key].suffix = res[1];
          fields[key].type = "number";
        }
      });
      let data = cloneDeep(this.validate.apply(this.form, [fields]));
      console.log("Here Are new Fields ", data);
      return data;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Form Values ", values);
          if (typeof values[networkDiscoveryFieldNames.ipList] === "string") {
            values[networkDiscoveryFieldNames.ipList] =
              values[networkDiscoveryFieldNames.ipList].split(",");
          }
          Object.entries(values).map((el) => {
            let key = el[0];
            console.log(key);
            if (fields[key].type === "number") {
              values[key] = Number.parseFloat(values[key]);
            }
            if (this.newFileds[key].suffix === "Bytes") {
              values[key] = convertToBytes(values[key], fields[key].suffix);
            }
            if (this.newFileds[key].suffix === "Frequency") {
              values[key] = convertToHz(values[key], fields[key].suffix);
            }
            if (this.newFileds[key].type === "time") {
              values[key] = Number.parseInt(values[key]) * 3600000;
            }
          });
          this.successHandler(values);
        }
      });
    },
    resetForm(e) {
      e.preventDefault();
      console.log(this.form);
    },
    switchField(value) {
      console.log("Value ", value, " remove ", removeFieldNames[value]);
      if (value) {
        if (removeFieldNames[value]) {
          this.removeFields = removeFieldNames[value];
          this.formInputs = this.generateFields();
        }
      }
    },
    onSelectChange(value) {
      this.switchField(value);
    },
    onFieldChange(e) {
      let value = e.target.value;
      console.log(e);
      this.switchField(value);
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

<style scoped>
.ant-input {
  padding-right: 2.5rem;
}
</style>
