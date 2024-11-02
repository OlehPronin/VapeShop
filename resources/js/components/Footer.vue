<template>
    <div class="footer-wrapper">
    <div class="footer" style="background-image: url('/images/background.png'); background-repeat: no-repeat; background-size: cover; padding: 40px;">
      <!-- Основной контейнер футера -->
      <div class="footer-content" style="width: 1200px; margin: 0 auto; display: flex; gap: 92px;">
        <!-- Логотип и текстовая информация -->
        <div class="footer-logo-info" style="display: flex; flex-direction: column; gap: 24px;">
          <!-- Логотип -->
          <div class="footer-logo" style="color: white; font-size: 48px; font-family: Montserrat; font-weight: 600; text-transform: uppercase;">Logo</div>
          <!-- Описание -->
          <div class="footer-description" style="width: 331px; color: white; font-size: 16px; font-family: Poppins; font-weight: 300; line-height: 25.6px;">
            Lorem ipsum dolor sit amet consectetur. Purus neque vulputate egestas ut. Tellus consectetur morbi netus.
          </div>
          <!-- Иконки соцсетей -->
          <div class="footer-icons" style="display: flex; gap: 16px;">
            <!-- Добавь свои иконки ниже -->
            <div class="icon" style="width: 32px; height: 32px; background: white; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
              <!-- Здесь можно добавить SVG или картинку -->
              <img  :src="'/images/instagram.svg'" alt="Icon 1" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            </div>
            <div class="icon" style="width: 32px; height: 32px; background: white; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
              <img :src="'/images/twitter.svg'" alt="Icon 2" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            </div>
            <div class="icon" style="width: 32px; height: 32px; background: white; border-radius: 50%; display: flex; justify-content: center; align-items: center;">
              <img :src="'/images/facebook.svg'" alt="Icon 2" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            </div>
            <!-- Добавь еще иконки по аналогии -->
          </div>
        </div>
  
        <!-- Раздел с информацией и контактами -->
        <div class="footer-links" style="display: flex; gap: 134px;">
          <!-- Блок с информацией -->
          <div class="footer-info" style="display: flex; flex-direction: column; gap: 24px;">
            <div class="info-title" style="color: white; font-size: 16px; font-family: Poppins; font-weight: 600;">Information</div>
            <div class="info-links" style="display: flex; flex-direction: column; gap: 16px;">
              <a href="#" style="color: white; font-size: 14px; font-family: Poppins; font-weight: 400;">Home</a>
              <a href="#" style="color: white; font-size: 14px; font-family: Poppins; font-weight: 400;">Shop</a>
              <a href="#" style="color: white; font-size: 14px; font-family: Poppins; font-weight: 400;">Blog</a>
              <a href="#" style="color: white; font-size: 14px; font-family: Poppins; font-weight: 400;">Page</a>
              <a href="#" style="color: white; font-size: 14px; font-family: Poppins; font-weight: 400;">Contact</a>
            </div>
          </div>
          <!-- Блок с контактами -->
          <div class="footer-contact" style="display: flex; flex-direction: column; gap: 24px;">
            <div class="contact-title" style="color: white; font-size: 16px; font-family: Poppins; font-weight: 600;">Contact</div>
            <div class="contact-details" style="display: flex; flex-direction: column; gap: 16px;">
              <!-- Телефон -->
              <div class="contact-item" style="display: flex; align-items: center; gap: 10px;">
                <img :src="'/images/PhoneCall.svg'" alt="Phone" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                <span style="color: white; font-size: 14px; font-family: Poppins; font-weight: 400;">(222) 222-222</span>
              </div>
              <!-- Адрес -->
              <div class="contact-item" style="display: flex; align-items: center; gap: 10px;">
                <img :src="'/images/tdesign_location.svg'" alt="Address" style="max-width: 100%; max-height: 100%; object-fit: contain;">
                <span style="color: white; font-size: 14px; font-family: Poppins; font-weight: 400;">Example Street, Reno NV 89502</span>
              </div>
            </div>
          </div>
        </div>
  
      <!-- Блок с подпиской на новости -->
      <div class="footer-newsletter" style="display: flex; flex-direction: column; gap: 24px;">
        <div class="newsletter-title" style="color: #FFF !important; font-size: 16px; font-family: Poppins; font-weight: 600;">Signup for our newsletter and stay updated</div>
        <div class="newsletter-input" style="display: flex; flex-direction: column; gap: 16px;">
          <!-- Поле для ввода почты -->
          <input type="text" placeholder="Enter your email address" style="width: 229px; padding: 13px; border-radius: 1000px; border: 1px solid white; background: transparent; color: rgba(255, 255, 255, 0.4); font-size: 14px;">
          <!-- Кнопка подписки -->
          <button style="width: 229px; height: 48px; background: #FFFFFF !important; border-radius: 1000px; color: #000000 !important; font-size: 16px; font-weight: 500;">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
  </div>
  </template>
  
  <script>
  export default {
    name: 'FooterComponent',
  };
  </script>
  
  <style lang="scss">

  </style>