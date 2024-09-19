<template>
    <section class="">
        <router-view :key="$route.fullPath"></router-view>
    </section>
</template>

<script>

export default {
    name: "AppLayoutDefault",

    components: {

    },
}
</script>
