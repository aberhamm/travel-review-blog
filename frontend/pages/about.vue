<template>

</template>
<script>
import aboutPageQuery from '~/apollo/queries/content/aboutPage';

export default {
    data() {
        return {
            aboutPage: {},
        };
    },
    apollo: {
        aboutPage: {
            prefetch: true,
            query: aboutPageQuery,
        },
    },
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap');
</style>