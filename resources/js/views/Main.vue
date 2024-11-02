<template>
    <Categories />
    <Frame />
    <BlockTrhee />
    <BlockFour />
    <BlockFive />
    <BlockSix />
    <BlockSeven />
    <BlockEight />
    <BlockNine />
</template>
  
  <script>
import Categories from '../pages/main/Categories.vue';
import Frame from '../pages/main/Frame.vue';
import BlockTrhee from '../pages/main/BlockTrhee.vue';
import BlockFour from '../pages/main/BlockFour.vue';
import BlockFive from '../pages/main/BlockFive.vue';
import BlockSix from '../pages/main/BlockSix.vue'; 
import BlockSeven from'../pages/main/BlockSeven.vue'
import BlockEight from '../pages/main/BlockEight.vue';
import BlockNine from '../pages/main/BlockNine.vue';

  export default {
    components: {
      Categories,
      Frame,
      BlockTrhee,
      BlockFour,
      BlockFive,
      BlockSix,
      BlockSeven,
      BlockEight,
      BlockNine,
    },
    data() {
      return {

      }
    }
  }
  </script>
  
