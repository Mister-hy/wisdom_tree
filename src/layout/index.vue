<template>
  <el-container>
    <el-aside width="200px">
      <AppAside></AppAside>
    </el-aside>
    <el-container>
      <el-header>
        <AppHeader></AppHeader>
      </el-header>
      <el-main>
        <AppMain></AppMain>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import AppAside from "@/layout/AppAside";
import AppMain from "@/layout/AppMain";
import AppHeader from "@/layout/AppHeader";
export default {
  name: "index",
  components: {
    AppAside,
    AppMain,
    AppHeader,
  },
};
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #18bc9c;
  color: hotpink;
  line-height: 60px;
}

.el-aside {
  background-color: #222d32;
  color: firebrick;
}

.el-main {
  background-color: #e8edf0;
  color: green;
}
</style>
