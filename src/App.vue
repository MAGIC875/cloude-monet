<script setup>

</script>

<template>
  <header>
    <nav>
      <div class="navbar">
        <div class="left-section">
          <img class="logo" src="./base/images/logo2.jpg" alt="logo" />
          <!-- <p class="nav-p">ресторан высокой французкой кухни</p> -->
        </div>


        <div class="buttons">
          <div class="nav-item nav-button">
            <router-link class="nav-link" to="/">Ресторан</router-link>
          </div>
          <div class="nav-item nav-button">
            <router-link class="nav-link" to="/menu">Меню</router-link>
          </div>
          <div class="nav-item nav-button">
            <router-link class="nav-link" id="cart-icon" to="/cart">Корзина</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
body {
  background-attachment: fixed;
}

#app {
  font-family: Arial, Helvetica, sans-serif;
}
main{
  display: grid;
  
}
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  background-color: rgb(255, 255, 255);
  /* backdrop-filter: blur(20px); */
  box-shadow: rgba(0, 0, 0, 0.815) 0px 0px 20px;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.left-section {
  display: flex;
  align-items: center;
}

.logo {
  height: 72px;
}

.nav-p {
  position: fixed;
  font-size: 12px;
  padding-top: 65px;
  padding-left: 10px;
  font-weight: bold;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.buttons {
  position: absolute;
  left: 50%;
  transform: translateX(-52%);
  display: flex;
  /* gap: 10px; */
  align-items: center;
}

.nav-item {
  font-size: 20px;
  padding: 5px 10px;
  cursor: pointer;
}

.nav-link {
  text-decoration: none;
  color: inherit;
  color: #424242;
  padding: 5px;
  border: 1px solid;
  border-radius: 4px;
}

.nav-button:active {
  scale: 0.98;
}

.router-link-active {
  color: #3a8b49;
  box-shadow: 0px 0px 20px 0px #47ac5a33;
}

main {
  margin: 0 auto;
  margin-top: 120px;
  min-height: 300px;
}
@media screen and (max-width: 735px) {
  .navbar{
    height: 60px;
  }
  .logo{
    height: 40px;
  }
  .nav-item {
  font-size: 12px;
  padding: 5px 5px;
  cursor: pointer;
}
.buttons{
  left: 78%;
}
main {
  left: 0;
  margin-top: 60px;
  max-width:100%;

}




}
</style>