<template>
  <div class="bg-black text pt-3" :style="{ height: '100vh' }">
    <h1 class="text-center text-success">ContactOPedia</h1>
    <div class="container">
      <button
        class="btn btn-primary text-black m-2"
        @click="newVersion = !newVersion"
      >
        Toggle Componenet
      </button>
      <br />
      <button
        class="btn btn-primary text-black m-2"
        @click="newVersion = false"
      >
        Lucky Number V1
      </button>
      <button class="btn btn-primary text-black m-2" @click="newVersion = true">
        Lucky Number V2
      </button>
      <br />
      <br />
      <keep-alive :include="['LuckyNumber', 'LuckyNumberV2']">
        <component :is="currentComponent" />
      </keep-alive>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, provide, compile, computed } from "vue";
import LuckyNumber from "./components/LuckyNumber.vue";
import LuckyNumberV2 from "./components/LuckyNumberV2.vue";

const newVersion = ref(true);

const currentComponent = computed(() => {
  return newVersion.value ? LuckyNumberV2 : LuckyNumber;
});
</script>

<style></style>