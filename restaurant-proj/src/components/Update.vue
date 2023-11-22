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
const id = ref('')
const formToggle = ref(false)
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
function handleUpdate(item) {
  id.value = item.id
  name.value = item.name
  address.value = item.address
  contact.value = item.contact
  formToggle.value = true
}
function UpdateRestaurant() {
  const data = {
    name: name.value,
    address: address.value,
    contact: contact.value,
  }
  axios.put(`http://localhost:3000/restaurants/${id.value}`, data).then((res) => {
    if (res.status == 200) {
      // alert('Restaurant Update Successfully')
     restaurant.value.forEach((item) => {
        if (item.id == id.value) {
          item.name = name.value
          item.address = address.value
          item.contact = contact.value
        }
      })
      console.log(restaurant.value)
      formToggle.value = false
    }
  })
}
</script>

<template>
  <Header />


  <main
    :style="{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', flexDirection: 'column' }">
    <h2>Hello {{ user }} , Welcome to Update Restaturant Page</h2>
    <table class="restaurant-table">
      <thead>
        <tr>
          <th>Address</th>
          <th>Contact</th>
          <th>Name</th>
          <th>Edit</th>
        </tr>
      </thead>
      <tbody v-for="item in restaurant" :key="item" class="table-body">
        <td>
          {{ item.address }}
        </td>
        <td>
          {{ item.contact }}
        </td>
        <td>
          {{ item.name }}
        </td>
        <td><button v-on:click="handleUpdate(item)">Edit Row</button></td>
      </tbody>
    </table>
    <div v-if="formToggle" class="restaurant-form">
      <input v-model="name" type="text" placeholder="Restaurant Name" />
      <input v-model="address" type="text" placeholder="Address" />
      <input v-model="contact" type="number" placeholder="Contact" />
      <button v-on:click="UpdateRestaurant">Update Restaturant</button>
    </div>
  </main>
</template>

<style>
h2 {
  font-family: 'Poppins';
}
</style>