import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const auth = ref(false)
  const accountList = [];
  function login(input) {
    var value = accountList.find(existing => isValid(existing, input))
    if(value){
      auth.value = true;
      return true;
    }else{
      auth.value = false;
      return false;
    }
  }

  function isValid(existing, input){
    return existing.username == input.username && existing.password == input.password;
  }

  function logout(){
    auth.value = false;
  }

  function register(account){
    accountList.push(account);
  }

  return { auth, login, logout, register }
})