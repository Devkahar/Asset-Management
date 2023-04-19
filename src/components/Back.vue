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
      this.$router.back();
    },
  },
  render() {
    return this.$scopedSlots.default({ goBack: this.goBack });
  },
};
</script>
