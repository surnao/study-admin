<template>
  <el-button type="primary" @click="handelToEchart">数据大屏</el-button>
</template>
<script setup lang="ts">
import { ElButton } from "element-plus";
import { useUserStore } from "@/store/user";
import { useRouter } from "vue-router";
const router = useRouter();
const handelToEchart = () => {
  router.push("/echarts");
};
const userStore = useUserStore();
userStore.setUser("");
console.log("🧌 ~ userStore.userInfo:", userStore.userInfo);
</script>
