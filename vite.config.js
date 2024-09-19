import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.scss', 'resources/js/app.js'],
            refresh: true,
        }),
        vue()
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
    assetsDir: "/public/",
    build: {
        rollupOptions: {
            output: {
                entryFileNames: `[name].[hash].js`,
                chunkFileNames: `[name].[hash].js`,
                assetFileNames: `[name].[hash].[ext]`,
                manualChunks: {
                    vendor: ['vue', 'vue-router', 'vue-lang-router', 'vuex'],
                }
            },
        },
        chunkSizeWarningLimit: 200,
        cssCodeSplit: true,
        cssMinify: true,
        modulePreload: {
            polyfill: true,
        },
    },
});
