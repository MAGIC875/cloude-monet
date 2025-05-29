<template>
    <section class="menu-section">
      <h2>{{ title }}</h2>
      <hr>
      <div class="menu-items">
        <div v-for="item in items" :key="item.id" class="menu-item">
          <img :src="item.src" :alt="item.title" class="menu-image" />
          <div class="menu-info">
            <h3>{{ item.title }}</h3>
            <p class="desc">{{ item.description }}</p>
            <strong>{{ item.cost.toFixed(2) }} ₽</strong>
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
    padding-left: 45px;
    margin-top: 30px;
  }
  
  .menu-items {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  
  .menu-item {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  
  .menu-item img {
    height: 200px;
    width: 320px;
  }
  
  .menu-info {
    margin-top: 0.5rem;
  }
  
  hr {
    margin-bottom: 5px;
    margin-right: 45px;
  }
  
  .menu-info button {
    margin-top: 0.5rem;
    padding: 0.5rem;
    background-color: #9c9c9c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 150px;
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
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      background-color: #9c9c9c;
    }
    50% {
      transform: scale(1.1);
      background-color: #5cb85c;
    }
    100% {
      transform: scale(1);
      background-color: #9c9c9c;
    }
  }
  
  .desc {
    color: #525252;
    font-size: 14px;
    height: 120px;
  }
  </style>