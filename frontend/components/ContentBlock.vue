<template>
    <div v-html="content"></div>
</template>

<script>
export default {
    name: 'ContentBlock',
    props: {
        content: {
            type: String,
            required: true,
        }
    }
};
</script>

<style lang="scss" scoped>
</style>