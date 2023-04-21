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
            showTime
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
    <slot
      name="footer"
      v-bind="{ handleSubmit: handleSubmit, dummySubmit: this.dummySubmit }"
    >
    </slot>
  </a-form>
</template>

<script>
import { getClient } from "@/utils/http/client";
import { generateKey } from "@/utils/form/generalFields";
import { message } from "ant-design-vue/lib";
import { networkDiscoveryFieldNames } from "@/Modules/HardwareAsset/utils/form/networkScan";
import { cloneDeep } from "lodash";
import { actions } from "@/Modules/HardwareAsset/utils/form/formAction";
import { removeFieldNames } from "@/utils/helper";
import {
  getFrequencyString,
  convertToBytes,
  convertToHz,
  getByteString,
} from "@/utils/conversion";
import { schedulerFiledName } from "@/Modules/HardwareAsset/utils/form/scheduler";
import moment from "moment";
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
      defaultCredOptions: [
        networkDiscoveryFieldNames.credentials,
        { initialValue: [], rules: [] },
      ],
      actions: actions,
      removeFields: [],
      initDeleteField: [
        networkDiscoveryFieldNames.ipRangeType,
        schedulerFiledName.scheduleType,
      ],
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
    if (this.newFileds[networkDiscoveryFieldNames.credentials]) {
      this.fetchCredentials();
    }
    this.initDeleteField.map((key) => {
      if (this.newFileds[key]?.initialValue) {
        this.removeFields = removeFieldNames[this.newFileds[key].initialValue];
        this.formInputs = this.generateFields();
      }
    });
  },
  methods: {
    disabledDate(current) {
      return current < moment().subtract(1, "days");
    },
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
    convertFieldsToHighest(fields) {
      Object.entries(fields).map((el) => {
        let key = el[0];
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
        if (fields[key].suffix === "min") {
          fields[key].initialValue =
            Number.parseInt(fields[key].initialValue) / 60000;
        }
      });
    },
    convertFieldToLowest(values) {
      if (typeof values[networkDiscoveryFieldNames.ipList] === "string") {
        values[networkDiscoveryFieldNames.ipList] =
          values[networkDiscoveryFieldNames.ipList].split(",");
      }
      Object.entries(values).map((el) => {
        let key = el[0];
        if (fields[key].type === "number") {
          values[key] = Number.parseFloat(values[key]);
        }
        if (this.newFileds[key].suffix === "min") {
          values[key] = Number.parseInt(values[key]) * 60000;
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
    },
    generateFields() {
      fields = cloneDeep(this.newFileds);
      this.convertFieldsToHighest(fields);
      if (this.action.actionType !== actions.add.actionType) {
        if (fields["password"]) {
          fields["password"].initialValue = "";
        }
      }
      this.removeFields.map((el) => {
        delete fields[el];
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
          this.convertFieldToLowest(values);
          this.successHandler(values);
        }
      });
    },
    dummySubmit(e) {
      e.preventDefault();
      console.log("Hit Dummy");
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log("Form Values ", values);
          this.testConnection(values);
        }
      });
    },
    resetForm(e) {
      e.preventDefault();
      console.log(this.form);
    },

    switchField(value) {
      console.log("Value ", value, " remove ", removeFieldNames[value]);

      if (removeFieldNames[value]) {
        this.removeFields = removeFieldNames[value];
        this.formInputs = this.generateFields();
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
    testConnection: {
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
