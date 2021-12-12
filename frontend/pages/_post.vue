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
                        {{ $moment(post.published_at).format("MMMM DD YYYY") }}
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="pa-0">
            <base-image
                v-if="post.featured_image"
                class="white--text text-right"
                height="200px"
                :src="post.featured_image.url" />
        </v-container>
        <v-container>
            <v-row class="mt-4">
                <v-col cols="12" md="8" offset-md="2">
                    <div v-if="post.content" class="text-body-1" v-html="$md.render(post.content)"></div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import postsQuery from '~/apollo/queries/post/post';

export default {
    data: () => ({
        post: {},
        breadcrumbs: [{ text: 'Home', nuxt: true, to: '/' }, { text: 'Post', disabled: true, nuxt: true, to: '/' }]
    }),
    apollo: {
        post: {
            prefetch: true,
            query: postsQuery,
            variables() {
                return { slug: this.$route.params.post };
            },
            update: ({ posts }) => posts[0]
        },
    },
};
</script>
<style scoped>

</style>