<template>
    <NuxtLink
        v-slot="{ navigate, href }"
        to="/">
        <v-toolbar-title
            id="logo"
            class="text-decoration-none text--primary"
            tag="a"
            :href="href"
            @click="navigate">
            <slot />
        </v-toolbar-title>
    </NuxtLink>
</template>

<script>
export default {
    name: 'Logo',
};
</script>

<style lang="scss" scoped>
#logo {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
}
</style>