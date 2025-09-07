<template>
  <div class="bg-black text pt-3">
    <div class="container">
      <div class="text-white float-end">
        Contact Owner Name : <input v-model="ownerName" />
      </div>
      <br /><br />
      <AddContact></AddContact>
      <div class="row">
        <div class="col-12" v-for="contact in contacts" :key="contact.name">
          <Contact
            :name="contact.name"
            :phone="contact.phone"
            :ownername="contact.ownerName"
            :email="contact.email"
            :isFavorite="contact.isFavorite"
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

function onUpdateFavorite(oldValuesFromChildComponent, phoneNumberFromParent) {
  console.log(oldValuesFromChildComponent);
  return !oldValuesFromChildComponent.isFavorite;
}
</script>

<style></style>