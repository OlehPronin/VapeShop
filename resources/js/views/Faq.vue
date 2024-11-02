<template>
    <div class="faq-wrapper">
      <!-- Заголовок "FAQs" -->
      <div class="faq-title">FAQs</div>
      
      <!-- Список вопросов и ответов -->
      <div class="faq-list">
        
        <!-- Вопрос 1 -->
        <div class="faq-item">
          <div class="faq-question">Can individuals create accounts on Rapid Distro?</div>
          <div class="faq-answer">No, only businesses within the vape industry can create accounts on Rapid Distro. We require businesses to verify their information and provide necessary documentation to ensure compliance with industry regulations.</div>
          <div class="faq-divider"></div>
        </div>
  
        <!-- Вопрос 2 -->
        <div class="faq-item">
          <div class="faq-question">What kind of documentation is required to create an account?</div>
          <div class="faq-answer">To create an account on Rapid Distro, businesses will need to provide tax documents and other relevant business information for verification purposes. Our team will review the provided documents to confirm eligibility and compliance with industry standards.</div>
          <div class="faq-divider"></div>
        </div>
  
        <!-- Вопрос 3 -->
        <div class="faq-item">
          <div class="faq-question">How long does it take for my account to be approved?</div>
          <div class="faq-answer">Once you've submitted your account application and required documents, it typically takes us 24 hours to vet and approve your account. During this time, our team verifies your business details and ensures compliance with industry regulations.</div>
          <div class="faq-divider"></div>
        </div>
  
        <!-- Вопрос 4 -->
        <div class="faq-item">
          <div class="faq-question">Can I place an order before my account is approved?</div>
          <div class="faq-answer">No, you must wait until your account is approved before placing an order. This ensures that your account is verified and authorized to access our products and services.</div>
          <div class="faq-divider"></div>
        </div>
  
        <!-- Вопрос 5 -->
        <div class="faq-item">
          <div class="faq-question">How can I contact my account manager?</div>
          <div class="faq-answer">Once your account is approved, your assigned account manager will reach out to you via email or phone. They will be your dedicated point of contact for any inquiries, orders, or assistance you may need.</div>
          <div class="faq-divider"></div>
        </div>
  
        <!-- Дополнительные вопросы... -->
        <div class="faq-item">
          <div class="faq-question">What payment methods do you accept?</div>
          <div class="faq-answer">We accept a variety of payment methods, including credit/debit cards, bank transfers, and other secure payment options. Your account manager can provide more information on payment methods and assist you with payment processing.</div>
          <div class="faq-divider"></div>
        </div>

        <div class="faq-item">
          <div class="faq-question">Do you offer samples of your products?</div>
          <div class="faq-answer">Yes, we offer samples of select products for testing purposes. Please contact your account manager for more information on how to request samples.</div>
          <div class="faq-divider"></div>
        </div>

        <div class="faq-item">
          <div class="faq-question">Can I track my order after it's been placed?</div>
          <div class="faq-answer">Yes, once your order is processed and shipped, you will receive tracking information via email. You can use this information to track the status of your order and estimated delivery time.</div>
          <div class="faq-divider"></div>
        </div>

        <div class="faq-item">
          <div class="faq-question">What if my order is damaged or stolen during shipping?</div>
          <div class="faq-answer">We recommend adding shipping protection upon checkout to ensure compensation for damaged or stolen items. If your order arrives damaged, please file a claim within 15 days of receipt to receive compensation or a replacement.</div>
          <div class="faq-divider"></div>
        </div>

        <div class="faq-item">
          <div class="faq-question">What is your return policy?</div>
          <div class="faq-answer">Items that are opened or used are not eligible for returns. Businesses are responsible for paying the shipping fee for returns unless the return is due to a product defect or error on our part. Please contact your account manager to initiate the return process within 30 days of receipt.</div>
          <div class="faq-divider"></div>
        </div>

        <div class="faq-item">
          <div class="faq-question">Do you provide marketing materials?</div>
          <div class="faq-answer">Yes, we provide marketing materials upon request to help businesses promote our products effectively. Please contact your account manager to request marketing materials and discuss your marketing needs.</div>
          <div class="faq-divider"></div>
        </div>

        <div class="faq-item">
          <div class="faq-question">Is my information secure with Rapid Distro?</div>
          <div class="faq-answer">Yes, we take data security and privacy seriously. Your information is encrypted and protected using industry-standard security measures to ensure confidentiality and integrity.</div>
          <div class="faq-divider"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FaqComponent',
  };
  </script>
  
  <style lang="scss" scoped>
  @import '../../css/faq.scss';
  
  
  // Основная обертка для всего компонента FAQ
  .faq-wrapper {
    width: 100%;
    height: 2432px;
    max-width: 815px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: white; // Белый фон
    margin-bottom: -700px;
  }
  
  // Заголовок FAQ
  .faq-title {
    color: #000;
    font-family: Poppins;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: 140px;
    margin-bottom: 40px;
  }
  
  // Обертка для списка вопросов и ответов
  .faq-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  
  // Каждый элемент FAQ (вопрос + ответ)
  .faq-item {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  // Вопрос
  .faq-question {
    color: #000;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%; /* 36px */
    text-transform: uppercase;
  }
  
  // Ответ
  .faq-answer {
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2px;
  }
  
  // Разделитель между вопросами (полоска)
  .faq-divider {
    width: 100%;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  // Медиазапрос для адаптивного дизайна
  @media (max-width: 768px) {
    .faq-wrapper {
      padding: 10px;
    }
  
    .faq-title {
      font-size: 36px;
    }
  
    .faq-question {
      font-size: 20px;
    }
  
    .faq-answer {
      font-size: 14px;
    }
  }
  </style>
  