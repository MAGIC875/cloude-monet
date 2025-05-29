<template>
      <div class="video">
    <video autoplay muted loop>
                    <source src="../base/video/intro2.MOV" type="video/mp4">
                    Ваш браузер не поддерживает видео.
    </video>
    </div>
    <div class="cart">
      <div class="cart-logo">
        <img src="../base/images/logo2.jpg" alt="">
            <p class="cart-logo-p">ОФОРМИТЬ ЗАКАЗ</p>
            <hr>
        </div>

      <h2>Корзина</h2>
  
      <div v-if="cart.items.length === 0">Корзина пуста.</div>
  
      <ul v-else class="cart-list">
        <li v-for="(item, index) in cart.items" :key="index">
          <strong>{{ item.title }}</strong> — {{ item.cost.toFixed(2) }} ₽
          <button @click="cart.removeItem(index)">Удалить</button>
        </li>
      </ul>
  
      <div v-if="cart.items.length">
        <p><strong>Итого:</strong> {{ cart.totalPrice.toFixed(2) }} ₽</p>
        <button @click="cart.clearCart">Очистить корзину</button>
      </div>
    </div>


    <router-link class="finish" to="/Checkout">оформить заказ</router-link>
  </template>
  
  <script setup>

  import { useCartStore } from './cart'
  const cart = useCartStore()
  </script>
  
  <style scoped>
      .video{
        display: flex;
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
        height: 1071.8px;
    }
  .cart {
    margin-top: 100px;
    justify-self: center;
    padding: 3rem;
    min-height: 760px;
    height:fit-content;
    width: 1400px;
    box-shadow: 0px 6px 10px;
    background-color: #fff;
    font-size: 22px;
  }
  .cart-list {
    list-style: none;
    padding: 0;
  }
  button{
    border: none;
    font-size: 15px;
    background-color: #e9e9e9;
    border-radius: 3px;
    width: auto;
    height: 25px;
  }
  button:hover{
    transition: 0.2s;
    background-color: #fcc2c2;
  }
  button:active{
    scale: 0.98;
  }
  li{
    margin-bottom:10px ;
    color: #333333;
  }
  .finish{
    left: 45%;
    right: 50%;
    position: fixed;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    bottom: 0;
    margin-bottom: 30px;
    height: 30px;
    font-size: 18px;
    width:210px;
    text-align: center;
    text-decoration: none;
  color: inherit;
  padding-top: 8px;
  border: 1px solid ;
  }
  .finish:hover{
    background-color: #f0f0f0;
    /* border: solid 2px rgb(213, 255, 134); */
  }
  .cart-logo{
    padding: 0;
    margin: 0;
    width: 100%;
    justify-items: center;
  }
  .cart-logo>img{
    /* justify-self: center; */
    width: 400px;
  }
  .cart-logo-p{
    /* justify-self: center; */
    font-size: 34px;
    font-weight: bold;
    color: rgb(56, 55, 55);
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
  .cart-logo-p{
    margin: 0;
    padding: 0;
  }
  
  </style>