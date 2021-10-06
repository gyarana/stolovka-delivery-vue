<template>
<div class="row" style="width: 50%">
  <div class="col-md-4">
    <h6>Стоимость:</h6>
<!--    <h6>Промокод:</h6>-->
    <h6>Доставка:</h6>
    <div class="my-3 line w-120"></div>
    <h6>Общая стоимость:</h6>
  </div>
  <div class="col-md-4">
    <h6>UAH {{totalPrice}}</h6>
<!--    <h6>ME GUSTO DELIVERY</h6>-->
    <h6>UAH 50</h6>
    <div class="my-3 line w-60"></div>
    <h6>UAH {{totalPrice + 50}}</h6>

  </div>
</div>
</template>

<script>
export default {
  name: "Summary",
  props:["totalPrice"]
}
</script>

<style scoped>
.line{
  height: 1px;
  border-bottom: 1px solid black;
}

.w-120{
  width: 120%;
}
</style>