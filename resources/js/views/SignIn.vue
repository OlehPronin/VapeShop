<template>
  <div class="general">
    <div class="exit" @click="$emit('close')">
      <img :src="'/images/VectorX.png'" alt="VectorX"/>
    </div>
    <div class="content">
      <div class="title">
        <h2>Sign In</h2>
      </div>
      <div class="form">
        <form @submit.prevent="submitForm">
          <div class="email floating-label">
            <label for="email">Enter your email address</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div class="pass floating-label">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="form.password" required />
          </div>
        </form>
      </div>
      <div class="but">
        <button type="submit">Submit</button>
      </div>
      <div class="link">
        <p class="text">Don't have an account? <button @click="goToRegistration">Sign Up</button></p>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    submitForm() {
      // Логика авторизации
      console.log('Form Submitted:', this.form);
      // Закрытие модального окна после отправки формы
      this.$emit('close');
    },
    goToRegistration() {
      this.$emit('goToRegistration');
    },
  },
};
</script>
  
<style scoped>
.general {
  display: flex;
  justify-content: center;
  width: 851px;
  height: 401px;
  flex-shrink: 0;
  border-radius: 16px;
  background-image: url('/images/FonSignIn.png');
  position: relative; /* Добавлено для позиционирования .exit */
}

.exit {
  position: absolute; /* Добавлено для позиционирования .exit */
  top: 10px; /* Добавлено для позиционирования .exit */
  right: 10px; /* Добавлено для позиционирования .exit */
  display: flex;
  width: 40px;
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 1000px;
  background: rgba(174, 174, 174, 0.38);
  cursor: pointer; /* Добавлено для улучшения UX */
}

.content {
  display: flex;
  width: 301px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  justify-content: center;
  align-items: center;
}

.title {
  color: #FFF;
  text-align: center;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  align-self: stretch;
}

.floating-label {
  position: relative;
  margin-top: 10px;
  width: 301px;
}

.floating-label label {
  color: rgba(255, 255, 255, 0.70);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  position: absolute;
  pointer-events: none;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.2s ease all;
}

.floating-label input {
  width: 100%;
  padding: 13px 16px;
  border-radius: 1000px;
  border: 1px solid #FFF;
  background: transparent;
  color: #FFF;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  outline: none; /* Убираем стандартный outline */
}

.floating-label input:focus ~ label,
.floating-label input:not(:placeholder-shown) ~ label {
  top: 0;
  font-size: 12px;
  color: #FFF;
}

.but {
  width: 301px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 1000px;
  background: #FFF;
  color: #000;
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  align-items: center;
  justify-content: center;
}

.link {
  color: #FFF;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
}

.text {
  color: rgba(255, 255, 255, 0.70);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>