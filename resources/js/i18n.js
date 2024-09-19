import { createI18n } from "vue-i18n";
const local = document.head.querySelector("meta[name='locale']").content;

async function loadLocaleMessages() {
    switch (local) {
        case 'en':
            return await import(/* @vite-ignore */ `./translations/en.json`);
        case 'it':
            return await import(/* @vite-ignore */ `./translations/it.json`);
        default:
            return await import(/* @vite-ignore */ `./translations/en.json`);
    }
}

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {}
});

export { i18n, loadLocaleMessages };
