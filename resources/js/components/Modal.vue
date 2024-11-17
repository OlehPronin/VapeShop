<template>
<div v-if="isOpen" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
        <slot></slot>
        <!-- <button @click="closeModal">Close</button> -->
    </div>
</div>
</template>

<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        closeModal() {
            this.$emit('close');
        },
    },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal-content {
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>