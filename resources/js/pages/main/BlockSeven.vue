<template>
    <div class="general">
      <img :src="'/images/card/BannerFon.png'" alt="Background" class="background-img">
  
      <div class="banner">
        <p class="title">
            samples of products in larger quantities for testing and evaluation. 
        </p>
        <p class="text">
            Experience the quality and efficacy of products before making bulk purchases.
        </p>
        <button type="button" class="but"><p class="butText">Order a Sample</p></button>
    </div>
      <div class="logo">
        <img :src="'/images/card/VapeVector.png'" alt="Icon Left">
    </div>
    </div>
</template>
    
<style scoped>
.general {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    height: 568px;
    width: 100%;
    position: relative; /* Для размещения фона позади остальных элементов */
}
  
.banner {
    margin-top: 104px;
    margin-left: 128px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    width: 65%;
    z-index: 1; /* Отображается поверх фонового изображения */
}
.title {
    width: 747px;
    color: #FFF;
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 60px */
    text-transform: uppercase;
}
.text {
    align-self: stretch;
    color: #FFF;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2px;
    padding-bottom: 30px;
}
.logo {
    margin-top: 90px;
    margin-right: 100px;
    height: 100%;
    width: 35%;
    z-index: 1; /* Отображается поверх фонового изображения */
}
.but {
    display: flex;
    padding: 24px 32px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 100px;
    background: #5EFF44;
}
.butText {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.background-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* Для растяжения изображения */
    z-index: 0; /* На заднем плане */
}
</style>  