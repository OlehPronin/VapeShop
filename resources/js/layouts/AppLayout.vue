<template>
    <component :is="layoutImport">
        <router-view :key="$route.name"></router-view>
    </component>
</template>

<script>
import AppLayoutDefault from "./AppLayoutDefault.vue";

export default {
    name: "AppLayout",

    components: {
        AppLayoutDefault,
    },

    computed: {
        layoutImport(){
            return this.$route.meta.layout;
        },
    },

    methods: {

    },
}
</script>
