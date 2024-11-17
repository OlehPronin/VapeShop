import './bootstrap';
import { createApp } from 'vue';
import router from "./routes";
import store from "./store";
import helpers from './mixins/helpers';
import AppLayout from './layouts/AppLayout.vue';
import { i18n, loadLocaleMessages } from "./i18n";

const app = createApp(AppLayout).use(router).use(i18n).use(store).mixin(helpers);

loadLocaleMessages(i18n.global.locale.value).then(messages => {
    if (messages) {
        i18n.global.setLocaleMessage(i18n.global.locale.value, messages.default || messages);
    }
});

app.mount("#app");
createApp(App)
  .use(router)
  .use(store)
  .mount('#app');