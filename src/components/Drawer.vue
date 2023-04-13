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
        <DrawerForm :validate="fields" :successHandler="formSubmitHandler">
          <template v-slot:footer="{ sumbitHandler }">
            <div class="flex justify-end">
              <div class="mr-2">
                <Button
                  shape="round"
                  :click="sumbitHandler"
                  htmlType="submit"
                  :loading="loading"
                  >{{ action.title }}</Button
                >
              </div>
              <Button shape="round" :click="onClose">Cancle</Button>
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
import DrawerForm from "@/components/DrawerForm.vue";
import { appForms } from "@/utils/form/form";
import { actions } from "@/utils/form/formAction";
import { clientAction, putClient, postClient } from "@/utils/client";
import { message } from "ant-design-vue/lib";
export default {
  name: "DrawerComponent",
  data() {
    return {
      placement: "right",
      close: Icons.close,
      loading: false,
    };
  },
  computed: {
    title() {
      return this.action.title + " " + appForms[this.formName]?.title ?? "";
    },
    fields() {
      return appForms[this.formName].validation;
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
      form: "id",
    },
    url: {
      form: "url",
    },
  },
  methods: {
    onClose() {
      this.closeModel();
    },
    async formSubmitHandler(data) {
      try {
        this.loading = true;
        const body = {
          ...data,
          ...this.payload.payload,
        };
        console.log("Body ", body);
        let res;
        if (this.action.actionType === clientAction.putClient) {
          res = await putClient(this.url, body);
          this.$store.dispatch("fetchAssetPropertyDetail");
        }
        if (this.action.actionType === clientAction.postClient) {
          res = await postClient(this.url, body);
          message.success("Credential Addded");
        }
        if (this.action.actionType === clientAction.deleteClient) {
          console.log(res);
          // res = await deleteClient(this.url);
          console.log(this.url);
        }
        this.loading = false;
        console.log(res);
        this.onClose();
      } catch (error) {
        console.log(error);
        this.loading = false;
        message.error(error.response.data.message);
      }
    },
  },
  components: { PageTitle, Icon, Button, DrawerForm },
};
</script>
