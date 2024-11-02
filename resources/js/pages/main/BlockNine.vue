<template>
<div class="backgaround">
    <div class="left">
        <div class="title">
            <p>Hurry: Discover our Top Rated Products that are flying off the shelves!</p>
        </div>
        <div class="text">
            <p>New Arrivals</p>
            <p>Brands</p>
        </div>

    </div>
    <div class="center">

    </div>
    <div class="right">

    </div>
</div>
</template>  
<script>  
  import Product from '../../components/card/Product.vue';  
  
  export default {  
    name: 'ProductSection',  
    components: {  
      Product,  
    },  
  };  
</script>  
  
<style scoped>
.backgaround {
    display: flex;
    height: 703px;
    width: 100%;
}
</style>