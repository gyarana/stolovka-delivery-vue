<template>
<div class="container my-5" style="text-align: center">
  <img src="../assets/empty_cart.jpg" width="300px"/>
  <div class="mt-4">
    <h4 class="orange-red fw-600">Корзина пуста</h4>
    <h5 class="dark-blue fw-600">Вы можете добавить товары на главной странице</h5>
  </div>
</div>
</template>

<script>
export default {
  name: "EmptyCart"
}
</script>

<style scoped>
.orange-red{
  color:orangered;
}
.dark-blue{
  color:darkblue;
}

.fw-600{
  font-weight: 600;
}
</style>