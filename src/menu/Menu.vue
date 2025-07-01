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
                    <source src="../base/video/intro3.MOV" type="video/mp4">
                    Ваш браузер не поддерживает видео.
    </video>
    </div>

  <div class="menu">
    <div class="menu-logo">
            <img src="../base/images/menu-logo.JPEG" alt="">
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
    .menu-logo{
      background-color:  #1f4b27;
      /* margin-bottom:20px ; */
    }
.menu{
    justify-content: center;
    justify-self: center;
    /* padding-top: 30px; */
    /* display: flex;
    flex-wrap: wrap; */
    margin-top: 100px;
    background-color: #ffffff;
    width: 80%;
    height: fit-content;
    box-shadow: 0px 0px 10px 0px rgb(212, 212, 212);
}
.menu-filter{
    width:100%;
    justify-content: center;
    display: flex;
    height: 100px;
    padding-top: 10px;
    /* background-image: linear-gradient(#1f4b27 10%,white); */
    background-color: #fff;
}
.menu-filter>button{
    background-color: #1f4b27;
    color: rgb(255, 255, 255);
    font-weight: bold;
    border: none;
    border-bottom: 2px solid #fcda91;
    border-radius: 10px;
    box-shadow: 0px 5px 10px 0px rgb(255, 231, 187);
    height: 50px;
    padding: 5px;
    font-size: 14px;
    width: 150px;
    margin: 10px;
    cursor: pointer;
}
.menu-filter>button:hover{
    transition: 0.2s;
    border-bottom:solid #ffd725;
    scale:1.05;
}
.menu-filter>button:not(:hover){
    transition: 0.1s;
}
.menu-filter>button:active{
    scale: 0.98;
}

.menu-logo{
    display: inline-grid;
    width: 100%;
    height: 9%;
}
.menu-logo>img{
    display: flex;
    justify-self: center;
    height: 210px;
    width: 200px;
}
@media screen and (max-width: 735px){
  .video{
    display: none;
  }
  .menu{
    justify-content: center;
    /* justify-self: center; */
    width: 100%;
    left: 0;
    margin: 0;
    height: fit-content;

}
.menu-filter>button{
  font-size: 10px;
  height: 30px;
  width: 70px;
  margin: 5px;
  padding:4px;

}
.menu-logo>img{
    height: 105px;
    width: 100px;
}
}

</style>
