<template>
  <div>
    <Categories />
    <Frame />
    <BlockTrhee />
    <BlockFour />
    <BlockFive />
    <BlockSix />
    <BlockSeven />
    <BlockEight />
    <BlockNine />

    <!-- Модальное окно с формой авторизации или регистрации -->
    <Modal :isOpen="isModalOpen" @close="closeModal">
      <component :is="currentModalComponent" @close="closeModal" @goToRegistration="goToRegistration" />
    </Modal>
  </div>
</template>

<script>
import Categories from '../pages/main/Categories.vue';
import Frame from '../pages/main/Frame.vue';
import BlockTrhee from '../pages/main/BlockTrhee.vue';
import BlockFour from '../pages/main/BlockFour.vue';
import BlockFive from '../pages/main/BlockFive.vue';
import BlockSix from '../pages/main/BlockSix.vue'; 
import BlockSeven from '../pages/main/BlockSeven.vue';
import BlockEight from '../pages/main/BlockEight.vue';
import BlockNine from '../pages/main/BlockNine.vue';
import Modal from '../components/Modal.vue';
import SignIn from '../views/SignIn.vue';
import Registration from '../views/Registration.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    Categories,
    Frame,
    BlockTrhee,
    BlockFour,
    BlockFive,
    BlockSix,
    BlockSeven,
    BlockEight,
    BlockNine,
    Modal,
    SignIn,
    Registration,
  },
  computed: {
    ...mapState(['isModalOpen', 'currentModalComponent']),
  },
  methods: {
    ...mapActions(['closeModal', 'goToRegistration']),
  },
};
</script>

<style scoped>
</style>