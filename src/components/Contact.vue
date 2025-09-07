<template>
  <div class="bg-info rounded p-4 m-2">
    <h3>Name :{{ name }}</h3>
    <p>Email : {{ email }}</p>
    <p>Phone : {{ phone }}</p>
    <p class="float-end small" v-if="ownername != ''">
      *this contact info belongs to {{ ownername }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  name: { type: String, required: true },
  phone: Number,
  ownername: String,
  email: { type: String, required: false, default: "-n/a-" },
});
</script>