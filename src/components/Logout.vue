<script>
import { ROUTE } from "@/utils/constants";

export default {
  name: "LogoutComponent",
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push(ROUTE.LOGIN.path);
    },
  },
  render() {
    return this.$scopedSlots.default({
      logout: this.logout,
    });
  },
};
</script>
