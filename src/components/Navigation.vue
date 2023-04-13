<template>
  <div class="flex items-center justify-between p-5 border-b-2">
    <div class="">
      <Logo />
    </div>
    <div class="flex">
      <!-- Create Button -->
      <div class="mr-3">
        <Button shape="round" :click="addCredential"
          >Add Credential
          <template #tail> <Icon :icon="plus" :padded="true" /></template>
        </Button>
      </div>
      <!-- Profile Icon -->
      <UserPopover>
        <Avatar>D</Avatar>
      </UserPopover>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import Logo from "./Logo.vue";
import Icons from "@/utils/iconPath";
import Avatar from "./Avatar.vue";
import UserPopover from "./UserPopover.vue";
import { forms } from "@/utils/form/formName";
import { credentialField } from "@/utils/form/credential";
import { actions } from "@/utils/form/formAction";
export default {
  name: "NavigationComponent",
  components: { Logo, Button, Icon, Avatar, UserPopover },
  data() {
    return {
      plus: Icons.plus,
    };
  },
  inject: ["changeForm"],
  methods: {
    addCredential() {
      this.changeForm(
        forms.ADD_CREDENTIAL,
        credentialField,
        actions.add,
        {},
        "credentials"
      );
    },
  },
};
</script>
