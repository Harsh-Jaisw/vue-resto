<script setup>
import router from '../router';

function logout() {
    localStorage.clear()
    router.push('/login')
}
</script>
<template>
    <div class="header">
        <a href="#">Home</a>
        <a href="#">Add Restaurant</a>
        <a href="#">Update Restaurant </a>
        <a href="#" v-on:click="logout">LogOut</a>
    </div>
</template>
<style scoped>
.header {
    background-color: #3498db;
    display: flex;
    gap: 2rem;
    align-items: center;
    height: 3rem;
}

.header a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    font-family: 'Poppins';
    height: 100%;
    margin-left: 1rem;
    display: flex;
    align-items: center;
}

.header a:hover {
    background-color: #ddd;
    color: #333
}
</style>


