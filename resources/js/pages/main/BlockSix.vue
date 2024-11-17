<template>
  <div class="general">
    <div class="top">
      <!-- Текст -->
      <div class="text">
        <p>Choose Your Flavor</p>
      </div>
      <!-- Векторы слева и справа -->
      <div class="vectors">
        <div class="left" @click="prevProducts">
          <img :src="'/images/card/VectorLeft.png'" alt="Icon Left">
        </div>
        <div class="right" @click="nextProducts">
          <img :src="'/images/card/VectorRight.png'" alt="Icon Right">
        </div>
      </div>
    </div>
    <!-- Три изображения в строку -->
    <div class="center">
      <div class="img">
        <div class="product">
          <div class="label-container">
            <p class="label">{{ currentProducts[0].label }}</p>
          </div>
          <img :src="currentProducts[0].image" alt="Icon Ice">
        </div>
        <div class="product">
          <div class="label-container">
            <p class="label">{{ currentProducts[1].label }}</p>
          </div>
          <img :src="currentProducts[1].image" alt="Icon Mint">
        </div>
        <div class="product">
          <div class="label-container">
            <p class="label">{{ currentProducts[2].label }}</p>
          </div>
          <img :src="currentProducts[2].image" alt="Icon Mix">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      products: [
        [
          { image: '/images/card/ice.png', label: 'Ice' },
          { image: '/images/card/mint.png', label: 'Mint' },
          { image: '/images/card/mix.png', label: 'Mix' },
        ],
        [
          { image: '/images/card/apple.jpg', label: 'Apple' },
          { image: '/images/card/cherry.jpg', label: 'Cherry' },
          { image: '/images/card/strawbarry.jpg', label: 'Strawbarry' },
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
  padding: 0px 100px 120px 100px;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  align-self: stretch;
  background: #FFF;
}
.top {
  width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text p {
  color: #000;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.vectors {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.left {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #5EFF44;
  cursor: pointer;
}
.right {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #5EFF44;
  cursor: pointer;
}
.center {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
}
.img {
  display: flex;
  width: 1240px;
  align-items: flex-start;
  gap: 32px;
}
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  position: relative; /* Добавляем позиционирование для label-container */
}
.product img {
  width: 392px; /* Фиксированный размер изображения */
  height: 540px; /* Фиксированный размер изображения */
}
.label-container {
  position: absolute; /* Позиционируем label-container абсолютно */
  top: 50%; /* Центрируем по вертикали */
  left: 50%; /* Центрируем по горизонтали */
  transform: translate(-50%, -50%); /* Смещаем на половину ширины и высоты */
  width: 100%; /* Занимаем всю ширину родительского элемента */
  text-align: center; /* Выравниваем текст по центру */
}
.label {
  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 64px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 2px;
  width: 392px;
}
</style>