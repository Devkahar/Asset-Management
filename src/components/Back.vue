<script>
export default {
  name: "PageBack",
  data() {
    return {
      is: "si",
    };
  },
  methods: {
    goBack() {
      console.log("back");
      this.$router.back();
    },
  },
  render() {
    return this.$scopedSlots.default({ goBack: this.goBack });
  },
};
</script>
