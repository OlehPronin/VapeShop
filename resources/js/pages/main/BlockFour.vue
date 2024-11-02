<template>
    <div class="general">
      <div class="center">
        <div class="row">
          <div class="left">
            <div class="image-container">
              <img :src="'/images/BannerBlockFour.png'" alt="Icon 1">
            </div>
          </div>
          <div class="right">
            <img :src="'/images/BlockFour2.png'" alt="Icon 2">
            <div class="overlay-content">
              <div class="container">
                <div class="title">PALAX KC8000</div>
                <div class="timer">
                  <div class="time-block">
                    <div class="time-value">180</div>
                    <div class="time-label">Days</div>
                  </div>
                  <div class="time-block">
                    <div class="time-value">07</div>
                    <div class="time-label">Hours</div>
                  </div>
                  <div class="time-block">
                    <div class="time-value">30</div>
                    <div class="time-label">Minutes</div>
                  </div>
                  <div class="time-block">
                    <div class="time-value">20</div>
                    <div class="time-label">Seconds</div>
                  </div>
                </div>
                <div class="description">
                  <div class="text">
                    Sit at nunc mauris etiam convallis amet feugiat. Non aenean pretium sem ultricies facilisi massa.
                    Ut ipsum nisl facilisis viverra. In vulputate praesent erat quis sit malesuada. Quis quam aliquam nisi nec aliquet egestas laoreet fermentum vel.
                  </div>
                  <div class="price">$24.50</div>
                  <div class="color-options">
                    <div class="color">Color: {{ selectedColorName }}</div>
                    <div class="color-palette">
                      <div
                        v-for="(color, index) in colors"
                        :key="index"
                        class="circle"
                        :style="{ backgroundColor: color.hex }"
                        @click="selectColor(color)"
                      >
                        <span v-if="selectedColor === color.hex" class="checkmark">✔</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="buttons">
                  <div class="button shop-now">Shop Now</div>
                  <div class="button order-test">Order Test</div>
                </div>
              </div>
            </div>
          </div>
          <!-- Добавляем тень по центру -->
          <div class="center-overlay"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedColor: '',  // Начальный выбранный цвет
        selectedColorName: 'Red',  // Начальное название цвета
        colors: [
          { name: 'Red', hex: '#FF0000' },
          { name: 'Light Red', hex: '#FF8893' },
          { name: 'Gray', hex: '#EAEAEA' },
          { name: 'Peach', hex: '#F8BF9D' },
          { name: 'Pink', hex: '#F7C0D7' },
          { name: 'Lavender', hex: '#D4B5FD' },
          { name: 'Light Green', hex: '#C3ED9D' },
          { name: 'Blue', hex: '#5353FF' },
          { name: 'Dark Gray', hex: '#7D7D7D' },
          { name: 'Black', hex: '#444444' }
        ]
      };
    },
    methods: {
      selectColor(color) {
        this.selectedColor = color.hex; // Устанавливаем выбранный цвет
        this.selectedColorName = color.name; // Устанавливаем имя выбранного цвета
      }
    }
  };
  </script>
  
  <style scoped>
  .general {
      width: 100%;
  }
  .center {
      display: flex;
      justify-content: center;
  }
  .row {
      display: flex;
      width: 100%;
      height: 100%;
      position: relative; /* Для позиционирования абсолютных элементов внутри */
  }
  .left, .right {
      width: 50%;
      height: 100%;
      position: relative;
  }
  .image-container {
      position: relative;
  }
  .left img, .right img {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
  /* Тень по центру */
  .center-overlay {
      position: absolute;
      top: 0;
      left: 45%; /* Начинаем с 45% ширины */
      width: 10%; /* Охватываем 10% ширины */
      height: 100%;
      background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
      z-index: 1; /* Тень под текстом */
  }
  /* Обеспечиваем, что текст выше тени */
  .overlay-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2; /* Текст над тенью */
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(255, 255, 255);
      padding: 20px;
      background: rgba(0, 0, 0, 0.5);
  }
  
  .container {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
  }
  
  .title {
      color: white;
      font-size: 24px;
      font-family: 'Poppins', sans-serif;
      font-weight: 600;
      text-transform: uppercase;
  }
  
  .timer {
      display: flex;
      gap: 16px;
  }
  
  .time-block {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #5EFF44;
  }
  
  .time-value {
      font-size: 40px;
  }
  
  .time-label {
      font-size: 12px;
  }
  
  .description {
      color: white;
      font-size: 16px;
      font-family: 'Poppins', sans-serif;
  }
  
  .price {
      font-size: 24px;
      font-weight: 600;
      padding-top: 24px;
  }
  
  .color-options {
      padding-top: 24px;
      display: flex;
      flex-direction: column;
      gap: 8px;
  }
  
  .color-palette {
      display: flex;
      gap: 8px;
  }
  
  .circle {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  
  .checkmark {
      color: white;
      font-size: 20px;
      position: absolute;
  }
  
  .buttons {
      padding-top: 24px;
      display: flex;
      gap: 16px;
  }
  
  .button {
      padding: 12px 24px;
      border-radius: 100px;
      cursor: pointer;
      font-size: 16px;
      font-family: 'Poppins', sans-serif;
  }
  
  .shop-now {
      background-color: #5EFF44;
      color: black;
      transition: background-color 0.3s ease;
  }
  
  .shop-now:hover {
      background-color: #4be036;
  }
  
  .order-test {
      border: 1px solid #5EFF44;
      color: #5EFF44;
      transition: color 0.3s ease, border-color 0.3s ease;
  }
  
  .order-test:hover {
      color: white;
      border-color: white;
  }
  </style>
  