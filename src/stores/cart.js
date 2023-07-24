import { ref } from 'vue'
import { defineStore } from 'pinia'
import products from "../const/product"

export const useCartStore = defineStore("cart", () =>{
    const cart = ref([]);

    const addToCart = (id) =>{
        var product = products.find(p => p.id == id);
        var index = cart.value.findIndex(p => p.product.id == product.id);
        if(index == -1){
            cart.value.push({
                product: product,
                quantity: 1
            });
        }else{
            cart.value[index].quantity++;
        }
    }

    const removeFromCart = (id) => {
        var index = cart.value.findIndex(p => p.product.id == id);
        if(index > -1) cart.value.splice(index, 1);
    }
    return {addToCart, cart, removeFromCart}
})