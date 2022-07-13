<template>
  <div>
    <template v-if="item && item.component !== null">
      <el-menu-item :index="item.path === '/' ? '/index' : item.path">
      <!-- <el-menu-item :index="item.path"> -->
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
    </template>
    <template v-else-if="item && item.component === null">
      <el-submenu :index="item.perms">
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span>{{ item.label }}</span>
        </template>
        <menuPorp
          v-for="(childItem, index) in item.children"
          :key="index"
          :item="childItem"
        ></menuPorp>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  props: ["item"],
  name: "menuPorp",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style lang="scss"></style>
