<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';
import router from '../router';

const email = ref("")
const password = ref("")
function handleLogin() {
    axios.get(`http://localhost:3000/users?email=${email.value.trim()}&password=${password.value.trim()}`).then((res) => {
        if (res.status == 200 && res.data.length !== 0) {
            localStorage.setItem("user-details", JSON.stringify(res.data))
            router.replace({ path: '/' })
        }
    })
}
onMounted(()=>{
    const userDetails = JSON.parse(localStorage.getItem('user-details'))
    if(userDetails){
        router.push('/')
    }
})
</script>
<template>
    <div class="parent">
        <div class="main">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="100" />
            <h3 class="signupHeader">Login Page</h3>
        </div>
        <div class="formDiv">
            <input class="inputField" placeholder="Enter Email" type="email" v-model="email" />
            <input class="inputField" placeholder="Enter Password" type="password" v-model="password" />
            <button class="LoginButton" v-on:click="handleLogin">Login</button>

        </div>
        <p>Don't have an account ? <RouterLink to="/signup">Signup</RouterLink>
        </p>
    </div>
</template>
<style>
.parent {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    height: 100vh;
    min-width: 90vw;
    align-items: center;
}
.inputField{
    height: 20px;
    border-radius: 12px;
    padding-left: 14px;
}
.LoginButton{
    height: 28px;
    background: aquamarine;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    color: #ffffff;
    font-size: 1.1rem;

}
.main {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.formDiv {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    width: 300px;
}
</style>