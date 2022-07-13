<template>
  <div class="header">
    <div class="left">
      <el-button
        size="mini"
        type="text"
        :icon="
          $store.getters.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'
        "
      ></el-button>
      <div class="tags-box">
        <topTags></topTags>
      </div>
    </div>
    <div class="right">
      <div class="right-tool-tip"></div>
    </div>
  </div>
</template>

<script>
import topTags from "../../components/common/tags";
export default {
  name: "index",
  component: {
    topTags,
  },
};
</script>

<style scoped lang="scss">
.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    .el-button {
      font-size: 25px;
      color: #fff;
    }
  }
}
</style>
