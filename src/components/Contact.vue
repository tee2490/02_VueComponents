<template>
  <div class="bg-info rounded p-1 pb-4 m-1">
    <div class="row">
      <div class="col-5">
        <h3>Name :{{ name }}</h3>
        <p>Email : {{ email }}</p>
        <p>Phone : {{ phone }}</p>
      </div>
      <div class="col-3">
        <button
          @click="
            emit('update-favorite', {
              isFavorite: props.isFavorite,
              name: props.name,
            })
          "
          :class="[
            isFavorite
              ? 'btn btn-warning form-control'
              : 'btn btn-success form-control',
          ]"
        >
          {{ isFavorite ? "Remove from" : "Add to" }} Favorite
        </button>
      </div>
      <div class="col-4">
        <LuckyNumber :maxNumber="maxLuckyNumber"></LuckyNumber>
      </div>
    </div>
    <span class="float-end small" v-if="ownername != ''">
      *this contact info belongs to {{ ownername }}
    </span>
  </div>
</template>
<script setup>
import LuckyNumber from "./LuckyNumber.vue";
const props = defineProps({
  name: { type: String, required: true },
  phone: Number,
  ownername: String,
  email: { type: String, required: false, default: "-n/a-" },
  isFavorite: Boolean,
  maxLuckyNumber: Number,
});

const emit = defineEmits(["update-favorite"]);
</script>