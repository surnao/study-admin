<template>
  <div class="w-full h-full echart-page">
    <div ref="screenRef" style="font-size: 2rem" class="echart-container">
      <div class="echart-top">
        <head-view></head-view>
      </div>
      <div id="main" class="echart-first"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { useResize } from "@/utils/viewport";
import echarts from "@/utils/echarts";
import { ECOption } from "@/utils/echarts";
import headView from "./components/header/index.vue";
const { screenRef } = useResize();
const option = <ECOption>{
  title: {
    text: "ECharts 实例",
    left: "25",
    textStyle: {
      color: "#fff",
    },
  },
  tooltip: {},
  legend: {
    data: ["销量"],
    textStyle: {
      color: "#fff",
    },
  },
  xAxis: {
    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    axisLabel: {
      textStyle: {
        color: "#fff",
      },
    },
  },
  yAxis: {
    axisLabel: {
      textStyle: {
        color: "#fff",
      },
    },
  },
  series: [
    {
      name: "销量",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20],
      itemStyle: {
        color: "red",
      },
    },
  ],
};
onMounted(() => {
  const chartDom = document.getElementById("main");
  if (chartDom) {
    const myChart = echarts.init(chartDom);
    option && myChart.setOption(option);
  }
});
</script>
<style lang="less" scoped>
.echart-page {
  background: url(@/assets/images/bg.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.echart-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform-origin: left top;
}
.echart-first {
  width: 600px;
  height: 420px;
  padding-top: 3rem;
  padding-left: 1rem;
  background: url(@/assets/images/kuang.png);
  background-size: 100% 100%;
}
</style>
