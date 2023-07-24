<script setup>
import {useAuthStore} from "../stores/auth"
import {ref} from "vue"
import {useRouter} from 'vue-router'

var authStore = useAuthStore();
var usernameInputLogin = ref();
var passwordInputLogin = ref();
var usernameInputRegister = ref();
var passwordInputRegister = ref();
var confirmPasswordInputRegister = ref();

var router = useRouter();
function login(e){
    var isValid = authStore.login({
        username: usernameInputLogin.value,
        password: passwordInputLogin.value
    });
    if(isValid){
        router.push("/home")
    }
}

function register(){
    if(passwordInputRegister.value != confirmPasswordInputRegister.value){
        alert("Password below is not the same");
    }
    else{
        authStore.register({
            username: usernameInputRegister.value,
            password: passwordInputRegister.value
        });
    }
    alert("Successfully");
}
</script>

<template>
    <!-- Begin Login Content Area -->
    <div class="page-section mb-60">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
                            <!-- Login Form s-->
                            <form action="#" @submit="(e)=>{e.preventDefault(); login(e)}">
                                <div class="login-form">
                                    <h4 class="login-title">Login</h4>
                                    <div class="row">
                                        <div class="col-md-12 col-12 mb-20">
                                            <label>Email Address*</label>
                                            <input v-model="usernameInputLogin" class="mb-0" type="email" placeholder="Email Address">
                                        </div>
                                        <div class="col-12 mb-20">
                                            <label>Password</label>
                                            <input v-model="passwordInputLogin" class="mb-0" type="password" placeholder="Password">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="check-box d-inline-block ml-0 ml-md-2 mt-10">
                                                <input type="checkbox" id="remember_me">
                                                <label for="remember_me">Remember me</label>
                                            </div>
                                        </div>
                                        <div class="col-md-4 mt-10 mb-20 text-left text-md-right">
                                            <a href="#"> Forgotten pasward?</a>
                                        </div>
                                        <div class="col-md-12">
                                            <button class="register-button mt-0" type="submit">Login</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                            <form action="#" @submit.prevent="register">
                                <div class="login-form">
                                    <h4 class="login-title">Register</h4>
                                    <div class="row">
                                        <div class="col-md-6 col-12 mb-20">
                                            <label>First Name</label>
                                            <input class="mb-0" type="text" placeholder="First Name">
                                        </div>
                                        <div class="col-md-6 col-12 mb-20">
                                            <label>Last Name</label>
                                            <input class="mb-0" type="text" placeholder="Last Name">
                                        </div>
                                        <div class="col-md-12 mb-20">
                                            <label>Email Address*</label>
                                            <input v-model="usernameInputRegister" class="mb-0" type="email" placeholder="Email Address">
                                        </div>
                                        <div class="col-md-6 mb-20">
                                            <label>Password</label>
                                            <input v-model="passwordInputRegister" class="mb-0" type="password" placeholder="Password">
                                        </div>
                                        <div class="col-md-6 mb-20">
                                            <label>Confirm Password</label>
                                            <input v-model="confirmPasswordInputRegister" class="mb-0" type="password" placeholder="Confirm Password">
                                        </div>
                                        <div class="col-12">
                                            <button class="register-button mt-0">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Login Content Area End Here -->
</template>