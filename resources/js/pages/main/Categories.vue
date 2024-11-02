<template>
    <div class="general-main-categories">
    <div class="cards-section">
      <div class="cards-container">
        <!-- Left Column -->
        <div class="left-column">
          <Card
            imageSrc="/images/card/card1.webp"
            mainText="Tank Mod"
            subText="Flavor And Clouds"
            class="large-card"
          />
        </div>
  
        <!-- Right Column -->
        <div class="right-column">
          <!-- Top Row -->
          <div class="row">
            <Card
              imageSrc="/images/card/card2.webp"
              mainText="Pod"
              subText="Flavor And Clouds"
              class="wide-card"
            />
            <Card
              imageSrc="/images/card/card3.webp"
              mainText="Pod Mod"
              subText="Simple Yet Powerful"
              class="small-card"
            />
          </div>
          <!-- Bottom Row -->
          <div class="row">
            <Card
              imageSrc="/images/card/card4.webp"
              mainText="Pen Style"
              subText="Slim and Discreet"
              class="small-card"
            />
            <Card
              imageSrc="/images/card/card5.webp"
              mainText="Other Accessories"
              subText="More revolutionary vape options"
              class="wide-card"
            />
          </div>
        </div>
      </div>
    </div>
</div>
  </template>
  
  <script>
  import Card from '../../components/card/Card.vue';
  
  export default {
    name: 'CardsSection',
    components: {
      Card,
    },
  }
  </script>
  
  <style scoped>

.cards-section {
    padding-right: 100px;
    width: 100%;
    height: 100%;
    padding-bottom: 80px;
    padding-top: 80px;
    background: #f6f6f6;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
  
  .cards-container {
    display: flex;
    gap: 32px;
  }
  
  .left-column {
    width: 392px;
    height: 566px;
  }
  
  .right-column {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  
  .row {
    display: flex;
    gap: 32px;
  }
  
  /* Card Sizes */
  .large-card {
    width: 100%;
    height: 100%;
  }
  
  .wide-card {
    width: 498px;
    height: 267px;
  }
  
  .small-card {
    width: 286px;
    height: 267px;
  }
  </style>
  