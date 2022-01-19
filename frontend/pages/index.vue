<template>
    <v-container fluid>
        <template v-if="pageContent.dynamic_zone">
            <div
                v-for="(zone, i) in pageContent.dynamic_zone"
                :key="i">
                <strapi-component
                    :typename="zone.__typename"
                    v-bind="zone" />
            </div>
        </template>
        <div class="mt-6">
            <post-card-grid v-if="posts.length" :posts="posts" />
        </div>
    </v-container>
</template>

<script>
const Logo = () => import(
    /* webpackChunkName: "Logo" */
    '~/components/Logo');
const PostCardGrid = () => import(
    /* webpackChunkName: "PostCardGrid" */
    '~/components/PostCardGrid');
const StrapiComponent = () => import(
    /* webpackChunkName: "StrapiComponent" */
    '~/components/StrapiComponent');

import homePageQuery from '~/apollo/queries/page/home';
import postsQuery from '~/apollo/queries/post/posts';

export default {
    components: {
        Logo,
        PostCardGrid,
        StrapiComponent
    },
    data() {
        return {
            posts: [],
            pageContent: {}
        };
    },
    apollo: {
        posts: {
            prefetch: true,
            query: postsQuery,
        },
        pageContent: {
            prefetch: true,
            query: homePageQuery,
            update: ({ pageHome }) => pageHome,
        },
    },
};
</script>