<template>
  <div v-if="showTags" class="tags">
    <div class="tagsBox">
      <el-tag
        v-for="(item,index) in tagsList"
        :key="index"
        closable
        :type="item.path===$route.fullPath?'success':'info'"
        @close="closeTags(index)"
      >
        <router-link :to="item.path">{{ item.title }}</router-link>
      </el-tag>
    </div>
    <div class="tags-close-box">
      <el-dropdown @command="handleTags">
        <el-button size="mini" type="primary">
          <span class="px-1">标签选项</span>
          <i class="el-icon-arrow-down"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown" size="small">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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
            tagsList: []
        };
    },
    /**
   * 方法
   */
    methods: {
    /**
     * 关闭单个标签
     * @param {string} index 索引值
     */
        closeTags(index) {
            const delItem = this.tagsList.splice(index, 1)[ 0 ];
            const item = this.tagsList[ index ]
                ? this.tagsList[ index ]
                : this.tagsList[ index - 1 ];
            if (item)
                delItem.path === this.$route.fullPath && this.$router.push(item.path);
            else this.$router.push("/");
        },
        /**
     * 关闭所有标签
     */
        closeAll() {
            this.tagsList = [];
            this.$router.push("/");
        },
        /**
     * 关闭其他标签
     */
        closeOther() {
            const curItem = this.tagsList.filter(item => {
                return item.path === this.$route.fullPath;
            });
            this.tagsList = curItem;
        },
        /**
     * 设置标签
     * @param {string} route 路由
     */
        setTags(route) {
            const isExist = this.tagsList.some(item => {
                return item.path === route.fullPath;
            });
            if (!isExist) {
                if (this.tagsList.length >= 8) this.tagsList.shift();

                this.tagsList.push({
                    title: route.meta.title,
                    path: route.fullPath,
                    name: route.matched[ 1 ].components[ "default" ].name
                });
            }
            bus.$emit("tags", this.tagsList);
        },
        /**
     * 注册command方法
     * @param {string} command 参数值
     */
        handleTags(command) {
            command === "other" ? this.closeOther() : this.closeAll();
        }
    },
    /**
   * 计算属性
   */
    computed: {
    /**
     * 是否显示标签
     * @returns {boolean} 标签trueorfalse
     */
        showTags() {
            return this.tagsList.length > 0;
        }
    },
    /**
   * 监听方法
   */
    watch: {
    /**
     * 路由
     * @param {string} newValue 新值
     * @param {string} oldValue 旧值
     */
        $route(newValue, oldValue) {
            this.setTags(newValue);
        }
    },
    /**
   * created在实例创建完成后被立即调用。
   */
    created() {
        this.setTags(this.$route);
    }
};
</script>


<style lang="scss">
.tags {
  position: relative;
  height: 50px;
  overflow: hidden;
  background: #fff;
  padding-right: 120px;
  border-bottom: 1px solid #d8dce5;
  .tagsBox {
    box-sizing: border-box;
    padding: 0 5px;
    line-height: 50px;
    width: 100%;
    height: 100%;
    .el-tag + .el-tag {
      margin-left: 10px;
    }
  }
  .tags-close-box {
    position: absolute;
    right: 10px;
    top: 9px;
    box-sizing: border-box;
    text-align: center;
    width: 110px;
    height: 32px;
    font-size: 12px;
  }
}
</style>
