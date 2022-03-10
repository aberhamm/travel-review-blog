<template>
    <div class="content-block mx-3 mx-md-0">
        <div
            v-if="header"
            class="text-h4 font-weight-medium">
            {{ header}}
        </div>
        <div
            v-if="content"
            class="text-body-1">
            {{ content }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContentBlock',
    inheritAttrs: false,
    props: {
        content: {
            type: String,
            default: ''
        },
        header: {
            type: String,
            default: ''
        }
    }
};
</script>

<style lang="scss" scoped>
</style>