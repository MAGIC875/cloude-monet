<template>
  <div class="video">
    <video autoplay muted loop>
      <source src="../base/video/intro.MOV" type="video/mp4" />
      Ваш браузер не поддерживает видео.
    </video>
  </div>

  <div class="checkout">
    <h2>Оформление заказа</h2>
    <form @submit.prevent="submitOrder">
      <label>
        Имя:
        <input type="text" v-model="form.firstName" required />
      </label>
      <label>
        Фамилия:
        <input type="text" v-model="form.lastName" required />
      </label>
      <label>
        Телефон:
        <input
          type="tel"
          v-model="form.phone"
          required
          pattern="^[0-9+\-\s]{7,15}$"
        />
      </label>
      <label>
        Адрес доставки:
        <textarea v-model="form.address" required></textarea>
      </label>

      <div v-if="cart.items.length === 0">Корзина пуста.</div>

      <ul v-else class="cart-list">
        <li v-for="(item, index) in cart.items" :key="index">
          <strong>{{ item.title }}</strong> — {{ item.cost.toFixed(2) }} ₽
        </li>
      </ul>

      <div v-if="cart.items.length">
        <p><strong>Итого:</strong> {{ cart.totalPrice.toFixed(2) }} ₽</p>
      </div>

      <button type="submit">Подтвердить заказ</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '../cart/cart'

const router = useRouter()
const cart = useCartStore()

const form = ref({
  firstName: '',
  lastName: '',
  phone: '',
  address: ''
})

function submitOrder() {
  if (cart.items.length === 0) {
    alert('Корзина пуста!')
    return
  }

  const orderData = {
    customer: { ...form.value },
    items: cart.items,
    total: cart.totalPrice
  }

  localStorage.setItem('lastOrder', JSON.stringify(orderData))
  cart.clearCart()
  router.push('/order-success')
}
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

.checkout {
  max-width: 600px;
  margin: 100px auto;
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
  position: relative;
}

form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

label {
  display: flex;
  flex-direction: column;
  font-weight: 600;
}

input,
textarea {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  padding: 10px;
  background-color: #5cb85c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #4cae4c;
}

.cart-list {
  margin-top: 15px;
  list-style: none;
  padding-left: 0;
}
.cart-list li {
  margin-bottom: 6px;
}
</style>