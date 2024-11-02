<template>
  <div class="general">
    <div class="center">
      <div class="column">
        <div class="title">Categories</div>
        <div class="row">
          <CardBlockThree
            imageSrc="/images/card/BigVape1.webp"
            mainText="Best Sellers"
            class="card card1"
          />
          <CardBlockThree
            imageSrc="/images/card/BigVape2.webp"
            mainText="New Arrivals"
            class="card card2"
          />
          <CardBlockThree
            imageSrc="/images/card/Vape3.webp"
            mainText="Preorder Products"
            class="card card3"
          />
          <CardBlockThree
            imageSrc="/images/card/relax.webp"
            mainText="Brands"
            class="card card4"
          />
        </div>
      </div>
    </div>
  </div>
</template>


  <script>
import CardBlockThree from '../../components/card/CardBlockThree.vue';

    export default {
      name: 'CardsSectionBlockThree',
      components: {
        CardBlockThree,
      },
    }
  </script>
  
  <style scoped>
.general {
  display: flex;
  justify-content: center; /* Центрирование всего контента */
  padding: 120px 100px;
  background: #FFF;
}

.center {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Карточки и заголовок выравниваются по левому краю */
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.row {
  display: flex;
  justify-content: center;
  gap: 32px; /* Разделение карточек */
}

.title {
  width: auto; /* Заголовок по ширине карточки */
  color: #000;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 20px; /* Отступ снизу */
  align-self: flex-start; /* Заголовок находится в начале первой карточки */
}

.card1, .card2, .card3, .card4 {
  display: flex;
  width: 286px;
  padding: 24px 0;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 16px;
  background: linear-gradient(138deg, #BCFC45 0%, #F4AB1A 100.23%);
}

.card ::v-deep img {
  width: 285px;
  height: 225px;
  object-fit: cover;
  border-radius: 16px 16px 0 0;
}

</style>