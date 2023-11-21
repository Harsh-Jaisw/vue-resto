<script setup>
import { onMounted } from 'vue';
import router from '../router';
import Header from '../components/Header.vue';

onMounted(()=>{
    let userDetail=JSON.parse(localStorage.getItem("user-details"))
    if(!userDetail){
        router.push('/signup')
    }
})
</script>

<template>
  <Header/>
  <main>
<h2>Hello user , Welcome to Our Page</h2>
  </main>
</template>
