<template>
  <div class="video">
    <video autoplay muted loop>
      <source src="../base/video/intro2.MOV" type="video/mp4">
      Ваш браузер не поддерживает видео.
    </video>
  </div>

  <div class="cart">
    <div class="cart-logo">
      <img src="../base/images/logo.jpg" alt="">
      <!-- <p class="cart-logo-p">ОФОРМИТЬ ЗАКАЗ</p> -->
    </div>
<div class="cart-main">
    <h2>Корзина</h2>

    <div v-if="cart.items.length === 0">Корзина пуста.</div>

    <ul v-else class="cart-list">
      <li v-for="(item, index) in cart.items" :key="index">
        <strong>{{ item.title }}</strong> — {{ item.cost.toFixed(2) }} ₽
        <button class="remove-item" @click="cart.removeItem(index)">X</button>
      </li>
    </ul>

    <div class="main-cart-bottom" v-if="cart.items.length">
      <hr>
      <p class="all-cost"><strong>Итого:</strong> {{ cart.totalPrice.toFixed(2) }} ₽</p>
      <button @click="cart.clearCart">Очистить корзину</button>
    </div>
    
  </div>

</div>
<div class="finish-button">
  <button
    class="finish"
    :disabled="cart.items.length === 0"
    @click="goToCheckout"
  >
    оформить заказ
  </button>
</div>
</template>
  
<script setup>
import { useCartStore } from './cart'
import { useRouter } from 'vue-router'

const cart = useCartStore()
const router = useRouter()

const goToCheckout = () => {
  if (cart.items.length > 0) {
    router.push('/Checkout')
  }
}
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
    padding: 0rem 3rem 3rem 3rem;
    height:fit-content;
    width: 920px;
    box-shadow: 0px 6px 10px;
    background-color: #1f4b27;
    font-size: 22px;
    box-shadow: 0px 0px 10px 0px rgb(212, 209, 209);
  }
.cart-main{
  min-height: 540px;
  background-color: #ffffff;
  padding: 24px;
  border: #64866a 1px solid;
}
  .cart-list {
    list-style: none;
    padding: 0;
    /* background-color: #ffffffb9; */
  }
  .remove-item{
    background-color: hsla(0, 100%, 57%, 0.699);
    width: 20px;
    height: 20px;
    align-self:center;
    font-size: 12px;
    font-weight: bold;
    border-radius: 100%;

    color: white;
  }
  button{
    border: none;
    font-size: 15px;
    background-color: #e9e9e9;
    border-radius: 3px;
    width: 140px;
    height: 28px;
    
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
  .all-cost{
    padding-top: 50px;
  }
  .finish-button{
    display: inline-grid;

    justify-items: center;
  }
  .finish {
  position: fixed;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  bottom: 0;
  margin-bottom: 30px;
  height: 30px;
  font-size: 18px;
  width: 210px;
  text-align: center;
  text-decoration: none;
  color: inherit;
  padding-top: 2px;
  border: 1px solid;
  background-color: #fff;
  cursor: pointer;
}

.finish:hover:enabled {
  background-color: #d2f89f;
}

.finish:disabled {
  background-color: #e0e0e0;
  color: #999;
  border-color: #ccc;
  cursor: not-allowed;
}
  .cart-logo{
    padding: 0;
    margin: 0;
    width: 100%;
    justify-items: center;
    display: inline-grid;
  }
  .cart-logo>img{
    /* justify-self: center; */
    width: 250px;
  }
  .cart-logo-p{
    font-size: 22px;
    font-weight: bold;
    color: #ffffff;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  }
  .cart-logo-p{
    margin: 0;
    padding: 0;
  }
  h2{
    padding-bottom: 10px;
  }
  hr{
    color: transparent;
  }
  @media screen and (max-width: 735px){
    .cart {
    margin-top: 0px;
    justify-self: center;
    padding: 0rem 2rem 0rem 2rem;
    min-height: 885px;
    height:fit-content;
    width: 100%;
    box-shadow: none;
    font-size: 16px;

  }
  .cart-main{
  min-height: 580px;
  padding: 18px;
  box-shadow: 0px 0px 4px 0px rgb(206, 206, 206);
}



.cart-logo{
    width: 100%;
    justify-items: center;
    display: inline-grid;
  }
  .cart-logo>img{
    /* justify-self: center; */
    width: 200px;
  }
  .all-cost{
    padding-top: 50px;
  }
}
  </style>