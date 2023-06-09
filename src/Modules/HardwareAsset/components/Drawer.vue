<template>
  <a-drawer
    :placement="placement"
    :closable="false"
    :visible="visible"
    @close="onClose"
  >
    <div class="h-full">
      <div class="flex items-center justify-between">
        <PageTitle :size="1"> {{ title }} </PageTitle>
        <div class="cursor-pointer" @click="onClose">
          <Icon :icon="close" />
        </div>
      </div>
      <hr />
      <div class="mt-5">
        <DrawerForm
          :key="formName"
          :validate="fields"
          :successHandler="formSubmitHandler"
          :init="formInit"
          :testConnection="getTestConnecitonValues"
          v-if="visible"
        >
          <template v-slot:footer="{ sumbitHandler, dummySubmit }">
            <div
              :style="{
                position: 'absolute',
                right: 0,
                bottom: 0,
                width: '100%',
                padding: '10px 16px',
                background: '#fff',
                textAlign: 'right',
                zIndex: 1,
              }"
              class="flex justify-end"
            >
              <div class="mr-2" v-if="showDeleteSchedule">
                <DeleteScheduler :closeDrawer="onClose" />
              </div>
              <div class="mr-2" v-if="showTest">
                <a-popover
                  v-model="showIp"
                  title="Ip Address"
                  trigger="click"
                  placement="bottom"
                >
                  <a slot="content">
                    <IpForm :handleSubmit="testConnection" />
                  </a>
                  <Button
                    shape="round"
                    :click="dummySubmit"
                    htmlType="button"
                    :loading="testConnectionLoading"
                    >Test</Button
                  >
                </a-popover>
              </div>
              <div class="mr-2">
                <Button
                  shape="round"
                  :click="sumbitHandler"
                  htmlType="submit"
                  :loading="loading"
                  >{{ action.title }}</Button
                >
              </div>
              <Button shape="round" :click="onClose">Cancel</Button>
            </div>
          </template>
        </DrawerForm>
      </div>
    </div>
  </a-drawer>
</template>

<script>
import Icon from "@/components/Icon.vue";
import PageTitle from "@/components/PageTitle.vue";
import Icons from "@/utils/iconPath";
import Button from "@/components/Button.vue";
import { appForms } from "@/Modules/HardwareAsset/utils/form/form";
import { actions } from "@/Modules/HardwareAsset/utils/form/formAction";
import { putClient, postClient, patchClient } from "@/utils/http/client";
import { message } from "ant-design-vue/lib";
import { clientAction } from "@/utils/constants";
import DrawerForm from "./DrawerForm.vue";
import { forms } from "../utils/form/formName";
import IpForm from "@/components/IpForm.vue";
import DeleteScheduler from "./DeleteScheduler.vue";

export default {
  name: "DrawerComponent",
  data() {
    return {
      placement: "right",
      close: Icons.close,
      loading: false,
      form: null,
      testConnectionLoading: false,
      connectionPayload: {},
      ipAddress: "",
      showIp: false,
    };
  },
  computed: {
    formName() {
      return appForms[this.formName].title;
    },
    title() {
      return this.action.title + " " + appForms[this.formName]?.title ?? "";
    },
    fields() {
      return appForms[this.formName].validation;
    },
    showTest() {
      return this.formName === forms.ADD_CREDENTIAL;
    },
    showDeleteSchedule() {
      return (
        this.formName === forms.SCHEDULE &&
        this.action.placeholder === actions.edit.placeholder
      );
    },
  },
  inject: {
    visible: {
      from: "visible",
    },
    formName: {
      from: "formName",
    },
    action: {
      from: "action",
      default: actions,
    },
    closeModel: {
      from: "closeModel",
    },
    payload: {
      from: "payload",
    },
    id: {
      from: "id",
    },
    url: {
      from: "url",
    },
    callback: {
      from: "callback",
    },
  },
  methods: {
    onClose() {
      console.log("onClose Called");
      this.form.resetFields();
      this.closeModel();
    },
    async formSubmitHandler(data) {
      try {
        this.loading = true;
        const body = {
          ...this.payload.payload,
          ...data,
        };
        console.log("Body ", body);
        let res;
        if (this.action.actionType === clientAction.putClient) {
          res = await putClient(this.url, body);
          message.success("Edited Successfully");
        }
        if (this.action.actionType === clientAction.patchClient) {
          res = await patchClient(this.url, body);
          message.success("Edited Successfully");
        }
        if (this.action.actionType === clientAction.postClient) {
          res = await postClient(this.url, body);
          message.success("Added Successfully");
        }
        this.loading = false;
        console.log(res);
        this.callback();
        this.onClose();
      } catch (error) {
        console.log(error);
        this.loading = false;
        message.error(error.message);
      }
    },
    getTestConnecitonValues(values) {
      this.connectionPayload = values;
    },
    async testConnection(data) {
      try {
        this.showIp = false;
        message.success("Testing Connection");
        const res = await postClient("credentials/testConnection", {
          ...this.connectionPayload,
          ipAddress: data.ipAddress,
        });

        if (res.data) {
          message.success("Connection Successfull");
        } else {
          message.error("Connection UnSuccessfull");
        }
        this.ipAddress = "";
      } catch (error) {
        message.error("Connection UnSuccessfull");
      }
    },
    formInit(form) {
      this.form = form;
    },
  },
  components: { PageTitle, Icon, Button, DrawerForm, IpForm, DeleteScheduler },
};
</script>
