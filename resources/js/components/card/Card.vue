<template>
  <div class="card">
    <!-- Блок изображения -->
    <div class="card__image">
      <img :src="imageSrc" alt="Card Image" class="card__image-content" />
    </div>
    <!-- Блок текста, который будет поверх изображения -->
    <div class="text">
      <div class="text__title">{{ mainText }}</div>
      <div class="text__subtitle">{{ subText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.card__image-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.text {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
}

.text__title {
  color: white;
  font-size: 24px;
  font-family: Poppins, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.text__subtitle {
  color: white;
  font-size: 16px;
  font-family: Poppins, sans-serif;
  font-weight: 400;
}
</style>