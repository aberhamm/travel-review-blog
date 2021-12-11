<template>
    <v-card
        :to="post.slug"
        :ripple="false"
        class="mx-auto"
        tile
        flat
        nuxt
        custom>
        <base-image
            v-if="post.featured_image"
            class="white--text text-right"
            height="200px"
            :src="post.featured_image.url">
            <v-chip
                label
                class="ma-2 mb-2 text-uppercase"
                color="grey darken-3"
                text-color="white"
                small
                @click.stop>
                {{ post.category }}
            </v-chip>
        </base-image>
        <v-card-title>{{ post.title }}</v-card-title>

        <v-card-subtitle class="pb-0">{{ $moment(post.published_at).format("MMMM Do, YYYY") }}</v-card-subtitle>

        <v-card-text class="text--primary">
            {{ post.subtitle }}
        </v-card-text>
    </v-card>
</template>

<script>
import BaseImage from '~/components/base/Image';

export default {
    name: 'PostCard',
    components: {
        BaseImage,
    },
    props: {
        prominent: {
            type: Boolean,
            default: false,
        },
        post: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.v-image__image {
    transition: 0.3s linear;
}
</style>
