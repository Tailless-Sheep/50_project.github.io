<template>
  <div class="container">
    <div class="box_container" ref="box_container" @scroll="checkBoxes">
      <div class="box" v-for="i in 20" :key="i">
        {{ i }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";

const box_container = ref(null);
let item_list = [];

function checkBoxes(boxes) {
  const triggerBottom = (window.innerHeight / 5) * 4;

  for (let i = 0; i < item_list.length; i++) {
    let box = item_list[i];
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  }
}
onMounted(() => {
  item_list = box_container.value.children;
  console.log(item_list);
  checkBoxes(item_list);
});
</script>
<style scoped>
.container {
  /* margin: 0; */

  width: 100%;
  /* font-size: 30px; */
  height: 100%;
}
.box_container {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
}

.box {
  font-size: 32px;
  background-color: steelblue;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  min-height: 200px;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 2px 4px 5px rgb(0 0 0 / 30%);
  transform: translateX(400%);
  transition: transform 0.4s ease;
}

.box:nth-child(2n + 1) {
  transform: translateX(-400%);
  background-color: rgb(255, 0, 0);
}

.box.show {
  transform: translateX(0) !important;
}
</style>