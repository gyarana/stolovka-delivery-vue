<template>
<header>
  <div class="header">
  <div v-on:click="goToPage('home')" class="logo">
    <h4 class="stolovka">ME GUSTO DELIVERY</h4>
<!--    <img src="../assets/logo.jpeg" width="45px" height="45px" style="margin-left:10px;" />-->
  </div>
<div class="d-flex cart">
  <i v-on:click="goToPage('cart')" class="fas fa-shopping-cart"></i>
  <span class="cart-count">{{count}}</span>
  <h5 class="login">ВОЙТИ</h5>
  <h5 class="register">РЕГИСТРАЦИЯ</h5>
</div>
</div>
</header>
</template>

<script>
export default {
  name: "Header",
  methods:{
    goToPage(page){
      page === "home" ? this.$router.push("/") : this.$router.push("/cart");
    }
  },
  computed:{
    count(){
      return this.$store.state.cartItemCount;
    }
  }
}
</script>

<style scoped>
.header{
  height: 60px;
  background: lightgrey;
  display: flex;
  justify-content: space-between;
}
.logo{
  display: flex;
  margin-left: 15px;
  padding: 6px;
  cursor: pointer;
}
.stolovka{
  color: deeppink;
  font-weight: 600;
  margin-top: 7px;
}
.cart-count{
  font-size: 15px;
  color: #d4570cf2;
  padding: 0 5px;
  margin-left: -35px;
  background: white;
  height: 20px;
  border-radius: 50%;
  width: 20px;
}
.cart{
  width: 300px;
  justify-content: space-evenly;
  padding-top: 3px;
}
.login,.register{
  font-weight: 600;
  margin-top: 10px;
}
</style>