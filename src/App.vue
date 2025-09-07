<template>
  <div class="container">
    <div>{{ message }}</div>
    <Contact name="Ben" :phone="123123123" :ownername="contactsOwner"></Contact>
    <Contact
      name="Jessica"
      :phone="4343453"
      :ownername="contactsOwner"
      email="jessica@fakeemail.com"
    ></Contact>
  </div>
</template>

<script setup>
import Contact from "./components/Contact.vue";
const message = "Hello Vue";
const contactsOwner = "dotnetmastery";
</script>

<style></style>