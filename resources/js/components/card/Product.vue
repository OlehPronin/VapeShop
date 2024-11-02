<template>  
  <div class="product" :style="{ backgroundImage: `url(${backgroundImage})`, backgroundColor: backgroundColor, width: width, height: height }">  
    <!-- Скидка и сердечко -->  
    <div class="discount-container">  
      <div class="favorite">  
        <img :src="'/images/heart.png'" alt="Heart" class="favorite-icon" />  
      </div>  
      <div v-if="discount" class="discount">-{{ discount }}</div>  
    </div>  

    <!-- Выбор цвета -->  
    <div class="colors-container">  
      <!-- Стрелка вверх -->  
      <div class="arrow up" v-if="showUpArrow" @click="previousColor"></div>  
      <div class="colors">  
        <div   
          v-for="(image, color) in colors"   
          :key="color"   
          class="color-item"  
          @click="changeColor(color)"  
        >  
          <span   
            :style="{ backgroundColor: color }"   
            class="color-circle"  
            :class="{ selected: color === selectedColor }">  
            <!-- Галочка на выбранном цвете -->  
            <span v-if="color === selectedColor" class="checkmark">✔</span>  
          </span>  
        </div>  
      </div>  
      <!-- Стрелка вниз -->  
      <div class="arrow down" v-if="showDownArrow" @click="nextColor"></div>  
    </div>  

    <!-- Блок изображения -->  
    <div class="product__image">  
      <img :src="currentImage" alt="Product Image" class="product__image-content" />  
    </div>  

    <!-- Блок текста поверх изображения -->  
    <div class="text">  
      <div class="text__title">{{ mainText }}</div>  
      <div class="text__subtitle">{{ subText }}</div>  

      <!-- Рейтинг (звездочки) -->  
      <div class="rating">  
        <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= rating }">★</span>  
      </div>  
    </div>  

    <!-- Цена -->  
    <div class="price">{{ price }}</div>  
  </div>  
</template>  

<script>  
export default {  
  data() {  
    return {  
      currentImage: this.imageSrc, // Текущее изображение  
      selectedColor: Object.keys(this.colors)[0] // Устанавливаем первый цвет по умолчанию  
    };  
  },  
  methods: {  
    changeColor(color) {  
      this.selectedColor = color; // Устанавливаем выбранный цвет  
      this.currentImage = this.colors[color]; // Обновляем изображение для выбранного цвета  
    },  
    previousColor() {  
      const colorKeys = Object.keys(this.colors);  
      const currentIndex = colorKeys.indexOf(this.selectedColor);  
      const newIndex = (currentIndex - 1 + colorKeys.length) % colorKeys.length; // Переход к предыдущему цвету  
      this.changeColor(colorKeys[newIndex]);  
    },  
    nextColor() {  
      const colorKeys = Object.keys(this.colors);  
      const currentIndex = colorKeys.indexOf(this.selectedColor);  
      const newIndex = (currentIndex + 1) % colorKeys.length; // Переход к следующему цвету  
      this.changeColor(colorKeys[newIndex]);  
    }  
  },  
  watch: {  
    imageSrc(newSrc) {  
      this.currentImage = newSrc; // Обновляем текущее изображение, если изменится проп imageSrc  
    }  
  },  
  props: {  
    imageSrc: {  
      type: String,  
      required: true  
    },  
    mainText: {  
      type: String,  
      required: true  
    },  
    subText: {  
      type: String,  
      required: false,  
      default: ''  
    },  
    price: {  
      type: Number,  
      required: true  
    },  
    discount: {  
      type: Number,  
      required: false  
    },  
    rating: {  
      type: Number,  
      default: 0  
    },  
    backgroundColor: {  
      type: String,  
      default: '#fff'  
    },  
    width: {  
      type: String,  
      default: '256px'  
    },  
    height: {  
      type: String,  
      default: 'auto'  
    },  
    backgroundImage: {  
      type: String,  
      required: true // Путь к фоновому изображению обязателен  
    },  
    colors: {  
      type: Object,  
      default: () => ({}) // Изменено для ясности, чтобы возвращался пустой объект  
    },  
    showUpArrow: {  
      type: Boolean,  
      default: false// Стрелка вверх по умолчанию видима  
    },  
    showDownArrow: {  
      type: Boolean,  
      default: false // Стрелка вниз по умолчанию видима  
    }  
  }  
};  
</script>  
<style scoped>
.product {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-bottom: 20px;
  border-radius: 16px;
  background-size: cover; /* Фон растягивается */
  background-position: center; /* Центрируем изображение */
  background-repeat: no-repeat; /* Отключаем повторение */
}

.product__image {
  width: 100%;
  height: auto;
}

.product__image-content {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.text {
  padding: 16px;
  text-align: center;
}

.text__title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
}

.text__subtitle {
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 12px;
}

.text__title,
.text__subtitle {
  color: #ffffff;
}

.rating {
  display: flex;
  justify-content: center;
}

.star {
  font-size: 16px;
  color: #ddd; /* Цвет пустой звезды */
}

.star.filled {
  color: #0ecf38; /* Цвет заполненной звезды */
}

.discount-container {
  padding-top: 10px;
  display: flex;
  gap: 8px;
}

.discount {
  font-size: 14px;
  color: #000000;
  background-color: #05ff50;
  padding: 2px 8px;
  border-radius: 28px;
  margin-left: auto;
  margin-right: 20px;
}

.favorite {
  padding-left: 10px;
  top: 16px;
  left: 26px;
}

.favorite-icon {
  width: 24px;
  height: 24px;
}

.price {
  display: flex;
  justify-content: center;
  font-size: 18px;
  color: #ffffff;
}

.colors-container {
  position: absolute;
  right: 38px;
  top: 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.arrow {
  width: 10px;
  height: 10px;
  border-left: 2px solid #8A8A8A;
  border-bottom: 2px solid #8A8A8A;
}

.up {
  transform: rotate(135deg); /* Стрелка вниз */
  margin-top: 8px;

}

.down {
  transform: rotate(-45deg); /* Стрелка вверх */
  margin-bottom: 8px;
}

.colors {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.color-item {
  position: relative;
}

.color-circle {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid transparent; /* Обводка изменена на прозрачную */
  position: relative;
}

.selected {
  border: 2px solid white; /* Обводка для выбранного цвета */
}

.checkmark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: white; /* Цвет галочки */
}
</style>
