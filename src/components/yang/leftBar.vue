<template>
  <div class="outer">
    <button id="use_btn" style="position: absolute; z-index: -100">
      <audio id="change_song" src="audios/change_card.mp3"></audio>
    </button>
    <div class="container">
      <div class="title">
        {{ title }}
      </div>
      <div class="line"></div>
      <div class="content">
        <div
          class="item"
          :class="{ chosen_item: tab_card_status.current_index === index }"
          @click="on_item_click(index, item)"
          @mouseover="play_song()"
          v-for="(item, index) in show_router()"
          :key="index"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="line"></div>
      <div class="bottom_btn">
        <button @click="to_home">BARK</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { tab_card_status } from "../util";
import lanRouter from "../../router/lanRouter";
import maoRouter from "../../router/maoRouter";
const audio = new Audio();

const router = useRouter();
const title = computed(() => {
  let current = tab_card_status.current_index;
  console.log("current:" + current);
  let type = tab_card_status.value;
  if (current === -1) return "主页";
  else if (type === 1 && current < maoRouter.length)
    return maoRouter[current].name;
  else if (type === 2 && current < lanRouter.length)
    return lanRouter[current].name;
  else return "S 404 G";
});
function show_router() {
  return tab_card_status.value === 1 ? maoRouter : lanRouter;
}

onMounted(() => {
  // 模拟点击，从而绕过音乐播放限制
  document.getElementById("use_btn").click();
});

audio.src = "audios/likeDog.mp3";
function play_song() {
  const song = document.getElementById("change_song");
  song.pause();
  song.currentTime = 0;
  song.play();
}
function on_item_click(index, router_item) {
  router.push(router_item.path);

  // console.log("index:" + index);
  tab_card_status.current_index = index;

  title.value = router_item.name;
}
function to_home() {
  // router.push("/");
  // tab_card_status.current_index = -1;
  // title.value = "主页";
  audio.pause();
  audio.currentTime = 0;
  audio.play();
}
</script>
<style scoped>
.outer {
  padding-right: 3px;
  transform: translateX(-99%);
  transition: 0.2s ease-in-out;
  position: relative;
}
.outer:hover {
  transform: translateX(0);
}
.container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: beige;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  width: 280px;
  font-size: 24px;
  padding: 20px 12px;
}

.line {
  height: 1px;
  width: 80%;
  border-top: 1px solid #756f6f;
}

.content {
  overflow: auto;
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
  padding: 20px 0px 20px 6px;
}

.content::-webkit-scrollbar {
  background-color: #d2ebd9;
  width: 3px;
}

.content::-webkit-scrollbar-thumb {
  background-color: #9580f3;
  /* background-color: #d2ebd9; */
  border-radius: 15px;
  width: 6px;
}

.item {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 55px;
  width: 80%;
  border: 1px solid #333;
  transition: all 0.4s ease-in-out;
  margin-bottom: -1px;
  user-select: none;
}

.item:hover {
  height: 70px;
  width: 90%;
  transition: 0.1s;
}

.chosen_item {
  background-color: #9580f3;
}

.bottom_btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  border-radius: 12px;
}

.bottom_btn button {
  height: 50px;
  width: 200px;
  border-radius: 12px;
  background-color: rebeccapurple;
  border: none;
  color: #fff;
  font-family: inherit;
  cursor: pointer;
}

.bottom_btn button:active {
  transform: scale(0.98);
}
</style>
