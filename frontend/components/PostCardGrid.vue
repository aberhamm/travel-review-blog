<template>
    <div class="post-card-grid">
        <template v-for="post in posts">
            <post-card :key="post.id" :post="post" />
        </template>
    </div>
</template>

<script>
const PostCard = () => import('~/components/PostCard');

export default {
    name: 'PostCardGrid',
    components: {
        PostCard
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
};
</script>

<style lang="scss" scoped>
.post-card-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1em;
    @media (min-width: 600px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (min-width: 960px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    @media (min-width: 1264px) {
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }
}
</style>