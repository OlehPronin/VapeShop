<template>
    <div class="general">
      <div class="top">
        <!-- Текст -->
        <div class="text">
          <p>Choose Your Flavor</p>
        </div>
                <!-- Векторы слева и справа -->
          <div class="vectors">
            <div class="left">
              <img :src="'/images/card/VectorLeft.png'" alt="Icon Left">
            </div>
            <div class="right">
              <img :src="'/images/card/VectorRight.png'" alt="Icon Right">
            </div>
          </div>
      </div>
        <!-- Три изображения в строку -->
        <div class="center">
          <div class="img">
          <img :src="'/images/card/ice.png'" alt="Icon Ice">
          <img :src="'/images/card/mint.png'" alt="Icon Mint">
          <img :src="'/images/card/mix.png'" alt="Icon Mix">
        </div>
      </div>
    </div>
  </template>
<script>

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
}
.right {
  display: flex;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #5EFF44;
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

</style>
