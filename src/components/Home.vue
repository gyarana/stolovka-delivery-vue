<template>

  <div class="wrapper">
    <Header/>

  <div class="content">
    <div class="container mb-5">
      <h4 class="my-4 fw-600 d-blue">Наша продукция</h4>
      <div class="row">
      <div v-on:click="foodDetails(items)" v-for="items in allCategories" :key="items.id" class="col-md-4 pointer">
        <img :src="items.url" width="300px" height="300px" style="border-radius: 15px" />
     <p><h5 class="fw-600 black">{{items.name}}</h5>
      </div>
      </div>
    </div>
  </div>
<Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "Home",
  components:{Header,Footer},
  computed: {
    allCategories(){
      return this.$store.state.allCategories
    }
  },
  methods:{
    foodDetails(item){
      this.$router.push({name:'food-details',params:item})
    }
  }
  }
</script>

<style scoped>
.wrapper{
  display: flex ;
  flex-direction: column;
  height: 100vh;
}
.content{
  background: #efe9e2;
  flex: 1;
  overflow: auto;
}
.fw-600{
  font-weight: 600;
}
.d-blue{
  color: dodgerblue;
}
.black{
  color: black;
}
.pointer{
  cursor: pointer;
}
</style>