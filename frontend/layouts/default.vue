<template>
    <v-app id="app">
        <v-app-bar
            app
            class="header"
            color="transparent"
            :absolute="true"
            :elevation="0">
            <logo v-if="!isHomePage">{{ header.title }}</logo>
            <v-spacer />
            <div class="d-none d-sm-flex flex-0-1-auto align-center justify-end ">
                <template v-for="(link, i) in header.navigation_links">
                    <NuxtLink
                        v-slot="{ navigate, href }"
                        :key="i"
                        :to="link.href">
                        <v-btn
                            :href="href"
                            text
                            @click="navigate">
                            {{ link.text }}
                        </v-btn>
                    </NuxtLink>
                </template>
            </div>
        </v-app-bar>
        <v-main class="pb-5">
            <Nuxt />
        </v-main>
        <v-spacer class="py-6" />
        <v-footer app :absolute="true">
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
const Logo = () => import('~/components/Logo');
import headerQuery from '~/apollo/queries/content/header';
export default {
    components: {
        Logo
    },
    data() {
        return {
            header: {}
        };
    },
    apollo: {
        header: {
            prefetch: true,
            query: headerQuery,
        },
    },
    computed: {
        isHomePage () {
            return this.$route.path == '/';
        }
    }
};
</script>
<style lang="scss" scoped>
</style>