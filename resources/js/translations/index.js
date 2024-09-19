export default {
    en: {
        name: "English",
        load: () => { return import('./en.json'); }
    },
    it: {
        name: "Italian",
        load: () => { return import("./it.json"); }
    },
};
