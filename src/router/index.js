import Home from "@/home/Home.vue";
import Cart from "@/cart/Cart.vue";
import Menu from "@/menu/Menu.vue";
import Checkout from "@/checkout/Checkout.vue";
import OrderSuccess from "@/checkout/OrderSuccess.vue";
import { createRouter, createWebHashHistory } from "vue-router";



export default createRouter({
    history: createWebHashHistory(),
    routes:[{
        path:'/',
        name:'ГЛАВНАЯ',
        component:Home
    },{
        path:'/Menu',
        name:'МЕНЮ',
        component:Menu
    },{
        path:'/Cart',
        name:'КОРЗИНА',
        component:Cart
    },{
        path:'/Checkout',
        name:'ОФОРМЛЕНИЕ ЗАКАЗА',
        component:Checkout
    },{
        path:'/order-success',
        name:'ПОДТВЕРЖДЕНИЕ',
        component:OrderSuccess

    }]
})