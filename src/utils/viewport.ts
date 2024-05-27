/**
 * 屏幕缩放
 */
import { ref, onMounted, onBeforeUnmount } from "vue";
// 默认适配宽高
export const width = 1920;
export const height = 1080;
export const useResize = () => {
  const w = width;
  const h = height;
  const scale = ref(1);
  const screenRef = ref();
  /*
    resize函数
        1、获取浏览器宽高
        2、计算宽高缩放比例
        3、浏览器宽高和设计稿宽高进行对比
            如果浏览器设宽高比大于设计稿宽高比，则按照高度缩放
            如果浏览器宽高比小于设计稿宽高比，则按照宽度缩放
        4、onMounted 添加方法
        5、onBeforeUnmount 移除方法
   */
  const resize = () => {
    const clientWidth =
        document.documentElement.clientWidth || document.body.clientWidth,
      clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight,
      scaleW = clientWidth / w,
      scaleH = clientHeight / h;

    if (clientWidth / clientHeight > w / h) {
      scale.value = scaleH;
    } else {
      scale.value = scaleW;
    }
    screenRef.value.style.transform = `scale(${scale.value}) translate(-50%, -50%)`;
  };
  onMounted(() => {
    if (screenRef.value) {
      resize();
      screenRef.value.style.width = `${width}px`;
      screenRef.value.style.height = `${height}px`;
      window.addEventListener("resize", resize);
    }
  });
  onBeforeUnmount(() => {
    window.removeEventListener("resize", resize);
  });

  return { screenRef, scale };
};
