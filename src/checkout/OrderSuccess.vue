<template>
    <div class="video">
    <video autoplay muted loop>
      <source src="../base/video/intro2.MOV" type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
  </div>
  <div class="order-success">
    <h2>Спасибо за ваш заказ, {{ order?.customer?.firstName }}!</h2>
    <p>Ваш заказ подтвержден. Мы скоро свяжемся с вами.</p>

    <div v-if="order && order.items.length">
      <h3>Ваш заказ:</h3>
      <ul>
        <li v-for="(group, index) in groupedItems" :key="index">
          {{ group.title }} <span class="change-color"> x {{ group.quantity }}</span> — {{ (group.cost * group.quantity).toFixed(2) }} ₽
        </li>
      </ul>
      <p><strong>Итого: {{ order.total.toFixed(2) }} ₽</strong></p>

      <div class="customer-info">
        <h4>Контактная информация:</h4>
        <p>Телефон: {{ order.customer.phone }}</p>
        <p>Адрес доставки: {{ order.customer.address }}</p>
      </div>
    </div>

    <router-link class="btn1" to="/">Вернуться на главную</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'

const order = ref(null)

const groupedItems = computed(() => {
  if (!order.value) return []
  const map = new Map()

  for (const item of order.value.items) {
    if (map.has(item.id)) {
      map.get(item.id).quantity += 1
    } else {
      map.set(item.id, { ...item, quantity: 1 })
    }
  }

  return Array.from(map.values())
})

onMounted(() => {
  const saved = localStorage.getItem('lastOrder')
  if (saved) {
    order.value = JSON.parse(saved)
  }
})

onUnmounted(() => {
  localStorage.removeItem('lastOrder')
})
</script>

<style scoped>
.video {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.order-success {
  max-width: 500px;
  margin: 100px auto;
  text-align: center;
  background: #f7f7f7;
  padding: 30px;
  border-radius: 8px;
}

ul {
  text-align: left;
  margin-top: 20px;
  padding-left: 0;
  list-style: none;
}

li {
  margin-bottom: 8px;
}

.customer-info {
  text-align: left;
  margin-top: 20px;
  background: #eee;
  padding: 15px;
  border-radius: 6px;
}

a {
  margin-top: 20px;
  display: inline-block;
  color: #5cb85c;
  text-decoration: underline;
}
.btn1{
  padding: 10px;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
}
.btn1:hover{
  background-color: #68d168;
}
.btn1:active{
  scale: 0.98;
}
.change-color{
  color: #00b400;
  font-weight: 600;
}
</style>