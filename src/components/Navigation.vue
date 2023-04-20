<template>
  <div class="flex items-center justify-between p-5 border-b-2">
    <div class="">
      <Logo />
    </div>
    <div class="flex">
      <!-- Hardware Asset Link -->
      <div class="mr-3 flex items-center">
        <Link :path="hardwareAssetLink"> Hardware Asset </Link>
      </div>
      <!-- Asset Discovery Link -->
      <div class="mr-3 flex items-center">
        <Link :path="assetDiscoveryLink"> Asset Discovery </Link>
      </div>
      <!-- Create Button -->
      <div class="mr-3">
        <Button shape="round" :click="addCredential"
          >Add Credential
          <template #tail> <Icon :icon="plus" :padded="true" /></template>
        </Button>
      </div>
      <!-- Profile Icon -->
      <UserPopover>
        <Avatar>{{ name }}</Avatar>
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
import { formField } from "@/store/storeActions";
import Link from "./Link.vue";
import { ROUTE } from "@/utils/constants";
export default {
  name: "NavigationComponent",
  components: { Logo, Button, Icon, Avatar, UserPopover, Link },
  data() {
    return {
      plus: Icons.plus,
      assetDiscoveryLink: ROUTE.ASSET_DISCOVERY.path,
      hardwareAssetLink: ROUTE.HOME.path,
      name: this.$store.getters.name[0],
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
        "credentials",
        this.fetchCredential
      );
    },
    fetchCredential() {
      this.$store.dispatch(formField.actions.fetchFieldData);
    },
  },
};
</script>
