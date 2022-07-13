<template>
  <div class="aside-container">
    <el-menu
      :default-active="acitvePath"
      text-color="#000"
      active-text-color="#ffd04b"
      router
    >
      <menuPorp
        :item="item"
        v-for="(item, index) in menuList"
        :key="index"
      ></menuPorp>
      <!-- <el-menu-item index="0">
        <i class="el-icon-setting"></i>
        <span slot="title">控制台</span>
      </el-menu-item>

      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item index="2">
          <i class="el-icon-setting"></i>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">角色管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">菜单管理</span>
        </el-menu-item>
      </el-submenu> -->
    </el-menu>
  </div>
</template>

<script>
import { menuList } from "../../api/user";
import menuPorp from "./menuPorp";
export default {
  name: "index",
  data() {
    return {
      menuList: [],
    };
  },
  computed: {
    acitvePath() {
      return this.$route.path;
    },
    menus() {
      if (this.$store.getters.menus) {
        return this.getMenuList();
      }
    },
  },
  mounted() {
    this.getMenuList();
  },
  methods: {
    async getMenuList() {
      const res = await menuList();
      this.menuList = res;
      console.log(this.menuList);
    },
  },
  components: {
    menuPorp,
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  background-color: #222d32;
  border-right: none;
}
</style>
