<template>
  <div class="container">
    <div>{{ message }}</div>
    <Contact
      name="Bhrugen"
      :phone="123123123"
      :ownername="contactsOwner"
    ></Contact>
  </div>
</template>

<script setup>
import Contact from "./components/Contact.vue";
const message = "Hello Vue";
const contactsOwner = "dotnetmastery";
</script>

<style></style>