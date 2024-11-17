<template>
    <div class="general">
      <div class="content">
        <div class="top">
          <p class="title">
            New Arrivals: Pre-Order Now
          </p>
          <div class="vector">
            <div class="left" @click="prevProducts">
              <img :src="'/images/card/VectorLeft.png'" alt="Icon Left">
            </div>
            <div class="right" @click="nextProducts">
              <img :src="'/images/card/VectorRight.png'" alt="Icon Right">
            </div>
          </div>
        </div>
        <div class="center">
          <Product
            v-for="(product, index) in currentProducts"
            :key="index"
            class="Product"
            :backgroundImage="product.backgroundImage"
            :imageSrc="product.imageSrc"
            :mainText="product.mainText"
            :subText="product.subText"
            :price="product.price"
            :rating="product.rating"
            :backgroundColor="product.backgroundColor"
            width="100%"
            height="auto"
          />
        </div>
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
    data() {
      return {
        currentIndex: 0,
        products: [
          [
            {
              backgroundImage: '/images/cardFon/fon11.png',
              imageSrc: '/images/card/vape1.webp',
              mainText: 'PALAX KC8000',
              subText: '36 reviews',
              price: '$18.90',
              rating: 5,
              backgroundColor: '',
            },
            {
              backgroundImage: '/images/cardFon/fon22.png',
              imageSrc: '/images/card/vape1.webp',
              mainText: 'PALAX KC8000',
              subText: '36 reviews',
              price: '$18.90',
              rating: 5,
              backgroundColor: '',
            },
            {
              backgroundImage: '/images/cardFon/fon33.png',
              imageSrc: '/images/card/vape1.webp',
              mainText: 'PALAX KC8000',
              subText: '36 reviews',
              price: '$18.90',
              rating: 5,
              backgroundColor: '',
            },
          ],
          [
            {
              backgroundImage: '/images/cardFon/fon11.png',
              imageSrc: '/images/card/vape2.webp',
              mainText: 'PRODUCT 4',
              subText: '24 reviews',
              price: '$19.90',
              rating: 4,
              backgroundColor: '',
            },
            {
              backgroundImage: '/images/cardFon/fon22.png',
              imageSrc: '/images/card/vape2.webp',
              mainText: 'PRODUCT 5',
              subText: '24 reviews',
              price: '$19.90',
              rating: 4,
              backgroundColor: '',
            },
            {
              backgroundImage: '/images/cardFon/fon33.png',
              imageSrc: '/images/card/vape2.webp',
              mainText: 'PRODUCT 6',
              subText: '24 reviews',
              price: '$19.90',
              rating: 4,
              backgroundColor: '',
            },
          ],
          // Добавьте сюда другие наборы продуктов
        ],
      };
    },
    computed: {
      currentProducts() {
        return this.products[this.currentIndex];
      },
    },
    methods: {
      nextProducts() {
        this.currentIndex = (this.currentIndex + 1) % this.products.length;
      },
      prevProducts() {
        this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
      },
    },
  };
  </script>
  
  <style scoped>
  .general {
    display: flex;
    width: 100%;
    padding: 120px 100px;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    background: #FFF;
    height: 835px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    align-self: stretch;
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    margin-left: 230px;
    margin-right: 230px;
  }
  .title {
    color: #000;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .vector {
    display: flex;
    align-items: flex-start;
    gap: 16px;
  }
  .left {
    display: flex;
    height: 48px;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background: #5EFF44;
    cursor: pointer;
  }
  .right {
    display: flex;
    height: 48px;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background: #5EFF44;
    cursor: pointer;
  }
  
  .center {
    display: flex;
    align-items: center;
    gap: 40px;
  }
  </style>