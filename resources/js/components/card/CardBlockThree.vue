<template>
  <div class="card">
    <!-- Блок изображения -->
    <div class="card__image">
      <img :src="imageSrc" alt="Card Image" class="card__image-content" />
    </div>
        <!-- Блок текста, который будет поверх изображения -->
        <div class="text">
          <div class="text__title">{{ mainText }}</div>
       </div>
  </div>
</template>

<script>
export default {
  name: 'CardsSectionBlockThree',
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
    }
  }
}
</script>

<style scoped>
.card {
  position: relative;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  border-radius: 10px;
  overflow: hidden;
}

.card__image {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.text__title {
  color: #000;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}
</style>
