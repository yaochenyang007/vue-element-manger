<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="box-div">
      <div class="collapse-btn" @click="collapseChage">
        <i class="el-icon-menu"></i>
      </div>
      <div class="logo">管理系统</div>
    </div>

    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <div class="btn-fullscreen px-2" @click="handleFullScreen">
          <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 消息中心 -->
        <div class="btn-bell">
          <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
            <router-link to="/tabs">
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
          <span v-if="message" class="btn-bell-badge"></span>
        </div>
        <!-- 用户头像 -->
        <div class="user-avator px-2">
          <img :src="require('@/assets/images/admin.gif')" />
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{ username }}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import bus from "@/components/bus";
export default {
    /**
   * 初始化数据
   * @returns {Object} 初始化对象
   */
    data() {
        return {
            selectValue: "",
            options: [
                {
                    value: "cn",
                    label: "中文"
                },
                {
                    value: "en",
                    label: "English"
                }
            ],
            collapse: false,
            fullscreen: false,
            name: "ycy",
            message: 2,
            username: "admin"
        };
    },
    /**
   * 方法
   */
    methods: {
    /**
     * 用户名下拉菜单选择事件
     * @param {string} command 参数选项
     */
        handleCommand(command) {
            if (command === "loginout") {
                localStorage.removeItem("ms_username");
                this.$router.push("/login");
            }
        },
        /**
     * 侧边栏折叠
     */
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit("collapse", this.collapse);
        },
        /**
     * 全屏事件
     */
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) document.exitFullscreen();
                else if (document.webkitCancelFullScreen)
                    document.webkitCancelFullScreen();
                else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
                else if (document.msExitFullscreen) document.msExitFullscreen();
            } else {
                if (element.requestFullscreen) element.requestFullscreen();
                else if (element.webkitRequestFullScreen)
                    element.webkitRequestFullScreen();
                else if (element.mozRequestFullScreen) element.mozRequestFullScreen();
                else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        }
    },
    /**
   * mounted
   */
    mounted() {
        if (document.body.clientWidth < 1500) this.collapseChage();
    }
};
</script>
<style lang="scss">
@import "@/styles/vars.scss";
.btn-bell,
.btn-fullscreen {
  position: relative;
  // width: 30px;
  // height: 30px;
  margin-right: 10px;
  font-size: 20px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: 20px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}
.btn-bell .el-icon-bell {
  color: #fff;
}
.header {
  background-color: $color-top;
  width: 100%;
  height: 70px;
  line-height: 70px;
  color: #fff;
}
.collapse-btn {
  float: left;
  cursor: pointer;
  line-height: 70px;
  margin: 0 30px;
}
.header .logo {
  text-align: center;
  float: left;
  // width: 200px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-fullscreen {
  transform: rotate(45deg);
}
.user-avator img {
  display: block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
</style>
