<script setup>
import { onMounted, ref } from 'vue';
import router from '../router'
import axios from 'axios'
const name = ref("")
const email = ref("")
const password = ref("")
function handleSignup() {
    if(name.value==""||email.value==""||password.value==""){
        return
    }
    axios.post("http://localhost:3000/users", {
        "username": name.value.trim(),
        "email": email.value.trim(),
        "password": password.value.trim()
    }).then((res) => {
        if (res.status == 201) {
           localStorage.setItem("user-details", JSON.stringify(res.data))
           router.replace({path:'/'})
        }
    })
}
onMounted(()=>{
    let userDetail=JSON.parse(localStorage.getItem("user-details"))
    if(userDetail){
        router.push('/')
    }
})
</script>

<template>
    <div class="parent">
        <div class="main">
            <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="100" />
            <h3 class="signupHeader">Signup Page</h3>
        </div>
        <div class="formDiv">
            <input placeholder="Enter Name" type="text" v-model="name" />
            <input placeholder="Enter Email" type="email" v-model="email" />
            <input placeholder="Enter Password" type="password" v-model="password" />
            <button v-on:click="handleSignup">Sign Up</button>

        </div>
        <p>Already have an account ? <RouterLink to="/login">Login</RouterLink></p>
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