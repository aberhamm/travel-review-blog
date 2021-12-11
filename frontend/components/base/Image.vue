<template>
    <v-img
        v-bind="$attrs"
        v-on="$listeners"
        :src="`${baseUri}${src}`"
        flat
        tile>
        <slot />
    </v-img>
</template>

<script>
export default {
    name: 'BaseImage',
    props: {
        src: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            baseUri: process.env.strapiBaseUri,
        };
    },
};
</script>
