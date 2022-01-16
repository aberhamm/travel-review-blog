<template>
    <div fluid class="pa-0">
        <v-container>
            <v-row>
                <v-col cols="12">
                    <v-breadcrumbs class="pa-0" :items="breadcrumbs" />

                    <div class="text-h4 text-sm-h2 text-center pt-5">
                        {{ post.title }}
                    </div>

                    <div class="text-overline text-center mt-4">
                        {{ $moment(post.published_at).format('MMMM DD YYYY') }}
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="pa-0">
            <base-image
                v-if="post.featured_image"
                class="white--text text-right"
                height="300px"
                :src="post.featured_image.url" />
        </v-container>
        <v-container class="pa-0">
            <v-row
                v-for="(zone, i) in post.content"
                :key="i"
                class="ma-0 mt-4">
                <v-col
                    class="pa-0"
                    cols="12"
                    lg="8"
                    offset-lg="2">
                    <strapi-component
                        :typename="zone.__typename"
                        v-bind="zone" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
const ImageGrid = () => import(
    /* webpackChunkName: "ImageGrid" */
    '~/components/ImageGrid');
const StrapiComponent = () => import(
    /* webpackChunkName: "StrapiComponent" */
    '~/components/StrapiComponent');

import postsQuery from '~/apollo/queries/post/post';

export default {
    components: {
        ImageGrid,
        StrapiComponent,
    },
    data () {
        return {
            post: {},
            breadcrumbs: [
                { text: 'Home', nuxt: true, to: '/' },
                { text: 'Post', disabled: true, nuxt: true, to: '/' },
            ],
        }
    },
    apollo: {
        post: {
            prefetch: true,
            query: postsQuery,
            variables() {
                return { slug: this.$route.params.post };
            },
            update: ({ posts }) => posts[0],
        },
    },
    head() {
        return {
            title: this.post.title,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: 'description',
                    name: 'description',
                    content: 'My custom description',
                },
            ],
        };
    },
};
</script>
<style scoped>
</style>