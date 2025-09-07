<template>
  <div class="bg-info rounded p-1 pb-4 m-1">
    <div class="row">
      <div class="col-6">
        <h3>Name :{{ name }}</h3>
        <p>Email : {{ email }}</p>
        <p>Phone : {{ phone }}</p>
      </div>
      <div class="col-3">
        <button :class="[isFavorite ? 'btn btn-warning' : 'btn btn-success']">
          {{ isFavorite ? "Remove from" : "Add to" }} Favorite
        </button>
      </div>
    </div>
    <span class="float-end small" v-if="ownername != ''">
      *this contact info belongs to {{ ownername }}
    </span>
  </div>
</template>
<script setup>
const props = defineProps({
  name: { type: String, required: true },
  phone: Number,
  ownername: String,
  email: { type: String, required: false, default: "-n/a-" },
  isFavorite: Boolean,
});
</script>