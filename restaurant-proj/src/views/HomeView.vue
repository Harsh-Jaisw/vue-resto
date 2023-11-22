<script setup>
import { onMounted, ref } from 'vue';
import router from '../router';
import Header from '../components/Header.vue';
import axios from 'axios';
const user = ref('')
const restaurant = ref([])
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
</script>

<template>
  <Header />

  <main :style="{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', flexDirection: 'column' }">

    <h2>Hello {{ user }}, Welcome to Our Page</h2>
    <table class="restaurant-table">
      <thead>
        <tr>
          <th>Address</th>
          <th>Contact</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody v-for="item in restaurant" :key="item.id" class="table-body">
        <td>
          {{ item.address }}
        </td>
        <td>
          {{ item.contact }}
        </td>
        <td>
          {{ item.name }}
        </td>
      </tbody>
    </table>
  </main>
</template>

<style>
h2 {
  font-family: 'Poppins';
}

table {
  width: 50%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

th {
  background-color: #f2f2f2;
}
</style>
