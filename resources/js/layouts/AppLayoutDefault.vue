<template>
  <div>
    <HeaderComponent />
    <main>
      <slot></slot>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../components/Header.vue';
import FooterComponent from '../components/Footer.vue';

export default {
  name: 'AppLayoutDefault',
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped lang="scss">
</style>