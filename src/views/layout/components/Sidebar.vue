
<template>
  <el-aside class="Menu hasScroll" width="200px">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      background-color="#102124"
      text-color="#fff"
      active-text-color="#00c561"
      :collapse="collapse"
      unique-opened
      router
    >
      <template v-for="item in menuList">
        <template v-if="item.subs">
          <el-submenu :key="item.index" :index="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :key="subItem.index" :index="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :key="subItem.index" :index="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :key="item.index" :index="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>

<script>
import bus from "@/components/bus";
import Menu from "@/assets/json/menu.js";
export default {
    /**
   * 初始化数据
   * @returns {Object} 初始化对象
   */
    data() {
        return {
            collapse: false,
            menuList: Menu
        };
    },
    /**
   * 计算属性
   */
    computed: {
    /**
     * 当前激活菜单的index
     * @returns {string} 正则替换/
     */
        onRoutes() {
            return this.$route.path.replace("/", "");
        }
    },
    /**
   * created在实例创建完成后被立即调用。
   */
    created() {
    // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on("collapse", msg => {
            this.collapse = msg;
        });
    }
};
</script>

<style lang="scss">
@import "@/styles/vars.scss";
.Menu {
  overflow-x: hidden;
  height: -moz-calc(100vh - 70px);
  height: -webkit-calc(100vh - 70px);
  height: calc(100vh - 70px);
  .el-menu {
    height: 100%;
    border: none; //这里很重要的
  }
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 200px;
}
.sidebar > ul {
  height: 100%;
}
</style>
