<template>
  <div class="container">
    <div>{{ message }}</div>
    <div class="row">
      <div class="col-12" v-for="contact in contacts" :key="contact.name">
        <Contact
          :name="contact.name"
          :phone="contact.phone"
          :ownername="contact.ownerName"
          :email="contact.email"
          :isFavorite="contact.isFavorite"
        ></Contact>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import Contact from "./components/Contact.vue";
const message = "Hello Vue";
const ownerName = ref("dotnetmastery");
const contacts = reactive([
  {
    name: "Bhrugen",
    phone: 123131231,
    ownerName: ownerName.value,
    isFavorite: false,
  },
  {
    name: "Bella",
    phone: 5554443333,
    ownerName: ownerName.value,
    isFavorite: true,
  },
  {
    name: "Ben",
    phone: 33344455543,
    ownerName: "",
    email: "ben@dotnetmastery.com",
    isFavorite: false,
  },
]);
</script>

<style></style>