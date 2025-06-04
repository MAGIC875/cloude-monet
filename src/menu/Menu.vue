<script setup>
import { ref } from 'vue'
import menu from './menu'
import MenuSection from './MenuSection.vue'

const selectedType = ref('all')
const cart = ref([])

const filterTypes = [
  { label: 'Все меню', value: 'all' },
  { label: 'Основные блюда', value: 'main' },
  { label: 'Салаты', value: 'salat' },
  { label: 'Десерты', value: 'dessert' },
  { label: 'Напитки', value: 'wine' },
]

function handleAddToCart(item) {
  cart.value.push(item)
  console.log('Текущая корзина:', cart.value)
}

</script>

<template>
    <div class="video">
    <video autoplay muted loop>
                    <source src="../base/video/intro.MP4" type="video/mp4">
                    Ваш браузер не поддерживает видео.
    </video>
    </div>

  <div class="menu">
    <div class="menu-logo">
            <img src="../base/images/menu.jpg" alt="">
        </div>
    <div class="menu-filter">
      <button 
        v-for="type in filterTypes"
        :key="type.value"
        :class="{ active: selectedType === type.value }"
        @click="selectedType = type.value"
      >
        {{ type.label }}
      </button>
    </div>

    <div class="menu-sections">
      <MenuSection
        v-if="selectedType === 'all' || selectedType === 'salat'"
        title="Салаты"
        :items="menu.salats"
        @add-to-cart="handleAddToCart"
      />
      <MenuSection
        v-if="selectedType === 'all' || selectedType === 'main'"
        title="Основные блюда"
        :items="menu.main"
        @add-to-cart="handleAddToCart"
      />
      <MenuSection
        v-if="selectedType === 'all' || selectedType === 'dessert'"
        title="Десерты"
        :items="menu.desserts"
        @add-to-cart="handleAddToCart"
      />
      <MenuSection
        v-if="selectedType === 'all' || selectedType === 'wine'"
        title="Вина"
        :items="menu.wines"
        @add-to-cart="handleAddToCart"
      />

    </div>
  </div>
</template>

<style scoped>
    .video{
        display: flex;
        position: fixed;
        z-index: -1;
        top: 0;
        left: 0;
        height: 1071.8px;
    }
.menu{
    justify-content: center;
    justify-self: center;
    padding-top: 30px;
    /* display: flex;
    flex-wrap: wrap; */
    background-color: #ffffff;
    width: 1400px;
    height: 2700px;
    box-shadow: 0px 6px 10px;
}
.menu-filter{
    width: 1400px;
    justify-content: center;
    display: flex;
    height: 100px;
}
.menu-filter>button{
    background-color: transparent;
    color: rgb(0, 0, 0);
    border: none;
    border-bottom: 2px solid rgb(240, 255, 25);
    height: 50px;
    font-size: 16px;
    width: 140px;
    margin: 10px;
    cursor: pointer;
}
.menu-filter>button:hover{
    transition: 0.1s;
    border-bottom:solid rgb(255, 197, 7) 3px;
}
.menu-filter>button:not(:hover){
    transition: 0.1s;
}
.menu-filter>button:active{
    scale: 0.98;
}

.menu-logo{
    display: inline-grid;
    width: 1400px;
    height: 220px;
}
.menu-logo>img{
    display: flex;
    justify-self: center;
    height: 210px;
    width: 200px;
}

</style>
