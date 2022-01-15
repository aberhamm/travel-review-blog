<template>
    <v-container fluid>
        <div class="mt-sm-3 py-6 d-flex flex-column align-center text-center">
            <logo class="text-h4 text-sm-h2">/ economy anxiety /</logo>
            <v-col sm="10" md="8" class="text-body-1 pa-0 mt-6">
                An abnormal and persistent fear of flying in economy. Sufferers experience severe anxiety even though they usually realize that economy class does not pose a threat commensurate with their fear.
            </v-col>
        </div>
        <div class="mt-6">
            <post-card-grid v-if="posts.length" :posts="posts" />
        </div>
    </v-container>
</template>
<script>
const Logo = () => import('~/components/Logo');
import PostCardGrid from '~/components/PostCardGrid';
import postsQuery from '~/apollo/queries/post/posts';

export default {
    components: { Logo, PostCardGrid },
    data() {
        return {
            posts: [],
        };
    },
    apollo: {
        posts: {
            prefetch: true,
            query: postsQuery,
        },
    },
};
</script>