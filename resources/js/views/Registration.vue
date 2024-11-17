<!-- resources/js/views/Registration.vue -->
<template>
  <div class="general">
    <div class="content">
      <div class="registration-form">
        <h2>Registration</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="form.password" required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registration',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Логика отправки формы
      console.log('Form Submitted:', this.form);
      // Закрытие модального окна после отправки формы
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.general {
  width: 851px;
  height: 401px;
  flex-shrink: 0;
  border-radius: 16px;
  background-image: url('/images/FonSignIn.png');
  background-size: cover;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  width: 100%;
  max-width: 400px;
  padding: 20px;
}

.registration-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.registration-form h2 {
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-group label {
  color: white;
  font-size: 16px;
  font-weight: bold;
}

.form-group input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.registration-form button {
  padding: 10px;
  background-color: #5EFF44;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
}

.registration-form button:hover {
  background-color: #4EDA3A;
}
</style>