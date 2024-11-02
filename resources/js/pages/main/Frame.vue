<template>
  <div class="container-gen">
    <div class="paggin">
      <div class="vector">
      <div class="left">
        <div class="imgLeft">
          <img :src="'/images/vectorLeft.png'" alt="VectorLeft">
        </div>
      </div>
      <div class="right">
        <div class="imgRight">
          <img :src="'/images/vectorRight.png'" alt="VectorRight">
        </div>
      </div>
    </div>
    </div>
    <div class="container-center">
      <div class="con1">
          <div class="banner">
            <div class="banner-text">NEW</div>
          </div>
          <div class="content">
            <div class="title">Arrivals</div>
            <div class="subtitle">Non nunc at non consequat semper</div>
            <div class="button-container">
              <div class="button-text">Shop Now</div>
            </div>
          </div>
      </div>
      <div class="con2">
        <Product
              imageSrc="/images/card/vape1.webp"
              mainText="PALAX KC8000"
              subText="36 reviews"
              price="$18.90"
              discount="$81.10"
              rating="5"
              backgroundColor=""
              width="256px"
              height="401px"
              :colors="{green: '/images/card/vape1.webp', blue: '/images/card/vape2.webp', cyan: '/images/card/vape3.webp', yellow: '/images/card/vape1.webp'}"
              :showUpArrow="true"
              :showDownArrow="true"
            />
      </div>
      <div class="con3">
        <Product
                imageSrc="/images/card/vape2.webp"
                mainText="PALAX KC8000"
                subText="36 reviews"
                price="$18.90"
                discount="$81.10"
                rating="5"
                backgroundColor=""
                width="256px"
                height="401px"
                :colors="{green: '/images/card/vape1.webp', blue: '/images/card/vape2.webp', cyan: '/images/card/vape3.webp', yellow: '/images/card/vape1.webp'}"
                :showUpArrow="true"
                :showDownArrow="true"
              />
      </div>
      <div class="con4">
        <Product
                imageSrc="/images/card/vape3.webp"
                mainText="PALAX KC8000"
                subText="36 reviews"
                price="$18.90"
                discount="$81.10"
                rating="5"
                backgroundColor=""
                width="256px"
                height="401px"
                :colors="{green: '/images/card/vape1.webp', blue: '/images/card/vape2.webp', cyan: '/images/card/vape3.webp', yellow: '/images/card/vape1.webp'}"
                :showUpArrow="true"
                :showDownArrow="true"
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
    };
    </script>
    
    <style scoped>
.container-gen {
  height: 750px; /* Фиксированная высота */
  margin: 0 auto; /* Центрирование контейнера */
  padding-top: 100px;
  background: linear-gradient(90deg, 
        rgb(179, 182, 15) 0%,   
        rgb(141, 30, 48) 35%,  
        rgb(3, 3, 51) 70%,     
        rgb(6, 104, 3) 100%
    );
}

.paggin {
  display: flex;
  padding-right: 400px;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  margin-left: 85px;
}
.vector {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}
.left {
  display: flex;
  width: 48px;
  height: 48px;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 1000px;
  border: 1px solid #5EFF44;
}
.right {
  display: flex;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 1000px;
  border: 1px solid #5EFF44;
}

.imgLeft {
  width: 8px;
  height: 16px;
  flex-shrink: 0;
  stroke-width: 2px;
  stroke: #5EFF44;
}
.imgRight{
  width: 8px;
  height: 16px;
  flex-shrink: 0;
  stroke-width: 2px;
  stroke: #5EFF44;
}

.container-center {
  padding-top: 100px;
  width: 1440px;
  height: 450px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.con1 {
  width: 328px;
  height: 306px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 27px;
}

.banner {
  width: 229px;
  height: 69px;
  padding: 10px;
  background: #5EFF44;
  border-top-left-radius: 33px;
  border-top-right-radius: 90px;
  border-bottom-right-radius: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-text {
  color: black;
  font-size: 64px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  word-wrap: break-word;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
}

.title {
  width: 328px;
  color: white;
  font-size: 72px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  word-wrap: break-word;
}

.subtitle {
  width: 273px;
  height: 57px;
  color: white;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 24px;
  word-wrap: break-word;
}

.button-container {
  padding: 18px 24px;
  background: #5EFF44;
  border-radius: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.button-text {
  color: black;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}


.con2{

}

.con3{

}

.con4{

}
  
</style>   