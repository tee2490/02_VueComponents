<template>
  <div class="container">
    <div>{{ message }}</div>
    <Contact name="Bhrugen" phone="123123123"></Contact>
  </div>
</template>

<script setup>
import Contact from "./components/Contact.vue";
import ButtonCounter from "./components/ButtonCounter.vue";
const message = "Hello Vue";
</script>

<style></style>