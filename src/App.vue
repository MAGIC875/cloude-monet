<script setup>

</script>

<template>
   <header>
      <nav>
        <div class="navbar">

          <img class="logo" src="./base/images/logo2.jpg" alt="">
          <li class="nav-p">ресторан высокой французкой кухни</li>
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
    <router-view/>
  </main>

</template>

<style scoped>
body{
  background-attachment: fixed;

}
#app{
  font-family: Arial, Helvetica, sans-serif;
}
.navbar{
  display:flex;
  height: 90px;
  position:fixed;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  width: 100%;
  margin: 0 auto;
  backdrop-filter: blur(20px);
  box-shadow: rgba(0, 0, 0, 0.815) 0px 0px 20px ;
  z-index: 1000;
}
main{
  margin: 0 auto;
  margin-top: 120px;
  min-height: 300px;
}

.nav-button:active{
  scale: 0.98;
}
.buttons{
  padding-left: 20px;
  padding-top: 30px;
}
.nav-item{
  display: inline-block;
  padding: 5px 10px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.822);
  border-right:1px solid --green;
  cursor: pointer;
}
.logo{
  justify-self: center;
  justify-content: center;
  vertical-align: auto;
  height: 80px;
  padding-left: 20px;
}
.nav-p{
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  padding-top: 45px;
  margin-left: 10px;
  font-weight: bold;
  margin-right: 132px;
}
.nav-link{
  text-decoration: none;
  color: inherit;
  padding: 3px;
  border: 1px solid ;
}
.router-link-active{
  color: rgba(0, 0, 0, 0.548);
}
</style>
