<template>
    <div class="general">
        <div class="content-wrapper">
            <div class="text-top">
                <p>Tranding Products</p>
            </div>
            <div class="center">
                <div class="one">
                    <Product
                        class="Product"
                        backgroundImage='/images/cardFon/fon4.png'
                        imageSrc="/images/card/vape1.webp"
                        mainText="PALAX KC8000"
                        subText="36 reviews"
                        price="$18.90"
                        discount="$81.10"
                        rating="5"
                        backgroundColor=""
                        width="100%"
                        height="auto"
                        :colors="{green: '/images/card/vape1.webp', blue: '/images/card/vape2.webp', cyan: '/images/card/vape3.webp', yellow: '/images/card/vape1.webp'}"
                        :showUpArrow="true"
                        :showDownArrow="true"
                    />
                    <Product
                        class="Product"
                        backgroundImage='/images/cardFon/fon4.png'
                        imageSrc="/images/card/vape1.webp"
                        mainText="PALAX KC8000"
                        subText="36 reviews"
                        price="$18.90"
                        discount="$81.10"
                        rating="5"
                        backgroundColor=""
                        width="100%"
                        height="auto"
                        :colors="{green: '/images/card/vape1.webp', blue: '/images/card/vape2.webp', cyan: '/images/card/vape3.webp', yellow: '/images/card/vape1.webp'}"
                        :showUpArrow="true"
                        :showDownArrow="true"
                        />
                    <Product
                        class="Product"
                        backgroundImage='/images/cardFon/fon4.png'
                        imageSrc="/images/card/vape1.webp"
                        mainText="PALAX KC8000"
                        subText="36 reviews"
                        price="$18.90"
                        discount="$81.10"
                        rating="5"
                        backgroundColor=""
                        width="100%"
                        height="auto"
                        :colors="{green: '/images/card/vape1.webp', blue: '/images/card/vape2.webp', cyan: '/images/card/vape3.webp', yellow: '/images/card/vape1.webp'}"
                        :showUpArrow="true"
                        :showDownArrow="true"
                        />
                    <Product
                        class="Product"
                        backgroundImage='/images/cardFon/fon4.png'
                        imageSrc="/images/card/vape1.webp"
                        mainText="PALAX KC8000"
                        subText="36 reviews"
                        price="$18.90"
                        discount="$81.10"
                        rating="5"
                        backgroundColor=""
                        width="100%"
                        height="auto"
                        :colors="{green: '/images/card/vape1.webp', blue: '/images/card/vape2.webp', cyan: '/images/card/vape3.webp', yellow: '/images/card/vape1.webp'}"
                        :showUpArrow="true"
                        :showDownArrow="true"
                        />
                </div>
                <div class="two">
                    <Product
                        class="Product"
                        backgroundImage='/images/cardFon/fon5.png'
                        imageSrc="/images/card/vape1.webp"
                        mainText="PALAX KC8000"
                        subText="36 reviews"
                        price="$18.90"
                        discount="$81.10"
                        rating="5"
                        backgroundColor=""
                        width="100%"
                        height="auto"
                        :colors="{green: '/images/card/vape1.webp', blue: '/images/card/vape2.webp', cyan: '/images/card/vape3.webp', yellow: '/images/card/vape1.webp'}"
                        :showUpArrow="true"
                        :showDownArrow="true"
                        />
                    <Product
                        class="Product"
                        backgroundImage='/images/cardFon/fon5.png'
                        imageSrc="/images/card/vape1.webp"
                        mainText="PALAX KC8000"
                        subText="36 reviews"
                        price="$18.90"
                        discount="$81.10"
                        rating="5"
                        backgroundColor=""
                        width="100%"
                        height="auto"
                        :colors="{green: '/images/card/vape1.webp', blue: '/images/card/vape2.webp', cyan: '/images/card/vape3.webp', yellow: '/images/card/vape1.webp'}"
                        :showUpArrow="true"
                        :showDownArrow="true"
                        />
                    <Product
                        class="Product"
                        backgroundImage='/images/cardFon/fon5.png'
                        imageSrc="/images/card/vape1.webp"
                        mainText="PALAX KC8000"
                        subText="36 reviews"
                        price="$18.90"
                        discount="$81.10"
                        rating="5"
                        backgroundColor=""
                        width="100%"
                        height="auto"
                        :colors="{green: '/images/card/vape1.webp', blue: '/images/card/vape2.webp', cyan: '/images/card/vape3.webp', yellow: '/images/card/vape1.webp'}"
                        :showUpArrow="true"
                        :showDownArrow="true"
                        />
                    <Product
                        class="Product"
                        backgroundImage='/images/cardFon/fon5.png'
                        imageSrc="/images/card/vape1.webp"
                        mainText="PALAX KC8000"
                        subText="36 reviews"
                        price="$18.90"
                        discount="$81.10"
                        rating="5"
                        backgroundColor=""
                        width="100%"
                        height="auto"
                        :colors="{green: '/images/card/vape1.webp', blue: '/images/card/vape2.webp', cyan: '/images/card/vape3.webp', yellow: '/images/card/vape1.webp'}"
                        :showUpArrow="true"
                        :showDownArrow="true"
                        />
                </div>
            </div>
        </div>
        <div class="button-wrapper">
            <button class="bot" @click="showMore">
                <span class="text-bot">Show More</span>
            </button>
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
  methods: {
    showMore() {
      // Логика для отображения дополнительных продуктов
      console.log('Кнопка "Show More" была нажата');
    }
  }
};
</script>

<style scoped>
.general {
    display: flex;
    padding: 120px 100px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    background: #FFF;
}

.content-wrapper {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.text-top {
    color: #000;
    font-family: Poppins;
    font-size: 48px;
    font-weight: 600;
    line-height: normal;
    padding-bottom: 40px;
}

.center {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    padding-bottom: 40px;
}

.one, .two {
    display: flex;
    gap: 32px;
    flex-wrap: nowrap;
}

.Product {
    flex: 1;
    max-width: 256px;
}

.button-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

.bot {
    display: flex;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    background: #5EFF44;
    border: none;
    cursor: pointer;
    transition: border 0.3s ease;
}

.bot:hover {
    border: 1px solid #FFF;
}

.text-bot {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: normal;
}

/* Медиазапросы для адаптивности */

@media (max-width: 1024px) {
    .general {
        padding: 80px 50px;
    }
    .text-top {
        font-size: 40px;
    }
    .one, .two {
        gap: 24px;
    }
}

@media (max-width: 768px) {
    .general {
        padding: 60px 20px;
    }
    .text-top {
        font-size: 32px;
    }
    .center {
        align-items: center;
    }
    .one, .two {
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
    }
    .Product {
        flex: 1 1 45%;
        max-width: 45%;
        margin-bottom: 20px;
    }
    .bot {
        padding: 14px 22px;
    }
}

@media (max-width: 480px) {
    .general {
        padding: 40px 10px;
    }
    .text-top {
        font-size: 24px;
        text-align: center;
    }
    .Product {
        flex: 1 1 100%;
        max-width: 100%;
    }
    .bot {
        padding: 12px 20px;
    }
}
</style>
