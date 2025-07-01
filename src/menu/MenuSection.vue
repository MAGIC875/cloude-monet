<template>
    <section class="menu-section">
      <h2 class="menu-sec">{{ title }}</h2>
      <hr>
      <div class="menu-items">
        <div v-for="item in items" :key="item.id" class="menu-item">
          <img :src="item.src" :alt="item.title" class="menu-image" />
          <div class="menu-info">
            <h3>{{ item.title }}<strong class="cost2">{{ item.cost.toFixed(2) }} ₽</strong></h3>            
            <p class="desc">{{ item.description }}</p>
            <strong class="cost1">{{ item.cost.toFixed(2) }} ₽</strong>
            <button
            @click="(e) => handleAddToCart(item, e)"
            :class="{ animate: animatedItems.includes(item.id) }"
            >
            в корзину
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useCartStore } from '../cart/cart'
  
  const cart = useCartStore()
  const animatedItems = ref([])
  function handleAddToCart(item, event) {
  cart.addItem(item)

  const img = event.target.closest('.menu-item').querySelector('img')
  const clone = img.cloneNode(true)
  const imgRect = img.getBoundingClientRect()
  const cartIcon = document.getElementById('cart-icon')
  const cartRect = cartIcon.getBoundingClientRect()

  clone.style.position = 'fixed'
  clone.style.top = `${imgRect.top}px`
  clone.style.left = `${imgRect.left}px`
  clone.style.width = `${imgRect.width}px`
  clone.style.height = `${imgRect.height}px`
  clone.style.transition = 'all 0.8s ease-in-out'
  clone.style.zIndex = '9999'
  document.body.appendChild(clone)

  requestAnimationFrame(() => {
    clone.style.top = `${cartRect.top}px`
    clone.style.left = `${cartRect.left}px`
    clone.style.width = '30px'
    clone.style.height = '30px'
    clone.style.opacity = '0.5'
  })

  clone.addEventListener('transitionend', () => {
    document.body.removeChild(clone)
  })
}
  
  defineProps({
    title: String,
    items: Array
  })
  </script>
  
  <style scoped>
  .menu-section {
    margin-top: 30px;
    color: #275730;
    margin-bottom: 30px ;

   }
  .cost2{
    display: none;
  }
  .menu-items {
    display: flex;
    flex-wrap: wrap;
    gap: 1.1%;
    color: #17381d;
    margin-left: 6%;

  }
  .menu-sec{
    margin-left: 6%;
  }
  
  .menu-item {
    display: flex;
    flex-direction: column;
    width: 324px;;
  }
  
  .menu-item img {
    height: 200px;
    width: 320px;
  }
  
  .menu-info {
    margin-top: 0.5rem;

  }
  
  hr {
    margin-bottom: 10px;
    margin-right: 6%;
    margin-left: 6%;
  }
  
  .menu-info button {
    margin-top: 0.5rem;
    padding: 0.5rem;
    background-color: #9c9c9c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 156px;
    transition: transform 0.2s ease;
  }
  
  .menu-info button:hover {
    background-color: #858585;
  }
  
  .menu-info button:active {
    scale: 0.98;
  }
  
  .menu-info button.animate {
    animation: pulse 0.4s ease-in-out;
  }
  

  
  .desc {
    color: #525252;
    font-size: 14px;
    height: 120px;
  }
  h2{
    padding-bottom: 10px;
  }
  h3{
    padding-bottom: 10px;
  }

  @media screen and (max-width: 735px){
    .menu-item {
    width: 180px;
    font-size: 12px;
    margin-bottom: 20px;
  }
  .menu-items {
    justify-content: center;
    gap: 32px;
    margin-left: 0;
  }
  .menu-info button {
    margin-top: 10;
    padding: 0.3rem;
    width: 100%;
    margin-left: 0px;
  }
  .menu-item img {
    height: 120px;
    width: 178px;
  }
  
  .menu-info {
    margin-top: 0.5rem;

  }
  .desc {
    color: #525252;
    font-size: 12px;
    height: 110px;
    display: none;
  }
  .cost2{
    display: block;
  }
  .cost1{
    display: none;
  }
}
  </style>