<template>
  <div class="background">
    <div class="left">
      <div class="leftContent">
        <div class="title">
          <p>Hurry: Discover our<br> Top Rated Products<br> that are flying off<br> the shelves!</p>
        </div>
        <div class="text1">
          <p class="dot1">New Arrivals</p>
        </div>
        <div class="text2">
          <p class="dot2">Brands</p>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="productCenter">
        <Product
          class="Product"
          :imageSrc="currentProducts[0].image"
          :mainText="currentProducts[0].mainText"
          :subText="currentProducts[0].subText"
          :price="currentProducts[0].price"
          :discount="currentProducts[0].discount"
          :rating="currentProducts[0].rating"
          :backgroundColor="currentProducts[0].backgroundColor"
          :colors="currentProducts[0].colors"
          :showUpArrow="true"
          :showDownArrow="true"
          width="105%"
          height="auto"
        />
      </div>
    </div>
    <div class="right">
      <div class="vector">
        <div class="Vleft" @click="prevProduct">
          <img :src="'/images/VectorLeft.png'" alt="Icon Left">
        </div>
        <div class="Vright" @click="nextProduct">
          <img :src="'/images/VectorRight.png'" alt="Icon Right">
        </div>
      </div>
      <div class="productRight">
        <Product
          v-for="(product, index) in currentProducts.slice(1)"
          :key="index"
          class="Product"
          :imageSrc="product.image"
          :mainText="product.mainText"
          :subText="product.subText"
          :price="product.price"
          :discount="product.discount"
          :rating="product.rating"
          :colors="product.colors"
          :backgroundColor="product.backgroundColor"
          :showUpArrow="true"
          :showDownArrow="true"
        />
      </div>
      <div class="dots-container">
        <div
          v-for="(dot, index) in Math.ceil(products.length / 3)"
          :key="index"
          :class="['dot', { 'active': currentIndex === index * 3 }]"
          @click="setCurrentIndex(index * 3)"
        >
          <div class="inner-dot"></div>
          <div class="outer-circle"></div>
        </div>
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
        {
          image: '/images/card/vape1.webp',
          mainText: 'PALAX KC8000',
          subText: '36 reviews',
          price: '$18.90',
          discount: '$81.10',
          rating: 5,
          backgroundColor: '',
          colors: {
            green: '/images/card/vape1.webp',
            blue: '/images/card/vape2.webp',
            cyan: '/images/card/vape3.webp',
            yellow: '/images/card/vape1.webp',
          },
        },
        {
          image: '/images/card/vape2.webp',
          mainText: 'PRODUCT 2',
          subText: '24 reviews',
          price: '$19.90',
          discount: '$79.90',
          rating: 4,
          backgroundColor: '',
          colors: {
            green: '/images/card/vape1.webp',
            blue: '/images/card/vape2.webp',
            cyan: '/images/card/vape3.webp',
            yellow: '/images/card/vape1.webp',
          },
        },
        {
          image: '/images/card/vape3.webp',
          mainText: 'PRODUCT 3',
          subText: '15 reviews',
          price: '$15.90',
          discount: '$75.10',
          rating: 5,
          backgroundColor: '',
          colors: {
            green: '/images/card/vape1.webp',
            blue: '/images/card/vape2.webp',
            cyan: '/images/card/vape3.webp',
            yellow: '/images/card/vape1.webp',
          },
        },
        {
          image: '/images/card/vape1.webp',
          mainText: 'PRODUCT 4',
          subText: '30 reviews',
          price: '$21.90',
          discount: '$89.90',
          rating: 4,
          backgroundColor: '',
          colors: {
            green: '/images/card/vape1.webp',
            blue: '/images/card/vape2.webp',
            cyan: '/images/card/vape3.webp',
            yellow: '/images/card/vape1.webp',
          },
        },
        {
          image: '/images/card/vape2.webp',
          mainText: 'PRODUCT 5',
          subText: '20 reviews',
          price: '$22.90',
          discount: '$88.90',
          rating: 5,
          backgroundColor: '',
          colors: {
            green: '/images/card/vape1.webp',
            blue: '/images/card/vape2.webp',
            cyan: '/images/card/vape3.webp',
            yellow: '/images/card/vape1.webp',
          },
        },
        {
          image: '/images/card/vape3.webp',
          mainText: 'PRODUCT 6',
          subText: '18 reviews',
          price: '$17.90',
          discount: '$77.10',
          rating: 4,
          backgroundColor: '',
          colors: {
            green: '/images/card/vape1.webp',
            blue: '/images/card/vape2.webp',
            cyan: '/images/card/vape3.webp',
            yellow: '/images/card/vape1.webp',
          },
        },
        {
          image: '/images/card/vape1.webp',
          mainText: 'PRODUCT 7',
          subText: '25 reviews',
          price: '$20.90',
          discount: '$85.10',
          rating: 5,
          backgroundColor: '',
          colors: {
            green: '/images/card/vape1.webp',
            blue: '/images/card/vape2.webp',
            cyan: '/images/card/vape3.webp',
            yellow: '/images/card/vape1.webp',
          },
        },
        {
          image: '/images/card/vape2.webp',
          mainText: 'PRODUCT 8',
          subText: '19 reviews',
          price: '$23.90',
          discount: '$87.90',
          rating: 4,
          backgroundColor: '',
          colors: {
            green: '/images/card/vape1.webp',
            blue: '/images/card/vape2.webp',
            cyan: '/images/card/vape3.webp',
            yellow: '/images/card/vape1.webp',
          },
        },
        {
          image: '/images/card/vape3.webp',
          mainText: 'PRODUCT 9',
          subText: '22 reviews',
          price: '$16.90',
          discount: '$76.10',
          rating: 5,
          backgroundColor: '',
          colors: {
            green: '/images/card/vape1.webp',
            blue: '/images/card/vape2.webp',
            cyan: '/images/card/vape3.webp',
            yellow: '/images/card/vape1.webp',
          },
        },
      ],
    };
  },
  computed: {
    currentProducts() {
      return [
        this.products[this.currentIndex],
        this.products[(this.currentIndex + 1) % this.products.length],
        this.products[(this.currentIndex + 2) % this.products.length],
      ];
    },
  },
  methods: {
    nextProduct() {
      this.currentIndex = (this.currentIndex + 1) % this.products.length;
    },
    prevProduct() {
      this.currentIndex = (this.currentIndex - 1 + this.products.length) % this.products.length;
    },
    setCurrentIndex(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.background {
  display: flex;
  height: 703px;
  width: 100%;
  background-image: url("/images/fonNine.png");
  background-size: 100%;
  background-position: center;
}
.left {
  display: flex;
  width: 35%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  color: #FFF;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.text1 {
  color: #5EFF44;
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 30px;
}
.text2 {
  color: rgba(94, 255, 68, 0.70);
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.dot1::before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: #5EFF44;
  border-radius: 50%;
  margin-right: 8px; /* Расстояние между точкой и текстом */
  flex-shrink: 0;
}
.dot2::before {
  content: '';
  display: inline-block;
  width: 12px;
  height: 12px;
  background-color: rgba(94, 255, 68, 0.70);
  border-radius: 50%;
  margin-right: 8px; /* Расстояние между точкой и текстом */
  flex-shrink: 0;
}
.center {
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;
}
.productCenter {
  display: flex;
  width: 481px;
  height: 575px;
  padding: 21.203px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 31.805px;
  flex-shrink: 0;
}
.right {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.productRight {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}
.vector {
  display: inline-flex;
  gap: 16px;
  padding-bottom: 20px;
  padding-left: 40px;
}
.Vleft { 
  display: flex;
  width: 48px;
  height: 48px;
  padding: 13px 16px;
  gap: 10px;
  border-radius: 1000px;
  border: 1px solid #5EFF44;
}
.Vright {
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 1000px;
  border: 1px solid #5EFF44;
}
.dots-container {
  display: flex;
  gap: 8px;
  margin-top: 20px;
  width: 100%;
}
.dot {
  width: 20px;
  height: 20px;
  position: relative;
  cursor: pointer;
}
.dot .inner-dot {
  width: 12px;
  height: 12px;
  position: absolute;
  left: 4px;
  top: 4px;
  background: rgba(94.33, 255, 67.98, 0.50);
  border-radius: 9999px; /* Полный радиус для круга */
}
.dot .outer-circle {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 9999px; /* Полный радиус для круга */
  border: 1px rgba(94.33, 255, 67.98, 0.50) solid;
}
.dot.active .inner-dot {
  background: #5EFF44;
}
.dot.active .outer-circle {
  border-color: #5EFF44;
}
</style>