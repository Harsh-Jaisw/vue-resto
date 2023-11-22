<script setup>
import { onMounted, ref } from 'vue';
import router from '../router';
import Header from '../components/Header.vue';
import axios from 'axios';
const user = ref('')
const restaurant = ref([])
const address = ref('')
const contact = ref('')
const name = ref('')
onMounted(() => {
  let userDetail = JSON.parse(localStorage.getItem("user-details"))
  user.value = userDetail[0].username

  if (!userDetail) {
    router.push('/signup')
  }

  axios.get('http://localhost:3000/restaurants').then((res) => {
    if (res.status == 200) {
      restaurant.value = res.data
    }
  })
})
function AddRestaurant() {
  const body = {
    name: name.value,
    contact: contact.value,
    address: address.value
  }
  axios.post('http://localhost:3000/restaurants', body).then((res) => {
    if (res.status == 201) {
      alert("Restaurant Added Succesfully")
    }
  })
}
</script>

<template>
  <Header />
  <main
    :style="{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', flexDirection: 'column' }">
    <h2>Hello {{ user }} , Welcome to Add Restaturant Page</h2>
    <div class="restaurant-form">
      <input v-model="name" type="text" placeholder="Restaurant Name" />
      <input v-model="address" type="text" placeholder="Address" />
      <input v-model="contact" type="number" placeholder="Contact" />
      <button v-on:click="AddRestaurant">Add Restaturant</button>
    </div>
  </main>
</template>

<style>
h2 {
  font-family: 'Poppins';
}

.restaurant-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 20%;
}

.restaurant-form input {
  height: 20px;
  border: 2px solid;
}

.restaurant-form button {
  background-color: #89ff22;
  height: 25px;
  border: none;
  color: white;
  font-weight: bold;
}
</style>