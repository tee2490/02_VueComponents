<template>
  <div class="bg-black text pt-3" :style="{ height: '100vh' }">
    <h1 class="text-center text-success">ContactOPedia</h1>
    <div class="container">
      <div class="row text-white p-2 mb-2">
        <div class="col-6">Owner Name : <input v-model="ownerName" /></div>
        <div class="col-6 text-end">
          Max Lucky Number : <input v-model.number="maxNumber" />
        </div>
      </div>

      <br /><br />
      <AddContact @add-contact="onAddContact"></AddContact>
      <div class="row">
        <div class="col-12" v-for="contact in contacts" :key="contact.name">
          <Contact
            :name="contact.name"
            :phone="contact.phone"
            :ownername="contact.ownerName"
            :email="contact.email"
            :isFavorite="contact.isFavorite"
            :maxLuckyNumber="maxNumber"
            @update-favorite="
              contact.isFavorite = onUpdateFavorite($event, contact.phone)
            "
          ></Contact>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import Contact from "./components/Contact.vue";
import AddContact from "./components/AddContact.vue";
const ownerName = ref("dotnetmastery");
const maxNumber = ref(100);
const contacts = reactive([
  {
    name: "Bhrugen",
    phone: 123131231,
    ownerName: ownerName,
    isFavorite: false,
  },
  {
    name: "Bella",
    phone: 5554443333,
    ownerName: ownerName,
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

function onAddContact(contact) {
  contact.ownerName = ownerName.value;
  contact.isFavorite = false;
  contacts.push(contact);
}

function onUpdateFavorite(oldValuesFromChildComponent, phoneNumberFromParent) {
  console.log(oldValuesFromChildComponent);
  return !oldValuesFromChildComponent.isFavorite;
}
</script>

<style></style>