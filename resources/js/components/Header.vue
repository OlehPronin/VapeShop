<template>
    <div class="main">
    <div class="top">
    <!-- Верхний фон -->
    <div class="header-top-background"></div>

    <!-- Информационная панель -->
    <div class="header-info-bar">
      <!-- WhatsApp Сообщество -->
      <div class="info-group">
        <div class="icon-wrapper">
          <img class="icon-detail" :src="'/images/Whatsapp.png'" alt="WhatsApp Icon" />
        </div>
        <div class="info-text">
          Click here to Join<br />
          Our Whatsapp Community
        </div>
      </div>

      <!-- Время работы -->
      <div class="info-section">
        <div class="info-title">OPEN TIME</div>
        <div class="info-content">
          <div class="info-icon">
            <img :src="'/images/Time.png'" alt="Time Icon" />
          </div>
          <div class="info-description">
            Monday - Friday: 9:00 AM - 12:00 PM
          </div>
        </div>
      </div>

      <!-- Почта -->
      <div class="info-section">
        <div class="info-title">MAIL US TODAY</div>
        <div class="info-content">
          <div class="info-icon">
            <img :src="'/images/Mail.png'" alt="Mail Icon" />
          </div>
          <div class="info-description">example@vapeshop.com</div>
        </div>
      </div>
    </div>
  </div>
  <div class="bot">
    <!-- Навигационная панель -->
    <div class="header-navigation">
      <div class="nav-left">
        <div class="nav-item">HOME</div>
        <div class="nav-item dropdown">
          <div>PRODUCTS</div>
          <div class="dropdown-icon">
            <img :src="'/images/Arrow.png'" alt="Dropdown Icon" />
          </div>
        </div>
        <div class="nav-item">BLOG</div>
        <div class="nav-item">CONTACT US</div>
        <div class="nav-item active">FAQS</div>
      </div>
      <div class="nav-right">
        <!-- Поисковая строка -->
        <div class="search-bar">
          <input type="text" placeholder="AI-Enabled or Ask our AI Assistant" />
          <div class="search-icon">
            <img :src="'/images/ButtonSearch.png'" alt="Search Icon" />
          </div>
        </div>

        <!-- Иконки пользователя, лайка и корзины -->
        <div class="icon-group">
          <div class="icon">
            <img :src="'/images/User.png'" alt="User Icon" />
          </div>
          <div class="icon">
            <img :src="'/images/Like.png'" alt="Like Icon" />
          </div>
          <div class="icon cart">
            <img :src="'/images/Basket.svg'" alt="Basket Icon" />
            <div class="cart-badge">0</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Логотип -->
    <div class="header-logo">
      <img :src="'/images/VectorLogo.png'" alt="Company Logo" />
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'HeaderComponent',
};
</script>

<style lang="scss">

</style>