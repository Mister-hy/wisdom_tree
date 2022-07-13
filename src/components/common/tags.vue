<template>
  <div class="tags-content">
    <el-tag
      v-for="item in tags"
      size="medium"
      type="warning"
      :key="item.path"
      >{{ item.title }}</el-tag
    >
  </div>
</template>

<script>
export default {
  name: "topTags",
  data() {
    return {};
  },
  computed: {
    tags() {
      return this.$store.getters.tags;
    },
  },
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style lang="scss"></style>
