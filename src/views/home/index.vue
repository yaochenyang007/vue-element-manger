<template>
  <div class="home hasScroll">
    <div class="websiteDesign">
      <div class="pv">
        <p class="name">
          浏览量(PV)
          <el-tooltip effect="light" placement="top-start">
            <div slot="content">
              即通常说的Puv View(PV)，用户每打开一
              <br />个网站页面就被记录1次。用户多次打开同
              <br />一页面，浏览量值累计。
            </div>
            <i class="el-icon-question color-active"></i>
          </el-tooltip>
        </p>
        <p class="num">113,231,321</p>
      </div>
      <div class="uv">
        <p class="name">
          访客数(UV)
          <el-tooltip effect="light" placement="top-start">
            <div slot="content">
              一天之内您网站的独立访客数(以Cookie为
              <br />依据)，一天内同一访客多次访问您网站只
              <br />计算1个访客。
            </div>
            <i class="el-icon-question color-active"></i>
          </el-tooltip>
        </p>
        <p class="num">1,434,545</p>
      </div>
      <div class="ip">
        <p class="name">
          IP数
          <el-tooltip effect="light" content="一天之内您网站的独立访问ip数" placement="top-start">
            <i class="el-icon-question color-active"></i>
          </el-tooltip>
        </p>
        <p class="num">4,523,525</p>
      </div>
    </div>
    <div class="chartBox my-3 px-1 py-3">
      <div id="line" style="width:100%;height:400px;"></div>
    </div>
    <el-row :gutter="10">
      <el-col :span="8">
        <div class="chartBox px-1 py-3 pieH">
          <div id="pie" style="width:100%;height:100%"></div>
        </div>
      </el-col>
      <el-col :span="16">
        <el-card shadow="hover" style="height:450px;">
          <div slot="header" class="clearfix">
            <span>待办事项</span>
            <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
          </div>
          <el-table
            :data="todoList"
            :show-header="false"
            height="304"
            style="width: 100%;font-size:14px;"
          >
            <el-table-column width="40">
              <template slot-scope="scope">
                <el-checkbox v-model="scope.row.status"></el-checkbox>
              </template>
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <div
                  class="todo-item"
                  :class="{'todo-item-del': scope.row.status}"
                >{{ scope.row.title }}</div>
              </template>
            </el-table-column>
            <el-table-column width="60">
              <i class="el-icon-edit"></i>
              <i class="el-icon-delete"></i>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
    name: "Dashboard",
    /**
   * 初始化数据
   * @returns {Object} 初始化对象
   */
    data() {
        return {
            echartsjsLoaded: false,
            name: localStorage.getItem("ms_username"),
            todoList: [
                {
                    title: "今天要修复100个bug",
                    status: true
                },
                {
                    title: "今天要修复100个bug",
                    status: false
                },
                {
                    title: "今天要写100行代码加几个bug吧",
                    status: true
                },
                {
                    title: "今天要修复100个bug",
                    status: false
                },
                {
                    title: "今天要修复100个bug",
                    status: true
                },
                {
                    title: "今天要写100行代码加几个bug吧",
                    status: false
                }
            ]
        };
    },
    /**
   * 计算属性
   */
    computed: {},
    /**
   * el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
   */
    mounted() {
        this.drawChart();
    },
    /**
   * 方法
   */
    methods: {
    /**
     * 画趋势图
     */
        drawChart() {
            let myChart = echarts.init(document.getElementById("line"));
            myChart.setOption({
                title: {
                    text: "折线图堆叠"
                },
                tooltip: {
                    trigger: "axis"
                },
                legend: {
                    data: [ "邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎" ]
                },
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: "category",
                    boundaryGap: false,
                    data: [ "周一", "周二", "周三", "周四", "周五", "周六", "周日" ]
                },
                yAxis: {
                    type: "value"
                },
                series: [
                    {
                        name: "邮件营销",
                        type: "line",
                        stack: "总量",
                        data: [ 120, 142, 501, 334, 90, 230, 610 ]
                    },
                    {
                        name: "联盟广告",
                        type: "line",
                        stack: "总量",
                        data: [ 220, 182, 491, 234, 290, 330, 710 ]
                    },
                    {
                        name: "视频广告",
                        type: "line",
                        stack: "总量",
                        data: [ 150, 232, 301, 454, 690, 230, 410 ]
                    },
                    {
                        name: "直接访问",
                        type: "line",
                        stack: "总量",
                        data: [ 320, 542, 301, 354, 390, 330, 800 ]
                    },
                    {
                        name: "搜索引擎",
                        type: "line",
                        stack: "总量",
                        data: [ 230, 332, 901, 344, 1290, 1330, 120 ]
                    }
                ]
            });
            //画饼
            let chartPie = echarts.init(document.getElementById("pie"));
            chartPie.setOption({
                title: {
                    text: "某站点用户访问来源",
                    subtext: "纯属虚构",
                    x: "center"
                },
                tooltip: {
                    trigger: "item",
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: "vertical",
                    left: "left",
                    data: [ "直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎" ]
                },
                series: [
                    {
                        name: "访问来源",
                        type: "pie",
                        radius: "55%",
                        center: [ "50%", "60%" ],
                        data: [ { value: 335, name: "直接访问" }, { value: 310, name: "邮件营销" }, { value: 234, name: "联盟广告" }, { value: 135, name: "视频广告" }, { value: 1548, name: "搜索引擎" } ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: "rgba(0, 0, 0, 0.5)"
                            }
                        }
                    }
                ]
            });
        }
    }
};
</script>
<style lang="scss" scoped>
.home {
  .todo-item {
    font-size: 14px;
  }
  .todo-item-del {
    text-decoration: line-through;
    color: #999;
  }
  height: -moz-calc(100vh - 120px);
  height: -webkit-calc(100vh - 120px);
  height: calc(100vh - 120px);
  padding: 10px;
  .websiteDesign {
    display: flex;
    height: 136px;
    background-color: #fff;
    .pv,
    .uv,
    .ip {
      flex: 1;
      text-align: center;
      padding: 36px 0;
      .name {
        color: #787a7d;
        font-size: 16px;
        padding-bottom: 8px;
      }
      .num {
        font-size: 26px;
        color: #121315;
      }
    }
  }
  .pieH {
    height: 450px;
  }
  .chartBox {
    background-color: #fff;
  }
}
</style>


